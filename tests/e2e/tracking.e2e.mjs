// Tests navigateur : consentement (Consent Mode v2), « Gérer les cookies »,
// clic_telephone / clic_medoucine et CSP.
// Usage : npm run build && npm start  puis  BASE_URL=http://localhost:3000 npm run test:e2e
import { chromium } from "playwright";
import assert from "node:assert/strict";

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const CONSENT_KEYS = ["analytics_storage", "ad_storage", "ad_user_data", "ad_personalization"];

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

// État de consentement effectif : default puis updates successifs du dataLayer
const consentState = (page) =>
	page.evaluate((keys) => {
		const state = {};
		for (const entry of window.dataLayer || []) {
			if (entry[0] !== "consent") continue;
			for (const k of keys) if (entry[2][k]) state[k] = entry[2][k];
		}
		return state;
	}, CONSENT_KEYS);

const consentCommands = (page) =>
	page.evaluate(() => (window.dataLayer || []).filter((e) => e[0] === "consent").map((e) => e[1]));

const events = (page, name) =>
	page.evaluate((n) => (window.dataLayer || []).filter((e) => e[0] === "event" && e[1] === n).length, name);

const all = (value) => Object.fromEntries(CONSENT_KEYS.map((k) => [k, value]));

const browser = await chromium.launch();

const newPage = async () => {
	const context = await browser.newContext();
	// Ne jamais quitter le site pendant les tests (Médoucine, tel:)
	await context.route(/medoucine\.com/, (route) => route.abort());
	const page = await context.newPage();
	const violations = [];
	await page.addInitScript(() => {
		window.__cspViolations = [];
		document.addEventListener("securitypolicyviolation", (e) =>
			window.__cspViolations.push(`${e.violatedDirective} ${e.blockedURI}`),
		);
	});
	page.on("console", (m) => {
		if (/Content Security Policy/i.test(m.text())) violations.push(m.text().slice(0, 200));
	});
	page.violations = async () => [...violations, ...(await page.evaluate(() => window.__cspViolations || []))];
	return page;
};

const goto = async (page, path) => {
	await page.goto(`${BASE_URL}${path}`, { waitUntil: "networkidle" });
	await page.waitForFunction(() => typeof window.gtag === "function");
};

// Clic sans navigation réelle (tel: / nouvel onglet) : on garde le listener global intact
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

	await step("1. première visite : bandeau visible, aucun consentement accordé", async () => {
		await goto(page, "/");
		await banner(page).waitFor({ state: "visible" });
		assert.deepEqual(await consentState(page), all("denied"));
		assert.deepEqual(await consentCommands(page), ["default"]);
	});

	await step("personnaliser : cases décochées par défaut", async () => {
		await page.getByRole("button", { name: "Personnaliser" }).click();
		assert.equal(await page.locator("#analytics").isChecked(), false);
		assert.equal(await page.locator("#marketing").isChecked(), false);
		await page.getByRole("button", { name: "← Retour" }).click();
	});

	await step("2. tout accepter : quatre signaux granted", async () => {
		await page.getByRole("button", { name: "Tout accepter" }).click();
		assert.deepEqual(await consentState(page), all("granted"));
		assert.equal(await banner(page).isVisible(), false);
	});

	await step("3. rechargement après acceptation : choix réappliqué avant config", async () => {
		await goto(page, "/");
		assert.deepEqual(await consentState(page), all("granted"));
		const order = await page.evaluate(() =>
			(window.dataLayer || []).map((e) => `${e[0]}${e[1] && typeof e[1] === "string" ? ":" + e[1] : ""}`),
		);
		assert.ok(order.indexOf("consent:update") < order.findIndex((e) => e.startsWith("config")), order.join(","));
		await page.waitForTimeout(1000);
		assert.equal(await banner(page).isVisible(), false);
	});

	await step("4. navigation interne (App Router) : consentement cohérent", async () => {
		await page.locator('footer a[href="/tarifs"]').click();
		await page.waitForURL(/\/tarifs$/);
		assert.deepEqual(await consentState(page), all("granted"));
		await goto(page, "/hypnose");
		assert.deepEqual(await consentState(page), all("granted"));
	});

	await step("7. « Gérer les cookies » rouvre le bandeau avec les choix actuels", async () => {
		await page.getByRole("button", { name: "Gérer les cookies" }).click();
		await banner(page).waitFor({ state: "visible" });
		assert.equal(await page.locator("#analytics").isChecked(), true);
		assert.equal(await page.locator("#marketing").isChecked(), true);
	});

	await step("8. retrait du consentement : signaux denied, cookies GA supprimés", async () => {
		await page.locator("#analytics").uncheck();
		await page.locator("#marketing").uncheck();
		await page.getByRole("button", { name: "Enregistrer mes préférences" }).click();
		assert.deepEqual(await consentState(page), all("denied"));
		const gaCookies = (await page.context().cookies()).filter((c) => /^_ga|^_gcl/.test(c.name));
		assert.deepEqual(gaCookies.map((c) => c.name), []);
		await goto(page, "/");
		assert.deepEqual(await consentState(page), all("denied"));
	});

	await step("13. CSP : aucune violation (consentement accordé puis retiré)", async () => {
		assert.deepEqual(await page.violations(), []);
	});

	await page.context().close();
}

