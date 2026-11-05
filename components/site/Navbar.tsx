"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
import { MobileMenu } from "@/components/site/MobileMenu";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
  { href: "/portal", label: "Student Portal" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const linksRef = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const lastScrolledRef = useRef(false);

  // Optimized Scroll Listener using requestAnimationFrame & threshold latching
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== lastScrolledRef.current) {
        lastScrolledRef.current = isScrolled;
        setScrolled(isScrolled);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update sliding indicator position
  const updateIndicatorToActive = useCallback(() => {
    if (typeof window === "undefined" || window.innerWidth <= 1000) return;

    let activeKey = "/";
    for (const link of NAV_LINKS) {
      if (link.href === "/" && pathname === "/") {
        activeKey = "/";
        break;
      } else if (link.href !== "/" && pathname.startsWith(link.href)) {
        activeKey = link.href;
        break;
      }
    }

    const activeEl = linksRef.current.get(activeKey);
    if (activeEl && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();
      setIndicatorStyle({
        left: elRect.left - navRect.left,
        width: elRect.width,
        opacity: 1,
      });
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [pathname]);

  useEffect(() => {
    updateIndicatorToActive();
    const timer = setTimeout(updateIndicatorToActive, 80);
    window.addEventListener("resize", updateIndicatorToActive, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateIndicatorToActive);
    };
  }, [updateIndicatorToActive]);

  const handleLinkHover = (el: HTMLAnchorElement | null) => {
    if (window.innerWidth <= 1000 || !el || !navRef.current) return;
    const navRect = navRef.current.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setIndicatorStyle({
      left: elRect.left - navRect.left,
      width: elRect.width,
      opacity: 1,
    });
  };

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-colors duration-300 pt-3.5 px-4 pb-2 ${
        scrolled ? "sc" : ""
      }`}
      style={{ transform: "translateZ(0)" }}
    >
      <div
        className={`max-w-[1180px] mx-auto flex items-center justify-between gap-4 py-2 px-3 sm:px-4 rounded-full border border-white/10 backdrop-blur-xl transition-[background-color,box-shadow] duration-300 ${
          scrolled
            ? "bg-[#070D20]/90 shadow-[0_14px_40px_-12px_rgba(0,0,0,0.7),0_0_30px_rgba(198,40,73,0.18)]"
            : "bg-[#0B1026]/60 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
        }`}
      >
        {/* Logo / Monogram */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-heading text-lg font-extrabold tracking-tight whitespace-nowrap"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_12px_rgba(255,189,89,0.35)]">
            <Image
              src="/images/logo.png"
              alt="Learn with SH Logo"
              width={40}
              height={40}
              priority
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-white text-base sm:text-lg">
            Learn with <b className="text-gold">SH</b>
          </span>
        </Link>

        {/* Center Pill with Sliding Indicator (Desktop) */}
        <nav
          ref={navRef}
          onMouseLeave={updateIndicatorToActive}
          className="relative hidden min-[1000px]:flex items-center mx-auto p-1 rounded-full bg-white/[0.04] border border-white/10"
        >
          {/* Sliding Indicator */}
          <span
            className="absolute top-1 bottom-1 rounded-full pointer-events-none transition-[left,width,opacity] duration-350 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.opacity,
              background: "linear-gradient(135deg, #C62849, #541329)",
              boxShadow: "0 0 20px rgba(198, 40, 73, 0.6)",
              willChange: "left, width",
              transform: "translateZ(0)",
            }}
          />

          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => {
                  if (el) linksRef.current.set(link.href, el);
                }}
                onMouseEnter={(e) => handleLinkHover(e.currentTarget)}
                className={`relative z-10 px-4 py-2 text-[13px] font-medium rounded-full transition-colors whitespace-nowrap ${
                  active ? "text-white font-semibold" : "text-[#cfd8ee] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons (Desktop) */}
        <div className="hidden min-[1000px]:flex items-center gap-2">
          <Link
            href="/portal"
            className="btn-ghost px-4 py-2 text-[13px] font-bold rounded-full"
          >
            Log in
          </Link>
          <Link
            href="/courses"
            className="btn-gold px-4 py-2 text-[13px] font-bold rounded-full"
          >
            Enrol now ↗
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          ref={burgerRef}
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-iris-menu"
          className="sh-burger min-[1001px]:hidden"
        >
          <i />
          <i />
        </button>
      </div>

      {/* Full-screen Iris Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        burgerRef={burgerRef}
      />
    </header>
  );
}
