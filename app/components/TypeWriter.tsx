"use client";

import { useState, useEffect } from 'react';

interface TypeWriterProps {
  texts: string[];
  speed?: number;
  delay?: number;
  className?: string;
}

export default function TypeWriter({ texts, speed = 100, delay = 2000, className = '' }: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Jika sudah selesai semua text, berhenti
    if (isComplete) return;

    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      // Typing
      if (charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        // Cek apakah ini text terakhir
        if (textIndex === texts.length - 1) {
          // Text terakhir sudah selesai, set complete
          setIsComplete(true);
        } else {
          // Masih ada text lain, tunggu delay lalu lanjut ke text berikutnya
          setTimeout(() => {
            setTextIndex(textIndex + 1);
            setCharIndex(0);
          }, delay);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, textIndex, texts, speed, delay, isComplete]);

  return (
    <span className={className}>
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
}
