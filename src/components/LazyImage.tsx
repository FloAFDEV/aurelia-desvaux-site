"use client";

import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface LazyImageProps {
	src: string | StaticImageData;
	alt: string;
	className?: string;
	wrapperClassName?: string;
	aspectRatio?: string;
	priority?: boolean;
	sizes?: string;
	quality?: number;
}

export const LazyImage = ({
	src,
	alt,
	className = "",
	wrapperClassName = "",
	aspectRatio = "4/3",
	priority = false,
	sizes = "100vw",
	quality = 85,
}: LazyImageProps) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isInView, setIsInView] = useState(priority); // Si priority, pas besoin d'observer
	const imgRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Skip l'observer si priority est true
		if (priority || !imgRef.current) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true);
					observer.disconnect();
				}
			},
			{
				threshold: 0.01,
				rootMargin: "200px", // Augmenté à 200px pour charger avant l'entrée
			}
		);

		observer.observe(imgRef.current);

		return () => observer.disconnect();
	}, [priority]);

	return (
		<div
			ref={imgRef}
			className={`relative overflow-hidden ${wrapperClassName}`}
			style={{ aspectRatio }}
		>
			{/* Blur placeholder - Plus doux visuellement */}
			<div
				className={`absolute inset-0 bg-gradient-to-br from-soft-pink/20 to-blush/20 transition-opacity duration-500 ${
					isLoaded ? "opacity-0" : "opacity-100"
				}`}
				aria-hidden="true"
			/>

			{/* Skeleton loader pour améliorer la perception de chargement */}
			{!isLoaded && (
				<div 
					className="absolute inset-0 bg-gradient-to-r from-transparent via-background/30 to-transparent animate-pulse-soft"
					aria-hidden="true"
				/>
			)}

			{(isInView || priority) && (
				<Image
					src={src}
					alt={alt}
					fill
					sizes={sizes}
					quality={quality}
					className={`transition-all duration-700 motion-safe:transition-transform motion-safe:duration-700 ${className} ${
						isLoaded
							? "opacity-100 scale-100"
							: "opacity-0 scale-105"
					}`}
					onLoad={() => setIsLoaded(true)}
					loading={priority ? "eager" : "lazy"}
					decoding="async"
					style={{ objectFit: "cover" }}
				/>
			)}
		</div>
	);
};
