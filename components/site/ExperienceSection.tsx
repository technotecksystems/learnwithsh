"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SITE_CONFIG } from "@/content/site";

export function ExperienceSection() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const target = SITE_CONFIG.verifiedFacts.experienceYears;
          let current = 0;
          const interval = setInterval(() => {
            current += 1;
            setCount(current);
            if (current >= target) {
              clearInterval(interval);
            }
          }, 180);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const institutes = SITE_CONFIG.verifiedFacts.institutes;

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-20 sm:py-24 bg-gradient-to-b from-[#070D20]/90 to-[#070D20]/60 border-y border-white/10"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="eyebrow-badge">Teaching experience</div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white">
          7 years of <span className="cyan-text">teaching experience.</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 min-[1000px]:grid-cols-[0.8fr_2.2fr] gap-6 items-stretch">
          {/* Big Number Card */}
          <div className="p-8 sm:p-10 rounded-[24px] bg-gradient-to-br from-crimson to-burgundy border border-gold/40 flex flex-col justify-center shadow-[0_30px_60px_-28px_rgba(198,40,73,0.8)]">
            <b className="font-heading font-extrabold text-[90px] sm:text-[120px] lg:text-[140px] leading-[0.85] text-gold tracking-tighter">
              {count}
            </b>
            <span className="text-base sm:text-lg font-bold text-white mt-4 leading-tight">
              years of teaching experience
            </span>
          </div>

          {/* Institutes Grid */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 h-full">
              {institutes.map((inst) => (
                <div
                  key={inst.name}
                  className="bg-white rounded-[20px] p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-16px_rgba(255,189,89,0.5)] group"
                >
                  <div className="w-full aspect-square relative flex items-center justify-center p-2">
                    <Image
                      src={inst.logo}
                      alt={`${inst.name} logo`}
                      width={180}
                      height={180}
                      className="w-full h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-[#0B1026] font-heading font-bold text-xs sm:text-[13px] text-center leading-snug">
                    {inst.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clear honesty note */}
        <p className="mt-8 font-mono text-xs text-[#A9B6D3]/70">
          * {SITE_CONFIG.placeholders.qualificationsNotice}
        </p>
      </div>
    </section>
  );
}
