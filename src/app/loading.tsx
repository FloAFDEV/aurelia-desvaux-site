export default function Loading() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-background">
			<div className="relative w-24 h-24">
				{/* Cercle principal avec bordure douce */}
				<div className="absolute inset-0 border-4 border-soft-pink border-t-primary rounded-full animate-spin-slow"></div>
				{/* Cercle intérieur pour effet de profondeur */}
				<div className="absolute inset-4 bg-background rounded-full flex items-center justify-center">
					<span className="text-primary font-display text-xl animate-pulse">
						✨
					</span>
				</div>
			</div>
		</div>
	);
}
