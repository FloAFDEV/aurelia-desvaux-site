import { Suspense } from "react";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

function BreadcrumbsWrapper() {
	return (
		<Suspense fallback={<div className="h-12" />}>
			<Breadcrumbs
				items={[{ label: "Arrêt du tabac", href: "/arret-tabac" }]}
			/>
		</Suspense>
	);
}

const steps = [
	{
		num: "1",
		title: "On explore votre histoire avec le tabac",
		text: "Comment ça a commencé, comment ça a évolué, les rituels, les moments, les sensations. On identifie aussi les croyances qui y sont liées — ce que la cigarette représente vraiment pour vous.",
	},
	{
		num: "2",
		title: "On se connecte à votre objectif",
		text: "Comment c'est quand vous ne fumez plus ? Qu'est-ce que vous faites différemment ? Qui êtes-vous sans la cigarette ? C'est un exercice puissant de connexion à des ressources insoupçonnées.",
	},
	{
		num: "3",
		title: "On se libère du tabac",
		text: "Quand la motivation est à son maximum, on passe aux choses sérieuses. J'adapte les techniques à ce qui ressort de votre parcours — hypnose, PNL, EFT — pour que ça colle à qui vous êtes.",
	},
	{
		num: "4",
		title: "Vous expérimentez par vous-même",
		text: "Vous repartez reboostée. Je ne fais pas de promesses miracles — je vous laisse vivre l'expérience. Le travail commence en séance, et ensuite, c'est à vous de faire votre part.",
	},
];

const results = [
	"Vous n'avez plus envie de fumer — sans vous battre",
	"Vous êtes libre de toute dépendance",
	"Vous trouvez d'autres rituels, d'autres pauses",
	"Vous découvrez qui vous êtes sans la cigarette",
	"Vous respirez mieux, vous dormez mieux",
	"Vous êtes fière de vous — vraiment",
];

