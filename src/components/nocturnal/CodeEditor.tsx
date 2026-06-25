// VS Code-styled Python snippet with line numbers and syntax highlighting.
import { type ReactNode } from "react";

const C = {
  kw: "#ff7ab2",      // keyword (def, return)
  fn: "#7ee787",      // function name
  ty: "#79c0ff",      // type / class
  str: "#a5e5b8",     // string
  num: "#ffa657",     // number
  cm: "#6b7280",      // comment
  pn: "#c9d1d9",      // punctuation / default
  bi: "#79c0ff",      // builtin
};

function T({ c, children }: { c: string; children: ReactNode }) {
  return <span style={{ color: c }}>{children}</span>;
}

const lines: ReactNode[] = [
  <>
    <T c={C.kw}>def</T> <T c={C.fn}>is_palindrome</T>
    <T c={C.pn}>(</T>s<T c={C.pn}>:</T> <T c={C.ty}>str</T>
    <T c={C.pn}>) -&gt; </T>
    <T c={C.ty}>bool</T>
    <T c={C.pn}>:</T>
  </>,
  <>
    {"    "}
    <T c={C.cm}># normalize and compare against reverse</T>
  </>,
  <>
    {"    "}s <T c={C.pn}>=</T> s<T c={C.pn}>.</T>
    <T c={C.fn}>lower</T>
    <T c={C.pn}>()</T>
  </>,
  <>
    {"    "}
    <T c={C.kw}>return</T> s <T c={C.pn}>==</T> s
    <T c={C.pn}>[::</T>
    <T c={C.num}>-1</T>
    <T c={C.pn}>]</T>
  </>,
  <>{"\u00a0"}</>,
  <>
    <T c={C.bi}>print</T>
    <T c={C.pn}>(</T>
    <T c={C.fn}>is_palindrome</T>
    <T c={C.pn}>(</T>
    <T c={C.str}>&quot;level&quot;</T>
    <T c={C.pn}>))</T>{" "}
    <T c={C.cm}># True</T>
  </>,
];

export function CodeEditor() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] shadow-[0_30px_80px_-30px_rgba(0,255,102,0.18)]">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#161b22] px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="font-mono text-[10px] tracking-wide text-[#7d8590]">
          palindrome.py
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-[#00ff66]/70">
          py
        </div>
      </div>

      {/* Tab */}
      <div className="flex border-b border-white/[0.06] bg-[#0d1117] text-[11px]">
        <div className="flex items-center gap-2 border-r border-white/[0.06] bg-[#0d1117] px-3 py-1.5 font-mono text-[#c9d1d9]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3fb950]" />
          palindrome.py
        </div>
      </div>

      {/* Editor */}
      <div className="flex font-mono text-[12.5px] leading-[1.7]">
        <div className="select-none border-r border-white/[0.04] px-3 py-3 text-right text-[#484f58]">
          {lines.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <pre className="flex-1 overflow-x-auto px-4 py-3 text-[#c9d1d9]">
          {lines.map((l, i) => (
            <div key={i} className="whitespace-pre">
              {l}
            </div>
          ))}
        </pre>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between border-t border-white/[0.06] bg-[#00ff66]/[0.08] px-3 py-1 font-mono text-[10px] text-[#7d8590]">
        <span>UTF-8 · LF</span>
        <span>Python 3.12</span>
      </div>
    </div>
  );
}
