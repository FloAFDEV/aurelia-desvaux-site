"use client";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Contact } from "@/components/Contact";

export default function ContactContent() {
	return (
		<>
			<Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
			{/* H1 de la route /contact. Le composant <Contact /> est partagé avec la
			    homepage, où son titre doit rester un <h2> de section : le H1 est donc
			    porté ici. Visuellement masqué pour ne pas dupliquer le titre affiché. */}
			<h1 className="sr-only">
				Contact & Rendez-vous — Cabinet à Valbonne
			</h1>
			<Contact />
		</>
	);
}
