"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export default function CanvasWrapper({ children, className }: Props) {
  return (
    <div className={className} style={{ width: "100%", height: "100%" }}>
      <Canvas
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        style={{ width: "100%", height: "100%" }}
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        {children}
      </Canvas>
    </div>
  );
}
