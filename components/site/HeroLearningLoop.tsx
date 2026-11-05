"use client";

import React, { useEffect, useState } from "react";

export type LearningFrame = {
  lead: string;
  accent: string;
  caption: string;
  step: string;
};

export type HeroLearningLoopProps = {
  className?: string;
  frames?: LearningFrame[];
  intervalMs?: number;
};

const DEFAULT_FRAMES: LearningFrame[] = [
  {
    lead: "Learn the",
    accent: "logic.",
    caption: "Understand the why behind every entry.",
    step: "LEARN",
  },
  {
    lead: "Master the",
    accent: "method.",
    caption: "Turn worked examples into real skill.",
    step: "PRACTICE",
  },
  {
    lead: "Build your",
    accent: "confidence.",
    caption: "Feel prepared for the next exam question.",
    step: "EXCEL",
  },
];

const widgetStyles = String.raw`
  .sh-learning-loop {
    --sh-blue: #11d5fa;
    --sh-gold: #ffc95f;
    --sh-red: #e33a69;
    position: relative;
    isolation: isolate;
    width: min(100%, 460px);
    min-height: 196px;
    box-sizing: border-box;
    overflow: hidden;
    padding: 19px 22px 16px;
    border: 1px solid rgba(83, 185, 246, .38);
    border-radius: 20px;
    color: #f8f9ff;
    background: radial-gradient(circle at 92% 5%, rgba(14, 188, 235, .15), transparent 42%),
      radial-gradient(circle at -10% 100%, rgba(181, 32, 87, .15), transparent 46%),
      linear-gradient(120deg, rgba(7, 17, 39, .975), rgba(9, 13, 33, .975));
    box-shadow: 0 24px 64px rgba(0, 2, 16, .42), 0 0 28px rgba(15, 168, 255, .08), inset 0 1px 0 rgba(255, 255, 255, .07);
    font-family: inherit;
    text-align: left;
    transform: translateZ(0);
  }
  .sh-learning-loop *, .sh-learning-loop *::before, .sh-learning-loop *::after { box-sizing: border-box; }
  .sh-learning-loop::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background: linear-gradient(rgba(111, 173, 225, .034) 1px, transparent 1px),
      linear-gradient(90deg, rgba(111, 173, 225, .034) 1px, transparent 1px);
    background-size: 30px 30px;
    mask-image: linear-gradient(to right, transparent, #000 55%, #000);
    -webkit-mask-image: linear-gradient(to right, transparent, #000 55%, #000);
  }
  .sh-learning-loop__ambient {
    position: absolute;
    width: 230px;
    height: 230px;
    right: -120px;
    top: -122px;
    border: 1px solid rgba(51, 206, 250, .19);
    border-radius: 50%;
    z-index: -1;
    box-shadow: 0 0 0 21px rgba(24, 118, 186, .035), 0 0 0 55px rgba(24, 118, 186, .025);
    animation: shll-ambient 6s ease-in-out infinite alternate;
    pointer-events: none;
    transform: translateZ(0);
  }
  .sh-learning-loop__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 15px;
  }
  .sh-learning-loop__eyebrow {
    display: flex;
    align-items: center;
    gap: 9px;
    min-width: 0;
    color: #b6c7e1;
    font: 600 10.5px/1.2 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    letter-spacing: .115em;
  }
  .sh-learning-loop__signal {
    display: inline-block;
    width: 2px;
    height: 14px;
    flex: 0 0 2px;
    border-radius: 1px;
    background: #f4bf62;
  }
  .sh-learning-loop__counter {
    color: var(--sh-gold);
    font: 600 11px/1 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    letter-spacing: .06em;
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }
  .sh-learning-loop__rule {
    position: relative;
    height: 1px;
    margin-bottom: 17px;
    background: linear-gradient(90deg, rgba(90, 151, 207, .26), rgba(90, 151, 207, .1), transparent);
  }
  .sh-learning-loop__content { min-height: 76px; }
  .sh-learning-loop__frame {
    animation: shll-enter .57s cubic-bezier(.16, 1, .3, 1) both;
    will-change: transform, opacity;
  }
  .sh-learning-loop__title {
    margin: 0;
    font-size: clamp(22px, 2.4vw, 29px);
    font-weight: 800;
    line-height: 1.14;
    letter-spacing: -.048em;
    white-space: normal;
  }
  .sh-learning-loop__title strong {
    font-weight: 800;
    color: var(--sh-blue);
    background: linear-gradient(105deg, #25e6fb 5%, #4ebcfb 68%, #8caaff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .sh-learning-loop__caption {
    margin: 9px 0 0;
    color: #b5c2d8;
    font-size: 12.5px;
    line-height: 1.45;
    letter-spacing: .006em;
  }
  .sh-learning-loop__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    margin-top: 14px;
  }
  .sh-learning-loop__steps { display: flex; flex: 1; gap: 6px; min-width: 0; }
  .sh-learning-loop__step {
    height: 3px;
    border-radius: 999px;
    flex: 1;
    min-width: 0;
    background: rgba(124, 152, 200, .23);
    overflow: hidden;
  }
  .sh-learning-loop__fill {
    display: block;
    height: 100%;
    width: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #e34672, #ffca62 52%, #20d4f7);
    transform-origin: left;
    will-change: transform;
  }
  .sh-learning-loop__fill--past { transform: scaleX(1); }
  .sh-learning-loop__fill--current { animation: shll-fill var(--shll-duration, 3200ms) linear both; }
  .sh-learning-loop__stepLabel {
    display: flex;
    gap: 8px;
    align-items: center;
    white-space: nowrap;
    color: #d1d9ec;
    font: 600 10px/1 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    letter-spacing: .085em;
  }
  .sh-learning-loop__stepLabel svg { color: var(--sh-gold); }
  .sh-learning-loop__hoverline {
    position: absolute;
    bottom: 0;
    height: 1px;
    left: 17%; right: 17%;
    background: linear-gradient(90deg, transparent, rgba(18, 215, 250, .62), transparent);
  }
  .sh-learning-loop__paused .sh-learning-loop__fill--current { animation-play-state: paused; }
  @keyframes shll-enter {
    from { opacity: 0; transform: translateY(11px); filter: blur(3px); }
    to { opacity: 1; transform: translateY(0); filter: blur(0); }
  }
  @keyframes shll-fill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
  @keyframes shll-ambient { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(-10px, 9px, 0); } }
  @media (max-width: 480px) {
    .sh-learning-loop { padding: 17px 18px 15px; min-height: 188px; border-radius: 17px; }
    .sh-learning-loop__title { font-size: clamp(21px, 5.7vw, 26px); }
    .sh-learning-loop__eyebrow { font-size: 9px; letter-spacing: .08em; }
    .sh-learning-loop__caption { font-size: 12px; }
    .sh-learning-loop__top { margin-bottom: 13px; }
    .sh-learning-loop__rule { margin-bottom: 16px; }
  }
  @media (prefers-reduced-motion: reduce) {
    .sh-learning-loop__frame, .sh-learning-loop__fill--current, .sh-learning-loop__ambient { animation: none !important; }
    .sh-learning-loop__fill--current { transform: scaleX(1); }
  }
`;

