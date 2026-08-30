"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className = "", delay = 0, y = 36 }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <Reveal>
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.28em] text-cyan-300/80">
          {eyebrow}
        </p>
      )}
      <h2 className="font-[var(--font-display)] text-3xl font-bold tracking-tight text-white md:text-4xl">
        <span className="holo-text">{title}</span>
      </h2>
    </Reveal>
  );
}
