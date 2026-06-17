import { cn } from "@/lib/utils";

interface DecorativeBlobProps {
	className?: string;
	style?: React.CSSProperties;
}

export function DecorativeBlob({ className, style }: DecorativeBlobProps) {
	return (
		<div
			aria-hidden="true"
			className={cn(
				"absolute rounded-full blur-3xl pointer-events-none",
				className
			)}
			style={style}
		/>
	);
}
