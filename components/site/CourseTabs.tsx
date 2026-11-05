"use client";

import Link from "next/link";
import { useState } from "react";
import { COURSES } from "@/content/courses";
import { SITE_CONFIG } from "@/content/site";

export function CourseTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const currentCourse = COURSES[activeTab];

  return (
    <section className="relative z-10 py-20 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="eyebrow-badge">Choose your level</div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white">
          Four packs. <span className="cyan-text">Four different syllabuses.</span>
        </h2>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3.5 my-8">
          {COURSES.map((course, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={course.slug}
                onClick={() => setActiveTab(idx)}
                className={`flex flex-col items-start px-5 py-3.5 rounded-[16px] border transition-all duration-300 text-left ${
                  isSelected
                    ? "bg-gradient-to-br from-[#C62849]/60 via-[#841329]/70 to-[#0B1026] border-gold shadow-[0_14px_34px_-14px_rgba(198,40,73,0.8)] text-white"
                    : "bg-white/[0.03] border-white/10 text-[#A9B6D3] hover:border-gold/50 hover:text-white"
                }`}
              >
                <small className="font-mono text-[10px] tracking-widest text-[#A9B6D3] uppercase">
                  {course.code.split(" · ")[0]}
                </small>
                <b className="font-heading font-extrabold text-base sm:text-lg text-white mt-0.5">
                  {course.level}
                </b>
              </button>
            );
          })}
        </div>

        {/* Active Course Card Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 p-6 sm:p-10 rounded-[26px] bg-gradient-to-br from-[#131A36]/85 to-[#0B1026]/95 border border-white/10 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.8)] animate-in fade-in duration-300">
          {/* Left Column: Details & Enrollment */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-gold uppercase tracking-wider">
                {currentCourse.code}
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white mt-2 mb-3">
                {currentCourse.name}
              </h3>
              <p className="text-[#A9B6D3] text-sm sm:text-base leading-relaxed">
                {currentCourse.blurb}
              </p>

              {/* Includes checklist */}
              <ul className="my-6 grid gap-2.5 text-sm text-[#F7F7FC]">
                {currentCourse.includes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-gold/20 text-gold font-bold text-xs flex items-center justify-center flex-shrink-0">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price & Action */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
              <div>
                <span className="block text-[11px] font-mono text-[#A9B6D3] uppercase">
                  Fee status
                </span>
                <b className="font-heading font-extrabold text-2xl sm:text-3xl text-cyan">
                  {SITE_CONFIG.placeholders.priceLabel}
                </b>
              </div>

              <div className="flex items-center gap-2.5 ml-auto">
                <Link
                  href={`/courses/${currentCourse.slug}`}
                  className="btn-ghost px-5 py-3 text-xs sm:text-sm font-bold rounded-full"
                >
                  Syllabus details ↗
                </Link>
                <Link
                  href={`/courses/${currentCourse.slug}#enrol`}
                  className="btn-gold px-6 py-3 text-xs sm:text-sm font-bold rounded-full inline-flex items-center gap-1.5"
                >
                  Enrol now ↗
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Topics Covered List */}
          <div>
            <div className="font-mono text-xs text-[#A9B6D3] uppercase tracking-wider mb-3.5">
              What you&apos;ll cover ({currentCourse.topics.length} core topics)
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentCourse.topics.map((topic, i) => (
                <div
                  key={topic}
                  className="group flex items-start gap-3 p-3.5 rounded-xl border border-white/10 bg-white/[0.03] text-xs sm:text-[13px] leading-snug transition-all duration-300 hover:border-cyan hover:bg-cyan/[0.06] hover:translate-x-1"
                >
                  <span className="font-mono font-bold text-[11px] text-gold pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white group-hover:text-cyan transition-colors">
                    {topic}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-[#A9B6D3]/80">
              * Topic outline follows Cambridge standards. Sir Hammad will confirm the exact final lecture plan per pack.
            </p>
          </div>
        </div>

        <div className="mt-7">
          <Link
            href="/courses"
            className="btn-ghost px-6 py-3 text-sm font-bold rounded-full inline-flex items-center gap-2"
          >
            See full course details ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
