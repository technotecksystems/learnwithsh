"use client";

import { useEffect, useRef } from "react";

export function ProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number | null = null;
    let lastProgress = -1;

    const update = () => {
      const scrollY = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalHeight > 0) {
        const progress = Math.min(1, Math.max(0, scrollY / totalHeight));
        // Only update DOM if change is at least 0.001 to avoid unnecessary compositor updates
        if (Math.abs(progress - lastProgress) > 0.0005 && barRef.current) {
          lastProgress = progress;
          barRef.current.style.transform = `scaleX(${progress}) translateZ(0)`;
        }
      }
      rafId = null;
    };

    const handleScroll = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      ref={barRef}
      id="pg"
      role="progressbar"
      aria-label="Page reading progress"
      className="fixed top-0 left-0 right-0 h-[3px] z-[99] pointer-events-none origin-left"
      style={{
        transform: "scaleX(0) translateZ(0)",
        willChange: "transform",
        background: "linear-gradient(90deg, #C62849, #FFBD59, #18D7F5)",
      }}
    />
  );
}
