"use client";

import dynamic from "next/dynamic";

const Scene3DInner = dynamic(
  () => import("@/components/Scene3DCanvas").then((m) => m.Scene3DCanvas),
  { ssr: false }
);

export function Scene3D() {
  return <Scene3DInner />;
}
