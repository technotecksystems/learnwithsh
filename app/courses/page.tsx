import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/site/PageHeader";
import { CourseTabs } from "@/components/site/CourseTabs";
import { CtaBanner } from "@/components/site/CtaBanner";
import { COURSES } from "@/content/courses";
import { SITE_CONFIG } from "@/content/site";

export const metadata: Metadata = {
  title: "Accounting Courses & Syllabuses",
  description:
    "Explore O Level, AS Level, A Level Accounting courses and revision packs taught by Sir Sahibzada Hammad. Complete syllabus coverage and past papers.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Course catalog"
        title={
          <>
            Master Accounting at <span className="cyan-text">every level.</span>
          </>
        }
        subtitle="Each pack follows its own syllabus. Pick your level, inspect the exact topic outlines, and learn with full video recordings and past paper sessions."
      />

      {/* Main Course Switcher & Roadmap */}
      <CourseTabs />

      {/* Course Cards Grid Overview */}
      <section className="relative z-10 py-16 bg-[#070D20]/60 border-y border-white/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="eyebrow-badge">All syllabus packs</div>
          <h2 className="text-3xl sm:text-4xl text-white mb-10">
            Choose your <span className="cyan-text">examination goal.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COURSES.map((course) => (
              <div
                key={course.slug}
                className="p-7 sm:p-8 rounded-[22px] bg-gradient-to-br from-[#131A36]/80 to-[#0B1026]/90 border border-white/10 flex flex-col justify-between hover:border-gold/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-gold uppercase tracking-wider">
                      {course.code}
                    </span>
                    <span className="font-mono text-xs text-cyan bg-cyan/10 px-2.5 py-0.5 rounded-full border border-cyan/20">
                      {course.topics.length} topics
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {course.name}
                  </h3>
                  <p className="text-sm text-[#A9B6D3] leading-relaxed mb-6">
                    {course.blurb}
                  </p>

                  <ul className="grid gap-2 text-xs sm:text-sm text-[#cfd8ee] mb-6">
                    {course.includes.map((inc) => (
                      <li key={inc} className="flex items-center gap-2.5">
                        <span className="text-gold font-bold">✓</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                  <div>
                    <span className="block text-[10px] font-mono text-[#A9B6D3] uppercase">
                      Fee status
                    </span>
                    <b className="font-heading font-extrabold text-xl text-cyan">
                      {SITE_CONFIG.placeholders.priceLabel}
                    </b>
                  </div>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="btn-gold px-5 py-2.5 text-xs font-bold rounded-full"
                  >
                    View course pack ↗
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section matching prototype lines 61, 118 */}
      <section className="relative z-10 py-20 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="eyebrow-badge">Good to know</div>
          <h2 className="text-3xl sm:text-4xl text-white mb-8">
            Questions, <span className="cyan-text">answered.</span>
          </h2>

          <div className="max-w-[800px] divide-y divide-white/10">
            {SITE_CONFIG.faqItems.map((faq) => (
              <details key={faq.q} className="group py-6 cursor-pointer">
                <summary className="font-heading font-bold text-lg sm:text-xl text-white flex items-center justify-between list-none group-open:text-cyan transition-colors">
                  <span>{faq.q}</span>
                  <span className="text-gold text-2xl font-normal group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm sm:text-base text-[#A9B6D3] leading-relaxed pr-6">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
