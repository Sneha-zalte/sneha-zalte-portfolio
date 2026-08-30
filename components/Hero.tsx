"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Rocket, Send } from "lucide-react";
import { profile } from "@/lib/data";

export function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [erasing, setErasing] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 180,
    damping: 18,
  });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), {
    stiffness: 180,
    damping: 18,
  });

  useEffect(() => {
    const word = profile.roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!erasing) {
      if (text === word) {
        timeout = setTimeout(() => setErasing(true), 1200);
      } else {
        timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), 78);
      }
    } else if (text.length === 0) {
      setErasing(false);
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    } else {
      timeout = setTimeout(
        () => setText(word.slice(0, Math.max(0, text.length - 1))),
        42
      );
    }

    return () => clearTimeout(timeout);
  }, [text, erasing, roleIndex]);

  return (
    <section
      id="top"
      className="relative grid items-start gap-10 pt-24 pb-12 md:grid-cols-[1.1fr_.9fr] md:gap-12 md:pt-28 md:pb-16"
    >
      <div className="relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-2 animate-ping rounded-full bg-teal-300 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-300" />
          </span>
          SYSTEM ONLINE · {profile.availability}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.7 }}
          className="mt-5 font-[var(--font-display)] text-4xl font-bold leading-[1.08] text-white md:text-6xl"
        >
          Hi, I&apos;m{" "}
          <span className="holo-text">{profile.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14 }}
          className="mt-4 font-[var(--font-display)] text-xl font-semibold text-slate-300 md:text-2xl"
        >
          Enter a world of{" "}
          <span className="text-cyan-200">intelligent systems</span>
          <br />
          <span className="mt-1 inline-block text-lg font-medium text-slate-400 md:text-xl">
            <span className="typing-caret text-cyan-200">{text || " "}</span>
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-5 max-w-xl text-base text-slate-400 md:text-lg"
        >
          {profile.headline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            data-cursor
            className="btn-future inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-sky-400 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)]"
          >
            <Rocket size={16} /> Explore projects
          </a>
          <a
            href="#contact"
            data-cursor
            className="btn-future inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur hover:border-cyan-300/80"
          >
            <Send size={16} /> Open channel
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-30 mx-auto w-full max-w-[420px] md:-mt-16"
        style={{ perspective: 1000 }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          mx.set((e.clientX - r.left) / r.width - 0.5);
          my.set((e.clientY - r.top) / r.height - 0.5);
        }}
        onMouseLeave={() => {
          mx.set(0);
          my.set(0);
        }}
      >
        <motion.div
          className="photo-holo relative mx-auto h-[560px] w-[400px]"
          style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              sizes="400px"
              className="-translate-y-16 object-contain object-top drop-shadow-[0_18px_35px_rgba(0,0,0,0.55)]"
              priority
              unoptimized
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
