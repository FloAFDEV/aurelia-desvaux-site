// Tests navigateur : Consent Mode v2 basique, « Gérer les cookies », pages vues,
// clic_telephone / clic_medoucine, Google Maps à la demande et CSP.
// Toutes les collectes Google sont interceptées (réponse 204) : aucune donnée réelle n'est envoyée.
// Usage : npm run build && npm start  puis  BASE_URL=http://localhost:3000 npm run test:e2e
import { chromium } from "playwright";
import assert from "node:assert/strict";

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const COLLECT =
	/(google-analytics\.com|analytics\.google\.com|doubleclick\.net|googlesyndication\.com|googleadservices\.com|www\.google\.com\/(ccm|pagead))/;
const GOOGLE = /google|doubleclick/;

const results = [];
const step = async (name, fn) => {
	try {
		await fn();
		results.push(["ok", name]);
		console.log(`ok   - ${name}`);
	} catch (e) {
		results.push(["fail", name]);
		console.log(`FAIL - ${name}\n       ${e.message.split("\n").join("\n       ")}`);
	}
};

const browser = await chromium.launch();

const newPage = async () => {
	const context = await browser.newContext();
	const page = await context.newPage();
	page.googleRequests = [];
	page.hits = [];
	// Ne jamais quitter le site ni charger Médoucine
	await context.route(/medoucine\.com/, (route) => route.abort());
	await context.route(COLLECT, (route) => {
		const request = route.request();
		const url = new URL(request.url());
		const lines = (request.postData() || "").split("\n").filter(Boolean);
		for (const line of lines.length ? lines : [""]) {
			const body = new URLSearchParams(line);
			page.hits.push({
				host: url.host,
				en: body.get("en") || url.searchParams.get("en"),
				path: new URL(url.searchParams.get("dl") || "http://x/").pathname,
			});
		}
		return route.fulfill({ status: 204 });
	});
	page.on("request", (r) => {
		if (GOOGLE.test(new URL(r.url()).host)) page.googleRequests.push(r.url());
	});
	const violations = [];
	page.on("console", (m) => {
		if (/Content Security Policy/i.test(m.text())) violations.push(m.text().slice(0, 200));
	});
	page.violations = () => violations;
	return page;
};

const goto = async (page, path) => {
	await page.goto(`${BASE_URL}${path}`, { waitUntil: "networkidle" });
};

const waitForTag = (page) =>
	page.waitForFunction(() => typeof window.gtag === "function" && !!window.google_tag_manager);

const tagLoaded = (page) => page.evaluate(() => typeof window.gtag === "function");

// État de consentement effectif : default puis updates successifs du dataLayer
const consentState = (page) =>
	page.evaluate(() => {
		const state = {};
		for (const entry of window.dataLayer || []) {
			if (entry[0] === "consent") Object.assign(state, entry[2]);
		}
		return state;
	});

const events = (page, name) =>
	page.evaluate((n) => (window.dataLayer || []).filter((e) => e[0] === "event" && e[1] === n).length, name);

// GA4 regroupe ses envois : on force l'envoi en masquant la page
const flushHits = async (page) => {
	await page.waitForTimeout(1500);
	await page.evaluate(() => {
		Object.defineProperty(document, "visibilityState", { value: "hidden", configurable: true });
		document.dispatchEvent(new Event("visibilitychange"));
		window.dispatchEvent(new Event("pagehide"));
	});
	await page.waitForTimeout(1500);
	await page.evaluate(() => {
		Object.defineProperty(document, "visibilityState", { value: "visible", configurable: true });
		document.dispatchEvent(new Event("visibilitychange"));
	});
};

const pageViews = (page, path) =>
	page.hits.filter((h) => h.en === "page_view" && /google-analytics|analytics\.google/.test(h.host) && h.path === path)
		.length;

const googleCookies = async (page) =>
	(await page.context().cookies()).filter((c) => /^_ga|^_gcl/.test(c.name)).map((c) => c.name);

const ACCEPTED = {
	analytics_storage: "granted",
	ad_storage: "granted",
	ad_user_data: "granted",
	ad_personalization: "denied",
};

// Clic sans navigation réelle (tel: / nouvel onglet), listener global intact
const clickLink = async (page, selector) => {
	await page.evaluate((sel) => {
		const link = document.querySelector(sel);
		if (!link) throw new Error(`lien introuvable : ${sel}`);
		link.addEventListener("click", (e) => e.preventDefault(), { once: true });
		link.click();
	}, selector);
};

const banner = (page) => page.locator("#cookie-banner-title");

