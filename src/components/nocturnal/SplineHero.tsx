import { lazy, Suspense } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export function SplineHero() {
  return (
    <div className="relative h-full w-full overflow-visible">
      {/* ambient emerald glow behind model — enlarged proportionally */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,102,0.24) 0%, rgba(3,38,18,0.45) 35%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 origin-top scale-[1.15] lg:scale-[1.45] xl:scale-[1.5] lg:-translate-y-8 xl:-translate-y-12">
        <Suspense fallback={<div className="h-full w-full" />}>
          <Spline scene="https://prod.spline.design/4EnSfM4jjwg5hOM5/scene.splinecode" />
        </Suspense>
      </div>
      {/* hide Spline watermark */}
      <div className="pointer-events-none absolute bottom-3 right-3 h-12 w-44 bg-black" />
    </div>
  );
}
