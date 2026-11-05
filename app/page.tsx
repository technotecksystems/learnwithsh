import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/site/Hero";
import { Ticker } from "@/components/site/Ticker";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { ExperienceSection } from "@/components/site/ExperienceSection";
import { CourseTabs } from "@/components/site/CourseTabs";
import { MethodSteps } from "@/components/site/MethodSteps";
import { LectureSpotlight } from "@/components/site/LectureSpotlight";
import { PortalPreview } from "@/components/site/PortalPreview";
import { CtaBanner } from "@/components/site/CtaBanner";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Ticker */}
      <Ticker />

      {/* 3. Feature Grid */}
      <FeatureGrid />

      {/* 4. Experience Section */}
      <ExperienceSection />

      {/* 5. Course Tabs */}
      <CourseTabs />

      {/* 6. The SH Method Steps */}
      <MethodSteps />

      {/* 7. Lecture Spotlight */}
      <LectureSpotlight />

      {/* 8. Student Portal Preview */}
      <PortalPreview />

      {/* 9. About Sir Hammad Spotlight */}
      <section className="relative z-10 py-20 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Arch Portrait Frame */}
            <div className="relative w-full max-w-[380px] mx-auto aspect-[4/5]">
              {/* Outer Blurred Glow */}
              <div
                className="absolute inset-[-12%] rounded-full opacity-50 blur-[44px] pointer-events-none animate-spinSlow"
                style={{
                  background:
                    "conic-gradient(from 0deg, #C62849, transparent 30%, #18D7F5, transparent 62%, #FFBD59, transparent)",
                }}
              />

              {/* Arch Frame */}
              <div className="relative w-full h-full rounded-[999px_999px_30px_30px] bg-gradient-to-b from-[#C62849]/60 via-[#541329]/85 to-[#0B1026] border border-gold/40 overflow-hidden shadow-[0_40px_80px_-30px_rgba(198,40,73,0.6)]">
                {/* Dashed Inner Inset Border */}
                <div className="absolute inset-3.5 rounded-[999px_999px_18px_18px] border border-dashed border-white/20 pointer-events-none" />

                <Image
                  src="/images/portrait_transparent.png"
                  alt="Sir Sahibzada Hammad"
                  width={420}
                  height={540}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[106%] max-w-none object-contain"
                />
              </div>
            </div>

            {/* About Copy */}
            <div>
              <div className="eyebrow-badge">About Sir Hammad</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white">
                A teacher who makes the <span className="cyan-text">method clear.</span>
              </h2>
              <p className="mt-5 text-[#c3cde4] text-base sm:text-lg leading-relaxed max-w-[540px]">
                With 7 years of teaching experience, Sir Hammad teaches
                Accounting to O Level, AS and A Level students, with structured
                lessons, worked examples and exam-focused practice, so students
                know exactly how to earn marks.
              </p>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="btn-ghost px-6 py-3 text-sm font-bold rounded-full inline-flex items-center gap-2"
                >
                  Read full teacher profile ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA Banner */}
      <CtaBanner />
    </>
  );
}
