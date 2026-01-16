"use client";

import { useState, useEffect } from "react";
import { Star, ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

interface MedoucineBadgeProps {
	variant?: "default" | "compact" | "full";
	className?: string;
}

interface MedoucineData {
	rating: number;
	reviewCount: number;
	lastUpdated: string;
}

const FALLBACK_DATA: MedoucineData = {
	rating: 5,
	reviewCount: 85,
	lastUpdated: "16/01/2025",
};

export const MedoucineBadge = ({
	variant = "default",
	className = "",
}: MedoucineBadgeProps) => {
	const [data, setData] = useState<MedoucineData>(FALLBACK_DATA);
	const { ref, isInView } = useInView<HTMLAnchorElement>(0.1);
	const animatedCount = useCountUp(data.reviewCount, 2000, isInView);

	// Récupérer les données depuis l'API
	useEffect(() => {
		fetch("/api/sheet")
			.then((res) => res.json())
			.then((json) => {
				if (json.medoucine) {
					setData(json.medoucine);
				}
			})
			.catch((err) => {
				console.error("Erreur récupération données Médoucine:", err);
			});
	}, []);

	const formattedDate = new Date(
		data.lastUpdated.split("/").reverse().join("-")
	).toLocaleDateString("fr-FR", {
		month: "long",
		year: "numeric",
	});

	const profileUrl =
		"https://www.medoucine.com/consultation/valbonne/aurelia-desvaux/1951";

	const ariaLabel = `Voir le profil Médoucine d'Aurélia Desvaux (${data.rating.toFixed(
		1
	)} étoiles, ${animatedCount} avis)`;

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
					{data.rating} • {animatedCount} avis
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
						{animatedCount} avis vérifiés
					</span>
					<span className="font-body text-[10px] text-amber-600 dark:text-amber-400">
						Dernière mise à jour : {formattedDate}
					</span>
				</div>
				<div className="flex flex-col items-center">
					<span className="font-display text-2xl font-bold text-amber-900 dark:text-amber-100">
						{data.rating.toFixed(1)}
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
					{data.rating.toFixed(1)}
				</span>
				<span className="font-body text-xs text-amber-700 dark:text-amber-300">
					{animatedCount} avis
				</span>
				<span className="font-body text-xs text-amber-600 dark:text-amber-400">
					Dernière mise à jour : {formattedDate}
				</span>
			</div>
			<ExternalLink className="w-4 h-4 text-amber-600 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
		</a>
	);
};
