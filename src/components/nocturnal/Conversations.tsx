import { useReveal } from "./useReveal";
import { CodeEditor } from "./CodeEditor";

function CardShell({
  index,
  label,
  time,
  className = "",
  children,
}: {
  index: number;
  label: string;
  time: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useReveal<HTMLDivElement>({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`reveal group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0c0c0c] to-[#050505] p-7 sm:p-8 ${className}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      {/* corner emerald glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-50 transition-opacity duration-700 group-hover:opacity-90"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,102,0.18) 0%, transparent 70%)",
        }}
      />
      {/* hairline top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,255,102,0.45), transparent)",
        }}
      />

      <div className="relative mb-6 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-[#555]">
        <span className="flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-[#00ff66]" />
          {label}
        </span>
        <span>{time}</span>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

function Q({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#666]">
        question
      </div>
      <p className="font-display text-xl font-light leading-snug text-white sm:text-2xl">
        {children}
      </p>
    </div>
  );
}

function A({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-[#00ff66]/80">
        <span className="h-px w-6 bg-[#00ff66]/40" />
        Nocturnal
      </div>
      <div className="text-[15px] leading-relaxed text-white/85">{children}</div>
    </div>
  );
}

export function Conversations() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-28 sm:py-40">
      {/* ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[1000px] -translate-x-1/2 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(3,38,18,0.45) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-16 max-w-2xl sm:mb-24">
          <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-[#666]">
            — overheard at 2 am
          </p>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-white">
            A few things people <span className="italic text-[#00ff66]">asked</span>.
          </h2>
        </div>

        {/* Intentional asymmetric composition */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Large featured card — recursion */}
          <div className="lg:col-span-7 lg:row-span-2">
            <CardShell
              index={0}
              label="conversation 01"
              time="2:14 am"
              className="lg:min-h-[420px]"
            >
              <Q>Explain recursion simply.</Q>
              <A>
                A function that calls itself, solving a smaller version of the
                same problem — until the problem is small enough to answer
                directly.
                <div className="mt-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-[#555]">
                  <span className="h-px w-8 bg-white/15" />
                  base case · recursive case
                </div>
              </A>
            </CardShell>
          </div>

          {/* Sky blue — compact */}
          <div className="lg:col-span-5">
            <CardShell index={2} label="conversation 03" time="2:41 am">
              <Q>Why is the sky blue?</Q>
              <A>
                Shorter wavelengths scatter more in our atmosphere. What
                reaches your eyes from every direction is the leftover —
                blue.
              </A>
            </CardShell>
          </div>

          {/* Python editor — VS Code styled */}
          <div className="lg:col-span-5">
            <CardShell
              index={1}
              label="conversation 02"
              time="2:27 am"
              className="p-5 sm:p-6"
            >
              <div className="mb-5">
                <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#666]">
                  question
                </div>
                <p className="font-display text-lg font-light leading-snug text-white sm:text-xl">
                  Give me a Python palindrome checker.
                </p>
              </div>
              <CodeEditor />
            </CardShell>
          </div>
        </div>
      </div>
    </section>
  );
}
