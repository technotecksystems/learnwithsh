import React from "react";

export function Doodles() {
  return (
    <div className="w-full relative z-[2] py-8 border-t border-dashed border-[#FFBD59]/35 mt-8 overflow-hidden">
      <div
        className="max-w-[1200px] mx-auto px-6 flex justify-between items-center gap-3 sm:gap-5 flex-wrap"
        aria-hidden="true"
      >
        {/* Lightbulb */}
        <i className="doodle-item" style={{ "--c": "#FFBD59" } as React.CSSProperties}>
          <svg viewBox="0 0 100 100" width="68" height="68">
            <path
              pathLength="1"
              d="M50 14c-16 0-26 11-26 25 0 10 6 16 11 22 3 4 4 7 4 12h22c0-5 1-8 4-12 5-6 11-12 11-22 0-14-10-25-26-25z"
            />
            <path pathLength="1" d="M40 80h20M43 90h14" />
            <path pathLength="1" d="M50 3v5M18 14l4 4M82 14l-4 4M6 40h5M89 40h5" />
          </svg>
        </i>

        {/* Caveat note 1 */}
        <span
          className="handwritten-text hidden sm:inline-block"
          style={{ "--r": "-6deg", "--c": "#FFBD59" } as React.CSSProperties}
        >
          A = L + E
        </span>

        {/* Calculator */}
        <i
          className="doodle-item"
          style={{ "--c": "#18D7F5", "--dl": "-1s" } as React.CSSProperties}
        >
          <svg viewBox="0 0 100 100" width="64" height="64">
            <path
              pathLength="1"
              d="M24 8h52a6 6 0 0 1 6 6v72a6 6 0 0 1-6 6H24a6 6 0 0 1-6-6V14a6 6 0 0 1 6-6z"
            />
            <path pathLength="1" d="M28 18h44v16H28z" />
            <path
              pathLength="1"
              d="M30 46h6M47 46h6M64 46h6M30 60h6M47 60h6M64 60h6M30 74h6M47 74h6M64 74h6"
            />
          </svg>
        </i>

        {/* Sparkle */}
        <i
          className="doodle-item hidden md:inline-block"
          style={{ "--c": "#E8416A", "--dl": "-2s" } as React.CSSProperties}
        >
          <svg viewBox="0 0 100 100" width="50" height="50">
            <path
              pathLength="1"
              d="M50 6c2 22 8 28 30 30-22 2-28 8-30 30-2-22-8-28-30-30 22-2 28-8 30-30z"
            />
          </svg>
        </i>

        {/* Ledger Book */}
        <i
          className="doodle-item"
          style={{ "--c": "#FFBD59", "--dl": "-3s" } as React.CSSProperties}
        >
          <svg viewBox="0 0 100 100" width="70" height="70">
            <path
              pathLength="1"
              d="M50 22c-10-8-24-10-38-8v60c14-2 28 0 38 8 10-8 24-10 38-8V14c-14-2-28 0-38 8z"
            />
            <path pathLength="1" d="M50 22v60M22 34c8-1 16 0 22 3M22 48c8-1 16 0 22 3M78 34c-8-1-16 0-22 3M78 48c-8-1-16 0-22 3" />
          </svg>
        </i>

        {/* Caveat note 2 */}
        <span
          className="handwritten-text"
          style={{ "--r": "4deg", "--c": "#18D7F5" } as React.CSSProperties}
        >
          keep it balanced!
        </span>

        {/* Pencil */}
        <i
          className="doodle-item hidden lg:inline-block"
          style={{ "--c": "#E8416A", "--dl": "-4s" } as React.CSSProperties}
        >
          <svg viewBox="0 0 100 100" width="66" height="66">
            <path pathLength="1" d="M14 86l6-20L72 14l14 14-52 52z" />
            <path pathLength="1" d="M62 24l14 14M20 66l14 14" />
          </svg>
        </i>

        {/* Coin */}
        <i
          className="doodle-item"
          style={{ "--c": "#FFBD59", "--dl": "-5s" } as React.CSSProperties}
        >
          <svg viewBox="0 0 100 100" width="64" height="64">
            <path pathLength="1" d="M50 10a40 40 0 1 0 .1 0z" />
            <path pathLength="1" d="M50 24a26 26 0 1 0 .1 0z" />
            <path pathLength="1" d="M42 42h16M42 52h16M50 36v28" />
          </svg>
        </i>

        {/* Caveat note 3 */}
        <span
          className="handwritten-text hidden sm:inline-block"
          style={{ "--r": "-4deg", "--c": "#E8416A" } as React.CSSProperties}
        >
          Dr = Cr ✓
        </span>

        {/* Graduation cap */}
        <i
          className="doodle-item"
          style={{ "--c": "#18D7F5", "--dl": "-1.5s" } as React.CSSProperties}
        >
          <svg viewBox="0 0 100 100" width="68" height="68">
            <path pathLength="1" d="M50 22L6 42l44 20 44-20z" />
            <path pathLength="1" d="M24 52v18c8 8 44 8 52 0V52" />
            <path pathLength="1" d="M94 42v22" />
          </svg>
        </i>

        {/* Paper Plane */}
        <i
          className="doodle-item hidden md:inline-block"
          style={{ "--c": "#FFBD59", "--dl": "-2.5s" } as React.CSSProperties}
        >
          <svg viewBox="0 0 100 100" width="62" height="62">
            <path pathLength="1" d="M6 46L94 8 70 90 48 62z" />
            <path pathLength="1" d="M94 8L48 62M48 62l-2 24 14-18" />
          </svg>
        </i>

        {/* Percent */}
        <i
          className="doodle-item hidden sm:inline-block"
          style={{ "--c": "#E8416A", "--dl": "-3.5s" } as React.CSSProperties}
        >
          <svg viewBox="0 0 100 100" width="56" height="56">
            <path pathLength="1" d="M22 78L78 22" />
            <path pathLength="1" d="M28 20a10 10 0 1 0 .1 0z" />
            <path pathLength="1" d="M70 62a10 10 0 1 0 .1 0z" />
          </svg>
        </i>
      </div>
    </div>
  );
}
