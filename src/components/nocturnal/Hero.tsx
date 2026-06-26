import { ArrowUpRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { SplineHero } from "./SplineHero";
import { AmbientDots } from "./AmbientDots";

export function Hero() {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* faint grid + radial ambience */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 700px at 80% 50%, rgba(3,38,18,0.6) 0%, rgba(0,0,0,0) 60%), radial-gradient(700px 400px at 12% 110%, rgba(10,58,28,0.35) 0%, rgba(0,0,0,0) 70%)",
        }}
      />
      {isMobile && <AmbientDots count={22} />}

      {/* Nav */}
      <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        <div className="flex items-center gap-2.5">
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ff66] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00ff66]" />
          </span>
          <span className="font-display text-lg tracking-tight text-white">
            Nocturnal
          </span>
        </div>
        <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.22em] text-[#888888] sm:flex">
          <span>v 0.1</span>
          <span className="text-white/80">awake · 2:14 am</span>
        </div>
      </header>

      {/* Main hero grid */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-10 sm:gap-10 sm:px-10 sm:pb-16 sm:pt-6 lg:grid-cols-[1fr_1.15fr] lg:gap-4 lg:pb-24 lg:pt-8">
        {/* LEFT */}
        <div className="relative">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[9px] uppercase tracking-[0.28em] text-[#888888] sm:mb-6 sm:text-[10px]">
            <span className="h-1 w-1 rounded-full bg-[#00ff66] noct-emerald-soft" />
            A quiet intelligence
          </p>

          <h1 className="font-display text-[clamp(2.6rem,6.2vw,5.25rem)] font-light leading-[1.04] tracking-[-0.02em] text-white sm:leading-[1.02]">
            Some questions deserve{" "}
            <span className="italic noct-emerald">better</span>{" "}
            answers.
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#888888] sm:mt-7 sm:text-lg">
            Built for late-night curiosity, quick answers and meaningful
            conversations.
          </p>

          <div className="mt-9 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <a
              href="https://wizzbot-offi.vercel.app/"
              className="cta-glow group relative inline-flex items-center justify-center gap-2 rounded-full bg-[#00ff66] px-6 py-4 text-sm font-medium text-[#001a08] hover:-translate-y-1 sm:py-3.5"
            >
              Try Nocturnal
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://wizzbot-offi.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-medium text-white/90 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.03] sm:py-3.5"
              style={{ transitionTimingFunction: "var(--ease-cinema)" }}
            >
              Learn more about the creator
              <ArrowUpRight className="h-4 w-4 opacity-60 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-[#666] sm:mt-14 sm:gap-6 sm:text-[11px]">
            <span>No noise.</span>
            <span className="h-px w-6 bg-white/15 sm:w-10" />
            <span>No clutter.</span>
            <span className="h-px w-6 bg-white/15 sm:w-10" />
            <span>Just answers.</span>
          </div>
        </div>

        {/* RIGHT — 3D model (desktop only) */}
        {!isMobile && (
          <div className="relative h-[480px] w-full lg:h-[760px] xl:h-[820px] lg:-mr-10 xl:-mr-16">
            <SplineHero />
          </div>
        )}
      </div>

      {/* scroll hint */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-[10px] uppercase tracking-[0.36em] text-[#555]">
        scroll
      </div>
    </section>
  );
}