// ---------------------------------------------------------------
{
	const page = await newPage();

	await step("1. première visite : aucun tag Google chargé, aucune requête, aucun cookie", async () => {
		await goto(page, "/");
		await banner(page).waitFor({ state: "visible" });
		await page.waitForTimeout(2000);
		assert.equal(await tagLoaded(page), false);
		assert.deepEqual(page.googleRequests, []);
		assert.deepEqual(await googleCookies(page), []);
	});

	await step("personnaliser : cases décochées par défaut", async () => {
		await page.getByRole("button", { name: "Personnaliser" }).click();
		assert.equal(await page.locator("#analytics").isChecked(), false);
		assert.equal(await page.locator("#marketing").isChecked(), false);
		await page.getByRole("button", { name: "← Retour" }).click();
	});

	await step("2. tout accepter : tag chargé, mesure accordée, remarketing refusé, 1 page vue", async () => {
		await page.getByRole("button", { name: "Tout accepter" }).click();
		await waitForTag(page);
		assert.deepEqual(await consentState(page), ACCEPTED);
		await flushHits(page);
		assert.equal(pageViews(page, "/"), 1);
		assert.ok((await googleCookies(page)).some((n) => n.startsWith("_ga")), "cookie _ga déposé");
	});

	await step("3. rechargement : choix réappliqué, 1 seule page vue", async () => {
		page.hits.length = 0;
		await goto(page, "/");
		await waitForTag(page);
		assert.deepEqual(await consentState(page), ACCEPTED);
		await flushHits(page);
		assert.equal(pageViews(page, "/"), 1);
		assert.equal(await banner(page).isVisible(), false);
	});

	await step("4. navigation interne : 1 page vue par page, consentement inchangé", async () => {
		page.hits.length = 0;
		await page.locator('footer a[href="/tarifs"]').click();
		await page.waitForURL(/\/tarifs$/);
		await page.waitForTimeout(1000);
		await flushHits(page);
		assert.equal(pageViews(page, "/tarifs"), 1);
		assert.equal(pageViews(page, "/"), 0);
		assert.deepEqual(await consentState(page), ACCEPTED);
	});

	await step("9/12. clics (tout accepté) : clic_telephone et clic_medoucine sans double comptage", async () => {
		await goto(page, "/");
		await waitForTag(page);
		await clickLink(page, 'footer a[href="tel:+33620145306"]');
		assert.equal(await events(page, "clic_telephone"), 1);
		await clickLink(page, '#main-content a[href="tel:+33620145306"]');
		assert.equal(await events(page, "phone_click"), 1);
		assert.equal(await events(page, "clic_telephone"), 2);
		await clickLink(page, 'footer a[href*="medoucine.com"]');
		assert.equal(await events(page, "clic_medoucine"), 1);
		await clickLink(page, 'a[aria-label="Prendre rendez-vous avec Aurélia Desvaux sur Medoucine"]');
		assert.equal(await events(page, "booking_click"), 1);
		assert.equal(await events(page, "clic_medoucine"), 2);
	});

	await step("9/10. numéro validé (/ressources) compté, numéro hébergeur (/cgu) ignoré", async () => {
		await goto(page, "/ressources");
		await waitForTag(page);
		await clickLink(page, 'a[href="tel:+33695530437"]');
		assert.equal(await events(page, "clic_telephone"), 1);
		await goto(page, "/cgu");
		await waitForTag(page);
		await clickLink(page, 'a[href="tel:0189470014"]');
		assert.equal(await events(page, "clic_telephone"), 0);
	});

	await step("7. réouverture puis croix : fermeture sans modifier les choix", async () => {
		const storedBefore = await page.evaluate(() => localStorage.getItem("cookie-consent"));
		const consentCommands = () =>
			page.evaluate(() => window.dataLayer.filter((e) => e[0] === "consent").length);
		const commandsBefore = await consentCommands();
		await page.getByRole("button", { name: "Gérer les cookies" }).click();
		await banner(page).waitFor({ state: "visible" });
		assert.equal(await page.locator("#analytics").isChecked(), true);
		assert.equal(await page.locator("#marketing").isChecked(), true);
		await page.getByRole("button", { name: "Fermer sans modifier mes choix" }).click();
		assert.equal(await banner(page).isVisible(), false);
		assert.equal(await consentCommands(), commandsBefore);
		assert.equal(await page.evaluate(() => localStorage.getItem("cookie-consent")), storedBefore);
	});

	await step("8. retrait du consentement : tag déchargé, plus aucune requête, cookies supprimés", async () => {
		await page.getByRole("button", { name: "Gérer les cookies" }).click();
		await page.locator("#analytics").uncheck();
		await page.locator("#marketing").uncheck();
		await Promise.all([
			page.waitForEvent("load"),
			page.getByRole("button", { name: "Enregistrer mes préférences" }).click(),
		]);
		await page.waitForLoadState("networkidle");
		page.googleRequests.length = 0;
		await page.waitForTimeout(2000);
		assert.equal(await tagLoaded(page), false);
		assert.deepEqual(await googleCookies(page), []);
		await clickLink(page, 'footer a[href*="medoucine.com"]');
		await page.waitForTimeout(1000);
		assert.deepEqual(page.googleRequests, []);
	});

	await step("13. CSP : aucune violation (accepté, clics, retrait)", async () => {
		assert.deepEqual(page.violations(), []);
	});

	await page.context().close();
}

