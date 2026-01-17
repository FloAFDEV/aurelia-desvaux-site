import { Metadata } from "next";
import Head from "next/head";
import Content from "./content";

export const metadata: Metadata = {
	title: "PNL - Programmation Neuro-Linguistique à Valbonne | Aurélia Desvaux",
	description:
		"Séances de PNL à Valbonne Sophia-Antipolis. Développez votre potentiel, confiance en soi, communication. Praticienne PNL certifiée, accompagnement personnalisé.",
};

export default function PNLPage() {
	return (
		<>
			<Head>
				<link rel="canonical" href="https://aurelia-desvaux.fr/pnl" />

				{/* JSON-LD Structured Data */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Service",
							name: "PNL - Programmation Neuro-Linguistique à Valbonne",
							description:
								"Séances de PNL pour développement personnel, confiance en soi, évolution professionnelle. Accompagnement personnalisé à Valbonne Sophia-Antipolis.",
							provider: {
								"@type": "Person",
								name: "Aurélia Desvaux",
								jobTitle: "Praticienne PNL",
							},
							areaServed: "Valbonne, Sophia-Antipolis, France",
							url: "https://aurelia-desvaux.fr/pnl",
						}),
					}}
				/>
			</Head>
			<Content />
		</>
	);
}
