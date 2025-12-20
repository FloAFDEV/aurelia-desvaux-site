"use client";

/**
 * Composant Google Maps avec lazy loading optimisé
 * - Chargement différé après interaction ou timeout
 * - Skeleton loader pendant le chargement
 * - Réduit le Total Blocking Time (TBT)
 */

import { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

interface GoogleMapIframeProps {
	src: string;
	title: string;
	className?: string;
}

export function GoogleMapIframe({ src, title, className = '' }: GoogleMapIframeProps) {
	const [shouldLoad, setShouldLoad] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const mapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// ✅ Charger la carte après interaction utilisateur OU après 3s
		const timer = setTimeout(() => setShouldLoad(true), 3000);

		const handleInteraction = () => {
			setShouldLoad(true);
			clearTimeout(timer);
		};

		// Écouter le scroll (une seule fois)
		const handleScroll = () => {
			if (mapRef.current) {
				const rect = mapRef.current.getBoundingClientRect();
				const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
				if (isVisible) {
					setShouldLoad(true);
					window.removeEventListener('scroll', handleScroll);
				}
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('click', handleInteraction, { once: true });

		// Vérifier immédiatement si visible
		handleScroll();

		return () => {
			clearTimeout(timer);
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('click', handleInteraction);
		};
	}, []);

	return (
		<div ref={mapRef} className={`relative ${className}`}>
			{/* Skeleton loader */}
			{!isLoaded && (
				<div className="absolute inset-0 bg-muted animate-pulse rounded-2xl flex items-center justify-center">
					<div className="text-center">
						<MapPin className="w-12 h-12 mx-auto text-muted-foreground/50 mb-2" />
						<p className="text-sm text-muted-foreground">Chargement de la carte...</p>
					</div>
				</div>
			)}

			{/* Google Maps iframe */}
			{shouldLoad && (
				<iframe
					src={src}
					width="100%"
					height="300"
					style={{ border: 0 }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title={title}
					onLoad={() => setIsLoaded(true)}
					className={`rounded-2xl transition-opacity duration-500 ${
						isLoaded ? 'opacity-100' : 'opacity-0'
					}`}
				/>
			)}
		</div>
	);
}
