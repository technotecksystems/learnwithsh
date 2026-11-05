import React from "react";

export function Wordmark() {
  return (
    <div
      className="w-full max-w-[1200px] mx-auto px-6 overflow-hidden select-none mb-[-1.5vw] leading-none"
      style={{ contain: "paint", transform: "translateZ(0)" }}
    >
      <svg
        viewBox="0 0 1000 175"
        width="100%"
        role="img"
        aria-label="Learn with SH"
        className="block w-full h-auto"
      >
        <defs>
          {/* Vertical Pink to Crimson to Burgundy Gradient */}
          <linearGradient id="bg1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FF7A96" stopOpacity="0.95" />
            <stop offset="0.55" stopColor="#C62849" stopOpacity="0.75" />
            <stop offset="1" stopColor="#541329" stopOpacity="0.1" />
          </linearGradient>

          {/* Sweeping Gold Shine Gradient */}
          <linearGradient id="bg2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#FFE089" stopOpacity="0" />
            <stop offset="0.5" stopColor="#FFE089" stopOpacity="0.8" />
            <stop offset="1" stopColor="#FFE089" stopOpacity="0" />
          </linearGradient>

          {/* Text ClipPath */}
          <clipPath id="bc">
            <text
              x="0"
              y="152"
              fontFamily="'Bricolage Grotesque', sans-serif"
              fontWeight="800"
              fontSize="190"
              textLength="1000"
              lengthAdjust="spacingAndGlyphs"
            >
              LEARN WITH SH
            </text>
          </clipPath>
        </defs>

        <g clipPath="url(#bc)">
          <rect width="1000" height="175" fill="url(#bg1)" />
          <rect width="260" height="175" fill="url(#bg2)">
            <animateTransform
              attributeName="transform"
              type="translate"
              from="-300 0"
              to="1100 0"
              dur="6s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
      </svg>
    </div>
  );
}
