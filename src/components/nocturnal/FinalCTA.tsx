import { lazy, Suspense, useMemo, useState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { AmbientDots } from "./AmbientDots";

const FloatingParticles = lazy(() =>
  import("@/components/ui/floating-particles").then((m) => ({
    default: m.FloatingParticles,
  }))
);

// Floating dust motes (CSS-only) — feels like distant stars
function DustField({ count = 26 }: { count?: number }) {
  const motes = Array.from({ length: count }).map((_, i) => {
    const left = (i * 53) % 100;
    const delay = (i * 0.7) % 14;
    const duration = 12 + ((i * 1.3) % 8);
    return (
      <span
        key={i}
        className="noct-dust"
        style={{
          left: `${left}%`,
          bottom: `-${(i * 11) % 60}px`,
          animationDelay: `-${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />
    );
  });
  return <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">{motes}</div>;
}

// Static starfield — tiny pinpoints of light, no motion
function Starfield({ count = 80 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() < 0.85 ? 1 : 1.5,
        opacity: 0.25 + Math.random() * 0.5,
        delay: Math.random() * 6,
      })),
    [count]
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-[#00ff66]"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            boxShadow: "0 0 4px rgba(0,255,102,0.5)",
            animation: `noct-drift ${8 + s.delay}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function FinalCTA() {
  const isMobile = useIsMobile();
  return (
    <section
      id="enter"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      {/* === Layered depth background === */}
      <div className="absolute inset-0">
        {/* Subtle grid */}
        <div className="noct-grid absolute inset-0 opacity-[0.55]" />

        {/* Deep ambient bowl */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 55%, rgba(3,38,18,0.45) 0%, rgba(0,0,0,0) 60%)",
          }}
        />

        {/* Volumetric emerald fog — drifting */}
        <div
          aria-hidden
          className="noct-fog pointer-events-none absolute left-1/2 top-1/2 h-[1400px] w-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,102,0.10) 0%, rgba(3,38,18,0.14) 35%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        <div
          aria-hidden
          className="noct-fog-alt pointer-events-none absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,102,0.09) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Soft radial bloom — back */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,102,0.08) 0%, rgba(3,38,18,0.15) 32%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />

        {/* Mid bloom */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,102,0.10) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* Pulsing inner bloom */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,102,0.13) 0%, transparent 72%)",
            filter: "blur(40px)",
            animation: "noct-pulse 8s ease-in-out infinite",
          }}
        />

        {/* Floating particles — desktop WebGL, mobile CSS fallback */}
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

        {/* Floating dust motes — adds slow rising particle layer */}
        <DustField count={isMobile ? 18 : 32} />

        {/* Dim overlay — keeps text dominant */}
        <div className="pointer-events-none absolute inset-0 bg-black/60" />

        {/* Vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 28%, rgba(0,0,0,0.78) 100%)",
          }}
        />

        {/* Horizon emerald sweep */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-56"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,255,102,0.05) 0%, transparent 100%)",
          }}
        />
        {/* Top continuity fade */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-40"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, transparent 100%)",
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
          <span className="italic noct-emerald">Neither does curiosity.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-md text-base text-[#888]">
          Some answers are waiting.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="https://wizzbot-offi.vercel.app/"
            className="cta-glow group inline-flex items-center gap-2 rounded-full bg-[#00ff66] px-8 py-4 text-sm font-medium text-[#001a08] hover:-translate-y-1"
          >
            Enter Nocturnal
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
