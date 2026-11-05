"use client";

import Link from "next/link";
import Image from "next/image";
import { HeroLearningLoop } from "@/components/site/HeroLearningLoop";

export function Hero() {
  return (
    <section
      className="relative pt-[130px] sm:pt-[150px] pb-16 min-[1000px]:pb-0 overflow-hidden"
      style={{
        // Desktop aspect ratio sizing matching prototype:
        // --iw: max(100vw, 1138px); --ih: calc(var(--iw) * 0.5628)
        minHeight: "min(100vh, 920px)",
      }}
    >
      {/* Background Neon Arch image (Desktop & Mobile) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-no-repeat bg-top bg-cover min-[1000px]:bg-contain min-[1000px]:bg-right-top opacity-35 min-[1000px]:opacity-100 transition-opacity"
        style={{
          backgroundImage: "url('/images/hero_background_neon_arch.png')",
        }}
      />

      {/* Hero container */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 min-[1000px]:grid-cols-[1.1fr_0.9fr] gap-8 items-center min-h-[520px]">
          {/* Left Column: Copy & CTAs */}
          <div className="max-w-[620px] pt-4 min-[1000px]:pt-12">
            {/* Eyebrow */}
            <div className="eyebrow-badge">
              O Level · AS Level · A Level Accounting
            </div>

            {/* Headline */}
            <h1 className="text-[32px] min-[420px]:text-[38px] sm:text-[56px] min-[1200px]:text-[76px] leading-[1.04] text-white">
              Where accounting{" "}
              <span className="headline-highlight">finally balances.</span>
            </h1>

            {/* Lead description */}
            <p className="mt-5 text-[#c3cde4] text-base sm:text-lg leading-relaxed max-w-[520px]">
              Learn with Sir Hammad through full recorded lectures, worked past
              papers and formulae booklets, then track every step in your own
              student portal.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="/courses"
                className="btn-gold px-7 py-3.5 text-sm font-bold rounded-full inline-flex items-center gap-2"
              >
                Explore courses ↗
              </Link>
              <Link
                href="/about"
                className="btn-ghost px-7 py-3.5 text-sm font-bold rounded-full inline-flex items-center gap-2"
              >
                Meet Sir Hammad
              </Link>
            </div>

            {/* Trust bullets */}
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-[13px] text-[#A9B6D3]">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-[2px] bg-gold rotate-45 inline-block" />
                Full lecture recordings
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-[2px] bg-gold rotate-45 inline-block" />
                Past paper sessions
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-[2px] bg-gold rotate-45 inline-block" />
                Formulae booklets
              </span>
            </div>
          </div>

          {/* Right Column (Mobile Portrait view & Learning Loop) */}
          <div className="min-[1000px]:hidden flex flex-col items-center w-full max-w-[460px] mx-auto mt-6">
            <div className="relative aspect-[4/5] w-full max-w-[340px] rounded-[999px_999px_30px_30px] overflow-hidden border border-gold/40 bg-gradient-to-b from-[#C62849]/60 via-[#541329]/80 to-[#0B1026] shadow-[0_40px_80px_-30px_rgba(198,40,73,0.6)]">
              <Image
                src="/images/portrait_transparent.png"
                alt="Sir Sahibzada Hammad, accounting educator"
                width={400}
                height={500}
                priority
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[108%] max-w-none object-contain"
              />
            </div>

            {/* Mobile Learning Loop Card */}
            <div className="w-full mt-6">
              <HeroLearningLoop />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Portrait: Exactly positioned inside the neon arch */}
      {/* Aspect-ratio derived absolute positioning matching prototype reference */}
      <div className="hidden min-[1000px]:block absolute inset-0 pointer-events-none z-[2]">
        <div className="relative w-full h-full max-w-[1440px] mx-auto">
          {/* Transparent Portrait of Sir Hammad */}
          <div
            className="absolute right-[2%] bottom-0 w-[42%] max-w-[560px] h-[85%] flex items-end justify-center"
            style={{ transform: "translateZ(0)" }}
          >
            <Image
              src="/images/portrait_transparent.png"
              alt="Sir Sahibzada Hammad, accounting educator"
              width={540}
              height={720}
              priority
              className="w-full h-auto max-h-[92%] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            />
          </div>

          {/* Floating Glass Chips along the Arch */}
          {/* Chip 1: Recorded Lectures */}
          <div
            className="hero-chip pointer-events-auto"
            style={{ top: "24%", right: "4%" }}
          >
            <span className="text-[#18D7F5] mr-1.5">▶</span> Recorded lectures
          </div>

          {/* Chip 2: 7 Years Experience */}
          <div
            className="hero-chip pointer-events-auto flex items-center gap-2.5"
            style={{ bottom: "35%", right: "37%", animationDelay: "-2s" }}
          >
            <b className="font-heading font-extrabold text-[28px] text-gold leading-none">
              7
            </b>
            <span className="leading-tight text-[11px] text-[#cfd8ee]">
              years teaching
              <br />
              experience
            </span>
          </div>

          {/* Chip 3: Past Papers */}
          <div
            className="hero-chip pointer-events-auto"
            style={{ bottom: "28%", right: "3%", animationDelay: "-3.5s" }}
          >
            <span className="text-gold mr-1.5">✓</span> Past papers
          </div>

          {/* Hero Learning Loop (Desktop Floating Card replacing Double-Entry Engine) */}
          <div className="absolute left-[47%] min-[1200px]:left-[49%] bottom-[3%] w-full max-w-[440px] min-[1200px]:max-w-[460px] pointer-events-auto z-[4]">
            <HeroLearningLoop />
          </div>
        </div>
      </div>
    </section>
  );
}
