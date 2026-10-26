import { test } from "node:test";
import assert from "node:assert/strict";
import { getTrackedClickEvent } from "../src/lib/clickTracking.ts";

test("numéros de la cliente : clic_telephone", () => {
	for (const href of [
		"tel:+33620145306",
		"tel:+33695530437",
		"tel:0620145306",
		"tel:+33%206%2020%2014%2053%2006",
		"tel:0033695530437",
	]) {
		assert.equal(getTrackedClickEvent(href), "clic_telephone", href);
	}
});

test("numéro de l'hébergeur et autres numéros : non suivis", () => {
	for (const href of ["tel:0189470014", "tel:+33189470014", "tel:3989", "tel:%E0%A4%A"]) {
		assert.equal(getTrackedClickEvent(href), null, href);
	}
});

test("Médoucine (domaine et sous-domaines) : clic_medoucine", () => {
	for (const href of [
		"https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951",
		"https://medoucine.com/",
		"http://pro.medoucine.com/x",
	]) {
		assert.equal(getTrackedClickEvent(href), "clic_medoucine", href);
	}
});

test("faux domaines et redirections : non suivis", () => {
	for (const href of [
		"https://www.google.com/url?q=http://medoucine.com&source=gmail",
		"https://medoucine.com.evil.fr/",
		"https://notmedoucine.com/",
		"mailto:desvauxaurelia@gmail.com",
		"https://aurelia-desvaux.fr/contact",
		"/contact",
	]) {
		assert.equal(getTrackedClickEvent(href), null, href);
	}
});
