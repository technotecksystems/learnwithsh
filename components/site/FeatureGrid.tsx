import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/content/site";

const featureStyles = `
  .sh-features {
    --sh-navy: #080e23;
    --sh-surface: #0b142b;
    --sh-white: #f9f9ff;
    --sh-muted: #b9c4da;
    --sh-gold: #ffc45b;
    --sh-red: #f23c69;
    --sh-cyan: #18caff;
    box-sizing: border-box;
    width: 100%;
    padding: clamp(38px, 5vw, 78px) clamp(16px, 4.2vw, 84px);
    position: relative;
    isolation: isolate;
    overflow: hidden;
    background: linear-gradient(132deg, #070e21 0%, #0a1128 52%, #100f29 100%);
    color: var(--sh-white);
  }
  .sh-features, .sh-features * { box-sizing: border-box; }
  .sh-features::before {
    content: "";
    pointer-events: none;
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 10% 0%, rgba(177, 25, 75, .19), transparent 38%),
      radial-gradient(circle at 82% 85%, rgba(0, 101, 204, .09), transparent 44%),
      linear-gradient(rgba(255, 255, 255, .013) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, .013) 1px, transparent 1px);
    background-size: auto, auto, 64px 64px, 64px 64px;
    z-index: -1;
  }
  .sh-features__grid {
    max-width: 1800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: clamp(14px, 1.8vw, 28px);
  }
  .sh-feature {
    --accent: #f23c69;
    --deep-accent: rgba(224, 16, 70, .28);
    position: relative;
    isolation: isolate;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: clamp(405px, 33vw, 505px);
    padding: clamp(24px, 2.25vw, 38px);
    border: 1px solid rgba(126, 147, 190, .23);
    border-radius: 30px;
    background:
      radial-gradient(ellipse at 105% 110%, var(--deep-accent), transparent 43%),
      linear-gradient(142deg, #10172f 0%, #0b142b 70%, #10122d 100%);
    box-shadow: 0 14px 38px rgba(0, 0, 0, .13), inset 0 1px 0 rgba(255, 255, 255, .045);
    transition: transform .35s cubic-bezier(.2, .8, .2, 1), border-color .35s ease, box-shadow .35s ease;
  }
  .sh-feature--blue {
    --accent: #19bbff;
    --deep-accent: rgba(0, 107, 225, .30);
  }
  .sh-feature::before {
    content: "";
    position: absolute;
    z-index: 0;
    pointer-events: none;
    width: 270px;
    height: 270px;
    right: -175px;
    top: -173px;
    transform: rotate(31deg);
    border: 1px solid var(--accent);
    border-radius: 60px;
    box-shadow: 0 0 44px var(--deep-accent);
    opacity: .8;
  }
  .sh-feature::after {
    content: "";
    position: absolute;
    z-index: 0;
    pointer-events: none;
    height: 3px;
    width: 46%;
    top: 0;
    right: 0;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    box-shadow: 0 0 15px var(--accent);
  }
  .sh-feature:hover {
    transform: translateY(-8px);
    border-color: color-mix(in srgb, var(--accent) 55%, #405372);
    box-shadow: 0 26px 55px rgba(0, 0, 0, .27), 0 0 38px var(--deep-accent);
  }
  .sh-feature__icon {
    display: grid;
    place-items: center;
    flex: none;
    width: 68px;
    height: 68px;
    border-radius: 20px;
    background: linear-gradient(150deg, color-mix(in srgb, var(--accent) 18%, #15152e), #11172e 88%);
    border: 1px solid color-mix(in srgb, var(--accent) 74%, transparent);
    box-shadow: inset 0 0 22px var(--deep-accent), 0 7px 24px rgba(0, 0, 0, .12);
    position: relative;
    z-index: 2;
  }
  .sh-feature__icon svg {
    width: 32px;
    height: 32px;
    fill: none;
    stroke: #fff;
    stroke-width: 1.9;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .sh-feature__copy {
    position: relative;
    z-index: 2;
    margin-top: 29px;
    max-width: 100%;
  }
  .sh-feature__title {
    font-size: clamp(23px, 2.05vw, 36px);
    line-height: 1.12;
    letter-spacing: -.038em;
    font-weight: 800;
    margin: 0;
    color: var(--sh-white);
  }
  .sh-feature__title span {
    display: block;
    color: var(--sh-gold);
  }
  .sh-feature__rule {
    height: 5px;
    width: 74px;
    background: var(--accent);
    border-radius: 10px;
    margin: 22px 0;
  }
  .sh-feature__description {
    margin: 0;
    max-width: 28ch;
    color: var(--sh-muted);
    font-size: clamp(14px, 1.04vw, 18px);
    line-height: 1.57;
  }
  .sh-feature__link {
    position: relative;
    z-index: 4;
    align-self: flex-start;
    margin-top: auto;
    display: grid;
    place-items: center;
    width: 62px;
    height: 43px;
    border: 1.5px solid var(--sh-gold);
    border-radius: 100px;
    color: var(--sh-gold);
    background: rgba(9, 16, 36, .8);
    text-decoration: none;
    transition: background .2s, color .2s, transform .2s;
  }
  .sh-feature__link:hover, .sh-feature__link:focus-visible {
    background: var(--sh-gold);
    color: #10162b;
    transform: translateX(4px);
  }
  .sh-feature__link:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 3px;
  }
  .sh-feature__link svg {
    width: 29px;
    height: 24px;
    stroke: currentColor;
    stroke-width: 1.9;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .sh-feature__art {
    position: absolute;
    z-index: 1;
    right: -3%;
    bottom: -12%;
    width: 64%;
    height: 45%;
    pointer-events: none;
    filter: drop-shadow(0 13px 18px rgba(0, 0, 0, .4));
    transform: translateY(0);
    transition: transform .4s ease;
  }
  .sh-feature:hover .sh-feature__art {
    transform: translateY(-6px);
  }
  .sh-feature__art svg {
    width: 100%;
    height: 100%;
    overflow: visible;
  }
  .sh-feature--blue .sh-feature__art {
    right: 0;
    bottom: -8%;
  }
  .sh-feature--progress .sh-feature__art {
    right: 0;
    bottom: 1%;
    height: 38%;
    width: 68%;
  }
  @media (prefers-reduced-motion: reduce) {
    .sh-feature, .sh-feature__art, .sh-feature__link {
      transition: none !important;
    }
  }
  @media (max-width: 1179px) {
    .sh-features__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sh-feature {
      min-height: 450px;
      padding: 32px;
    }
    .sh-feature__title {
      font-size: clamp(26px, 3.1vw, 34px);
    }
    .sh-feature__description {
      font-size: 16px;
    }
    .sh-feature__art {
      width: 53%;
      height: 47%;
      right: 0;
      bottom: -10%;
    }
  }
  @media (max-width: 650px) {
    .sh-features {
      padding: 30px 16px 44px;
    }
    .sh-features__grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .sh-feature {
      min-height: 390px;
      padding: 26px;
      border-radius: 23px;
    }
    .sh-feature__icon {
      width: 58px;
      height: 58px;
      border-radius: 17px;
    }
    .sh-feature__icon svg {
      width: 28px;
      height: 28px;
    }
    .sh-feature__copy {
      margin-top: 23px;
    }
    .sh-feature__title {
      font-size: 30px;
    }
    .sh-feature__rule {
      margin: 17px 0;
    }
    .sh-feature__description {
      font-size: 15px;
      max-width: 28ch;
    }
    .sh-feature__art {
      width: 56%;
      height: 44%;
      bottom: -9%;
      right: -2%;
    }
    .sh-feature__link {
      width: 58px;
      height: 41px;
    }
    .sh-feature--progress .sh-feature__art {
      bottom: 2%;
    }
  }
  @media (max-width: 375px) {
    .sh-feature__art {
      width: 54%;
      opacity: .78;
    }
    .sh-feature__title {
      font-size: 27px;
    }
  }
`;

