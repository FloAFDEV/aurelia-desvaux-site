"use client";

import { Star, ExternalLink } from "lucide-react";
import { medoucineConfig } from "@/config/medoucine";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

interface MedoucineBadgeProps {
	variant?: "default" | "compact" | "full";
	className?: string;
}

export const MedoucineBadge = ({
	variant = "default",
	className = "",
}: MedoucineBadgeProps) => {
	const { rating, reviewCount, profileUrl } = medoucineConfig;
	const { ref, isInView } = useInView<HTMLAnchorElement>(0.1);
	const animatedCount = useCountUp(reviewCount, 2000, isInView);

	const ariaLabel = `Voir le profil Médoucine d’Aurélia Desvaux (${rating.toFixed(
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
					{rating} • {animatedCount} avis
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
				</div>
				<div className="flex flex-col items-end">
					<span className="font-display text-2xl font-bold text-amber-900 dark:text-amber-100">
						{rating.toFixed(1)}
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
					{rating.toFixed(1)}
				</span>
				<span className="font-body text-xs text-amber-700 dark:text-amber-300">
					{animatedCount} avis
				</span>
			</div>
			<ExternalLink className="w-4 h-4 text-amber-600 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
		</a>
	);
};
