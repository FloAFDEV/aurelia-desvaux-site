"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ExternalLink } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { FALLBACK_MEDOUCINE } from "@/lib/sheetData";

interface MedoucineBadgeProps {
	variant?: "default" | "compact" | "full";
	className?: string;
	/**
	 * Note et volume d'avis résolus côté serveur depuis le Google Sheet.
	 *
	 * Fournis, ils sont rendus dans le HTML initial : les robots et les
	 * visiteurs sans JavaScript lisent la vraie valeur, et il n'y a plus de
	 * bascule entre un repli et la donnée du Sheet. Omis, le composant
	 * retombe sur son ancien comportement (récupération après montage).
	 */
	initial?: MedoucineData;
}

interface MedoucineData {
	rating: number;
	reviewCount: number;
	lastUpdated: string;
}

// Filet de sécurité si la requête vers /api/sheet échoue au niveau réseau.
// Valeur unique du projet pour cette donnée, définie dans src/lib/sheetData.ts.
const FALLBACK_DATA: MedoucineData = FALLBACK_MEDOUCINE;

export const MedoucineBadge = ({
	variant = "default",
	className = "",
	initial,
}: MedoucineBadgeProps) => {
	const [data, setData] = useState<MedoucineData | null>(initial ?? null);
	const [isLoading, setIsLoading] = useState(!initial);
	const ref = useRef<HTMLAnchorElement>(null);

	// Utiliser data ou fallback selon la réussite du fetch
	const displayData = data || FALLBACK_DATA;

	// Le décompte part de zéro. Rendu tel quel, c'est ce zéro qui se retrouvait
	// dans le HTML servi aux robots et aux visiteurs sans JavaScript — d'où la
	// vraie valeur tant que l'animation n'a pas démarré. Serveur et première
	// hydratation affichent donc la même chose : aucun écart d'hydratation.
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		// Badge déjà à l'écran au chargement : son nombre a été lu, le remettre
		// à zéro serait un ressaut. On le laisse tel quel.
		const box = el.getBoundingClientRect();
		if (box.top < window.innerHeight && box.bottom > 0) return;

		// Sinon on arme le décompte AVANT l'entrée dans le champ de vision : la
		// marge fait démarrer l'animation pendant que le badge est encore sous
		// la ligne de flottaison. Le visiteur ne voit donc jamais la valeur
		// finale retomber à zéro — il arrive sur un décompte déjà en cours.
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				setAnimate(true);
				observer.disconnect(); // une seule fois, définitivement
			},
			{ rootMargin: "0px 0px 240px 0px" },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	const animatedCount = useCountUp(displayData.reviewCount, 2000, animate);
	const reviewCount = animate ? animatedCount : displayData.reviewCount;

	// Récupération après montage — uniquement si le serveur n'a rien fourni.
	useEffect(() => {
		if (initial) return;

		// Utiliser setTimeout pour différer le fetch après le montage
		const timer = setTimeout(() => {
			fetch("/api/sheet")
				.then((res) => {
					if (!res.ok) {
						throw new Error(`HTTP ${res.status}`);
					}
					return res.json();
				})
				.then((json) => {
					if (json.medoucine) {
						setData(json.medoucine);
						setIsLoading(false);
					}
				})
				.catch((err) => {
					console.warn("⚠️ Médoucine Badge : utilisation des données par défaut", err.message);
					// En cas d'erreur, garder data = null pour utiliser FALLBACK_DATA
					setIsLoading(false);
				});
		}, 100); // 100ms après le montage pour ne pas bloquer le rendu initial

		return () => clearTimeout(timer);
	}, [initial]);

	const formattedDate = new Date(
		displayData.lastUpdated.split("/").reverse().join("-")
	).toLocaleDateString("fr-FR", {
		month: "long",
		year: "numeric",
	});

	const profileUrl =
		"https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951";

	// Afficher le rating tel quel depuis Google Sheets (aucun formatage)
	const formattedRating = String(displayData.rating);

	const ariaLabel = `Voir le profil Médoucine d'Aurélia Desvaux (${formattedRating} étoiles, ${reviewCount} avis)`;

	if (variant === "compact") {
		return (
			<a
				ref={ref}
				href={profileUrl}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={ariaLabel}
				className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 transition-all motion-safe:transition-all duration-300 hover:bg-amber-100 dark:hover:bg-amber-950/50 motion-safe:hover:scale-105 motion-safe:hover:shadow-md group ${className}`}
			>
				<div className="flex items-center gap-1">
					{[...Array(5)].map((_, i) => (
						<Star
							key={i}
							className="w-3 h-3 fill-amber-500 text-amber-500"
						/>
					))}
				</div>
				<span className="font-body text-xs font-medium text-amber-900 dark:text-amber-200">
					{formattedRating} • {reviewCount} avis
				</span>
				<ExternalLink className="w-3 h-3 text-amber-600 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
			</a>
		);
	}

	if (variant === "full") {
		return (
			<a
				ref={ref}
				href={profileUrl}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={ariaLabel}
				className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-lg bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/30 border border-amber-200 dark:border-amber-800 transition-all motion-safe:transition-all duration-300 motion-safe:hover:scale-105 motion-safe:hover:shadow-lg group ${className}`}
			>
				<div className="flex flex-col gap-1">
					<div className="flex items-center gap-1.5">
						{[...Array(5)].map((_, i) => (
							<Star
								key={i}
								className="w-4 h-4 fill-amber-500 text-amber-500"
							/>
						))}
					</div>
					<span className="font-body text-xs text-amber-700 dark:text-amber-300">
						{reviewCount} avis vérifiés
					</span>
					<span className="font-body text-[10px] text-amber-600 dark:text-amber-400">
						Dernière mise à jour : {formattedDate}
					</span>
				</div>
				<div className="flex flex-col items-center">
					<span className="font-display text-2xl font-bold text-amber-900 dark:text-amber-100">
						{formattedRating}
					</span>
					<span className="font-body text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1">
						Médoucine
						<ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
					</span>
				</div>
			</a>
		);
	}

	// variant === "default"
	return (
		<a
			ref={ref}
			href={profileUrl}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={ariaLabel}
			className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 transition-all motion-safe:transition-all duration-300 motion-safe:hover:scale-105 motion-safe:hover:shadow-md group ${className}`}
		>
			<div className="flex items-center gap-1">
				{[...Array(5)].map((_, i) => (
					<Star
						key={i}
						className="w-4 h-4 fill-amber-500 text-amber-500"
					/>
				))}
			</div>
			<div className="flex flex-col">
				<span className="font-display text-sm font-bold text-amber-900 dark:text-amber-100">
					{formattedRating}
				</span>
				<span className="font-body text-xs text-amber-700 dark:text-amber-300">
					{reviewCount} avis
				</span>
				<span className="font-body text-xs text-amber-600 dark:text-amber-400">
					Dernière mise à jour : {formattedDate}
				</span>
			</div>
			<ExternalLink className="w-4 h-4 text-amber-600 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
		</a>
	);
};
