"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroLearningLoop } from "@/components/site/HeroLearningLoop";

function HeroCopy({ align = "left" }: { align?: "left" | "center" }) {
  const isCentered = align === "center";

  return (
    <div
      className={
        isCentered
          ? "w-full max-w-[640px] mx-auto text-center"
          : "w-full max-w-[620px]"
      }
    >
      {/* Eyebrow */}
      <div className={`eyebrow-badge ${isCentered ? "mx-auto" : ""}`}>
        O Level · AS Level · A Level Accounting
      </div>

      {/* Headline */}
      <h1 className="text-[32px] min-[420px]:text-[38px] sm:text-[54px] min-[1025px]:text-[clamp(34px,5.2cqw,76px)] leading-[1.04] text-white mt-3.5">
        Where accounting{" "}
        <span className="headline-highlight">finally balances.</span>
      </h1>

      {/* Lead description */}
      <p className="mt-4 text-[#c3cde4] text-base sm:text-lg min-[1025px]:text-[clamp(14px,1.35cqw,18px)] leading-relaxed max-w-[520px] mx-auto min-[1025px]:mx-0">
        Learn with Sir Hammad through full recorded lectures, worked past
        papers and formulae booklets, then track every step in your own
        student portal.
      </p>

      {/* CTA Buttons */}
      <div
        className={`mt-7 flex flex-wrap items-center gap-3.5 ${
          isCentered ? "justify-center" : ""
        }`}
      >
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
      <div
        className={`mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-[13px] text-[#A9B6D3] ${
          isCentered ? "justify-center" : ""
        }`}
      >
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
  );
}

function HeroStageContent({ debug }: { debug: boolean }) {
  return (
    <>
      {/* Temporary Debug Outline (?debug=1) */}
      {debug && (
        <div
          className="absolute pointer-events-none z-30"
          style={{
            left: "58%",
            width: "37.8%",
            top: "17%",
            bottom: "0",
            border: "2px dashed #00FF66",
            backgroundColor: "rgba(0, 255, 102, 0.08)",
          }}
        >
          <span className="absolute top-2 left-2 text-[10px] font-mono text-[#00FF66] bg-black/80 px-1 rounded">
            Arch (58.0% - 95.8%, centre 76.9%)
          </span>
        </div>
      )}

      {/* Transparent Portrait of Sir Hammad (Centred at 76.9% on 1672x941 artwork) */}
      <div className="hero-portrait">
        <Image
          src="/images/portrait_transparent.png"
          alt="Sir Sahibzada Hammad, accounting educator"
          width={750}
          height={760}
          priority
          className="w-full h-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] pointer-events-none select-none"
        />
      </div>

      {/* Chip 1: Recorded Lectures (top: 26%; right: 4.5%) */}
      <div className="hero-chip stage-chip-1 pointer-events-auto">
        <span className="text-[#18D7F5] mr-1.5">▶</span> Recorded lectures
      </div>

      {/* Chip 2: 7 Years Experience (bottom: 8%; right: 40%) */}
      <div className="hero-chip stage-chip-2 pointer-events-auto flex items-center gap-2">
        <b className="font-heading font-extrabold text-gold leading-none">7</b>
        <span className="leading-tight text-[#cfd8ee]">
          years teaching
          <br />
          experience
        </span>
      </div>

      {/* Chip 3: Past Papers (bottom: 30%; right: 3%) */}
      <div className="hero-chip stage-chip-3 pointer-events-auto">
        <span className="text-gold mr-1.5">✓</span> Past papers
      </div>
    </>
  );
}

export function Hero() {
  const [debug, setDebug] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDebug(new URLSearchParams(window.location.search).get("debug") === "1");
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* ============================================================
          1. DESKTOP VIEW (>= 1025px): Stage is the unit coordinate space
          ============================================================ */}
      <div className="hidden min-[1025px]:block relative w-full pt-[90px] pb-8 overflow-hidden">
        <div className="max-w-[1520px] mx-auto px-4 relative">
          <div className="hero-stage">
            {/* Left 52% overlay for copy */}
            <div className="absolute left-[3%] min-[1280px]:left-[4%] top-1/2 -translate-y-1/2 w-[50%] max-w-[620px] z-10 pointer-events-auto">
              <HeroCopy align="left" />
            </div>

            {/* Desktop HeroLearningLoop glass card */}
            <div className="absolute left-[47%] min-[1280px]:left-[49%] bottom-[3%] w-[33%] max-w-[440px] pointer-events-auto z-10">
              <HeroLearningLoop />
            </div>

            {/* Stage content: arch bounds, portrait, chips */}
            <HeroStageContent debug={debug} />
          </div>
        </div>
      </div>

      {/* ============================================================
          2. IPAD / TABLET VIEW (601px to 1024px): STACKED Unit Stage
          ============================================================ */}
      <div className="hidden min-[601px]:max-[1024px]:block relative w-full pt-[110px] pb-12 overflow-hidden">
        {/* Text block first (full width, max-width 640px, normal flow) */}
        <div className="max-w-[640px] mx-auto px-6 text-center">
          <HeroCopy align="center" />
        </div>

        {/* Stage full-bleed beneath it with margin-top: -6vw and top gradient fade */}
        <div className="relative w-full overflow-hidden mt-[-6vw]">
          <div className="absolute top-0 left-0 right-0 h-[24%] bg-gradient-to-b from-[#0B1026] to-transparent z-10 pointer-events-none" />
          <div className="hero-stage">
            <HeroStageContent debug={debug} />
          </div>
        </div>

        {/* "Your learning, in motion" glass card below stage (no overlap with portrait) */}
        <div className="w-full max-w-[480px] mx-auto mt-4 px-4 relative z-10">
          <HeroLearningLoop />
        </div>
      </div>

      {/* ============================================================
          3. PHONE VIEW (<= 600px): Preserved Mobile Flow
          ============================================================ */}
      <div className="block min-[601px]:hidden relative w-full pt-[104px] pb-12 px-5">
        {/* Text Block */}
        <HeroCopy align="left" />

        {/* Mobile Arch Portrait Card */}
        <div className="relative aspect-[4/5] w-full max-w-[340px] mx-auto mt-8 rounded-[999px_999px_30px_30px] overflow-hidden border border-gold/40 bg-gradient-to-b from-[#C62849]/60 via-[#541329]/80 to-[#0B1026] shadow-[0_40px_80px_-30px_rgba(198,40,73,0.6)]">
          <Image
            src="/images/portrait_transparent.png"
            alt="Sir Sahibzada Hammad, accounting educator"
            width={400}
            height={500}
            priority
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[108%] max-w-none object-contain"
          />
        </div>

        {/* Learning Loop beneath it */}
        <div className="w-full max-w-[440px] mx-auto mt-6">
          <HeroLearningLoop />
        </div>
      </div>
    </section>
  );
}
