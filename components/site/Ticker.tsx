import { SITE_CONFIG } from "@/content/site";

export function Ticker() {
  const terms = SITE_CONFIG.marqueeTerms;

  return (
    <div className="relative z-20 overflow-hidden bg-gradient-to-r from-burgundy via-crimson to-burgundy border-y border-gold/35 shadow-[0_10px_30px_-10px_rgba(198,40,73,0.5)]">
      <div
        className="flex w-max animate-marquee py-3.5 select-none"
        style={{ transform: "translateZ(0)", willChange: "transform" }}
      >
        {/* Render repeated list for continuous looping */}
        {[...Array(6)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center">
            {terms.map((term, i) => (
              <span
                key={`${loopIdx}-${i}`}
                className="font-mono font-bold text-[11px] sm:text-xs tracking-[0.2em] text-white uppercase whitespace-nowrap px-4 sm:px-6 flex items-center gap-4 sm:gap-6"
              >
                <span>{term}</span>
                <span className="text-gold font-normal">◆</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
