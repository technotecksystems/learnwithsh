import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Icon } from "@/components/ui/Icon";
import { SITE_CONFIG } from "@/content/site";

export const metadata: Metadata = {
  title: "Accounting Resources & Formulae Booklets",
  description:
    "Formulae booklets, past paper walkthroughs, and revision notes for O Level, AS & A Level Accounting by Sir Sahibzada Hammad.",
};

export default function ResourcesPage() {
  const topics = SITE_CONFIG.formulaeTopics;

  return (
    <>
      <PageHeader
        eyebrow="Learning resources"
        title={
          <>
            Revision aids that turn <span className="cyan-text">lectures into marks.</span>
          </>
        }
        subtitle="Included with every course pack: high-yield formulae booklets, worked past paper sessions, format reference sheets, and chapter checklists."
      />

      {/* 3 Core Resources Cards */}
      <section className="relative z-10 py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-[22px] bg-gradient-to-br from-[#131A36]/85 to-[#0B1026]/90 border border-white/10 hover:border-cyan/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-crimson/20 border border-crimson flex items-center justify-center text-cyan mb-6">
                <Icon name="play" size={22} color="#18D7F5" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Recorded lectures
              </h3>
              <p className="text-sm text-[#A9B6D3] leading-relaxed">
                Complete syllabus lectures, taught chapter by chapter and available
                anytime with bookmarking and position resume.
              </p>
            </div>

            <div className="p-8 rounded-[22px] bg-gradient-to-br from-[#131A36]/85 to-[#0B1026]/90 border border-white/10 hover:border-cyan/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-crimson/20 border border-crimson flex items-center justify-center text-cyan mb-6">
                <Icon name="file" size={22} color="#18D7F5" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Past paper sessions
              </h3>
              <p className="text-sm text-[#A9B6D3] leading-relaxed">
                Worked, step-by-step solutions to recent Cambridge exam papers,
                demonstrating exactly how marks are awarded by examiners.
              </p>
            </div>

            <div className="p-8 rounded-[22px] bg-gradient-to-br from-[#131A36]/85 to-[#0B1026]/90 border border-white/10 hover:border-cyan/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-crimson/20 border border-crimson flex items-center justify-center text-cyan mb-6">
                <Icon name="chart" size={22} color="#18D7F5" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Formulae booklets
              </h3>
              <p className="text-sm text-[#A9B6D3] leading-relaxed">
                Quick-reference financial statements formats, accounting ratios,
                depreciation schedules, and essential revision formulae.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulae Booklet Topic Chips Section */}
      <section className="relative z-10 py-20 bg-[#070D20]/70 border-y border-white/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="eyebrow-badge">In the formulae booklet</div>
          <h2 className="text-3xl sm:text-4xl text-white mb-4">
            Quick answers to <span className="cyan-text">common topics.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A9B6D3] max-w-[620px] mb-8 leading-relaxed">
            Sir Hammad&apos;s verified formulae booklets provide succinct, tested
            formats so you never drop marks on year-end adjustments or ratio
            definitions.
          </p>

          <div className="flex flex-wrap gap-2.5 sm:gap-3 max-w-[900px]">
            {topics.map((topic) => (
              <span
                key={topic}
                className="px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.04] text-xs sm:text-sm text-white hover:border-gold hover:text-gold transition-colors"
              >
                {topic}
              </span>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4 flex-wrap">
            <Link
              href="/courses"
              className="btn-gold px-7 py-3.5 text-sm font-bold rounded-full inline-flex items-center gap-2"
            >
              Get a course pack ↗
            </Link>
            <Link
              href="/portal"
              className="btn-ghost px-6 py-3.5 text-sm font-bold rounded-full inline-flex items-center gap-2"
            >
              Portal Resource Library ↗
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
