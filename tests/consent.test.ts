import { test } from "node:test";
import assert from "node:assert/strict";
import {
	CONSENT_DURATION_MS,
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

const cases: Array<[string, ConsentData]> = [
	["tout accepter", { choice: "all", timestamp: Date.now() }],
	["tout rejeter", { choice: "essential", timestamp: Date.now() }],
	["analytics seul", { choice: "custom", timestamp: Date.now(), preferences: { analytics: true, marketing: false } }],
	["marketing seul", { choice: "custom", timestamp: Date.now(), preferences: { analytics: false, marketing: true } }],
	["aucun", { choice: "custom", timestamp: Date.now(), preferences: { analytics: false, marketing: false } }],
];

test("aucun choix : aucun consentement accordé", () => {
	assert.deepEqual(toGtagConsent(preferencesFromConsent(null)), ALL_DENIED);
});

test("tout accepter : mesure accordée, remarketing (ad_personalization) toujours refusé", () => {
	assert.deepEqual(toGtagConsent(preferencesFromConsent(cases[0][1])), {
		...ALL_GRANTED,
		ad_personalization: "denied",
	});
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
		ad_personalization: "denied",
	});
});

test("custom sans préférences : rien n'est accordé", () => {
	assert.deepEqual(
		toGtagConsent(preferencesFromConsent({ choice: "custom", timestamp: Date.now() })),
		ALL_DENIED,
	);
});

test("consentement expiré (> 6 mois) : ignoré", () => {
	const expired: ConsentData = { choice: "all", timestamp: Date.now() - CONSENT_DURATION_MS - 1000 };
	assert.equal(parseStoredConsent(JSON.stringify(expired)), null);
	assert.equal(preferencesFromConsent(parseStoredConsent(JSON.stringify(expired))).analytics, false);
});

test("stockage corrompu : ignoré sans erreur", () => {
	assert.equal(parseStoredConsent("{oops"), null);
	assert.equal(parseStoredConsent(null), null);
});
