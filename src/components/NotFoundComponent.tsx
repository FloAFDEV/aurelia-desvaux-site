"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import treeLogo from "@/assets/tree-logo.webp";

export default function NotFound() {
	const { ref: heroRef, isInView: heroInView } = useInView();

	useEffect(() => {
		console.warn("404 Warning: attempted route not found");
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-b from-soft-pink/30 to-background flex flex-col">
			<main className="flex-1 flex items-center justify-center px-4 md:px-6">
				<section
					ref={heroRef}
					className="relative text-center max-w-3xl w-full py-32 md:py-40"
				>
					{/* Blobs décoratifs */}
					<div className="absolute top-10 left-10 w-32 h-32 bg-blush/30 rounded-full blur-3xl animate-blob-slow motion-reduce:animate-none" />
					<div className="absolute bottom-10 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-blob-slow-reverse motion-reduce:animate-none" />

					{/* Card */}
					<div
						className={`relative z-10 bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-xl transition-all duration-700 ${
							heroInView
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-6"
						}`}
					>
						<div
							className={`mx-auto w-24 h-24 mb-6 relative rounded-full shadow-soft transition-all duration-500 ${
								heroInView
									? "opacity-100 scale-100"
									: "opacity-0 scale-90"
							}`}
						>
							<Image
								src={treeLogo}
								alt="Aurélia Desvaux"
								fill
								sizes="96px"
								className="object-cover rounded-full"
							/>
						</div>

						<h1
							className={`font-display text-6xl md:text-8xl text-primary mb-4 transition-all duration-500 ${
								heroInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
						>
							404
						</h1>
						<p
							className={`font-body text-xl text-muted-foreground mb-2 transition-all duration-500 delay-75 ${
								heroInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
						>
							Oups ! Cette page n'existe pas
						</p>
						<p
							className={`font-body text-muted-foreground mb-8 transition-all duration-500 delay-150 ${
								heroInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
						>
							La page que vous recherchez semble introuvable.
						</p>

						<div
							className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-500 delay-200 ${
								heroInView
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
						>
							<Link
								href="/"
								className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary-foreground"
							>
								Retour à l'accueil
							</Link>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
