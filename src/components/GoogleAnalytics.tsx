'use client';

import { usePageTracking } from "@/hooks/useGoogleAnalytics";

// Composant qui active le tracking des pageviews pour la SPA
export const GoogleAnalyticsTracker = () => {
	usePageTracking();
	return null;
};
