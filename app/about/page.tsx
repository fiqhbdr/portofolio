"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const currentRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const interactiveRef = useRef(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = navigator.maxTouchPoints > 0;
    interactiveRef.current = !prefersReducedMotion && !isTouchDevice;

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const animateTilt = () => {
    const tiltEl = tiltRef.current;
    if (!tiltEl) {
      rafRef.current = null;
      return;
    }

    const damping = 0.14;
    currentRef.current.x += (targetRef.current.x - currentRef.current.x) * damping;
    currentRef.current.y += (targetRef.current.y - currentRef.current.y) * damping;

    const x = currentRef.current.x;
    const y = currentRef.current.y;
    tiltEl.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;

    if (Math.abs(targetRef.current.x - x) < 0.05 && Math.abs(targetRef.current.y - y) < 0.05) {
      rafRef.current = null;
      return;
    }

    rafRef.current = requestAnimationFrame(animateTilt);
  };

  const startAnimation = () => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(animateTilt);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveRef.current) return;
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    targetRef.current.x = ((y - centerY) / centerY) * 10;
    targetRef.current.y = ((x - centerX) / centerX) * -10;
    startAnimation();
  };

  const handleMouseLeave = () => {
    targetRef.current.x = 0;
    targetRef.current.y = 0;
    startAnimation();
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-blue-50 dark:from-gray-950 dark:to-slate-950">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-sm md:text-base font-semibold tracking-wider text-blue-600 dark:text-blue-400 mb-4 uppercase">
            Get to Know Me
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
            About Me
          </h1>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Card with Full Image and 3D Effect */}
          <div className="lg:col-span-1 p-4" data-aos="fade-right">
            <div 
              ref={cardRef}
              className="relative h-[400px] group"
              style={{
                perspective: '1000px',
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div
                ref={tiltRef}
                className="relative w-full h-full transition-all duration-300 ease-out rounded-xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-200/30 dark:border-gray-700/30"
                style={{
                  transform: 'rotateX(0deg) rotateY(0deg)',
                  transformStyle: 'preserve-3d',
                  willChange: 'transform',
                }}
              >
                {/* Animated gradient border on hover - very subtle */}
                <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-0">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-10" />
                </div>
                {/* Full Card Image */}
                <Image
                  src="/images/pikiw.jpg"
                  alt="Fiqih Badrian"
                  fill
                  className="object-cover relative z-[1]"
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                
                {/* Overlay gradient for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-[2]" />
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 -translate-x-full transform transition-transform duration-1000 group-hover:translate-x-full z-[3] pointer-events-none">
                  <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                </div>
                
                {/* Name on top center */}
                <div className="absolute top-8 left-0 right-0 text-center z-[10]">
                  <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                    Fiqih Badrian
                  </h3>
                  <p className="text-lg text-gray-300 mt-1">Front End Developer</p>
                </div>
                
                {/* Bottom Contact Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-6 py-3 flex items-center justify-between z-[10]">
                  <span className="text-gray-900 dark:text-white font-semibold text-base">
                    Contact
                  </span>
                  <Link
                    href="/contact"
                    className="bg-gray-800/90 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors font-medium text-sm"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="lg:col-span-2" data-aos="fade-left">
            <div className="group relative overflow-hidden rounded-2xl border border-gray-200/30 dark:border-gray-700/30 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl p-8 h-full">
              {/* Animated gradient border on hover - very subtle */}
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-0">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-10" />
              </div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full transform transition-transform duration-1000 group-hover:translate-x-full z-[1] pointer-events-none">
                <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-xl md:text-base font-semibold tracking-wider text-blue-600 dark:text-blue-400 mb-4 uppercase">
                  About Me
                </h2>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Biography
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Hi! I&apos;m Fiqih Badrian, a passionate <strong>Front End Developer</strong> with a love for creating beautiful and functional web experiences. I specialize in building modern, responsive websites using the latest technologies.
                </p>
                <p>
                  My journey in web development started with a curiosity about how websites work, and it has grown into a passion for crafting digital solutions that make a difference. I believe in writing clean, maintainable code and creating interfaces that users love.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to open source projects, or learning about the latest trends in web development and design.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    
  );
}
