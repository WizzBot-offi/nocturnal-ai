export function Footer() {
  return (
    <footer className="relative w-full border-t border-white/5 bg-black">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 px-6 py-10 text-[11px] uppercase tracking-[0.28em] text-[#555] sm:flex-row sm:items-center sm:px-10">
        <div className="flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00ff66]" />
          <span className="font-display text-sm normal-case tracking-tight text-white/80">
            Nocturnal
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span>quiet · awake · curious</span>
          <span className="text-[#333]">·</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
