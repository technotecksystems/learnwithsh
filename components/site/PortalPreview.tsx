import Image from "next/image";
import Link from "next/link";

export function PortalPreview() {
  return (
    <section
      className="relative z-10 py-16 sm:py-24 bg-gradient-to-b from-[#070D20]/90 to-[#070D20]/60 border-y border-white/10"
      aria-label="Student portal preview"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative rounded-[22px] sm:rounded-[32px] overflow-hidden border border-cyan/35 bg-[#080E24] shadow-[0_30px_90px_-20px_rgba(198,40,73,0.45),0_0_50px_rgba(24,215,245,0.18)] group transition-all duration-300 hover:border-cyan/60 hover:shadow-[0_40px_110px_-20px_rgba(198,40,73,0.6),0_0_60px_rgba(24,215,245,0.25)]">
          {/* Top cyan hairline */}
          <div className="absolute top-0 left-8 sm:left-14 right-8 sm:right-14 h-[1px] bg-gradient-to-r from-transparent via-cyan/70 to-transparent z-10 pointer-events-none" />

          {/* Clickable Image Banner linking to /portal */}
          <Link
            href="/portal"
            className="block relative focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Open the Student Portal"
          >
            <Image
              src="/images/portal_preview.jpg"
              alt="A Dedicated Student Portal — Learn with SH. Access your courses, watch lectures, track progress, and download revision materials all in one secure place."
              width={1024}
              height={584}
              priority
              className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </Link>
        </div>

        {/* Mobile touch-friendly button fallback */}
        <div className="sm:hidden mt-5 flex justify-center">
          <Link
            href="/portal"
            className="btn-gold px-7 py-3 text-sm font-bold rounded-full inline-flex items-center gap-2"
          >
            Open the Student Portal ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
