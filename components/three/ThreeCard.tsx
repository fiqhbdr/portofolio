"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

type Props = {
  width?: number;
  height?: number;
};

export default function ThreeCard({ width = 2, height = 2 }: Props) {
  const ref = useRef<THREE.Group | null>(null);
  const pointer = useRef<[number, number]>([0, 0]);
  const pendingPointer = useRef<[number, number] | null>(null);
  const scheduled = useRef<boolean>(false);

  useFrame(() => {
    if (!ref.current) return;
    const [px, py] = pointer.current;
    ref.current.rotation.x += (-py * 0.6 - ref.current.rotation.x) * 0.08;
    ref.current.rotation.y += (px * 0.6 - ref.current.rotation.y) * 0.08;
  });

  return (
    <group ref={ref}>
      <mesh
        onPointerMove={(e) => {
          const nx = (e.clientX / window.innerWidth - 0.5) * 2;
          const ny = (e.clientY / window.innerHeight - 0.5) * 2;
          pendingPointer.current = [nx, ny];
          if (!scheduled.current) {
            scheduled.current = true;
            requestAnimationFrame(() => {
              if (pendingPointer.current) pointer.current = pendingPointer.current;
              pendingPointer.current = null;
              scheduled.current = false;
            });
          }
        }}
        onPointerLeave={() => {
          pointer.current = [0, 0];
        }}
        position={[0, 0, 0]}
      >
        <planeGeometry args={[width, height, 1, 1]} />
        <meshStandardMaterial color="#ffffff" metalness={0.15} roughness={0.35} />
      </mesh>
    </group>
  );
}
