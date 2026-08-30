"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { SectionTitle } from "@/components/Reveal";

export function Education() {
  return (
    <section id="education" className="py-16">
      <SectionTitle eyebrow="Training sequence" title="Education" />
      <div className="mt-8 grid gap-4">
        {education.map((item, i) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ x: 8 }}
            className="glass rounded-3xl p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-[var(--font-display)] text-lg font-semibold text-white">
                  {item.degree}
                </h3>
                <p className="text-sm text-slate-300">{item.school}</p>
              </div>
              <div className="text-right text-sm text-slate-400">
                <div>{item.period}</div>
                {item.note && <span>{item.note}</span>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
