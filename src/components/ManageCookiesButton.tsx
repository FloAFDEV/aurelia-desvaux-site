"use client";

import { OPEN_COOKIE_SETTINGS_EVENT } from "@/lib/consent";

// Rouvre le bandeau cookies existant (CookieBanner) sur ses préférences
export const ManageCookiesButton = ({ className }: { className?: string }) => (
	<button
		type="button"
		onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
		className={className}
	>
		Gérer les cookies
	</button>
);
