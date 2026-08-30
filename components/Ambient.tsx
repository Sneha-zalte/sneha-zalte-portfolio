"use client";

import { useEffect, useMemo, useState } from "react";

export function Ambient() {
  const [pos, setPos] = useState({ x: 40, y: 20 });
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        delay: `${(i % 10) * 0.7}s`,
        duration: `${9 + (i % 7)}s`,
        size: 2 + (i % 3),
      })),
    []
  );

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="aurora" />
      <div className="grid-noise absolute inset-0" />
      <div className="scanlines absolute inset-0" />
      <div
        className="absolute h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 blur-3xl transition-transform duration-150"
        style={{
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          background:
            "radial-gradient(circle, rgba(34,211,238,0.22), transparent 58%), radial-gradient(circle, rgba(45,212,191,0.14), transparent 72%)",
        }}
      />
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
