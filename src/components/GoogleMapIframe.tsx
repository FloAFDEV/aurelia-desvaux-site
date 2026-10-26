"use client";

/**
 * Carte Google Maps chargée à la demande :
 * aucune connexion à Google tant que le visiteur n'a pas cliqué sur « Afficher la carte ».
 */

import { useState } from 'react';
import { MapPin } from 'lucide-react';

interface GoogleMapIframeProps {
	src: string;
	title: string;
	className?: string;
}

export function GoogleMapIframe({ src, title, className = '' }: GoogleMapIframeProps) {
	const [shouldLoad, setShouldLoad] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<div className={`relative min-h-[300px] ${className}`}>
			{/* Placeholder : chargement de la carte uniquement sur action du visiteur */}
			{!isLoaded && (
				<div
					className={`absolute inset-0 bg-muted rounded-2xl flex items-center justify-center ${
						shouldLoad ? 'animate-pulse' : ''
					}`}
				>
					<div className="text-center px-6">
						<MapPin className="w-12 h-12 mx-auto text-muted-foreground/50 mb-2" />
						{shouldLoad ? (
							<p className="text-sm text-muted-foreground">Chargement de la carte...</p>
						) : (
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
					onLoad={() => setIsLoaded(true)}
					className={`rounded-2xl h-[300px] transition-opacity duration-500 ${
						isLoaded ? 'opacity-100' : 'opacity-0'
					}`}
				/>
			)}
		</div>
	);
}
