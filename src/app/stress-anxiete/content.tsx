import { Suspense } from "react";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

function BreadcrumbsWrapper() {
	return (
		<Suspense fallback={<div className="h-12" />}>
			<Breadcrumbs
				items={[{ label: "Stress & anxiété", href: "/stress-anxiete" }]}
			/>
		</Suspense>
	);
}

const steps = [
	{
		num: "1",
		title: "On comprend vos crises",
		text: "Chaque crise a une utilité — même si c'est difficile à croire. On identifie ensemble ce message, et ça change déjà le regard que vous portez sur vous-même.",
	},
	{
		num: "2",
		title: "On relâche la pression intérieure",
		text: "Avec l'Hypnose, la PNL et l'EFT, on va libérer ce qui s'est accumulé en vous. En douceur, mais en profondeur.",
	},
	{
		num: "3",
		title: "On ramène de la sécurité",
		text: "Vous apprenez à vous faire confiance à nouveau. À sentir que vous êtes en sécurité dans votre propre corps. Les crises s'espacent, puis disparaissent.",
	},
	{
		num: "4",
		title: "On ancre les changements",
		text: "En moyenne 3 à 5 séances suffisent, espacées de 3 semaines — le temps que chaque changement s'installe vraiment.",
	},
];

const results = [
	"Vous dormez mieux — le corps se détend enfin",
	"Les crises s'espacent, puis disparaissent",
	"Vous sortez à nouveau, vous voyez vos amis",
	"Vous êtes plus douce avec vous-même",
	"Vous comprenez ce qui s'est passé — sans vous juger",
	"Vous retrouvez confiance en votre corps",
];

interface StressAnxieteContentProps {
	tarifSeanceStandard: number;
}

