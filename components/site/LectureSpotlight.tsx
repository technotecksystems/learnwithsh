"use client";

import { useState } from "react";

export function LectureSpotlight() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative z-10 py-20 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy */}
          <div>
            <div className="eyebrow-badge">Lecture spotlight</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white">
              Accounting concepts, <span className="cyan-text">made clearer.</span>
            </h2>
            <p className="mt-5 text-[#c3cde4] text-base sm:text-lg leading-relaxed max-w-[540px]">
              Every topic is taught step by step in full recorded lectures, with
              worked examples you can pause, rewind and revisit anytime.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-xs sm:text-sm text-[#F7F7FC] hover:border-gold hover:text-gold transition-colors">
                Worked examples
              </span>
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-xs sm:text-sm text-[#F7F7FC] hover:border-gold hover:text-gold transition-colors">
                Past paper practice
              </span>
              <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-xs sm:text-sm text-[#F7F7FC] hover:border-gold hover:text-gold transition-colors">
                Exam focus
              </span>
            </div>
          </div>

          {/* Right Column: Player Preview Card */}
          <div className="p-6 sm:p-8 rounded-[24px] bg-gradient-to-br from-[#131A36]/90 to-[#0B1026]/95 border border-cyan/30 shadow-[0_30px_70px_-20px_rgba(24,215,245,0.25)] backdrop-blur-xl">
            {/* Top Bar */}
            <div className="flex items-center justify-between text-xs text-[#A9B6D3] pb-4 border-b border-white/10">
              <span className="font-mono text-[11px] tracking-wider text-cyan">
                SAMPLE LESSON PREVIEW
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono">
                1080p HD
              </span>
            </div>

            {/* Player Center Stage */}
            <div className="flex flex-col items-center justify-center py-10 sm:py-12 text-center">
              {/* Play Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause preview" : "Play preview"}
                aria-pressed={isPlaying}
                className={`relative w-20 h-20 sm:w-22 sm:h-22 rounded-full border flex items-center justify-center text-white text-3xl cursor-pointer transition-all duration-300 ${
                  isPlaying
                    ? "border-cyan bg-cyan/20 shadow-[0_0_40px_rgba(24,215,245,0.6)] scale-105"
                    : "border-cyan/60 bg-cyan/15 hover:scale-105 shadow-[0_0_30px_rgba(24,215,245,0.35)]"
                }`}
              >
                {/* Pulsing ring when active */}
                {isPlaying && (
                  <span className="absolute inset-[-8px] rounded-full border-2 border-cyan animate-ping opacity-50" />
                )}
                <span className="translate-x-0.5">{isPlaying ? "❚❚" : "▶"}</span>
              </button>

              <b className="font-heading font-extrabold text-xl sm:text-2xl text-white mt-6 mb-1">
                Financial Statements
              </b>
              <span className="text-xs sm:text-sm text-[#A9B6D3]">
                Assets · Liabilities · Equity
              </span>
            </div>

            {/* Video Progress Bar */}
            <div className="h-1.5 rounded-full bg-white/15 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-gold to-crimson transition-all duration-700 ease-out rounded-full"
                style={{ width: isPlaying ? "67%" : "25%" }}
              />
            </div>

            {/* Status caption */}
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#A9B6D3]">
              <span>
                {isPlaying
                  ? "Playing sample lecture (08:24 / 12:30)"
                  : "Select play to preview the interaction"}
              </span>
              <span className="text-cyan font-bold">{isPlaying ? "67%" : "25%"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
