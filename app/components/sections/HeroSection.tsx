"use client";

import Image from 'next/image';
import ColorBends from '@/components/ColorBends';
import TypeWriter from '../TypeWriter';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-blue-50 via-purple-50 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">
      <div className="absolute inset-0 w-full h-full">
        <ColorBends
          rotation={45}
          speed={0.2}
          colors={["#29fbff","#f4435e"]}
          transparent
          autoRotate={0}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0.8}
          parallax={0.5}
          noise={0.1}
        />
      </div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-red-400 text-white px-4 py-1 rounded-full text-xs font-poppins font-bold mb-6" data-aos="zoom-in">
              BEGINNER
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-poppins leading-tight text-gray-800 dark:text-[#e5d9c3] transition-colors" data-aos="fade-up" data-aos-delay="200">
              HELLO I'M<br />FIQIH BADRIAN
            </h1>
            <div className="text-xl lg:text-2xl mt-6 text-gray-600 dark:text-gray-200 transition-colors" data-aos="fade-up" data-aos-delay="400">
              <TypeWriter 
                texts={["I'm Front End Developer", "I Like Code"]}
                speed={100}
                delay={2000}
              />
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
            />
          </div>
        </div>
      </div>
    </section>
  );
}