export interface FeatureCardItem {
  id: string;
  theme: "red" | "blue";
  variant?: "progress";
  icon: React.ReactNode;
  titlePrimary: string;
  titleAccent: string;
  desc: string;
  href: string;
  ariaLabel: string;
  art: React.ReactNode;
}

export function FeatureCard({
  theme,
  variant,
  icon,
  titlePrimary,
  titleAccent,
  desc,
  href,
  ariaLabel,
  art,
}: FeatureCardItem) {
  const cardClasses = [
    "sh-feature",
    theme === "blue" ? "sh-feature--blue" : "",
    variant === "progress" ? "sh-feature--progress" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={cardClasses}>
      {/* Icon Badge */}
      <div className="sh-feature__icon" aria-hidden="true">
        {icon}
      </div>

      {/* Copy */}
      <div className="sh-feature__copy">
        <h2 className="sh-feature__title font-heading">
          {titlePrimary} <span>{titleAccent}</span>
        </h2>
        <div className="sh-feature__rule" aria-hidden="true" />
        <p className="sh-feature__description">{desc}</p>
      </div>

      {/* Vector Illustration */}
      <div className="sh-feature__art" aria-hidden="true">
        {art}
      </div>

      {/* Capsule Link Button */}
      <Link href={href} className="sh-feature__link" aria-label={ariaLabel}>
        <svg viewBox="0 0 28 24">
          <path d="M3 12h21m-7-7 7 7-7 7" />
        </svg>
      </Link>
    </article>
  );
}

