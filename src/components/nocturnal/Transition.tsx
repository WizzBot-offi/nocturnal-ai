import { useMemo } from "react";
import { useReveal } from "./useReveal";

function Line({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useReveal<HTMLDivElement>({ threshold: 0.4 });
  return (
    <div
      ref={ref}
      className="reveal font-display text-[clamp(1.85rem,5.5vw,4.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-white"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Dust({ count = 60 }: { count?: number }) {
  const dust = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 14,
        duration: 10 + Math.random() * 12,
        scale: 0.4 + Math.random() * 1.6,
      })),
    [count]
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
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
  );
}

export function Transition() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Volumetric soft gradient — top (no ring, smooth fall-off) */}
      <div
        aria-hidden
        className="noct-aurora pointer-events-none absolute left-1/2 top-[15%] h-[90vh] w-[90vh] -translate-x-1/2 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,102,0.06) 0%, rgba(0,255,102,0.025) 35%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      {/* Volumetric soft gradient — bottom-right */}
      <div
        aria-hidden
        className="noct-aurora-alt pointer-events-none absolute right-[5%] bottom-[10%] h-[70vh] w-[70vh] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,102,0.05) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Floating glowing dust */}
      <Dust count={70} />

      {/* slow emerald vertical line */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-full w-px origin-top -translate-x-1/2"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,255,102,0.22) 50%, transparent 100%)",
          animation: "noct-line 2.8s ease-out forwards",
        }}
      />

      {/* horizon fades for continuity */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto flex max-w-4xl flex-col gap-[26vh] px-6 py-[20vh] sm:gap-[40vh] sm:px-10 sm:py-[30vh]">
        <Line>Some questions disappear.</Line>

        <Line delay={80}>
          <span className="text-[#888888]">Some</span> stay with you.
        </Line>

        <Line delay={120}>
          The ones that stay
          <br />
          <span className="italic text-[#00ff66]">are usually worth asking.</span>
        </Line>
      </div>
    </section>
  );
}
