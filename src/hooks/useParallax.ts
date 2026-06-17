'use client';

import { useScrollPosition } from "./useScrollPosition";

export const useParallax = (speed = 0.3) => {
	const scrollY = useScrollPosition();

	return {
		transform: `translate3d(0, ${scrollY * speed}px, 0)`,
		willChange: "transform",
	};
};
