"use client";

import { useEffect, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { nav } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "border-b border-cyan-400/15 bg-[#020617]/75 backdrop-blur-xl" : ""
      }`}
    >
      <div
        className="h-[2px] bg-gradient-to-r from-cyan-300 via-teal-300 to-sky-400"
        style={{ width: `${progress}%` }}
      />
      <div className="mx-auto flex w-[min(1120px,92%)] items-center justify-between py-3.5">
        <a
          href="#top"
          data-cursor
          className="font-[var(--font-brand)] text-[1.15rem] font-bold italic tracking-tight text-cyan-100 transition hover:text-white"
        >
          Sneha Zalte
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-cursor
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Resume-SnehaZalte.pdf"
            data-cursor
            className="btn-future inline-flex items-center gap-2 rounded-full border border-cyan-400/30 px-3.5 py-2 text-sm font-semibold text-white hover:border-cyan-300/70"
          >
            <FileDown size={16} /> Resume
          </a>
        </nav>
        <button
          className="rounded-lg border border-white/15 p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#020617]/95 px-[4%] py-4 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-slate-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
