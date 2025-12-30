"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { HiMenu, HiX } from "react-icons/hi";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Navbar Wrapper */}
      <div className="w-full bg-gray-100 dark:bg-[#2d5197] flex justify-center py-4 transition-colors">
        
        {/* Navbar Container */}
        <nav className="w-[90%] md:w-full max-w-5xl bg-white dark:bg-[#1e2a47] rounded-full flex items-center justify-between px-4 md:px-8 py-3 relative shadow-sm transition-colors">

          {/* Logo */}
          <h1 className="text-xl md:text-2xl font-extrabold tracking-wide text-gray-900 dark:text-white transition-colors">
            BIAN
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 md:gap-8 text-lg">
            <Link href="/" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-gray-300 transition-colors">Home</Link>
            <Link href="/about" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-gray-300 transition-colors">About</Link>
            <Link href="/contact" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-gray-300 transition-colors">Contact</Link>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="hidden md:flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && (theme === 'dark' ? <FaSun /> : <FaMoon />)}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-gray-800 dark:text-white text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-[#ffffffda] flex flex-col py-4 gap-4 text-center text-lg transition-colors">
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-blue-600 dark:hover:text-white text-base md:text-lg">Home</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="hover:text-blue-600 dark:hover:text-white text-base md:text-lg">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-blue-600 dark:hover:text-white text-base md:text-lg">Contact</Link>
        </div>
      )}
    </>
  );
}
