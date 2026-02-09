"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 20,
      once: true,
      delay: 0,
      easing: 'ease-in-out',
      disable: false,
    });
  }, []);

  return null;
}
