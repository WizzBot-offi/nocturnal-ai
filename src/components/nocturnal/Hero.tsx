import { useState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { SplineHero } from "./SplineHero";
import { AmbientDots } from "./AmbientDots";

function TryButton() {
  const [loading, setLoading] = useState(false);
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (loading) return;
    e.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      window.location.href = "https://wizzbot-offi.vercel.app/";
    }, 900);
  };
  return (
    <a
      href="https://wizzbot-offi.vercel.app/"
      onClick={onClick}
      aria-busy={loading}
      className={`cta-glow group relative inline-flex items-center justify-center gap-2 rounded-full bg-[#00ff66] px-6 py-4 text-sm font-medium text-[#001a08] transition-all duration-700 hover:-translate-y-1 sm:py-3.5 ${
        loading ? "pointer-events-none scale-[1.02] opacity-90" : ""
      }`}
      style={{ transitionTimingFunction: "var(--ease-cinema)" }}
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Entering Nocturnal…
        </>
      ) : (
        <>
          Try Nocturnal
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </>
      )}
    </a>
  );
}

export function Hero() {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden pt-12">
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

      {/* Fixed top classified bar */}
      <div className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.06] bg-black/60 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ff66] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00ff66]" />
            </span>
            <span className="font-display text-[15px] tracking-tight text-white">Nocturnal</span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-white/30 sm:inline">
              // AFTER HOURS
            </span>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ff66] opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00ff66]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#00ff66]/80 noct-emerald-soft">
              SIGNAL · STABLE
            </span>
          </div>
          <a
            href="https://wizzbot-offi.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-white/80 transition-all duration-500 hover:-translate-y-0.5 hover:border-[#00ff66]/60 hover:text-[#00ff66]"
            style={{ transitionTimingFunction: "var(--ease-cinema)" }}
          >
            ENTER
            <ArrowUpRight className="h-3 w-3 opacity-70 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Main hero grid */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12 px-6 pb-20 pt-10 sm:gap-10 sm:px-10 sm:pb-16 sm:pt-6 lg:grid-cols-[1.3fr_1fr] lg:gap-6 lg:pb-20 lg:pt-7">
        {/* LEFT */}
        <div className="relative">
          {/* Transmission tag */}
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="h-px w-8 bg-gradient-to-r from-transparent via-[#00ff66]/60 to-[#00ff66]/60" />
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#00ff66]/70 noct-emerald-soft">
              TRANSMISSION 001 · LATE NIGHT ONLY
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.6rem,6vw,5.5rem)] font-light leading-[1.04] tracking-[-0.02em] text-white sm:leading-[1.02]">
            Some questions deserve{" "}
            <span
              className="italic noct-emerald noct-glitch"
              data-text="better"
            >
              better
            </span>{" "}
            answers.
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#888888] sm:mt-7 sm:text-lg">
            Built for late-night curiosity, quick answers and meaningful
            conversations.
          </p>

          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-white/30">
            // You found this on purpose.
          </p>

          <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <TryButton />
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

          <div className="mt-10 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-[#666] sm:mt-12 sm:gap-6 sm:text-[11px]">
            <span>No noise.</span>
            <span className="h-px w-6 bg-white/15 sm:w-10" />
            <span>No clutter.</span>
            <span className="h-px w-6 bg-white/15 sm:w-10" />
            <span>Just answers.</span>
          </div>
        </div>

        {/* RIGHT — 3D model (desktop only) */}
        {!isMobile && (
          <div className="relative h-[480px] w-full lg:-mr-14 lg:h-[760px] xl:-mr-20 xl:h-[800px]">
            {/* Subject card overlay — sits above the model */}
            <div className="pointer-events-none absolute left-4 top-2 z-30 w-[220px] rounded-md border border-[#00ff66]/25 bg-black/55 p-4 backdrop-blur-md sm:left-8 lg:top-6">
              {/* corner brackets */}
              <span className="absolute -left-px -top-px h-3 w-3 border-l border-t border-[#00ff66]/80" />
              <span className="absolute -right-px -top-px h-3 w-3 border-r border-t border-[#00ff66]/80" />
              <span className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-[#00ff66]/40" />
              <span className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-[#00ff66]/40" />

              <div className="font-mono text-[9px] uppercase tracking-[0.34em] text-[#00ff66]/70 noct-emerald-soft">
                SUBJECT
              </div>
              <div className="mt-1 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-white">
                UNIT — 001
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                Observed. Awake. Listening.
              </div>
            </div>

            <SplineHero />
          </div>
        )}
      </div>

      {/* scroll hint */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.36em] text-[#555]">
        scroll
      </div>
    </section>
  );
}

