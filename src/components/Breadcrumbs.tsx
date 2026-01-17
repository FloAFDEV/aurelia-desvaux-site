// /components/Breadcrumbs.tsx
"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
	label: string;
	href: string;
}

interface BreadcrumbsProps {
	items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
	const allItems = [
		{ label: "Accueil", href: "/" },
		...items,
	];

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: allItems.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.label,
			item: `https://aurelia-desvaux.fr${item.href}`,
		})),
	};

	return (
		<nav
			aria-label="Breadcrumb"
			className="pt-24 pb-4 bg-background/80 backdrop-blur-sm border-b border-border"
		>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredData),
				}}
			/>

			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<ol className="flex items-center gap-2 text-sm flex-wrap">
					{allItems.map((item, index) => {
						const isLast = index === allItems.length - 1;
						const isFirst = index === 0;

						return (
							<li
								key={item.href}
								className="flex items-center gap-2"
							>
								{index > 0 && (
									<ChevronRight
										className="w-4 h-4 text-muted-foreground"
										aria-hidden="true"
									/>
								)}
								{isLast ? (
									<span className="font-body text-foreground font-medium flex items-center gap-1.5">
										{isFirst && (
											<Home
												className="w-4 h-4"
												aria-hidden="true"
											/>
										)}
										{item.label}
									</span>
								) : (
									<Link
										href={item.href as any}
										className="font-body text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
									>
										{isFirst && (
											<Home
												className="w-4 h-4"
												aria-hidden="true"
											/>
										)}
										{item.label}
									</Link>
								)}
							</li>
						);
					})}
				</ol>
			</div>
		</nav>
	);
};
