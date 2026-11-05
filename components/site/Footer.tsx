"use client";

import Link from "next/link";
import { Doodles } from "@/components/ui/Doodles";
import { Wordmark } from "@/components/ui/Wordmark";
import { SITE_CONFIG } from "@/content/site";

export function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 bg-[#070D20] pt-20 pb-0 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-14 pb-14">
          {/* Column 1: Brand & Instagram */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 font-heading text-lg font-extrabold tracking-tight"
            >
              <i className="w-[36px] h-[36px] rounded-xl grid place-items-center font-heading font-extrabold text-[14px] not-italic text-[#1a1205] bg-gradient-to-br from-[#FFE089] via-[#FFBD59] to-[#F59F2D] shadow-[0_6px_18px_-4px_rgba(255,189,89,0.6)] rotate-[-8deg]">
                SH
              </i>
              <span className="text-white">
                Learn with <b className="text-gold">SH</b>
              </span>
            </Link>

            <p className="mt-4 text-sm text-[#A9B6D3] leading-relaxed max-w-[320px]">
              Clear, structured O, AS and A Level Accounting with Sir Hammad. Learn
              from recorded lectures, practise with past papers and track your
              progress.
            </p>

            <div className="mt-4 flex flex-col gap-2 text-xs">
              <a
                href={SITE_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#25D366] hover:text-[#52e78b] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                WhatsApp: {SITE_CONFIG.contact.whatsapp} ↗
              </a>
              <a
                href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                className="inline-flex items-center gap-1.5 text-[#cfd8ee] hover:text-cyan font-medium transition-colors"
              >
                Call: {SITE_CONFIG.contact.phone}
              </a>
              <a
                href={SITE_CONFIG.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-gold hover:text-cyan font-semibold transition-colors"
              >
                Instagram: {SITE_CONFIG.contact.instagramHandle} ↗
              </a>
            </div>
          </div>

          {/* Column 2: EXPLORE */}
          <div>
            <h4 className="font-mono text-xs font-bold text-gold tracking-widest uppercase mb-4">
              EXPLORE
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-[#cfd8ee]">
              <Link href="/" className="hover:text-cyan transition-colors">
                Home
              </Link>
              <Link href="/courses" className="hover:text-cyan transition-colors">
                Courses
              </Link>
              <Link href="/about" className="hover:text-cyan transition-colors">
                About Sir Hammad
              </Link>
              <Link href="/resources" className="hover:text-cyan transition-colors">
                Resources
              </Link>
            </div>
          </div>

          {/* Column 3: COURSES */}
          <div>
            <h4 className="font-mono text-xs font-bold text-gold tracking-widest uppercase mb-4">
              COURSES
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-[#cfd8ee]">
              <Link
                href="/courses/o-level-accounting"
                className="hover:text-cyan transition-colors"
              >
                O Level Accounting
              </Link>
              <Link
                href="/courses/as-level-accounting"
                className="hover:text-cyan transition-colors"
              >
                AS Level Accounting
              </Link>
              <Link
                href="/courses/a-level-accounting"
                className="hover:text-cyan transition-colors"
              >
                A Level Accounting
              </Link>
              <Link
                href="/courses/revision-past-papers"
                className="hover:text-cyan transition-colors"
              >
                Revision & Past Papers
              </Link>
            </div>
          </div>

          {/* Column 4: STUDENTS */}
          <div>
            <h4 className="font-mono text-xs font-bold text-gold tracking-widest uppercase mb-4">
              STUDENTS
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-[#cfd8ee]">
              <Link href="/portal" className="hover:text-cyan transition-colors">
                Student Portal
              </Link>
              <Link href="/courses" className="hover:text-cyan transition-colors">
                Enrol Now
              </Link>
              <Link href="/contact" className="hover:text-cyan transition-colors">
                Contact & Inquiries
              </Link>
              <a
                href={SITE_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors inline-flex items-center gap-1.5"
              >
                WhatsApp Sir Hammad ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-6 pb-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#A9B6D3]">
          <span>© 2026 Learn with SH. All rights reserved.</span>
          <span className="italic font-medium text-white/90 tracking-wide">
            made by Rayan
          </span>
          <button
            onClick={scrollToTop}
            className="hover:text-cyan transition-colors cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>
      </div>

      {/* Animated SVG Doodles Strip */}
      <Doodles />

      {/* Giant Shimmering Brand Wordmark */}
      <Wordmark />
    </footer>
  );
}
