"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.15,
      smoothWheel: true,
      anchors: true,
    });

    lenis.on("scroll", ({ scroll, limit, velocity }) => {
      const progress = limit > 0 ? scroll / limit : 0;
      document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
      document.documentElement.style.setProperty(
        "--scroll-velocity",
        Math.min(Math.abs(velocity), 3).toFixed(4),
      );
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
