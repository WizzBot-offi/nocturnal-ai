import { useReveal } from "./useReveal";
import { AmbientDots } from "./AmbientDots";

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

export function Transition() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Eclipse — soft emerald corona */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,102,0.10) 0%, rgba(3,38,18,0.18) 28%, transparent 62%)",
          filter: "blur(20px)",
        }}
      />
      {/* Inner dark eclipse disc */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 55%, transparent 75%)",
          boxShadow:
            "0 0 120px 20px rgba(0,255,102,0.18), inset 0 0 80px rgba(0,255,102,0.06)",
        }}
      />

      {/* Drifting ambient particles */}
      <AmbientDots count={40} />

      {/* slow emerald vertical line */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-full w-px origin-top -translate-x-1/2"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,255,102,0.28) 50%, transparent 100%)",
          animation: "noct-line 2.8s ease-out forwards",
        }}
      />

      {/* horizon glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,255,102,0.04) 0%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,255,102,0.04) 0%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto flex max-w-4xl flex-col gap-[30vh] px-6 py-[22vh] sm:gap-[40vh] sm:px-10 sm:py-[30vh]">
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
