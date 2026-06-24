import { useReveal } from "./useReveal";

function Line({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useReveal<HTMLDivElement>({ threshold: 0.4 });
  return (
    <div
      ref={ref}
      className="reveal font-display text-[clamp(2rem,5.5vw,4.5rem)] font-light leading-[1.08] tracking-[-0.02em] text-white"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Transition() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* slow emerald vertical line */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-full w-px origin-top -translate-x-1/2"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,255,102,0.35) 50%, transparent 100%)",
          animation: "noct-line 2.8s ease-out forwards",
        }}
      />

      <div className="mx-auto flex max-w-4xl flex-col gap-[40vh] px-6 py-[30vh] sm:px-10">
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
