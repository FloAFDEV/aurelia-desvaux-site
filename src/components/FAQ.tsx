"use client";

import Script from "next/script";
import { useInView } from "@/hooks/useInView";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { trackFAQOpen } from "@/hooks/useGoogleAnalytics";

const faqs = [
	{
		question: "Comment se déroule une première séance de thérapie brève ?",
		answer: "La première séance dure environ 1h30 et permet de faire connaissance, d'identifier votre problématique et vos objectifs. Nous explorons ensemble votre situation actuelle et définissons un plan d'accompagnement personnalisé. Cette séance est aussi l'occasion de découvrir les techniques que nous utiliserons (hypnose, PNL, EFT) et de répondre à toutes vos questions.",
	},
	{
		question:
			"Combien de séances sont nécessaires pour voir des résultats ?",
		answer: "Les thérapies brèves portent bien leur nom : la plupart des personnes constatent des résultats significatifs en 3 à 6 séances. Certaines problématiques peuvent se résoudre en une seule séance, tandis que d'autres nécessitent un accompagnement plus long. Nous faisons régulièrement le point ensemble pour adapter l'accompagnement à vos progrès.",
	},
	{
		question: "Quelle est la différence entre l'hypnose, la PNL et l'EFT ?",
		answer: "L'hypnose agit avec l'inconscient pour créer des changements profonds et durables. La PNL modifie les schémas de pensée et comportements limitants. L'EFT libère les émotions bloquées par des tapotements sur des points d'acupuncture. Ces approches sont complémentaires et peuvent être combinées selon vos besoins.",
	},
	{
		question: "Les séances sont-elles remboursées par la mutuelle ?",
		answer: "De nombreuses mutuelles proposent un forfait médecine douce. Une facture détaillée vous est fournie pour transmission à votre organisme.",
	},
	{
		question: "Puis-je consulter à distance en visio ?",
		answer: "Oui, les séances en visioconférence sont tout aussi efficaces. Seule la Dream Machine nécessite une séance en présentiel, car l'appareil doit être utilisé sur place.",
	},
	{
		question: "Les thérapies brèves sont-elles adaptées aux adolescents ?",
		answer: "Oui, particulièrement l'hypnose et l'EFT. J'adapte les techniques à leur âge pour des problématiques comme le stress scolaire, les phobies ou le manque de confiance.",
	},
	{
		question:
			"Quelle est la différence entre la préparation mentale et une thérapie ?",
		answer: "La préparation mentale vise un objectif précis (examen, compétition, prise de parole) alors qu'une thérapie traite des problématiques de fond. Les deux approches peuvent être complémentaires.",
	},
];

export const FAQ = () => {
	const { ref, isInView } = useInView();

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};

	return (
		<>
			{/* JSON-LD FAQ — SEO Rich Results */}
			<Script
				id="faq-jsonld"
				type="application/ld+json"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredData),
				}}
			/>

			<section
				id="faq"
				aria-labelledby="faq-title"
				className="py-24 bg-background relative overflow-hidden"
			>
				{/* Decorative blobs */}
				<div
					aria-hidden="true"
					className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"
				/>
				<div
					aria-hidden="true"
					className="absolute bottom-20 right-10 w-56 h-56 bg-blush/20 rounded-full blur-3xl pointer-events-none"
				/>

				<div
					ref={ref}
					className="container mx-auto px-4 md:px-6 lg:px-8"
				>
					{/* Header */}
					<div className="text-center mb-16">
						<span
							className={`inline-block font-body text-sm tracking-widest uppercase text-muted-foreground mb-6 transition-all duration-700 motion-safe:ease-out ${
								isInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-6"
							}`}
						>
							Questions fréquentes
						</span>

						<h2
							id="faq-title"
							className={`font-script text-4xl md:text-5xl text-foreground mb-4 transition-all duration-700 motion-safe:ease-out ${
								isInView
									? "opacity-100 translate-y-0 scale-100"
									: "opacity-0 translate-y-6 scale-95"
							}`}
						>
							Vos questions, mes réponses
						</h2>

						<div
							className={`w-24 h-px bg-primary mx-auto mb-6 transition-all duration-700 motion-safe:ease-out ${
								isInView
									? "opacity-100 scale-x-100"
									: "opacity-0 scale-x-0"
							}`}
						/>

						<p
							className={`font-body text-muted-foreground max-w-2xl mx-auto transition-all duration-700 motion-safe:ease-out ${
								isInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-6"
							}`}
						>
							Tout ce que vous devez savoir sur les thérapies
							brèves et l’accompagnement proposé
						</p>
					</div>

					{/* Accordion */}
					<div
						className={`max-w-3xl mx-auto transition-all duration-700 motion-safe:ease-out ${
							isInView
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
					>
						<Accordion
							type="single"
							collapsible
							className="space-y-4"
							onValueChange={(value) => {
								if (value) {
									const index = Number(
										value.replace("item-", "")
									);
									trackFAQOpen(
										faqs[index]?.question || value
									);
								}
							}}
						>
							{faqs.map((faq, index) => (
								<AccordionItem
									key={index}
									value={`item-${index}`}
									className="bg-card rounded-lg px-6 border border-border shadow-sm hover:shadow-md transition-shadow"
								>
									<AccordionTrigger className="font-display text-lg text-left hover:text-primary py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</section>
		</>
	);
};
