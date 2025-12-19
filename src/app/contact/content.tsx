"use client";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Contact } from "@/components/Contact";

export default function ContactContent() {
	return (
		<>
			<Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
			<Contact />
		</>
	);
}
