"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { SectionTitle } from "@/components/Reveal";

export function Experience() {
  return (
    <section id="experience" className="py-16">
      <SectionTitle eyebrow="Signal trail" title="Experience" />
      <div className="relative mt-8 space-y-5 before:absolute before:bottom-4 before:left-[11px] before:top-4 before:w-px before:bg-gradient-to-b before:from-cyan-400 before:to-teal-300 md:before:left-[15px]">
        {experience.map((job, i) => (
          <ExperienceCard key={job.company} job={job} index={i} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({
  job,
  index,
}: {
  job: (typeof experience)[number];
  index: number;
}) {
  const [spot, setSpot] = useState({ x: 50, y: 40 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <motion.article
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      data-cursor
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        setSpot({ x, y });
        setTilt({
          x: ((y / 100) - 0.5) * -8,
          y: ((x / 100) - 0.5) * 10,
        });
      }}
      onMouseLeave={() => {
        setSpot({ x: 50, y: 40 });
        setTilt({ x: 0, y: 0 });
      }}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: "preserve-3d",
      }}
      className="glass relative ml-8 overflow-hidden rounded-3xl p-6 transition-transform duration-150 md:ml-10"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          opacity: 1,
          background: `radial-gradient(420px circle at ${spot.x}% ${spot.y}%, rgba(34,211,238,0.16), transparent 55%)`,
        }}
      />
      <span className="absolute -left-[38px] top-7 h-3.5 w-3.5 rounded-full bg-cyan-400 shadow-[0_0_0_6px_rgba(34,211,238,.18)] md:-left-[46px]" />

      <div className="relative" style={{ transform: "translateZ(20px)" }}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              {job.focus}
            </p>
            <h3 className="mt-1 font-[var(--font-display)] text-xl font-semibold text-white">
              {job.role}
            </h3>
            <p className="mt-1 text-sm font-semibold text-cyan-300">
              {job.company} · {job.location}
            </p>
          </div>
          <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-100">
            {job.period}
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-400">{job.summary}</p>

        <ul className="mt-4 space-y-2.5 text-slate-300">
          {job.points.map((point) => (
            <li key={point} className="flex gap-3 leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