export function HeroLearningLoop({
  className = "",
  frames = DEFAULT_FRAMES,
  intervalMs = 3200,
}: HeroLearningLoopProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const safeFrames = frames.length ? frames : DEFAULT_FRAMES;
  const currentIndex = index % safeFrames.length;
  const current = safeFrames[currentIndex];
  const duration = Math.max(1800, intervalMs);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);
    update();
    query.addEventListener?.("change", update);
    return () => query.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion || safeFrames.length < 2) return;
    const timer = window.setInterval(
      () => setIndex((prev) => (prev + 1) % safeFrames.length),
      duration
    );
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion, safeFrames.length, duration]);

  return (
    <aside
      className={`sh-learning-loop ${paused ? "sh-learning-loop__paused" : ""} ${className}`.trim()}
      style={{ "--shll-duration": `${duration}ms` } as React.CSSProperties}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Sir Hammad Academy learning highlights"
    >
      <style>{widgetStyles}</style>
      <div className="sh-learning-loop__ambient" aria-hidden="true" />
      <div className="sh-learning-loop__top">
        <div className="sh-learning-loop__eyebrow font-mono">
          <span className="sh-learning-loop__signal" aria-hidden="true" />
          YOUR LEARNING, IN MOTION
        </div>
        <div className="sh-learning-loop__counter font-mono">
          {String(currentIndex + 1).padStart(2, "0")} / {String(safeFrames.length).padStart(2, "0")}
        </div>
      </div>
      <div className="sh-learning-loop__rule" />
      <div className="sh-learning-loop__content" aria-live="off">
        <div className="sh-learning-loop__frame" key={currentIndex}>
          <p className="sh-learning-loop__title font-heading">
            {current.lead} <strong>{current.accent}</strong>
          </p>
          <p className="sh-learning-loop__caption">{current.caption}</p>
        </div>
      </div>
      <div className="sh-learning-loop__bottom">
        <div className="sh-learning-loop__steps" aria-hidden="true">
          {safeFrames.map((_, stepIndex) => (
            <span className="sh-learning-loop__step" key={stepIndex}>
              {stepIndex <= currentIndex && (
                <span
                  key={`${currentIndex}-${stepIndex}`}
                  className={`sh-learning-loop__fill ${
                    stepIndex < currentIndex || reduceMotion
                      ? "sh-learning-loop__fill--past"
                      : "sh-learning-loop__fill--current"
                  }`}
                />
              )}
            </span>
          ))}
        </div>
        <span className="sh-learning-loop__stepLabel font-mono">
          {current.step}
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
      <div className="sh-learning-loop__hoverline" aria-hidden="true" />
    </aside>
  );
}

export default HeroLearningLoop;
