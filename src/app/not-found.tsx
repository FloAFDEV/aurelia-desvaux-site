"use client";

import { Suspense } from "react";
import NotFoundComponent from "@/components/NotFoundComponent";

export default function NotFoundPage() {
	return (
		<Suspense fallback={<div>Chargement...</div>}>
			<NotFoundComponent />
		</Suspense>
	);
}