export default function ArretTabacContent() {
	return (
		<>
			<BreadcrumbsWrapper />

			{/* ===== HERO ===== */}
			<section className="relative bg-gradient-to-br from-soft-pink/60 via-background to-blush/40 py-24 px-4 text-center overflow-hidden">
				<div className="absolute top-0 right-0 w-72 h-72 bg-blush/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
				<div className="absolute bottom-0 left-0 w-56 h-56 bg-soft-pink/40 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

				<div className="relative z-10 max-w-2xl mx-auto">
					<span className="inline-block font-body text-xs tracking-widest uppercase text-primary mb-6 px-4 py-1.5 rounded-full bg-primary/10">
						Arrêt du tabac · Hypnose · Antibes · Sophia-Antipolis
					</span>

					<h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
						Et si vous étiez enfin
						<span className="text-primary italic"> vraiment libre </span>?
					</h1>

					<p className="font-body text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
						Vous avez déjà essayé d'arrêter. Vous savez que vous voulez arrêter. Mais une partie de vous résiste encore. En 1 à 2 séances, on s'occupe de cette partie-là — et on vous libère du tabac pour de bon.
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
						Ce que vous vivez avec la cigarette
					</h2>
					<div className="w-14 h-px bg-primary mb-8" />

					<div className="bg-soft-pink/50 border-l-4 border-primary rounded-r-2xl px-8 py-7 mb-8 space-y-4">
						<p className="font-body text-foreground leading-relaxed">
							Une partie de vous en a vraiment marre. Marre de cette dépendance, de cette odeur, de cette sensation d'être esclave d'un paquet. Vous voulez vous libérer — vous le savez.
						</p>
						<p className="font-body text-foreground leading-relaxed">
							Mais il y a cette autre partie qui résiste. Qui aime encore ça, ces moments de pause, ce rituel. Et puis cette question qui revient : je suis qui, moi, si je ne fume plus ? Est-ce que je vais devenir fade, irritable, différente ?
						</p>
						<p className="font-body text-foreground leading-relaxed">
							Vous avez peut-être déjà essayé d'arrêter. Seule, avec des substituts, avec de la volonté. Et puis vous avez rechuté — et vous vous êtes dit que vous n'étiez pas assez forte.
						</p>
					</div>

					<p className="font-body text-primary font-medium italic text-lg">
						Ce n'est pas une question de volonté. C'est une question de mécanismes inconscients — et ça, on sait faire.
					</p>
				</div>
			</section>

			{/* ===== EXPLICATION ===== */}
			<section className="py-20 px-4 bg-soft-pink/30">
				<div className="max-w-2xl mx-auto">
					<span className="inline-block font-body text-xs tracking-widest uppercase text-primary mb-4 px-4 py-1.5 rounded-full bg-primary/10">
						Changer de regard
					</span>
					<h2 className="font-script text-3xl md:text-4xl text-foreground mb-4">
						Libre — vraiment libre
					</h2>
					<div className="w-14 h-px bg-primary mb-8" />

					<div className="space-y-4 mb-8">
						<p className="font-body text-muted-foreground leading-relaxed">
							Beaucoup de fumeurs ont l'impression que la cigarette les rend libres. Indépendants. Un peu rebelles, peut-être. C'est une des croyances les plus tenaces qui entoure cette addiction.
						</p>
					</div>

					<blockquote className="bg-background rounded-2xl px-8 py-7 shadow-sm border border-primary/10 mb-8">
						<p className="font-body text-muted-foreground leading-relaxed mb-4 italic text-center">
							Vous pensez que la cigarette vous rend libre... alors que vous êtes complètement prisonnière de son emprise.
						</p>
						<p className="font-script text-2xl text-primary text-center leading-relaxed">
							"Et si vous deveniez vraiment libre ?<br />Libre de toute dépendance ?"
						</p>
					</blockquote>

					<p className="font-body text-muted-foreground leading-relaxed">
						C'est ce changement de regard qui ouvre tout. Arrêter de fumer ne signifie pas se priver de quelque chose. Ça signifie récupérer quelque chose — sa liberté, son souffle, sa puissance.
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

					<div className="flex flex-col gap-4 mb-8">
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

					{/* Tarifs */}
					<div className="bg-soft-pink/40 rounded-2xl px-8 py-6 border border-primary/10">
						<h3 className="font-display text-lg text-foreground mb-3">Tarifs</h3>
						<div className="space-y-2">
							<div className="flex justify-between items-center font-body text-sm">
								<span className="text-foreground">1ère séance arrêt du tabac (1h30)</span>
								<span className="font-semibold text-primary">120€</span>
							</div>
							<div className="flex justify-between items-center font-body text-sm">
								<span className="text-muted-foreground">Séance de renforcement si besoin (1h)</span>
								<span className="text-muted-foreground">70€</span>
							</div>
						</div>
						<p className="font-body text-xs text-muted-foreground mt-4">
							En moyenne, 1 à 2 séances suffisent. De nombreuses mutuelles remboursent partiellement — une facture détaillée vous est fournie.
						</p>
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
						Vous voulez connaître le déroulé complet du programme, les questions fréquentes et le détail des tarifs ? Retrouvez toutes les informations sur la page{" "}
						<Link href="/hypnose-arret-tabac" className="text-primary underline underline-offset-2 hover:text-foreground transition-colors">
							Hypnose et arrêt du tabac
						</Link>
						. Vous pouvez aussi{" "}
						<Link href="/a-propos" className="text-primary underline underline-offset-2 hover:text-foreground transition-colors">
							découvrir mon parcours
						</Link>{" "}
						ou consulter{" "}
						<Link href="/tarifs" className="text-primary underline underline-offset-2 hover:text-foreground transition-colors">
							l'ensemble de mes tarifs
						</Link>{" "}
						avant de prendre rendez-vous.
					</p>
				</div>
			</section>

			{/* ===== CTA FINAL ===== */}
			<section className="py-24 px-4 bg-primary text-center">
				<div className="max-w-xl mx-auto">
					<h2 className="font-script text-3xl md:text-4xl text-primary-foreground mb-5">
						Prête à récupérer votre liberté ?
					</h2>
					<p className="font-body text-primary-foreground/85 leading-relaxed mb-10 text-lg">
						La première séance dure 1h30. On explore votre histoire avec le tabac, on se connecte à qui vous êtes sans lui — et on vous libère. Vous repartez avec déjà quelque chose de différent en vous.
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
						<span>Cabinet à Valbonne · 15 min d'Antibes et Sophia-Antipolis · 1ère séance 120€</span>
					</div>
				</div>
			</section>

		</>
	);
}
