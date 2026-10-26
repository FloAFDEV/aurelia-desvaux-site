import { test } from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import {
	CONSENT_DURATION_MS,
	CONSENT_STORAGE_KEY,
	buildConsentRestoreScript,
	parseStoredConsent,
	preferencesFromConsent,
	toGtagConsent,
	type ConsentData,
} from "../src/lib/consent.ts";

const ALL_DENIED = {
	analytics_storage: "denied",
	ad_storage: "denied",
	ad_user_data: "denied",
	ad_personalization: "denied",
};
const ALL_GRANTED = {
	analytics_storage: "granted",
	ad_storage: "granted",
	ad_user_data: "granted",
	ad_personalization: "granted",
};

// Exécute le script inline du layout avec un localStorage simulé
const runRestoreScript = (stored: unknown) => {
	const calls: unknown[][] = [];
	vm.runInNewContext(buildConsentRestoreScript(), {
		localStorage: {
			getItem: (key: string) =>
				key === CONSENT_STORAGE_KEY && stored !== undefined ? JSON.stringify(stored) : null,
		},
		// JSON : objets créés dans un autre realm vm
		gtag: (...args: unknown[]) => calls.push(JSON.parse(JSON.stringify(args))),
		Date,
		JSON,
	});
	return calls;
};

const cases: Array<[string, ConsentData]> = [
	["tout accepter", { choice: "all", timestamp: Date.now() }],
	["tout rejeter", { choice: "essential", timestamp: Date.now() }],
	["analytics seul", { choice: "custom", timestamp: Date.now(), preferences: { analytics: true, marketing: false } }],
	["marketing seul", { choice: "custom", timestamp: Date.now(), preferences: { analytics: false, marketing: true } }],
	["aucun", { choice: "custom", timestamp: Date.now(), preferences: { analytics: false, marketing: false } }],
];

test("aucun choix : aucun consentement accordé", () => {
	assert.deepEqual(toGtagConsent(preferencesFromConsent(null)), ALL_DENIED);
	assert.equal(runRestoreScript(undefined).length, 0);
});

test("tout accepter : quatre signaux granted", () => {
	assert.deepEqual(toGtagConsent(preferencesFromConsent(cases[0][1])), ALL_GRANTED);
});

test("tout rejeter : quatre signaux denied", () => {
	assert.deepEqual(toGtagConsent(preferencesFromConsent(cases[1][1])), ALL_DENIED);
});

test("choix personnalisé : analytics et marketing indépendants", () => {
	assert.deepEqual(toGtagConsent(preferencesFromConsent(cases[2][1])), {
		...ALL_DENIED,
		analytics_storage: "granted",
	});
	assert.deepEqual(toGtagConsent(preferencesFromConsent(cases[3][1])), {
		...ALL_GRANTED,
		analytics_storage: "denied",
	});
});

test("custom sans préférences : rien n'est accordé", () => {
	assert.deepEqual(
		toGtagConsent(preferencesFromConsent({ choice: "custom", timestamp: Date.now() })),
		ALL_DENIED,
	);
});

for (const [name, data] of cases) {
	test(`script inline équivalent à toGtagConsent (${name})`, () => {
		const calls = runRestoreScript(data);
		assert.equal(calls.length, 1);
		assert.deepEqual(calls[0], ["consent", "update", toGtagConsent(preferencesFromConsent(data))]);
	});
}

test("consentement expiré (> 6 mois) : ignoré", () => {
	const expired: ConsentData = { choice: "all", timestamp: Date.now() - CONSENT_DURATION_MS - 1000 };
	assert.equal(parseStoredConsent(JSON.stringify(expired)), null);
	assert.equal(runRestoreScript(expired).length, 0);
});

test("stockage corrompu : ignoré sans erreur", () => {
	assert.equal(parseStoredConsent("{oops"), null);
	assert.equal(parseStoredConsent(null), null);
	assert.doesNotThrow(() =>
		vm.runInNewContext(buildConsentRestoreScript(), {
			localStorage: { getItem: () => "{oops" },
			gtag: () => assert.fail("gtag ne doit pas être appelé"),
			Date,
			JSON,
		}),
	);
});
