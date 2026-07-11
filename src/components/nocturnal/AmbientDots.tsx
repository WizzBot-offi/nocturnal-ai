// Lightweight CSS-only ambient dots for mobile / non-WebGL surfaces.
import { useMemo } from "react";

export function AmbientDots({ count = 28 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 6,
        scale: 0.5 + Math.random() * 1.4,
      })),
    [count],
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.id}
          className="noct-dot"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
            transform: `scale(${d.scale})`,
            opacity: 0.4,
          }}
        />
      ))}
    </div>
  );
}
