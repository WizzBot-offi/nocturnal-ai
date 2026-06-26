# Final Polish Pass — Nocturnal

Refinement-only. No layout redesign, no new sections, no component replacements.

## 1. Emerald glow (illuminated-from-within)

Add a reusable `.noct-emerald` utility in `src/styles.css`:
- Color `#00ff66`
- Layered text-shadow: `0 0 1px rgba(0,255,102,0.9), 0 0 12px rgba(0,255,102,0.45), 0 0 28px rgba(0,255,102,0.25), 0 0 60px rgba(0,255,102,0.15)`
- `transition: text-shadow 600ms, color 600ms`
- Hover/group-hover variant lifts opacity slightly (no neon flare)
- Companion `.noct-emerald-soft` for small labels/dots (lighter shadow)

Apply on existing emerald spans: "better" (Hero), "curiosity" (Final CTA), "asked" (Conversations), section eyebrow accents. Buttons get a refined `.cta-glow` (softer dual-shadow, slower pulse).

## 2. Final CTA atmosphere

Keep typography + button untouched. Add behind them:
- A new `noct-fog` keyframe (slow horizontal drift, 40s) used on two stacked emerald fog layers
- A second pulsing volumetric layer with offset timing for parallax feel
- A `noct-particles` field (CSS-only, ~30 floating dust motes rising) layered on top of WebGL particles (desktop) and as enhancement on mobile
- Faint moving radial sweep using existing `noct-aurora` on an extra layer
- Keep current dim overlay so text dominance is preserved

## 3. Conversation showcase reveals

Keep card content and order. Switch the grid to a single vertical stack with generous spacing (no asymmetric grid):
- `flex flex-col gap-16 sm:gap-24` inside the existing max-width container
- Each card centered, max-w-3xl; Python card max-w-4xl (slightly wider as anchor)
- `useReveal` already in `CardShell`; increase per-card `transitionDelay` from 90ms → 140ms and soften easing
- `CodeEditor` gains: subtle outer shadow `0 30px 80px -40px rgba(0,255,102,0.18)` plus inner border highlight; line-number column gets `border-r` softening; header keeps mac dots but tightens spacing

## 4. Custom scrollbar

Add to `src/styles.css`:
```
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: #000; }
::-webkit-scrollbar-thumb {
  background: #00ff66; border-radius: 9999px;
  box-shadow: 0 0 0 2px #000 inset;
}
::-webkit-scrollbar-thumb:hover {
  box-shadow: 0 0 8px rgba(0,255,102,0.6), 0 0 0 2px #000 inset;
}
html { scrollbar-color: #00ff66 #000; scrollbar-width: thin; }
```

## 5. Hero Spline sizing (~+30%)

Edit `Hero.tsx` grid + right column only:
- Grid: `lg:grid-cols-[1fr_1.15fr]` (more room for model)
- Right container: `lg:h-[760px] xl:h-[820px]`, negative right margin `lg:-mr-10 xl:-mr-16` so the scene fills the right edge without clipping the centered text
- `SplineHero` wrapper gets `scale-[1.05] origin-center` + `lg:scale-[1.15]` for visual presence
- Ambient glow behind model enlarged proportionally; watermark mask stays
- Keep mobile path unchanged (no Spline)

## 6. Motion polish

- Standardize easing token: introduce CSS var `--ease-cinema: cubic-bezier(0.16, 1, 0.3, 1)`
- Reveal utility uses `--ease-cinema`, duration bumped slightly (1.1s → 1.2s)
- Buttons: `transition-all duration-500` with `--ease-cinema`, hover lifts `-translate-y-1` + softened shadow
- Hero badge / nav dot fade-in on mount (200ms stagger via `animate-fade-in`)
- Stagger conversation reveals (0/140/280ms)

## 7. Performance guardrails

- All new effects are CSS transforms/opacity (GPU)
- No added JS libraries
- Particle count unchanged on desktop, mobile keeps CSS dust only
- `prefers-reduced-motion`: disable fog/pulse/aurora animations

## 8. Files changed

- `src/styles.css` — emerald utilities, scrollbar, ease var, fog/particles keyframes, reduced-motion block
- `src/components/nocturnal/Hero.tsx` — grid ratio + Spline container size
- `src/components/nocturnal/SplineHero.tsx` — wrapper scale + enlarged glow
- `src/components/nocturnal/FinalCTA.tsx` — added fog + particle layers, apply `.noct-emerald`
- `src/components/nocturnal/Conversations.tsx` — vertical stack, apply `.noct-emerald`, stagger timing
- `src/components/nocturnal/CodeEditor.tsx` — refined shadow/borders
- `src/components/nocturnal/useReveal.ts` — unchanged (utility-driven)

## 9. Visual audit (post-build)

Use Playwright at 1280×1800 and 390×844:
- Screenshot Hero, Conversations, Final CTA on both viewports
- Verify: Spline not clipped, emerald words glow, scrollbar themed, cards stack with breathing room, button hover lift smooth, no horizontal overflow
