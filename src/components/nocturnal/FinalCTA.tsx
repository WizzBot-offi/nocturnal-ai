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
          <AmbientDots count={36} />
        )}
        {/* darken to keep typography dominant */}
        <div className="pointer-events-none absolute inset-0 bg-black/55" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(700px 420px at 50% 55%, rgba(3,38,18,0.45) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-10">
        <p className="mb-6 text-[10px] uppercase tracking-[0.36em] text-[#888]">
          — the night is still awake
        </p>
        <h2 className="font-display text-[clamp(2.4rem,6vw,5rem)] font-light leading-[1.04] tracking-[-0.02em] text-white">
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
