"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function DriftOrbs() {
  const group = useRef<THREE.Group>(null);
  const positions = useMemo(
    () =>
      Array.from({ length: 36 }, () => ({
        // Keep orbs mostly on the left / far sides so they stay clear of the hero photo
        x: (Math.random() - 0.75) * 12,
        y: (Math.random() - 0.5) * 9,
        z: (Math.random() - 0.5) * 8,
        s: 0.035 + Math.random() * 0.09,
        speed: 0.2 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2,
      })),
    []
  );

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.04;
    group.current.children.forEach((child, i) => {
      const p = positions[i];
      child.position.y = p.y + Math.sin(t * p.speed + p.phase) * 0.35;
    });
  });

  return (
    <group ref={group}>
      {positions.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]} scale={p.s}>
          <sphereGeometry args={[1, 12, 12]} />
          <meshBasicMaterial
            color={i % 3 === 0 ? "#67e8f9" : i % 3 === 1 ? "#f0fdfa" : "#a5f3fc"}
            transparent
            opacity={0.55}
          />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <Stars radius={70} depth={45} count={1200} factor={2.5} saturation={0} fade speed={0.5} />
      <DriftOrbs />
    </>
  );
}

export function Scene3DCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-75 md:[mask-image:linear-gradient(90deg,#000_0%,#000_52%,transparent_78%)] md:[-webkit-mask-image:linear-gradient(90deg,#000_0%,#000_52%,transparent_78%)]">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ position: "absolute", inset: 0 }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
