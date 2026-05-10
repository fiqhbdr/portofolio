"use client";

import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

type Props = {
  children?: React.ReactNode;
  className?: string;
  force?: boolean; // force render even on low-end devices
};

function probeWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')
    );
  } catch (e) {
    return false;
  }
}

export default function CanvasWrapper({ children, className, force = false }: Props) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmallScreen = window.innerWidth < 1024;
    const deviceMemory = (navigator as any).deviceMemory || 0;
    const hardwareThreads = (navigator as any).hardwareConcurrency || 0;
    const lowEndDevice = (deviceMemory > 0 && deviceMemory <= 4) || (hardwareThreads > 0 && hardwareThreads <= 4);

    const hasWebGL = probeWebGL();

    // Limit number of active canvases to avoid exhausting WebGL contexts.
    (window as any).__R3F_CANVAS_COUNT = (window as any).__R3F_CANVAS_COUNT || 0;
    const tooManyCanvases = (window as any).__R3F_CANVAS_COUNT >= 1;

    if (!force && (prefersReducedMotion || isSmallScreen || lowEndDevice || !hasWebGL || tooManyCanvases)) {
      setShouldRender(false);
      return;
    }

    setShouldRender(true);
  }, [force]);

  useEffect(() => {
    if (!shouldRender) return;
    (window as any).__R3F_CANVAS_COUNT = (window as any).__R3F_CANVAS_COUNT || 0;
    (window as any).__R3F_CANVAS_COUNT += 1;
    return () => {
      (window as any).__R3F_CANVAS_COUNT -= 1;
      if ((window as any).__R3F_CANVAS_COUNT < 0) (window as any).__R3F_CANVAS_COUNT = 0;
    };
  }, [shouldRender]);

  if (!shouldRender) {
    return <div className={className} style={{ width: '100%', height: '100%' }} />;
  }

  const dpr = Math.min(window.devicePixelRatio || 1, 1.25);

  return (
    <div className={className} style={{ width: "100%", height: "100%" }}>
      <Canvas
        gl={{ antialias: false, alpha: true, powerPreference: "low-power", failIfMajorPerformanceCaveat: false, preserveDrawingBuffer: false }}
        style={{ width: "100%", height: "100%" }}
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={dpr}
        frameloop="always"
        onCreated={({ gl }) => {
          const canvas = gl.domElement;
          const handleLost = (e: Event) => {
            e.preventDefault();
          };
          canvas.addEventListener('webglcontextlost', handleLost, false);
        }}
      >
        {children}
      </Canvas>
    </div>
  );
}
