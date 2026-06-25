// Continuous fixed atmospheric layer that spans the entire page.
// Sits behind every section to visually connect the journey.
import { useMemo } from "react";

export function Atmosphere() {
  // Slow drifting dust particles distributed across viewport
  const dust = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 14,
        duration: 12 + Math.random() * 10,
        scale: 0.5 + Math.random() * 1.6,
      })),
    []
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* base vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(3,38,18,0.35) 0%, transparent 55%)",
        }}
      />
      {/* drifting emerald aurora — top-left */}
      <div
        className="noct-aurora absolute -left-[20%] -top-[20%] h-[80vh] w-[80vh] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,102,0.10) 0%, rgba(3,38,18,0.18) 35%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      {/* drifting emerald aurora — bottom-right */}
      <div
        className="noct-aurora-alt absolute -bottom-[25%] -right-[15%] h-[90vh] w-[90vh] rounded-full opacity-55"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,102,0.08) 0%, rgba(3,38,18,0.18) 40%, transparent 72%)",
          filter: "blur(70px)",
        }}
      />
      {/* subtle grid */}
      <div className="noct-grid absolute inset-0 opacity-[0.35]" />

      {/* drifting dust */}
      <div className="absolute inset-0">
        {dust.map((d) => (
          <span
            key={d.id}
            className="noct-dust"
            style={{
              left: `${d.left}%`,
              top: `${d.top}%`,
              animationDelay: `${d.delay}s`,
              animationDuration: `${d.duration}s`,
              transform: `scale(${d.scale})`,
            }}
          />
        ))}
      </div>

      {/* deep top fade so hero copy stays clean */}
      <div
        className="absolute inset-x-0 top-0 h-[40vh]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.85) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
