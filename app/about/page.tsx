import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/site/PageHeader";
import { ExperienceSection } from "@/components/site/ExperienceSection";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "About Sir Sahibzada Hammad",
  description:
    "Learn about Sir Sahibzada Hammad, accounting educator with 7 years of teaching experience across premier Cambridge institutes in Karachi.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="The teacher"
        title={
          <>
            About <span className="cyan-text">Sir Hammad.</span>
          </>
        }
        subtitle="Accounting educator for O Level, AS and A Level students. Focused on clear logic, rigorous double-entry technique, and exam confidence."
      />

      {/* Profile & Biography Section */}
      <section className="relative z-10 py-20 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Arch Portrait */}
            <div className="relative w-full max-w-[380px] mx-auto aspect-[4/5]">
              <div
                className="absolute inset-[-12%] rounded-full opacity-50 blur-[44px] pointer-events-none animate-spinSlow"
                style={{
                  background:
                    "conic-gradient(from 0deg, #C62849, transparent 30%, #18D7F5, transparent 62%, #FFBD59, transparent)",
                }}
              />
              <div className="relative w-full h-full rounded-[999px_999px_30px_30px] bg-gradient-to-b from-[#C62849]/60 via-[#541329]/85 to-[#0B1026] border border-gold/40 overflow-hidden shadow-[0_40px_80px_-30px_rgba(198,40,73,0.6)]">
                <div className="absolute inset-3.5 rounded-[999px_999px_18px_18px] border border-dashed border-white/20 pointer-events-none" />
                <Image
                  src="/images/portrait_transparent.png"
                  alt="Sir Sahibzada Hammad"
                  width={420}
                  height={540}
                  priority
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[106%] max-w-none object-contain"
                />
              </div>
            </div>

            {/* Profile Story */}
            <div>
              <div className="eyebrow-badge">Teaching philosophy</div>
              <h2 className="text-3xl sm:text-4xl text-white">
                Method first, <span className="cyan-text">marks follow.</span>
              </h2>
              <p className="mt-5 text-[#c3cde4] text-base sm:text-lg leading-relaxed">
                Accounting is often feared as a maze of rules and memorised
                formats. Sir Hammad&apos;s approach cuts through rote learning:
                every debit and credit has a reason, every financial statement
                tells a story, and every mark on a Cambridge paper can be earned
                with structured technique.
              </p>
              <p className="mt-4 text-[#c3cde4] text-sm sm:text-base leading-relaxed">
                With 7 years of specialized classroom experience across leading
                institutes including Hexis College, Credo School, The Academy, and
                Veritas Schooling System, Sir Hammad has coached students to
                overcome accounting hurdles from foundational books of prime entry
                to advanced cost accounting and cash flow appraisals.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-xs sm:text-sm text-[#F7F7FC]">
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] inline-flex items-center gap-2">
                  <span className="text-gold font-bold">✓</span> 7 Years Experience
                </span>
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] inline-flex items-center gap-2">
                  <span className="text-gold font-bold">✓</span> Cambridge 7707 & 9706
                </span>
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] inline-flex items-center gap-2">
                  <span className="text-gold font-bold">✓</span> Structured Portal Learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Lessons Work (matching prototype line 121) */}
      <section className="relative z-10 py-20 bg-[#070D20]/60 border-y border-white/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="eyebrow-badge">How lessons work</div>
          <h2 className="text-3xl sm:text-4xl text-white mb-10">
            Three pillars of <span className="cyan-text">fluency.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-[22px] bg-gradient-to-br from-[#131A36]/80 to-[#0B1026]/90 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-crimson/20 border border-crimson flex items-center justify-center text-cyan mb-6">
                <Icon name="book" size={22} color="#18D7F5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                1. Structured Syllabus
              </h3>
              <p className="text-sm text-[#A9B6D3] leading-relaxed">
                Learn every topic in sequence, starting from the double-entry
                foundation and building up to complex financial statements.
              </p>
            </div>

            <div className="p-8 rounded-[22px] bg-gradient-to-br from-[#131A36]/80 to-[#0B1026]/90 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-crimson/20 border border-crimson flex items-center justify-center text-cyan mb-6">
                <Icon name="play" size={22} color="#18D7F5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                2. Worked Examples
              </h3>
              <p className="text-sm text-[#A9B6D3] leading-relaxed">
                Every concept is reinforced with live ledger entries, trial
                balances and step-by-step calculations that show how entries balance.
              </p>
            </div>

            <div className="p-8 rounded-[22px] bg-gradient-to-br from-[#131A36]/80 to-[#0B1026]/90 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-crimson/20 border border-crimson flex items-center justify-center text-cyan mb-6">
                <Icon name="award" size={22} color="#18D7F5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                3. Exam Technique
              </h3>
              <p className="text-sm text-[#A9B6D3] leading-relaxed">
                Past paper sessions build speed, accuracy and confidence under
                examination conditions, highlighting common examiner traps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Institutes Section */}
      <ExperienceSection />

      <CtaBanner />
    </>
  );
}
