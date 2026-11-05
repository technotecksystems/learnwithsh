import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COURSES } from "@/content/courses";
import { SITE_CONFIG } from "@/content/site";
import { CtaBanner } from "@/components/site/CtaBanner";

interface CourseDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export function generateMetadata({ params }: CourseDetailPageProps): Metadata {
  const course = COURSES.find((c) => c.slug === params.slug);
  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: `${course.name} (${course.code})`,
    description: course.blurb,
    openGraph: {
      title: `${course.name} | Learn with SH`,
      description: course.blurb,
    },
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course = COURSES.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  const otherCourses = COURSES.filter((c) => c.slug !== course.slug);

  return (
    <>
      {/* Course Hero */}
      <section className="relative pt-[150px] sm:pt-[170px] pb-16 sm:pb-20 border-b border-white/10 bg-gradient-to-b from-[#0B1026] via-[#070D20] to-[#0B1026]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <Link
              href="/courses"
              className="font-mono text-xs text-[#A9B6D3] hover:text-white transition-colors"
            >
              ← All Courses
            </Link>
            <span className="text-white/20">/</span>
            <span className="font-mono text-xs font-bold text-gold uppercase tracking-wider">
              {course.code}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl text-white font-extrabold tracking-tight">
            {course.name}
          </h1>

          <p className="mt-4 text-[#c3cde4] text-base sm:text-xl max-w-[680px] leading-relaxed">
            {course.blurb}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#enrol"
              className="btn-gold px-7 py-3.5 text-sm font-bold rounded-full inline-flex items-center gap-2"
            >
              Enrol in this pack ↗
            </a>
            <a
              href="#syllabus"
              className="btn-ghost px-6 py-3.5 text-sm font-bold rounded-full"
            >
              Inspect syllabus topics ↓
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-[1200px] mx-auto px-6 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
        {/* Left: Syllabus Topics Breakdown */}
        <div>
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl text-white mb-3">
              Course Overview & Target
            </h2>
            <p className="text-sm sm:text-base text-[#A9B6D3] leading-relaxed">
              {course.overview}
            </p>
            <div className="mt-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3 text-xs sm:text-sm text-[#cfd8ee]">
              <span className="text-gold font-bold font-mono">TARGET:</span>
              <span>{course.targetAudience}</span>
            </div>
          </div>

          <div id="syllabus">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl sm:text-3xl text-white">
                Detailed Syllabus Roadmap
              </h2>
              <span className="font-mono text-xs text-cyan bg-cyan/10 px-3 py-1 rounded-full border border-cyan/20">
                {course.topics.length} core topics
              </span>
            </div>

            <div className="grid gap-3">
              {course.topics.map((topic, idx) => (
                <div
                  key={topic}
                  className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white/[0.04] to-transparent border border-white/10 flex items-start gap-4 hover:border-cyan/50 hover:bg-white/[0.06] transition-all"
                >
                  <span className="font-mono font-bold text-xs text-gold pt-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {topic}
                    </h3>
                    <p className="text-xs text-[#A9B6D3] mt-1">
                      Includes recorded concept lecture, worked examples, and Cambridge past paper questions.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 font-mono text-xs text-[#A9B6D3]/70">
              * The final lecture sequencing and video timings are confirmed by Sir Hammad inside the student portal.
            </p>
          </div>
        </div>

        {/* Right Sidebar: Enrolment Card & What is Included */}
        <div id="enrol" className="sticky top-28 grid gap-6">
          <div className="p-7 sm:p-8 rounded-[24px] bg-gradient-to-br from-[#131A36] to-[#0B1026] border border-gold/40 shadow-[0_24px_50px_-20px_rgba(255,189,89,0.25)]">
            <span className="font-mono text-xs font-bold text-gold tracking-wider uppercase block mb-1">
              Course Enrollment
            </span>
            <h3 className="text-2xl font-bold text-white mb-4">{course.name}</h3>

            <div className="py-4 border-y border-white/10 mb-6">
              <span className="text-xs font-mono text-[#A9B6D3] uppercase block mb-1">
                Course Fee
              </span>
              <div className="flex items-baseline gap-2">
                <b className="font-heading font-extrabold text-3xl sm:text-4xl text-cyan">
                  {SITE_CONFIG.placeholders.priceLabel}
                </b>
              </div>
              <p className="text-xs text-[#A9B6D3] mt-1.5 leading-snug">
                {SITE_CONFIG.placeholders.priceNote}
              </p>
            </div>

            <div className="mb-6">
              <b className="text-xs font-mono uppercase text-white tracking-wider block mb-3">
                Everything Included:
              </b>
              <ul className="grid gap-2.5 text-xs sm:text-sm text-[#cfd8ee]">
                {course.includes.map((inc) => (
                  <li key={inc} className="flex items-center gap-2.5">
                    <span className="text-gold font-bold">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-2.5">
              <Link
                href="/contact"
                className="btn-gold w-full py-3.5 text-center text-sm font-bold rounded-full justify-center"
              >
                Inquire & Enrol with Sir Hammad ↗
              </Link>
              <Link
                href="/portal"
                className="btn-ghost w-full py-3 text-center text-xs font-bold rounded-full justify-center"
              >
                Already Enrolled? Log in to Portal
              </Link>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 text-center">
              <span className="text-[11px] font-mono text-[#A9B6D3] block">
                Payment options: Debit/Credit Card or Manual Bank Transfer
              </span>
            </div>
          </div>

          {/* Other Courses Widget */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="font-mono text-xs text-[#A9B6D3] uppercase tracking-wider block mb-3">
              Explore other levels
            </span>
            <div className="grid gap-2">
              {otherCourses.map((c) => (
                <Link
                  key={c.slug}
                  href={`/courses/${c.slug}`}
                  className="p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 flex items-center justify-between text-xs sm:text-sm transition-all"
                >
                  <span className="font-semibold text-white">{c.name}</span>
                  <span className="text-cyan font-mono text-xs">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CtaBanner />
    </>
  );
}
