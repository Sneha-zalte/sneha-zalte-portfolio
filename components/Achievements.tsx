"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { achievements } from "@/lib/data";
import { SectionTitle } from "@/components/Reveal";

export function Achievements() {
  return (
    <section id="achievements" className="py-16">
      <SectionTitle eyebrow="Honors uplink" title="Achievements & leadership" />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {achievements.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20, rotateY: -8 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="glass rounded-3xl p-5"
          >
            <div className="mb-2 flex items-center gap-2">
              <Award className="text-cyan-300" size={18} />
              <h3 className="font-semibold text-white">{item.title}</h3>
            </div>
            <p className="text-sm text-slate-400">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
