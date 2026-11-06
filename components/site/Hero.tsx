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
      <h1 className="text-white mt-3.5">
        Where accounting{" "}
        <span className="headline-highlight">finally balances.</span>
      </h1>

      {/* Lead description */}
      <p className="hero-lead mt-4 text-[#c3cde4] leading-relaxed max-w-[520px] mx-auto min-[1025px]:mx-0">
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
          className="btn-gold hero-cta-btn font-bold rounded-full inline-flex items-center gap-2"
        >
          Explore courses ↗
        </Link>
        <Link
          href="/about"
          className="btn-ghost hero-cta-btn font-bold rounded-full inline-flex items-center gap-2"
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

function HeroStageContent({
  debug,
  includeGlassCard = false,
}: {
  debug: boolean;
  includeGlassCard?: boolean;
}) {
  return (
    <>
      {/* Dev-only overlay (?debug=1): Stage edges & Arch rectangle */}
      {debug && (
        <>
          {/* Stage edge outline */}
          <div
            className="absolute inset-0 pointer-events-none z-30"
            style={{
              border: "1px solid rgba(0, 255, 102, 0.6)",
            }}
          >
            <span className="absolute bottom-2 right-2 text-[10px] font-mono text-[#00FF66] bg-black/80 px-1.5 py-0.5 rounded">
              Stage edge (var(--W))
            </span>
          </div>

          {/* Arch rectangle (left 58.0%, width 37.8%, top 17%, bottom 0) */}
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
              Arch bounds (58.0% - 95.8%, centre 76.9%, top 17%)
            </span>
          </div>
        </>
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

      {/* Glass card on wide desktop inside the stage */}
      {includeGlassCard && (
        <div className="stage-glass-card">
          <HeroLearningLoop />
        </div>
      )}
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
    <section className="hero">
      {/* Dev-only overlay (?debug=1): Nav bottom line and Hero bottom line */}
      {debug && (
        <div className="pointer-events-none fixed inset-0 z-50">
          <div
            style={{
              position: "absolute",
              top: "var(--nav-h, 72px)",
              left: 0,
              right: 0,
              borderBottom: "2px dashed #00FF66",
            }}
          >
            <span className="bg-black/90 text-[#00FF66] text-[10px] font-mono px-2 py-0.5 rounded ml-4">
              Nav bottom (var(--nav-h))
            </span>
          </div>
          <div
            style={{
              position: "absolute",
              top: "var(--H, 100vh)",
              left: 0,
              right: 0,
              borderBottom: "2px solid #00FF66",
            }}
          >
            <span className="bg-black/90 text-[#00FF66] text-[10px] font-mono px-2 py-0.5 rounded ml-4">
              Hero bottom / Fold (var(--H))
            </span>
          </div>
        </div>
      )}

      {/* ============================================================
          1. DESKTOP WIDE VIEW (aspect-ratio > 29/20, width > 600px):
             Height-driven stage, top cropped under nav, copy on left
          ============================================================ */}
      <div className="hero-wide-view w-full h-full relative">
        <div className="hero-copy">
          <HeroCopy align="left" />
        </div>

        <div className="hero-stage">
          <HeroStageContent debug={debug} includeGlassCard={true} />
        </div>
      </div>

      {/* ============================================================
          2. STACKED VIEW FOR NON-WIDE WINDOWS (aspect-ratio <= 29/20, width > 600px):
             Text first, stage below full-bleed with top mask, card below
          ============================================================ */}
      <div className="hero-stacked-view w-full relative">
        <div className="hero-copy">
          <HeroCopy align="center" />
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="hero-stage">
            <HeroStageContent debug={debug} includeGlassCard={false} />
          </div>
        </div>

        <div className="w-full max-w-[480px] mx-auto mt-4 px-4 relative z-10">
          <HeroLearningLoop />
        </div>
      </div>

      {/* ============================================================
          3. PHONE VIEW (width <= 600px):
             Preserved Mobile Flow
          ============================================================ */}
      <div className="hero-mobile-view w-full pt-[104px] pb-12 px-5">
        <HeroCopy align="left" />

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

        <div className="w-full max-w-[440px] mx-auto mt-6">
          <HeroLearningLoop />
        </div>
      </div>
    </section>
  );
}
