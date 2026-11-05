"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useCallback } from "react";
import { SITE_CONFIG } from "@/content/site";

const MENU_ROUTES = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Student Portal", href: "/portal" },
  { label: "Contact", href: "/contact" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  burgerRef: React.RefObject<HTMLButtonElement>;
}

export function MobileMenu({ isOpen, onClose, burgerRef }: MobileMenuProps) {
  const pathname = usePathname();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const navTimerRef = useRef<NodeJS.Timeout | null>(null);
  const focusTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Set circular iris expansion origin from burger bounding box
  const updateOrigin = useCallback(() => {
    if (!burgerRef.current || !menuRef.current) return;
    const rect = burgerRef.current.getBoundingClientRect();
    const x = `${rect.left + rect.width / 2}px`;
    const y = `${rect.top + rect.height / 2}px`;
    menuRef.current.style.setProperty("--x", x);
    menuRef.current.style.setProperty("--y", y);
  }, [burgerRef]);

  // Handle open/close side effects (scroll lock, focus, vibration, inert)
  useEffect(() => {
    const menuEl = menuRef.current;
    if (!menuEl) return;

    if (isOpen) {
      updateOrigin();
      menuEl.removeAttribute("inert");
      menuEl.setAttribute("aria-hidden", "false");

      // Lock scroll
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyOverflow = document.body.style.overflow;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("lock");

      // Gentle haptic feedback if available
      if (typeof navigator !== "undefined" && navigator.vibrate) {
        try {
          navigator.vibrate(8);
        } catch {
          // ignore
        }
      }

      // Shift focus to active link or first link
      focusTimerRef.current = setTimeout(() => {
        const activeLink =
          listRef.current?.querySelector<HTMLAnchorElement>('a[aria-current="page"]') ||
          listRef.current?.querySelector<HTMLAnchorElement>("a");
        activeLink?.focus({ preventScroll: true });
      }, 350);

      return () => {
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.classList.remove("lock");
        if (focusTimerRef.current) clearTimeout(focusTimerRef.current);
      };
    } else {
      // Closing state: make inert after transition
      const timer = setTimeout(() => {
        menuEl.setAttribute("inert", "");
        menuEl.setAttribute("aria-hidden", "true");
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [isOpen, updateOrigin]);

  // Update origin on resize & close on desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1000 && isOpen) {
        onClose();
      } else if (isOpen) {
        updateOrigin();
      }
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [isOpen, onClose, updateOrigin]);

  // Keyboard navigation & Tab focus trapping inside dialog
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        burgerRef.current?.focus({ preventScroll: true });
        return;
      }

      if (e.key === "Tab") {
        const menuEl = menuRef.current;
        const burgerEl = burgerRef.current;
        if (!menuEl || !burgerEl) return;

        const focusables = Array.from(
          menuEl.querySelectorAll<HTMLElement>('a[href]:not([tabindex="-1"]), button:not([disabled])')
        ).filter((el) => el.getClientRects().length > 0);

        const allFocusable = [...focusables, burgerEl];
        if (!allFocusable.length) return;

        const first = allFocusable[0];
        const last = allFocusable[allFocusable.length - 1];
        const current = document.activeElement;

        if (e.shiftKey && (current === first || !allFocusable.includes(current as HTMLElement))) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && (current === last || !allFocusable.includes(current as HTMLElement))) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, burgerRef]);

  // Clean navigation with graceful exit transition
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Normal browser behavior for modifier/external clicks
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

    e.preventDefault();
    onClose();

    if (navTimerRef.current) clearTimeout(navTimerRef.current);

    if (pathname === href) {
      burgerRef.current?.focus({ preventScroll: true });
      return;
    }

    navTimerRef.current = setTimeout(() => {
      router.push(href);
    }, 280);
  };

  const isCurrentPage = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div
      ref={menuRef}
      id="mobile-iris-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
      inert={!isOpen}
      aria-hidden={!isOpen}
      className={`sh-menu min-[1001px]:hidden ${isOpen ? "open" : ""}`}
    >
      <div className="sh-mi">
        {/* Eyebrow Label */}
        <div className="sh-eyebrow">Menu</div>

        {/* Big Numbered Rows */}
        <nav aria-label="Primary mobile navigation">
          <ol ref={listRef}>
            {MENU_ROUTES.map((route, idx) => {
              const active = isCurrentPage(route.href);
              const num = String(idx + 1).padStart(2, "0");
              return (
                <li key={route.href} style={{ "--i": idx } as React.CSSProperties}>
                  <Link
                    href={route.href}
                    onClick={(e) => handleNavClick(e, route.href)}
                    className={active ? "on" : ""}
                    aria-current={active ? "page" : undefined}
                  >
                    <span className="n">{num}</span>
                    <span className="t">{route.label}</span>
                    <span className="ar" aria-hidden="true">
                      ↗
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Footer of Menu */}
        <div className="sh-mf">
          <div className="sh-pr">
            {/* Left Fact & Handwritten note */}
            <div>
              <div className="sh-bd">
                <b>7</b>
                <span>
                  years teaching
                  <br />
                  experience
                </span>
              </div>
              <span className="sh-note">
                keep it balanced!
                <svg viewBox="0 0 80 30" aria-hidden="true">
                  <path d="M4 6c20 22 46 22 68 4" />
                  <path d="M60 4l12 6-10 8" />
                </svg>
              </span>
            </div>

            {/* Arch Portrait of Sir Hammad peeking up */}
            <div className="sh-arch">
              <Image
                src="/images/portrait_transparent.png"
                alt="Sir Sahibzada Hammad"
                width={240}
                height={280}
                priority
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[128%] max-w-none object-contain"
              />
            </div>
          </div>

          {/* Action Buttons: Log in + Enrol now */}
          <div className="sh-ac">
            <Link
              href="/portal"
              onClick={(e) => handleNavClick(e, "/portal")}
              className="sh-mbtn"
            >
              Log in
            </Link>
            <Link
              href="/courses"
              onClick={(e) => handleNavClick(e, "/courses")}
              className="sh-mbtn sh-mgd"
            >
              Enrol now ↗
            </Link>
          </div>

          {/* Metadata Footer: Instagram & Credit */}
          <div className="sh-mt">
            <a
              href={SITE_CONFIG.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram ({SITE_CONFIG.contact.instagramHandle}) ↗
            </a>
            <em>made by Rayan</em>
          </div>
        </div>
      </div>
    </div>
  );
}
