'use client';

import { useEffect, useState } from "react";

export const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      // S'assurer d'atteindre exactement la valeur finale
      setCount(percentage === 1 ? end : currentCount);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, start]);

  return count;
};
