import { Suspense } from "react";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

function BreadcrumbsWrapper() {
	return (
		<Suspense fallback={<div className="h-12" />}>
			<Breadcrumbs
				items={[{ label: "Confiance en soi", href: "/confiance-en-soi" }]}
			/>
		</Suspense>
	);
}

const steps = [
	{
		num: "1",
		title: "On comprend ce qui s'est passé",
		text: "Ensemble, on met des mots sur ce schéma — cette croyance inconsciente que votre valeur dépend de ce que vous faites pour les autres. Comprendre, c'est déjà commencer à se libérer.",
	},
	{
		num: "2",
		title: "On libère ce qui vous retient",
		text: "Avec l'Hypnose, la PNL et l'EFT, on travaille en profondeur sur ces mécanismes inconscients. On relâche la pression, on dépose les croyances qui ne vous appartiennent pas.",
	},
	{
		num: "3",
		title: "On apprend l'égoïsme bienveillant",
		text: "Penser à soi n'est pas mal. S'écouter n'est pas égoïste. Dire non quand c'est non, ce n'est pas abandonner les autres — c'est se respecter. Et se respecter, c'est ce qui rend l'amour possible.",
	},
	{
		num: "4",
		title: "On ancre votre nouvelle place",
		text: "En moyenne 3 à 5 séances suffisent, espacées de 3 semaines. Le temps que chaque changement s'installe — pour de vrai, durablement.",
	},
];

const results = [
	"Vous osez dire non — et le monde ne s'effondre pas",
	"Vous cherchez moins l'approbation des autres",
	"Vous savez ce qui est ok pour vous, et ce qui ne l'est pas",
	"Vous prenez votre place, sans vous excuser d'exister",
	"Vous vous sentez plus forte, plus confiante",
	"Vous existez pour ce que vous êtes — pas pour ce qu'on attend de vous",
];

export default function ConfidenceEnSoiContent() {
	return (
		<>
			<BreadcrumbsWrapper />

			{/* ===== HERO ===== */}
			<section className="relative bg-gradient-to-br from-soft-pink/60 via-background to-blush/40 py-24 px-4 text-center overflow-hidden">
				<div className="absolute top-0 right-0 w-72 h-72 bg-blush/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
				<div className="absolute bottom-0 left-0 w-56 h-56 bg-soft-pink/40 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

				<div className="relative z-10 max-w-2xl mx-auto">
					<span className="inline-block font-body text-xs tracking-widest uppercase text-primary mb-6 px-4 py-1.5 rounded-full bg-primary/10">
						Confiance en soi · Estime de soi · Antibes · Sophia-Antipolis
					</span>

					<h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
						Vous vous êtes
						<span className="text-primary italic"> oubliée </span>
						en chemin ?
					</h1>

					<p className="font-body text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
						Vous avez tout donné — aux autres, à vos rôles, à vos obligations. Et au fond, vous ne savez plus vraiment qui vous êtes, ni ce que vous valez. Il est temps de retrouver votre place. La vraie.
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
							Vous avez toujours été là pour les autres. Toujours disponible, toujours serviable, toujours souriante. Comme si, en donnant suffisamment, en étant assez présente, assez gentille, assez aimante — alors on vous le rendrait. Alors vous compteriez vraiment.
						</p>
						<p className="font-body text-foreground leading-relaxed">
							Sauf que vous êtes épuisée. Et quelque part, vous vous sentez seule avec tout ça. Vous n'osez pas dire non. Vous ne parlez pas trop fort. Vous ne vous plaignez pas. Vous vous effacez — si souvent, si longtemps, que vous ne savez plus vraiment qui vous êtes.
						</p>
						<p className="font-body text-foreground leading-relaxed">
							Vous vous demandez ce que vous voulez, vous, vraiment. Et la réponse ne vient pas.
						</p>
					</div>

					<p className="font-body text-primary font-medium italic text-lg">
						Ce n'est pas une faiblesse. C'est un schéma — et il se dénoue.
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
						Prendre soin de soi n'est pas égoïste
					</h2>
					<div className="w-14 h-px bg-primary mb-8" />

					<div className="space-y-4 mb-8">
						<p className="font-body text-muted-foreground leading-relaxed">
							Il y a une croyance très profonde, souvent inconsciente, qui dit que votre valeur dépend de ce que vous faites pour les autres. Que si vous êtes là, disponible, aimante, serviable — alors vous serez aimée en retour. Alors vous compterez.
						</p>
						<p className="font-body text-muted-foreground leading-relaxed">
							Cette croyance ne vient pas de nulle part. Elle s'est construite, souvent très tôt, dans votre histoire. Et elle vous a rendu service — jusqu'à ce qu'elle vous épuise.
						</p>
					</div>

					<blockquote className="bg-background rounded-2xl px-8 py-7 shadow-sm border border-primary/10 mb-8">
						<p className="font-body text-muted-foreground leading-relaxed mb-4 italic">
							Dans un avion, quand les consignes de sécurité passent, on nous dit toujours de mettre le masque à oxygène sur soi avant de le mettre à son enfant. Pourquoi ?
						</p>
						<p className="font-script text-2xl text-primary text-center">
							"Comment prendre soin de l'autre si on ne commence pas par prendre soin de soi ?"
						</p>
					</blockquote>

					<p className="font-body text-muted-foreground leading-relaxed">
						Penser à vous n'est pas mal. S'écouter n'est pas égoïste. C'est ce que j'appelle <strong className="text-foreground">l'égoïsme bienveillant</strong> — et c'est ce qu'on va construire ensemble.
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
						L'hypnose est l'un des outils que nous utilisons pour ce travail —{" "}
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
						Vous méritez de prendre votre place.
					</h2>
					<p className="font-body text-primary-foreground/85 leading-relaxed mb-10 text-lg">
						La première séance dure 1h30. On prend le temps de se découvrir, de comprendre ce que vous traversez, et de poser les premières bases. Vous repartez avec déjà quelque chose : le sentiment que c'est possible.
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
						<span>Cabinet à Valbonne · 15 min d'Antibes et Sophia-Antipolis · Séance 70€</span>
					</div>
				</div>
			</section>

		</>
	);
}
