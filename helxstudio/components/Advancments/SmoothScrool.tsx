"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    const win = window as unknown as { lenis?: Lenis };
    win.lenis = lenis;

    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    // If initial URL has a hash, scroll to it smoothly
    if (window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          lenis.scrollTo(el as HTMLElement, { offset: -80 });
        }
      }, 300);
    }

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete win.lenis;
    };
  }, []);

  return <>{children}</>;
}
