"use client";

import { useEffect, useRef, useState } from "react";
import { SITE_CONFIG } from "@/content/site";

export function MethodSteps() {
  const steps = SITE_CONFIG.methodSteps;
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileBarRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Desktop horizontal line reveal via IntersectionObserver (zero scroll event overhead)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Mobile scroll line updater with RAF
    let ticking = false;
    let sectionTop = 0;
    let sectionHeight = 0;

    const measure = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        sectionTop = rect.top + window.scrollY;
        sectionHeight = rect.height;
      }
    };

    measure();

    const onScroll = () => {
      if (window.innerWidth <= 600 && mobileBarRef.current && sectionHeight > 0) {
        const triggerY = window.scrollY + window.innerHeight * 0.6;
        const progress = Math.min(
          1,
          Math.max(0, (triggerY - sectionTop) / sectionHeight)
        );
        mobileBarRef.current.style.transform = `scaleY(${progress}) translateZ(0)`;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking && window.innerWidth <= 600) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", measure, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-20 sm:py-24 bg-gradient-to-b from-[#070D20]/90 to-[#070D20]/60 border-y border-white/10"
      style={{ contain: "content" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="eyebrow-badge">The SH method</div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white">
          From first lecture to <span className="cyan-text">final paper.</span>
        </h2>

        {/* Steps container */}
        <div className="relative mt-14">
          {/* Desktop Horizontal Connecting Line (GPU scaleX) */}
          <div className="hidden min-[601px]:block absolute top-[28px] left-[6%] right-[6%] h-[2px] bg-white/10 overflow-hidden pointer-events-none">
            <div
              className="h-full bg-gradient-to-r from-crimson via-gold to-cyan transition-transform duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
              style={{
                transform: isInView ? "scaleX(1) translateZ(0)" : "scaleX(0) translateZ(0)",
                transformOrigin: "left",
                willChange: "transform",
              }}
            />
          </div>

          {/* Mobile Vertical Track Line (GPU scaleY) */}
          <div className="min-[601px]:hidden absolute top-8 bottom-8 left-[28px] w-[2px] bg-white/10 -translate-x-1/2 overflow-hidden pointer-events-none">
            <div
              ref={mobileBarRef}
              className="w-full h-full bg-gradient-to-b from-crimson via-gold to-cyan origin-top"
              style={{
                transform: "scaleY(0) translateZ(0)",
                willChange: "transform",
              }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 min-[601px]:grid-cols-4 gap-8 min-[601px]:gap-6">
            {steps.map((step) => {
              return (
                <div
                  key={step.title}
                  className="relative flex min-[601px]:flex-col items-start gap-5 min-[601px]:gap-0"
                >
                  {/* Number Circle */}
                  <div
                    className="w-[56px] h-[56px] rounded-full grid place-items-center font-heading font-extrabold text-xl z-10 flex-shrink-0 bg-[#0B1026] border-2 border-gold text-gold shadow-[0_0_22px_rgba(255,189,89,0.35)]"
                    style={{ transform: "translateZ(0)" }}
                  >
                    {step.number}
                  </div>

                  {/* Step Content */}
                  <div className="min-[601px]:mt-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#A9B6D3] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
