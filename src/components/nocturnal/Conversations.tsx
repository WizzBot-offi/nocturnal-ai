import { useReveal } from "./useReveal";

function Bubble({
  role,
  children,
}: {
  role: "user" | "nocturnal";
  children: React.ReactNode;
}) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className="max-w-[78%]">
        <div
          className={`mb-1.5 text-[10px] uppercase tracking-[0.28em] ${
            isUser ? "text-right text-[#666]" : "text-[#00ff66]/80"
          }`}
        >
          {isUser ? "you" : "Nocturnal"}
        </div>
        <div
          className={
            isUser
              ? "rounded-2xl rounded-tr-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/95"
              : "rounded-2xl rounded-tl-md border border-[#00ff66]/15 bg-[#032612]/40 px-4 py-3 text-sm text-white/95"
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function Card({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  const ref = useReveal<HTMLDivElement>({ threshold: 0.25 });
  return (
    <div
      ref={ref}
      className="reveal relative rounded-3xl border border-white/10 bg-[#0a0a0a]/80 p-6 backdrop-blur-sm sm:p-8"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="mb-5 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-[#555]">
        <span>conversation 0{index + 1}</span>
        <span>2:{14 + index * 7} am</span>
      </div>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

export function Conversations() {
  return (
    <section className="relative w-full bg-black py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-20 max-w-2xl">
          <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-[#666]">
            — overheard at 2 am
          </p>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-white">
            A few things people <span className="italic text-[#00ff66]">asked</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card index={0}>
            <Bubble role="user">Explain recursion simply.</Bubble>
            <Bubble role="nocturnal">
              Recursion is when a function calls itself to solve a smaller
              version of a problem — until the problem is small enough to
              answer directly.
            </Bubble>
          </Card>

          <Card index={1}>
            <Bubble role="user">Give me a Python palindrome checker.</Bubble>
            <Bubble role="nocturnal">
              <pre className="overflow-x-auto rounded-lg bg-black/60 p-3 font-mono text-[12px] leading-relaxed text-[#d9ffe6]">
{`def is_palindrome(s: str) -> bool:
    s = s.lower()
    return s == s[::-1]`}
              </pre>
            </Bubble>
          </Card>

          <Card index={2}>
            <Bubble role="user">Why is the sky blue?</Bubble>
            <Bubble role="nocturnal">
              Sunlight scatters off air molecules. Shorter (blue) wavelengths
              scatter more than longer ones, so the sky we see is the leftover
              blue light arriving from every direction.
            </Bubble>
          </Card>
        </div>
      </div>
    </section>
  );
}
