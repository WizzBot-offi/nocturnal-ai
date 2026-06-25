import { lazy, Suspense } from "react";
import { ArrowUpRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { AmbientDots } from "./AmbientDots";

const FloatingParticles = lazy(() =>
  import("@/components/ui/floating-particles").then((m) => ({
    default: m.FloatingParticles,
  }))
);

export function FinalCTA() {
  const isMobile = useIsMobile();
  return (
    <section
      id="enter"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-black"
    >
      {/* particles background — desktop only */}
      <div className="absolute inset-0">
        {!isMobile ? (
          <Suspense fallback={null}>
            <FloatingParticles
              particleCount={3500}
              particleColor1="#00FF66"
              particleColor2="#032612"
              particleSize={5}
              rotationSpeed={0.03}
              antigravityForce={18}
              activationRate={25}
              cameraDistance={1000}
            />
          </Suspense>
        ) : (
          <AmbientDots count={48} />
        )}

        {/* Layered cinematic glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,102,0.12) 0%, rgba(3,38,18,0.22) 30%, transparent 65%)",
            filter: "blur(30px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,102,0.18) 0%, transparent 70%)",
            filter: "blur(40px)",
            animation: "noct-pulse 6s ease-in-out infinite",
          }}
        />
        {/* dim overlay so text dominates */}
        <div className="pointer-events-none absolute inset-0 bg-black/55" />
        {/* vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        {/* horizon emerald sweep */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-48"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,255,102,0.08) 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-10">
        <p className="mb-6 text-[10px] uppercase tracking-[0.36em] text-[#888]">
          — the night is still awake
        </p>
        <h2 className="font-display text-[clamp(2.2rem,6vw,5rem)] font-light leading-[1.04] tracking-[-0.02em] text-white drop-shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          Questions don&apos;t sleep.
          <br />
          <span className="italic text-[#00ff66]">Neither does curiosity.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-md text-base text-[#888]">
          Some answers are waiting.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="https://wizzbot-offi.vercel.app/"
            className="cta-glow group inline-flex items-center gap-2 rounded-full bg-[#00ff66] px-8 py-4 text-sm font-medium text-[#001a08] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Enter Nocturnal
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
