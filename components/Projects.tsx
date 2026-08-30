"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionTitle } from "@/components/Reveal";

const filters = ["All", "AI/ML", "Mobile", "Web"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionTitle eyebrow="Mission logs" title="Projects" />
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              data-cursor
              onClick={() => setFilter(f)}
              className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
                filter === f
                  ? "bg-cyan-300 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                  : "border border-cyan-400/25 text-slate-300 hover:border-cyan-300/60"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((project) => (
            <TiltCard key={project.slug} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

function TiltCard({ project }: { project: (typeof projects)[number] }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, gx: 50, gy: 50 });

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      viewport={{ once: true }}
      data-cursor
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        setTilt({
          x: (y - 0.5) * -16,
          y: (x - 0.5) * 18,
          gx: x * 100,
          gy: y * 100,
        });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0, gx: 50, gy: 50 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: "preserve-3d",
      }}
      className="glass group overflow-hidden rounded-3xl transition-transform duration-150"
    >
      <div
        className={`relative h-40 overflow-hidden bg-gradient-to-br ${project.accent}`}
        style={{
          backgroundImage: `radial-gradient(circle at ${tilt.gx}% ${tilt.gy}%, rgba(255,255,255,0.35), transparent 45%), linear-gradient(135deg, rgba(34,211,238,0.35), rgba(15,23,42,0.2))`,
        }}
      >
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />
        <motion.div
          className="absolute -right-6 -top-6 h-28 w-28 rounded-full border border-white/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute bottom-4 left-4 font-[var(--font-display)] text-xs font-bold tracking-[0.25em] text-white/80">
          {project.category}
        </div>
      </div>
      <div className="relative p-5" style={{ transform: "translateZ(28px)" }}>
        <h3 className="font-[var(--font-display)] text-xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-semibold text-cyan-200/70">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-400/20 px-2.5 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          {project.href.startsWith("http") && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-300"
            >
              GitHub <ArrowUpRight size={14} />
            </a>
          )}
          {"live" in project && project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-teal-300"
            >
              Live <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
