// src/app/error.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import treeLogo from "@/assets/tree-logo.webp";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error("Error:", error);
	}, [error]);

	return (
		<div className="min-h-screen bg-gradient-to-b from-soft-pink/30 to-background flex items-center justify-center px-4 md:px-6">
			<div className="text-center max-w-2xl w-full bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-xl">
				<div className="mx-auto w-24 h-24 mb-6 relative rounded-full shadow-soft">
					<Image
						src={treeLogo}
						alt="Aurélia Desvaux"
						fill
						sizes="96px"
						className="object-cover rounded-full"
					/>
				</div>

				<h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
					Une erreur est survenue
				</h2>
				<p className="font-body text-muted-foreground mb-6">
					Nous nous excusons pour ce désagrément. Veuillez réessayer
					ou retourner à l'accueil.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<button
						onClick={reset}
						className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
					>
						Réessayer
					</button>
					<Link
						href="/"
						className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-body rounded-full transition-all duration-300 hover:bg-primary/5"
					>
						Retour à l'accueil
					</Link>
				</div>

				{process.env.NODE_ENV === "development" && (
					<details className="mt-8 text-left">
						<summary className="cursor-pointer font-body text-sm text-muted-foreground hover:text-foreground">
							Détails de l'erreur (dev uniquement)
						</summary>
						<pre className="mt-4 p-4 bg-gray-100 rounded text-xs overflow-auto">
							{error.message}
							{error.digest && `\nDigest: ${error.digest}`}
						</pre>
					</details>
				)}
			</div>
		</div>
	);
}
