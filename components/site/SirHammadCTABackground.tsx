"use client";

import React from "react";

type BackgroundProps = { className?: string };

/**
 * Optimized 60FPS AccountingCTABackground
 * Uses GPU hardware compositing layers (translate3d), baked SVG stroke glows,
 * and zero real-time CSS filter recalibration for smooth 60/120 FPS performance.
 */
export function AccountingCTABackground({ className = "" }: BackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`shcta-backdrop ${className}`}
      style={{ transform: "translateZ(0)" }}
    >
      <span className="shcta-aurora" />
      <span className="shcta-red-edge" />
      <span className="shcta-beam" />
      <svg
        className="shcta-orbit"
        viewBox="0 0 940 600"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient
            id="shcta-blue-arc-unique"
            x1="0"
            y1="80"
            x2="800"
            y2="560"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#35d5ff" stopOpacity="0" />
            <stop offset=".35" stopColor="#00a8ff" stopOpacity=".85" />
            <stop offset=".75" stopColor="#3684ff" stopOpacity=".3" />
            <stop offset="1" stopColor="#7a2dff" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="shcta-red-arc-unique"
            x1="300"
            y1="0"
            x2="850"
            y2="600"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ffb27f" stopOpacity="0" />
            <stop offset=".3" stopColor="#ff3f79" stopOpacity=".95" />
            <stop offset=".9" stopColor="#ed245c" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Soft background glow strokes for zero-cost hardware glow */}
        <ellipse
          cx="650"
          cy="300"
          rx="440"
          ry="235"
          stroke="url(#shcta-blue-arc-unique)"
          strokeWidth="6"
          opacity="0.25"
        />
        <ellipse
          cx="650"
          cy="300"
          rx="440"
          ry="235"
          stroke="url(#shcta-blue-arc-unique)"
          strokeWidth="2"
        />

        <ellipse
          cx="650"
          cy="300"
          rx="384"
          ry="200"
          stroke="url(#shcta-blue-arc-unique)"
          strokeWidth=".8"
          opacity=".55"
        />

        {/* Soft red glow stroke */}
        <ellipse
          cx="650"
          cy="300"
          rx="328"
          ry="172"
          stroke="url(#shcta-red-arc-unique)"
          strokeWidth="5"
          opacity="0.3"
        />
        <ellipse
          cx="650"
          cy="300"
          rx="328"
          ry="172"
          stroke="url(#shcta-red-arc-unique)"
          strokeWidth="1.5"
        />

        {/* Sweeping arcs */}
        <path
          d="M80 482 C250 105 550 50 870 140"
          stroke="url(#shcta-blue-arc-unique)"
          strokeWidth="1.4"
        />
        <path
          d="M390 610 C510 360 685 226 946 214"
          stroke="url(#shcta-red-arc-unique)"
          strokeWidth="1.4"
        />
      </svg>
      <span className="shcta-sparks" />
    </div>
  );
}

export default AccountingCTABackground;
