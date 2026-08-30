"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function BootIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#020617]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="text-center">
            <motion.div
              className="mx-auto mb-5 h-16 w-16 rounded-full border border-cyan-400/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, ease: "linear", repeat: Infinity }}
              style={{
                background:
                  "conic-gradient(from 90deg, transparent, #22d3ee, transparent)",
              }}
            />
            <motion.p
              className="font-[var(--font-display)] text-sm font-semibold tracking-[0.35em] text-cyan-200"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              INITIALIZING PORTFOLIO
            </motion.p>
            <div className="mx-auto mt-4 h-[2px] w-48 overflow-hidden rounded bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-teal-300"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
