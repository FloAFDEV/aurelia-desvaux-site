// src/components/ClientWrappers.tsx
"use client";

import { ScrollToTop } from "./ScrollToTop";
import { GoogleAnalyticsTracker } from "./GoogleAnalytics";

export default function ClientWrappers() {
	return (
		<>
			<ScrollToTop />
			<GoogleAnalyticsTracker />
		</>
	);
}
