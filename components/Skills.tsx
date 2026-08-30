"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Brain, Cloud, Code2, Layers } from "lucide-react";
import { skillGroups } from "@/lib/data";
import { SectionTitle } from "@/components/Reveal";

const meta = [
  {
    title: "Languages",
    icon: Code2,
    blurb: "The syntax I think in.",
    accent: "from-cyan-400/25 via-sky-500/10 to-transparent",
  },
  {
    title: "AI & Data",
    icon: Brain,
    blurb: "Models, signals, and insight.",
    accent: "from-teal-300/25 via-cyan-500/10 to-transparent",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    blurb: "Ship it. Scale it. Keep it alive.",
    accent: "from-sky-300/25 via-blue-500/10 to-transparent",
  },
  {
    title: "Product & Platforms",
    icon: Layers,
    blurb: "Interfaces people actually use.",
    accent: "from-cyan-200/20 via-teal-400/10 to-transparent",
  },
] as const;

export function Skills() {
  const [active, setActive] = useState(0);
  const group = skillGroups[active];
  const info = meta[active];
  const Icon = info.icon;
  const runway = [...group.items, ...group.items, ...group.items];
  const ambient = [
    ...skillGroups.flatMap((g) => g.items),
    ...skillGroups.flatMap((g) => g.items),
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % skillGroups.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="skills" className="py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionTitle eyebrow="Capability stack" title="Skills" />
        <p className="max-w-xs text-right text-sm text-slate-400">
          Tap a lane — or watch them cycle through the stack.
        </p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {meta.map((item, i) => {
          const TabIcon = item.icon;
          const selected = i === active;
          return (
            <button
              key={item.title}
              data-cursor
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl border px-4 py-4 text-left transition ${
                selected
                  ? "border-cyan-300/50 bg-cyan-400/10 shadow-[0_0_30px_rgba(34,211,238,0.18)]"
                  : "border-white/10 bg-white/[0.03] hover:border-cyan-400/30"
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-70`}
              />
              <div className="relative flex items-start gap-3">
                <span
                  className={`mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl border ${
                    selected
                      ? "border-cyan-300/40 bg-cyan-300/15 text-cyan-200"
                      : "border-white/10 bg-black/20 text-slate-400"
                  }`}
                >
                  <TabIcon size={16} />
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-cyan-300/70">
                    0{i + 1}
                  </p>
                  <p className="font-[var(--font-display)] text-sm font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">{item.blurb}</p>
                </div>
              </div>
              {selected && (
                <motion.span
                  layoutId="skill-lane"
                  className="absolute inset-x-3 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
                />
              )}
            </button>
          );
        })}
      </div>

      <motion.div
        key={group.title}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="glass relative mt-5 overflow-hidden rounded-[1.75rem]"
      >
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${info.accent}`} />
        <div className="pointer-events-none absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-teal-300/15 blur-3xl" />

        <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-white/8 px-5 py-4 md:px-7">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
              <Icon size={18} />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300/70">
                Active lane
              </p>
              <h3 className="font-[var(--font-display)] text-xl font-semibold text-white">
                {group.title}
              </h3>
            </div>
          </div>
          <p className="text-sm text-slate-400">{info.blurb}</p>
        </div>

        <div className="relative py-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#06101d] to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#06101d] to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-400/35 to-transparent" />

          <AnimatePresence mode="wait">
            <motion.div
              key={group.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`marquee-track skill-runway ${active % 2 ? "reverse" : ""}`}
              style={{ animationDuration: `${Math.max(16, group.items.length * 2.2)}s` }}
            >
              {runway.map((skill, idx) => (
                <span key={`${skill}-${idx}`} className="skill-module">
                  <span className="skill-module-index">
                    {String((idx % group.items.length) + 1).padStart(2, "0")}
                  </span>
                  <span className="skill-module-name">{skill}</span>
                </span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      <div className="relative mt-4 overflow-hidden rounded-full border border-white/8 py-2.5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#020617] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#020617] to-transparent" />
        <div className="marquee-track reverse" style={{ animationDuration: "40s" }}>
          {ambient.map((skill, i) => (
            <span
              key={`ambient-${skill}-${i}`}
              className="whitespace-nowrap text-xs font-medium tracking-wide text-slate-500"
            >
              {skill}
              <span className="mx-3 text-cyan-500/40">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
