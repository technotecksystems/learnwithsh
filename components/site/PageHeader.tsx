import React from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative pt-[150px] sm:pt-[170px] pb-14 sm:pb-20 border-b border-white/10 bg-gradient-to-b from-[#0B1026] via-[#070D20] to-[#0B1026]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="eyebrow-badge">{eyebrow}</div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-white font-extrabold tracking-tight">
          {title}
        </h1>
        <p className="mt-5 text-[#c3cde4] text-base sm:text-lg lg:text-xl max-w-[620px] leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
