"use client";

/**
 * Carte Google Maps chargée à la demande :
 * aucune connexion à Google tant que le visiteur n'a pas cliqué sur « Afficher la carte ».
 */

import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

interface GoogleMapIframeProps {
	src: string;
	title: string;
	className?: string;
}

const LOAD_TIMEOUT_MS = 10_000;
const MAPS_FALLBACK_URL =
	'https://www.google.com/maps/place/1+Pl.+Joseph+Bermond,+06560+Valbonne';

export function GoogleMapIframe({ src, title, className = '' }: GoogleMapIframeProps) {
	const [shouldLoad, setShouldLoad] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const [hasTimedOut, setHasTimedOut] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		if (!shouldLoad || isLoaded) return;
		timerRef.current = setTimeout(() => {
			setHasTimedOut(true);
		}, LOAD_TIMEOUT_MS);
		return () => {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
				timerRef.current = null;
			}
		};
	}, [shouldLoad, isLoaded]);

	const handleIframeLoad = () => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
			timerRef.current = null;
		}
		// onLoad tardif : on affiche la carte même si le délai a expiré.
		setHasTimedOut(false);
		setIsLoaded(true);
	};

	return (
		<div className={`relative min-h-[300px] ${className}`}>
			{/* Placeholder : chargement de la carte uniquement sur action du visiteur */}
			{!isLoaded && (
				<div
					className={`absolute inset-0 bg-muted rounded-2xl flex items-center justify-center ${
						shouldLoad && !hasTimedOut ? 'animate-pulse' : ''
					}`}
					role="status"
					aria-live="polite"
				>
					<div className="text-center px-6">
						<MapPin className="w-12 h-12 mx-auto text-muted-foreground/50 mb-2" />
						{!shouldLoad && (
							<>
								<button
									type="button"
									onClick={() => setShouldLoad(true)}
									className="px-5 py-2.5 bg-primary text-primary-foreground font-body text-sm rounded-full transition-all duration-300 hover:shadow-soft hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
								>
									Afficher la carte
								</button>
								<p className="text-xs text-muted-foreground mt-2">
									La carte est fournie par Google Maps.
								</p>
							</>
						)}
						{shouldLoad && !hasTimedOut && (
							<p className="text-sm text-muted-foreground">Chargement de la carte...</p>
						)}
						{shouldLoad && hasTimedOut && (
							<>
								<p className="text-sm text-muted-foreground mb-3">
									La carte met trop de temps à se charger.
								</p>
								<a
									href={MAPS_FALLBACK_URL}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-body text-sm rounded-full transition-all duration-300 hover:shadow-soft hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
								>
									<MapPin className="w-4 h-4" />
									Ouvrir dans Google Maps
								</a>
							</>
						)}
					</div>
				</div>
			)}

			{/* Google Maps iframe
			    h-[300px] est nécessaire : la règle globale `iframe { height: auto }`
			    de globals.css écrase l'attribut height="300", ce qui réduisait la carte
			    et créait un décalage avec les 300px réservés par le fallback. */}
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
					onLoad={handleIframeLoad}
					className={`rounded-2xl h-[300px] transition-opacity duration-500 ${
						isLoaded ? 'opacity-100' : 'opacity-0'
					}`}
				/>
			)}

			{/* Lien discret disponible même lorsque la carte est chargée. */}
			{isLoaded && (
				<p className="mt-2 text-xs text-muted-foreground text-center">
					<a
						href={MAPS_FALLBACK_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="underline underline-offset-2 hover:text-foreground transition-colors"
					>
						Ouvrir dans Google Maps
					</a>
				</p>
			)}
		</div>
	);
}
