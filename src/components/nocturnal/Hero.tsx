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
            "radial-gradient(1100px 600px at 78% 50%, rgba(3,38,18,0.55) 0%, rgba(0,0,0,0) 60%), radial-gradient(700px 400px at 12% 110%, rgba(10,58,28,0.35) 0%, rgba(0,0,0,0) 70%)",
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
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-6 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pb-24 lg:pt-8">
        {/* LEFT */}
        <div className="relative">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#888888]">
            <span className="h-1 w-1 rounded-full bg-[#00ff66]" />
            A quiet intelligence
          </p>

          <h1 className="font-display text-[clamp(2.5rem,6.2vw,5.25rem)] font-light leading-[1.02] tracking-[-0.02em] text-white">
            Some questions deserve{" "}
            <span className="italic text-[#00ff66]">better</span>{" "}
            answers.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-[#888888] sm:text-lg">
            Built for late-night curiosity, quick answers and meaningful
            conversations.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#enter"
              className="cta-glow group relative inline-flex items-center gap-2 rounded-full bg-[#00ff66] px-6 py-3.5 text-sm font-medium text-[#001a08] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Try Nocturnal
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://wizzbot-offi.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/90 transition-colors hover:border-white/40 hover:bg-white/[0.03]"
            >
              Learn more about the creator
              <ArrowUpRight className="h-4 w-4 opacity-60 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="mt-14 flex items-center gap-6 text-[11px] uppercase tracking-[0.24em] text-[#666]">
            <span>No noise.</span>
            <span className="h-px w-10 bg-white/15" />
            <span>No clutter.</span>
            <span className="h-px w-10 bg-white/15" />
            <span>Just answers.</span>
          </div>
        </div>

        {/* RIGHT — 3D model (desktop only) */}
        <div className="relative h-[420px] w-full lg:h-[620px]">
          {!isMobile ? (
            <SplineHero />
          ) : (
            <div className="relative h-full w-full">
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(0,255,102,0.12) 0%, rgba(3,38,18,0.25) 40%, transparent 75%)",
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* scroll hint */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-[10px] uppercase tracking-[0.36em] text-[#555]">
        scroll
      </div>
    </section>
  );
}