export default function StressAnxieteContent({
	tarifSeanceStandard,
}: StressAnxieteContentProps) {
	return (
		<>
			<BreadcrumbsWrapper />

			{/* ===== HERO ===== */}
			<section className="relative bg-gradient-to-br from-soft-pink/60 via-background to-blush/40 py-24 px-4 text-center overflow-hidden">
				<div className="absolute top-0 right-0 w-72 h-72 bg-blush/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
				<div className="absolute bottom-0 left-0 w-56 h-56 bg-soft-pink/40 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

				<div className="relative z-10 max-w-2xl mx-auto">
					<span className="inline-block font-body text-xs tracking-widest uppercase text-primary mb-6 px-4 py-1.5 rounded-full bg-primary/10">
						Stress & Anxiété · Antibes · Sophia-Antipolis
					</span>

					<h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
						Vous n'en pouvez plus de vivre
						<span className="text-primary italic"> avec cette boule au ventre </span>?
					</h1>

					<p className="font-body text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
						Les crises d'angoisse ne sont pas une fatalité. Elles ne sont pas non plus le signe que vous êtes fragile. Elles sont un message — et ensemble, on va apprendre à l'entendre.
					</p>

					<a
						href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground font-body text-lg font-medium rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
					>
						<Calendar className="w-5 h-5" />
						Prendre rendez-vous
					</a>
				</div>
			</section>

			{/* ===== VOUS RECONNAISSEZ ? ===== */}
			<section className="py-20 px-4 bg-background">
				<div className="max-w-2xl mx-auto">
					<span className="inline-block font-body text-xs tracking-widest uppercase text-primary mb-4 px-4 py-1.5 rounded-full bg-primary/10">
						Vous vous reconnaissez ?
					</span>
					<h2 className="font-script text-3xl md:text-4xl text-foreground mb-4">
						Ce que vous vivez au quotidien
					</h2>
					<div className="w-14 h-px bg-primary mb-8" />

					<div className="bg-soft-pink/50 border-l-4 border-primary rounded-r-2xl px-8 py-7 mb-8 space-y-4">
						<p className="font-body text-foreground leading-relaxed">
							Vous avez des crises d'angoisse qui arrivent parfois sans prévenir. Le cœur qui s'emballe, la respiration qui se coupe, cette sensation que quelque chose de terrible va arriver — même quand vous savez, rationnellement, que non.
						</p>
						<p className="font-body text-foreground leading-relaxed">
							Et puis vient l'engrenage : la peur de faire une crise. Vous commencez à éviter certaines situations, certains endroits, certaines sorties. Les amis, le travail, les transports — tout devient un calcul de risque. Vous vous rétrécissez.
						</p>
						<p className="font-body text-foreground leading-relaxed">
							Vous êtes épuisée. Et quelque part, vous vous demandez si vous allez un jour vous en sortir vraiment.
						</p>
					</div>

					<p className="font-body text-primary font-medium italic text-lg">
						Si vous vous reconnaissez dans ces mots — vous êtes exactement là où il faut.
					</p>
				</div>
			</section>

			{/* ===== EXPLICATION ===== */}
			<section className="py-20 px-4 bg-soft-pink/30">
				<div className="max-w-2xl mx-auto">
					<span className="inline-block font-body text-xs tracking-widest uppercase text-primary mb-4 px-4 py-1.5 rounded-full bg-primary/10">
						Comprendre
					</span>
					<h2 className="font-script text-3xl md:text-4xl text-foreground mb-4">
						Ce que vos crises essaient de vous dire
					</h2>
					<div className="w-14 h-px bg-primary mb-8" />

					<div className="space-y-4 mb-8">
						<p className="font-body text-muted-foreground leading-relaxed">
							Les crises d'angoisse n'arrivent pas pour rien. Ce n'est pas parce que vous êtes faible, ni parce que vous "ne gérez pas". C'est le dernier moyen qu'a trouvé votre corps pour vous faire entendre que quelque chose ne va pas — des émotions mises de côté, du stress ignoré, des situations non résolues qui s'accumulent.
						</p>
						<p className="font-body text-muted-foreground leading-relaxed">
							La pression monte. Et quand le corps n'est plus entendu, il prend le dessus. Il envoie un signal clair, fort, impossible à ignorer : la crise d'angoisse.
						</p>
					</div>

					<blockquote className="bg-background rounded-2xl px-8 py-7 shadow-sm border border-primary/10 text-center mb-8">
						<p className="font-script text-2xl text-primary leading-relaxed">
							"Ce n'est pas de votre faute. C'est passager.<br />
							Et surtout — ça se désamorce."
						</p>
					</blockquote>

					<p className="font-body text-muted-foreground leading-relaxed">
						En thérapie brève, on ne cherche pas à comprendre pourquoi pendant des années. On identifie ce qui se passe, on désamorce la pression intérieure, et on ramène de la sérénité et de la confiance — durablement.
					</p>
				</div>
			</section>

			{/* ===== PROCESSUS ===== */}
			<section className="py-20 px-4 bg-background">
				<div className="max-w-2xl mx-auto">
					<span className="inline-block font-body text-xs tracking-widest uppercase text-primary mb-4 px-4 py-1.5 rounded-full bg-primary/10">
						Comment ça se passe
					</span>
					<h2 className="font-script text-3xl md:text-4xl text-foreground mb-4">
						Ce qu'on fait ensemble
					</h2>
					<div className="w-14 h-px bg-primary mb-8" />

					<div className="flex flex-col gap-4">
						{steps.map((step) => (
							<div
								key={step.num}
								className="flex gap-5 items-start bg-soft-pink/20 border border-blush rounded-2xl p-6 transition-all duration-300 hover:shadow-sm hover:bg-soft-pink/30"
							>
								<div className="w-10 h-10 flex-shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-body font-semibold text-base">
									{step.num}
								</div>
								<div>
									<h3 className="font-display text-lg text-foreground mb-1">
										{step.title}
									</h3>
									<p className="font-body text-sm text-muted-foreground leading-relaxed">
										{step.text}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ===== RÉSULTATS ===== */}
			<section className="py-20 px-4 bg-gradient-to-br from-soft-pink/40 to-blush/30">
				<div className="max-w-2xl mx-auto text-center">
					<span className="inline-block font-body text-xs tracking-widest uppercase text-primary mb-4 px-4 py-1.5 rounded-full bg-primary/10">
						Après les séances
					</span>
					<h2 className="font-script text-3xl md:text-4xl text-foreground mb-4">
						Ce qui change pour vous
					</h2>
					<div className="w-14 h-px bg-primary mx-auto mb-10" />

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
						{results.map((result) => (
							<div
								key={result}
								className="flex items-start gap-3 bg-background rounded-xl px-5 py-4 shadow-sm border border-blush/50"
							>
								<span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
								<p className="font-body text-sm text-foreground leading-relaxed">
									{result}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ===== EN SAVOIR PLUS ===== */}
			<section className="py-12 px-4 bg-background">
				<div className="max-w-2xl mx-auto text-center">
					<p className="font-body text-sm text-muted-foreground leading-relaxed">
						L'hypnose est l'un des outils que nous utilisons pour désamorcer ces mécanismes —{" "}
						<Link href="/hypnose" className="text-primary underline underline-offset-2 hover:text-foreground transition-colors">
							découvrez comment elle fonctionne
						</Link>
						. Vous pouvez aussi{" "}
						<Link href="/a-propos" className="text-primary underline underline-offset-2 hover:text-foreground transition-colors">
							en savoir plus sur mon parcours
						</Link>{" "}
						ou consulter{" "}
						<Link href="/tarifs" className="text-primary underline underline-offset-2 hover:text-foreground transition-colors">
							mes tarifs
						</Link>{" "}
						avant de prendre rendez-vous.
					</p>
				</div>
			</section>

			{/* ===== CTA FINAL ===== */}
			<section className="py-24 px-4 bg-primary text-center">
				<div className="max-w-xl mx-auto">
					<h2 className="font-script text-3xl md:text-4xl text-primary-foreground mb-5">
						Vous n'avez pas à continuer comme ça.
					</h2>
					<p className="font-body text-primary-foreground/85 leading-relaxed mb-10 text-lg">
						La première séance dure 1h30. On prend le temps de se découvrir, de comprendre ce que vous traversez, et de poser les premières bases. Vous repartez avec déjà quelque chose : le sentiment qu'une issue existe.
					</p>
					<a
						href="https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-3 px-10 py-5 bg-background text-primary font-body text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
					>
						<Calendar className="w-5 h-5" />
						Prendre rendez-vous
					</a>
					<div className="flex items-center justify-center gap-2 mt-6 text-primary-foreground/55 font-body text-sm">
						<MapPin className="w-4 h-4" />
						<span>Cabinet à Valbonne · 15 min d'Antibes et Sophia-Antipolis · Séance {tarifSeanceStandard}€</span>
					</div>
				</div>
			</section>

		</>
	);
}