// ---------------------------------------------------------------
{
	const page = await newPage();
	await step("5. tout rejeter : quatre signaux denied, y compris après rechargement", async () => {
		await goto(page, "/");
		await page.getByRole("button", { name: "Tout rejeter", exact: true }).click();
		assert.deepEqual(await consentState(page), all("denied"));
		await goto(page, "/");
		assert.deepEqual(await consentState(page), all("denied"));
		await page.waitForTimeout(1000);
		assert.equal(await banner(page).isVisible(), false);
	});
	await page.context().close();
}

// ---------------------------------------------------------------
for (const [label, prefs, expected] of [
	["Analytics seul", { analytics: true, marketing: false }, { ...all("denied"), analytics_storage: "granted" }],
	["Marketing seul", { analytics: false, marketing: true }, { ...all("granted"), analytics_storage: "denied" }],
]) {
	const page = await newPage();
	await step(`6. choix personnalisé (${label}) : catégories indépendantes, persistées`, async () => {
		await goto(page, "/");
		await page.getByRole("button", { name: "Personnaliser" }).click();
		if (prefs.analytics) await page.locator("#analytics").check();
		if (prefs.marketing) await page.locator("#marketing").check();
		await page.getByRole("button", { name: "Enregistrer mes préférences" }).click();
		assert.deepEqual(await consentState(page), expected);
		await goto(page, "/");
		assert.deepEqual(await consentState(page), expected);
	});
	await page.context().close();
}

// ---------------------------------------------------------------
{
	const page = await newPage();
	await goto(page, "/");
	await page.getByRole("button", { name: "Tout rejeter", exact: true }).click();

	await step("9. clic numéro cliente (footer) : clic_telephone", async () => {
		await clickLink(page, 'footer a[href="tel:+33620145306"]');
		assert.equal(await events(page, "clic_telephone"), 1);
	});

	await step("12. clic téléphone section Contact : 1 phone_click + 1 clic_telephone", async () => {
		const before = await events(page, "clic_telephone");
		await clickLink(page, '#main-content a[href="tel:+33620145306"]');
		assert.equal(await events(page, "phone_click"), 1);
		assert.equal(await events(page, "clic_telephone"), before + 1);
	});

	await step("11. clic Médoucine : clic_medoucine (footer)", async () => {
		await clickLink(page, 'footer a[href*="medoucine.com"]');
		assert.equal(await events(page, "clic_medoucine"), 1);
	});

	await step("12. clic Médoucine Hero : 1 booking_click + 1 clic_medoucine", async () => {
		const before = await events(page, "clic_medoucine");
		await clickLink(page, 'a[aria-label="Prendre rendez-vous avec Aurélia Desvaux sur Medoucine"]');
		assert.equal(await events(page, "booking_click"), 1);
		assert.equal(await events(page, "clic_medoucine"), before + 1);
	});

	await step("9. clic numéro validé (/ressources) : clic_telephone", async () => {
		await goto(page, "/ressources");
		await clickLink(page, 'a[href="tel:+33695530437"]');
		assert.equal(await events(page, "clic_telephone"), 1);
	});

	await step("10. clic numéro hébergeur (/cgu) : aucun clic_telephone", async () => {
		await goto(page, "/cgu");
		await clickLink(page, 'a[href="tel:0189470014"]');
		assert.equal(await events(page, "clic_telephone"), 0);
	});

	await step("13. CSP : aucune violation (consentement refusé + clics)", async () => {
		assert.deepEqual(await page.violations(), []);
	});

	await page.context().close();
}

// ---------------------------------------------------------------
{
	const page = await newPage();
	await step("13. CSP : arrivée depuis une annonce (gclid) avec tout accepté, aucune violation", async () => {
		await goto(page, "/?gclid=TEST&gad_source=1");
		await page.getByRole("button", { name: "Tout accepter" }).click();
		await page.waitForTimeout(3000);
		await goto(page, "/hypnose");
		await page.waitForTimeout(2000);
		assert.deepEqual(await page.violations(), []);
	});
	await page.context().close();
}

await browser.close();
const failed = results.filter(([status]) => status === "fail").length;
console.log(`\n${results.length - failed}/${results.length} passed`);
process.exit(failed ? 1 : 0);
