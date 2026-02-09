"use client";

import Image from 'next/image';
import { FaBriefcase } from 'react-icons/fa';

export default function About() {
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
          {/* Profile Card */}
          <div className="lg:col-span-1" data-aos="fade-right">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
                <Image
                  src="/images/logo.png"
                  alt="Fiqih Badrian"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Fiqih Badrian
              </h2>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                Front End Developer
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Based in Indonesia
              </p>
            </div>
          </div>

          {/* Bio Section */}
          <div className="lg:col-span-2" data-aos="fade-left">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                Biography
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Hi! I'm Fiqih Badrian, a passionate <strong>Front End Developer</strong> with a love for creating beautiful and functional web experiences. I specialize in building modern, responsive websites using the latest technologies.
                </p>
                <p>
                  My journey in web development started with a curiosity about how websites work, and it has grown into a passion for crafting digital solutions that make a difference. I believe in writing clean, maintainable code and creating interfaces that users love.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or learning about the latest trends in web development and design.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    
  );
}