// ---------------------------------------------------------------
{
	const page = await newPage();
	await step("5. tout rejeter : rien n'est chargé, y compris après rechargement et clics", async () => {
		await goto(page, "/");
		await page.getByRole("button", { name: "Tout rejeter", exact: true }).click();
		await goto(page, "/");
		await page.waitForTimeout(2000);
		await clickLink(page, 'footer a[href="tel:+33620145306"]');
		assert.equal(await tagLoaded(page), false);
		assert.deepEqual(page.googleRequests, []);
		assert.deepEqual(await googleCookies(page), []);
		assert.equal(await banner(page).isVisible(), false);
	});
	await page.context().close();
}

{
	const page = await newPage();
	await step("5. première visite, croix « Tout rejeter et fermer » : refus enregistré, rien chargé", async () => {
		await goto(page, "/");
		await page.getByRole("button", { name: "Tout rejeter et fermer" }).click();
		assert.equal(await banner(page).isVisible(), false);
		const stored = await page.evaluate(() => JSON.parse(localStorage.getItem("cookie-consent")).choice);
		assert.equal(stored, "essential");
		assert.equal(await tagLoaded(page), false);
	});
	await page.context().close();
}

// ---------------------------------------------------------------
{
	const page = await newPage();
	await step("6. Analytics seul : mesure d'audience, aucun signal ni cookie publicitaire accordé", async () => {
		await goto(page, "/");
		await page.getByRole("button", { name: "Personnaliser" }).click();
		await page.locator("#analytics").check();
		await page.getByRole("button", { name: "Enregistrer mes préférences" }).click();
		await waitForTag(page);
		const expected = { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" };
		assert.deepEqual(await consentState(page), expected);
		await goto(page, "/");
		await waitForTag(page);
		assert.deepEqual(await consentState(page), expected);
		await page.waitForTimeout(2000);
		assert.deepEqual((await googleCookies(page)).filter((n) => n.startsWith("_gcl")), []);
	});
	await page.context().close();
}

{
	const page = await newPage();
	await step("6. Marketing seul : aucun tag chargé (la mesure Ads passe par GA4)", async () => {
		await goto(page, "/");
		await page.getByRole("button", { name: "Personnaliser" }).click();
		await page.locator("#marketing").check();
		await page.getByRole("button", { name: "Enregistrer mes préférences" }).click();
		await goto(page, "/");
		await page.waitForTimeout(2000);
		assert.equal(await tagLoaded(page), false);
		assert.deepEqual(page.googleRequests, []);
	});
	await page.context().close();
}

// ---------------------------------------------------------------
{
	const page = await newPage();
	await step("Google Maps : aucune connexion avant clic, carte chargée sur « Afficher la carte »", async () => {
		await goto(page, "/contact");
		await page.getByRole("button", { name: "Tout rejeter", exact: true }).click();
		await page.getByRole("button", { name: "Afficher la carte" }).scrollIntoViewIfNeeded();
		await page.waitForTimeout(4000);
		assert.equal(page.googleRequests.filter((u) => u.includes("/maps")).length, 0);
		await page.getByRole("button", { name: "Afficher la carte" }).click();
		await page.waitForSelector('iframe[src*="google.com/maps/embed"]');
		await page.waitForTimeout(2000);
		assert.deepEqual(page.violations(), []);
	});
	await page.context().close();
}

{
	const page = await newPage();
	await step("13. CSP : arrivée depuis une annonce (gclid) avec tout accepté, aucune violation", async () => {
		await goto(page, "/?gclid=TEST&gad_source=1");
		await page.getByRole("button", { name: "Tout accepter" }).click();
		await waitForTag(page);
		await page.waitForTimeout(3000);
		await goto(page, "/hypnose");
		await page.waitForTimeout(2000);
		assert.deepEqual(page.violations(), []);
	});
	await page.context().close();
}

await browser.close();
const failed = results.filter(([status]) => status === "fail").length;
console.log(`\n${results.length - failed}/${results.length} passed`);
process.exit(failed ? 1 : 0);
