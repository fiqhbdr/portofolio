"use client";

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import ColorBends from '@/components/ColorBends';
import TypeWriter from '../TypeWriter';
import Link from 'next/link';

type HeroEffectsMode = 'auto' | 'on' | 'off';

export default function HeroSection() {
  const [effectsMode, setEffectsMode] = useState<HeroEffectsMode>('on');
  const [canRunHeavyEffects, setCanRunHeavyEffects] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const savedMode = window.localStorage.getItem('heroEffectsMode') as HeroEffectsMode | null;
      if (savedMode === 'auto' || savedMode === 'on' || savedMode === 'off') {
        setEffectsMode(savedMode);
      } else {
        window.localStorage.setItem('heroEffectsMode', 'on');
      }

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isSmallScreen = window.innerWidth < 1024;
      const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 0;
      const hardwareThreads = navigator.hardwareConcurrency || 0;
      const lowEndDevice = (deviceMemory > 0 && deviceMemory <= 4) || (hardwareThreads > 0 && hardwareThreads <= 4);

      setCanRunHeavyEffects(!prefersReducedMotion && !isSmallScreen && !lowEndDevice);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const shouldRenderColorBends = useMemo(() => {
    if (effectsMode === 'off') return false;
    if (effectsMode === 'on') return true;
    return canRunHeavyEffects;
  }, [effectsMode, canRunHeavyEffects]);

  const cycleEffectsMode = () => {
    const nextMode: HeroEffectsMode = effectsMode === 'auto' ? 'on' : effectsMode === 'on' ? 'off' : 'auto';
    setEffectsMode(nextMode);
    window.localStorage.setItem('heroEffectsMode', nextMode);
  };

  const effectsLabel =
    effectsMode === 'auto'
      ? canRunHeavyEffects
        ? 'Auto (active)'
        : 'Auto (lite)'
      : effectsMode === 'on'
        ? 'On'
        : 'Off';

  return (
    <section className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-blue-50 via-purple-50 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">
      <div className="absolute top-24 right-4 sm:right-6 z-20">
        <button
          type="button"
          onClick={cycleEffectsMode}
          className="inline-flex items-center rounded-full border border-gray-300/70 dark:border-gray-600/80 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm px-4 py-2 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
        >
          Effects: {effectsLabel}
        </button>
      </div>
      {shouldRenderColorBends && (
        <div className="absolute inset-0 w-full h-full">
          <ColorBends
            force={effectsMode === 'on'}
            rotation={45}
            speed={0.2}
            colors={["#29fbff", "#f4435e"]}
            transparent
            autoRotate={0}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={0.8}
            parallax={0.5}
            noise={0.08}
          />
        </div>
      )}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-red-400 text-white px-4 py-1 rounded-full text-xs font-poppins font-bold mb-6" data-aos="zoom-in">
              Fullstack Web Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-poppins leading-tight text-gray-800 dark:text-[#e5d9c3] transition-colors" data-aos="fade-up" data-aos-delay="200">
              HELLO I&apos;M<br />FIQIH BADRIAN
            </h1>
            <div className="text-xl lg:text-2xl mt-6 text-gray-600 dark:text-gray-200 transition-colors" data-aos="fade-up" data-aos-delay="400">
              <TypeWriter 
                texts={["Creating websites that are fast, responsive, and ready to be used by businesses and individuals."]}
                speed={100}
                delay={2000}
              />
            </div>
            <div className="flex flex-wrap gap-4 mt-8" data-aos="fade-up" data-aos-delay="600">
              <Link className="inline-block px-6 py-3 bg-gray-800 dark:bg-[#e5d9c3] text-white dark:text-gray-900 rounded-full text-lg font-medium hover:bg-gray-900 dark:hover:bg-[#d4c4a8] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105" href="#project">
                My Project
              </Link>
              <Link className="inline-block px-6 py-3 border-2 border-gray-800 dark:border-[#e5d9c3] text-gray-800 dark:text-[#e5d9c3] rounded-full text-lg font-medium hover:bg-gray-800 hover:text-white dark:hover:bg-[#e5d9c3] dark:hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105" href="/contact">
                Contact Me
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="300">
            <Image
              src="/images/logo.png"
              width={280}
              height={280}
              alt="profile"
              className="rounded-full shadow-lg"
              priority
              quality={85}
              sizes="(max-width: 1024px) 0vw, 280px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
// halo