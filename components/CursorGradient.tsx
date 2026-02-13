'use client';

import { useEffect, useRef } from 'react';

interface CursorGradientProps {
  mousePosition: { x: number; y: number };
}

export default function CursorGradient({ mousePosition }: CursorGradientProps) {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gradientRef.current) {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const opacity = isDark ? 0.15 : 0.08;
      const opacity2 = isDark ? 0.1 : 0.05;
      
      gradientRef.current.style.background = `
        radial-gradient(
          600px circle at ${mousePosition.x}px ${mousePosition.y}px,
          rgba(0, 255, 255, ${opacity}),
          rgba(0, 100, 255, ${opacity2}),
          transparent 40%
        )
      `;
    }
  }, [mousePosition]);

  return (
    <div
      ref={gradientRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
      style={{
        background: 'radial-gradient(600px circle at 0px 0px, rgba(0, 255, 255, 0.15), rgba(0, 100, 255, 0.1), transparent 40%)',
      }}
    />
  );
}

