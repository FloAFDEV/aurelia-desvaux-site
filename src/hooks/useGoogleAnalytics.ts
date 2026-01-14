"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

// Remplacez G-XXXXXXXXXX par votre Measurement ID GA4
const GA_MEASUREMENT_ID = "G-MX1M09SLT5";

declare global {
	interface Window {
		gtag: (...args: unknown[]) => void;
		dataLayer: unknown[];
	}
}

// Hook pour tracker les pageviews dans une SPA
export const usePageTracking = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		if (typeof window.gtag === "function") {
			window.gtag("config", GA_MEASUREMENT_ID, {
				page_path: pathname + searchParams.toString(),
				page_title: document.title,
			});
		}
	}, [pathname, searchParams]);
};

// Fonction pour envoyer des événements personnalisés
export const trackEvent = (
	eventName: string,
	eventParams?: Record<string, unknown>
) => {
	if (typeof window.gtag === "function") {
		window.gtag("event", eventName, eventParams);
	}
};

// ===== ÉVÉNEMENTS CTA =====
export const trackBookingClick = (source: string) => {
	trackEvent("booking_click", {
		event_category: "conversion",
		event_label: source,
		value: 1,
	});
};

export const trackCTAClick = (ctaName: string, page: string) => {
	trackEvent("cta_click", {
		event_category: "engagement",
		event_label: ctaName,
		page_location: page,
	});
};

// ===== ÉVÉNEMENTS CONTACT =====
export const trackPhoneClick = () => {
	trackEvent("phone_click", {
		event_category: "contact",
		event_label: "telephone",
		value: 1,
	});
};

export const trackEmailClick = () => {
	trackEvent("email_click", {
		event_category: "contact",
		event_label: "email",
		value: 1,
	});
};

export const trackAddressClick = () => {
	trackEvent("address_click", {
		event_category: "contact",
		event_label: "google_maps",
	});
};

// ===== ÉVÉNEMENTS ENGAGEMENT =====
export const trackFAQOpen = (question: string) => {
	trackEvent("faq_open", {
		event_category: "engagement",
		event_label: question,
	});
};

export const trackTestimonialView = () => {
	trackEvent("testimonial_view", {
		event_category: "engagement",
		event_label: "carousel",
	});
};

export const trackAudioPlay = (audioName: string) => {
	trackEvent("audio_play", {
		event_category: "engagement",
		event_label: audioName,
	});
};

export const trackScrollDepth = (depth: number) => {
	trackEvent("scroll_depth", {
		event_category: "engagement",
		event_label: `${depth}%`,
		value: depth,
	});
};

// ===== ÉVÉNEMENTS NAVIGATION =====
export const trackTherapyPageView = (therapyName: string) => {
	trackEvent("therapy_view", {
		event_category: "content",
		event_label: therapyName,
	});
};

export const trackExternalLinkClick = (url: string, linkName: string) => {
	trackEvent("external_link_click", {
		event_category: "outbound",
		event_label: linkName,
		link_url: url,
	});
};