export function FeatureGrid() {
  const featureCards: FeatureCardItem[] = [
    // 1. Full Lecture Recordings
    {
      id: "lectures",
      theme: "red",
      icon: (
        <svg viewBox="0 0 32 32">
          <path d="M11 6.5 25 16 11 25.5z" />
        </svg>
      ),
      titlePrimary: "Full Lecture",
      titleAccent: "Recordings",
      desc: "Complete, high-quality lectures you can watch anytime, at your own pace.",
      href: "/courses",
      ariaLabel: "Explore recorded lectures",
      art: (
        <svg viewBox="0 0 250 170" role="presentation">
          <defs>
            <linearGradient id="shLapBody" x1="0" x2="1" y1="0" y2="1">
              <stop stopColor="#491b43" />
              <stop offset="1" stopColor="#102a57" />
            </linearGradient>
            <linearGradient id="shLapScr" x1="0" x2="1" y1="0" y2="1">
              <stop stopColor="#450c2c" />
              <stop offset="1" stopColor="#180c28" />
            </linearGradient>
          </defs>
          <path
            d="M30 37 232 19 215 141 10 149Z"
            fill="url(#shLapBody)"
            stroke="#ff5c8a"
            strokeWidth="2"
          />
          <path
            d="M42 46 218 32 204 128 26 134Z"
            fill="url(#shLapScr)"
            stroke="#b52a63"
          />
          <ellipse
            cx="121"
            cy="87"
            rx="28"
            ry="28"
            fill="#c42254"
            fillOpacity=".28"
            stroke="#ff4679"
          />
          <path d="m114 71 0 32 26-16z" fill="white" />
          <path
            d="M9 148 219 141 246 151 41 165Z"
            fill="#1d3765"
            stroke="#3685c1"
          />
          <path d="m55 157 137-5" stroke="#45719d" strokeWidth="1.5" />
        </svg>
      ),
    },

    // 2. Past Paper Sessions
    {
      id: "past-papers",
      theme: "blue",
      icon: (
        <svg viewBox="0 0 32 32">
          <path d="M9 3.5h10l6 6V28H9z" />
          <path d="M19 3.5V10h6M13 16h9M13 21h9" />
        </svg>
      ),
      titlePrimary: "Past Paper",
      titleAccent: "Sessions",
      desc: "Step-by-step walkthroughs of past papers to build exam confidence.",
      href: "/resources",
      ariaLabel: "Explore past-paper sessions",
      art: (
        <svg viewBox="0 0 250 175" role="presentation">
          <path
            d="M60 45 204 18 240 150 92 177Z"
            fill="#245e9f"
            stroke="#83cfff"
            strokeWidth="2"
          />
          <path
            d="M38 33 190 12 221 147 70 169Z"
            fill="#b6d1f3"
            stroke="#e6f6ff"
            strokeWidth="2"
          />
          <path
            d="M25 23 174 8 206 140 55 158Z"
            fill="#e5edff"
            stroke="#fefeff"
            strokeWidth="2"
          />
          <text
            x="55"
            y="45"
            transform="rotate(-7 55 45)"
            fontSize="15"
            fontFamily="Arial, sans-serif"
            fontWeight="700"
            fill="#13284b"
          >
            Past Paper
          </text>
          <g
            transform="rotate(-7 90 90)"
            stroke="#94a9cd"
            strokeWidth="2"
            fill="none"
          >
            <rect x="47" y="64" width="15" height="15" />
            <path d="M69 70h92M69 78h70" />
            <rect x="47" y="91" width="15" height="15" />
            <path d="M69 97h80M69 105h65" />
            <rect x="47" y="118" width="15" height="15" />
            <path d="M69 124h88M69 131h78" />
          </g>
          <path
            d="m45 70 8 8 15-22"
            stroke="#e93261"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      ),
    },

    // 3. Formulae Booklets
    {
      id: "formulae",
      theme: "red",
      icon: (
        <svg viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="12" />
          <circle cx="16" cy="16" r="7" />
          <circle cx="16" cy="16" r="2" />
          <path d="M21 11 29 3" />
        </svg>
      ),
      titlePrimary: "Formulae",
      titleAccent: "Booklets",
      desc: "Concise, well-organised formulae for quick revision and easy recall.",
      href: "/resources",
      ariaLabel: "Explore formulae booklets",
      art: (
        <svg viewBox="0 0 260 180" role="presentation">
          <defs>
            <linearGradient id="shBook" x1="0" x2="1" y1="0" y2="1">
              <stop stopColor="#e72b5c" />
              <stop offset=".55" stopColor="#8a183d" />
              <stop offset="1" stopColor="#340c2a" />
            </linearGradient>
          </defs>
          <path
            d="m46 44 145-29 37 119-149 31z"
            fill="#b8c4d7"
            stroke="#e5d8c9"
            strokeWidth="3"
          />
          <path
            d="m39 36 146-27 35 118-145 31z"
            fill="#e9dec9"
            stroke="#f7d4b0"
            strokeWidth="2"
          />
          <path
            d="m31 30 146-25 35 117-145 31z"
            fill="url(#shBook)"
            stroke="#ff537d"
            strokeWidth="2.5"
          />
          <path
            d="m50 28 30 109"
            stroke="#f56878"
            strokeOpacity=".8"
            strokeWidth="2"
          />
          <path d="m76 135 131-28" stroke="#ffc36b" strokeWidth="3" />
          <text
            x="99"
            y="59"
            fill="#fff"
            fontSize="18"
            fontStyle="italic"
            fontFamily="Arial, sans-serif"
            fontWeight="700"
            transform="rotate(-10 99 59)"
          >
            Formulae
          </text>
          <text
            x="99"
            y="83"
            fill="#fff"
            fontSize="17"
            fontStyle="italic"
            fontFamily="Arial, sans-serif"
            fontWeight="700"
            transform="rotate(-10 99 83)"
          >
            Booklet
          </text>
        </svg>
      ),
    },

    // 4. Tracking & Progress
    {
      id: "progress",
      theme: "blue",
      variant: "progress",
      icon: (
        <svg viewBox="0 0 32 32">
          <rect x="6" y="4" width="20" height="24" rx="3" />
          <path d="M10 11h12M10 16h3m4 0h5M10 21h3m4 0h5" />
        </svg>
      ),
      titlePrimary: "Tracking",
      titleAccent: "& Progress",
      desc: "Monitor your learning, track completed topics and stay on schedule.",
      href: "/portal",
      ariaLabel: "Open student progress portal",
      art: (
        <svg viewBox="0 0 250 160" role="presentation">
          <defs>
            <linearGradient id="shBar" x1="0" x2="0" y1="0" y2="1">
              <stop stopColor="#b8e5ff" />
              <stop offset="1" stopColor="#15599d" />
            </linearGradient>
          </defs>
          <g stroke="#8acfff" fill="url(#shBar)" strokeWidth="1.2">
            <rect x="35" y="118" width="28" height="36" rx="3" />
            <rect x="78" y="95" width="28" height="59" rx="3" />
            <rect x="121" y="68" width="28" height="86" rx="3" />
            <rect x="164" y="38" width="28" height="116" rx="3" />
          </g>
          <path
            d="M25 105C79 100 119 72 158 43c20-15 38-24 61-31"
            fill="none"
            stroke="#ffca66"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="m200 12 24-8-9 25"
            fill="none"
            stroke="#ffca66"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="sh-features" aria-label="What you get with Learn with SH">
      <style>{featureStyles}</style>
      <div className="sh-features__grid">
        {featureCards.map((card) => (
          <FeatureCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
