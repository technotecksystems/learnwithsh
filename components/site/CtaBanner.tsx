"use client";

import Link from "next/link";
import React from "react";
import { AccountingCTABackground } from "./SirHammadCTABackground";

interface CtaBannerProps {
  title?: string;
  highlightWord?: string;
  eyebrow?: string;
  subtitle?: string;
  coursesHref?: string;
  contactHref?: string;
  className?: string;
}

export function CtaBanner({
  title = "Ready to make accounting",
  highlightWord = "click?",
  eyebrow = "Take the next step",
  subtitle = "Learn with clarity, practise with purpose, and enter every exam with confidence.",
  coursesHref = "/courses",
  contactHref = "/contact",
  className = "",
}: CtaBannerProps) {
  return (
    <section
      className="relative z-10 py-16 sm:py-20 px-4 sm:px-6"
      style={{ contain: "content" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div
          className={`shcta-frame ${className}`}
          aria-labelledby="shcta-heading"
        >
          <AccountingCTABackground />
          <div className="shcta-container">
            <div>
              <div className="shcta-label font-mono">{eyebrow}</div>
              <h2 id="shcta-heading" className="shcta-title font-heading">
                {title} <strong>{highlightWord}</strong>
              </h2>
              <p className="shcta-subtitle">{subtitle}</p>
            </div>
            <div className="shcta-actions">
              <Link className="shcta-btn shcta-btn-gold" href={coursesHref}>
                Explore courses <span aria-hidden="true">↗</span>
              </Link>
              <Link className="shcta-btn shcta-btn-outline" href={contactHref}>
                Talk to Sir Hammad <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
