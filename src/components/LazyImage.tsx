"use client";

import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface LazyImageProps {
	src: string | StaticImageData;
	alt: string;
	className?: string;
	wrapperClassName?: string;
	aspectRatio?: string; // exemple "4/3" ou "16/9"
}

export const LazyImage = ({
	src,
	alt,
	className = "",
	wrapperClassName = "",
	aspectRatio = "4/3",
}: LazyImageProps) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isInView, setIsInView] = useState(false);
	const imgRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!imgRef.current) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.01, rootMargin: "100px" }
		);

		observer.observe(imgRef.current);

		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={imgRef}
			className={`relative overflow-hidden ${wrapperClassName}`}
			style={{ aspectRatio }}
		>
			{/* Blur placeholder */}
			<div
				className={`absolute inset-0 bg-soft-pink/30 transition-opacity duration-300 ${
					isLoaded ? "opacity-0" : "opacity-100"
				}`}
			/>

			{isInView && (
				<Image
					src={src}
					alt={alt}
					fill
					className={`transition-all duration-500 motion-safe:transition-transform motion-safe:duration-500 ${className} ${
						isLoaded
							? "opacity-100 scale-100"
							: "opacity-0 scale-105"
					}`}
					onLoad={() => setIsLoaded(true)}
					loading="lazy"
					decoding="async"
					style={{ objectFit: "cover" }}
				/>
			)}
		</div>
	);
};
