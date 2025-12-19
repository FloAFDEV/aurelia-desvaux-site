'use client';

import { useEffect, useState, useRef, useCallback } from "react";

export const useParallax = (speed = 0.3) => {
	const [offset, setOffset] = useState(0);
	const rafRef = useRef<number>();
	const lastScrollY = useRef(0);

	const updateParallax = useCallback(() => {
		const scrollY = window.scrollY;
		if (scrollY !== lastScrollY.current) {
			lastScrollY.current = scrollY;
			setOffset(scrollY);
		}
		rafRef.current = requestAnimationFrame(updateParallax);
	}, []);

	useEffect(() => {
		rafRef.current = requestAnimationFrame(updateParallax);
		return () => {
			if (rafRef.current) {
				cancelAnimationFrame(rafRef.current);
			}
		};
	}, [updateParallax]);

	return {
		transform: `translate3d(0, ${offset * speed}px, 0)`,
		willChange: "transform",
	};
};
