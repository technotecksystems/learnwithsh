"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/content/site";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
  links: NavLink[];
  burgerRef: React.RefObject<HTMLButtonElement>;
}

export function MobileMenu({
  isOpen,
  onClose,
  pathname,
  links,
  burgerRef,
}: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Position the circle expansion directly at the center of the burger button
  useEffect(() => {
    const updateCenter = () => {
      if (!burgerRef.current || !menuRef.current) return;
      const r = burgerRef.current.getBoundingClientRect();
      menuRef.current.style.setProperty("--x", `${r.left + r.width / 2}px`);
      menuRef.current.style.setProperty("--y", `${r.top + r.height / 2}px`);
    };

    updateCenter();

    if (isOpen) {
      document.documentElement.classList.add("lock");
      document.body.classList.add("lock");

      // Auto-focus the active link or first link
      const focusTimer = setTimeout(() => {
        if (!menuRef.current) return;
        const activeLink =
          (menuRef.current.querySelector("a.on") as HTMLElement) ||
          (menuRef.current.querySelector("ol a") as HTMLElement);
        activeLink?.focus({ preventScroll: true });
      }, 400);

      window.addEventListener("resize", updateCenter, { passive: true });

      return () => {
        clearTimeout(focusTimer);
        window.removeEventListener("resize", updateCenter);
      };
    } else {
      document.documentElement.classList.remove("lock");
      document.body.classList.remove("lock");
    }
  }, [isOpen, burgerRef]);

  // Handle ESC and Tab trap
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
        if (!menuRef.current || !burgerRef.current) return;
        const focusable = [
          burgerRef.current,
          ...Array.from(
            menuRef.current.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )
          ),
        ];

        if (focusable.length === 0) return;

        const currentIndex = focusable.indexOf(
          document.activeElement as HTMLElement
        );

        if (e.shiftKey) {
          if (currentIndex <= 0) {
            e.preventDefault();
            focusable[focusable.length - 1].focus();
          }
        } else {
          if (currentIndex === focusable.length - 1 || currentIndex === -1) {
            e.preventDefault();
            focusable[0].focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, burgerRef]);

  // Auto-close on screen resize larger than 1000px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000 && isOpen) {
        onClose();
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, onClose]);

  const isLinkActive = (href: string) => {
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
      className={`iris-menu ${isOpen ? "open" : ""}`}
      style={{
        pointerEvents: isOpen ? "auto" : "none",
      }}
      aria-hidden={!isOpen}
    >
      <div className="iris-mi">
        {/* Eyebrow Label */}
        <div className="iris-eyebrow">Menu</div>

        {/* Primary Navigation Links */}
        <nav aria-label="Mobile Primary">
          <ol>
            {links.map((link, index) => {
              const active = isLinkActive(link.href);
              const formattedNumber = index < 9 ? `0${index + 1}` : `${index + 1}`;
              return (
                <li
                  key={link.href}
                  style={{ "--i": index } as React.CSSProperties}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={active ? "on" : ""}
                    aria-current={active ? "page" : undefined}
                  >
                    <span className="n">{formattedNumber}</span>
                    <span className="t">{link.label}</span>
                    <span className="ar" aria-hidden="true">
                      ↗
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Footer Area with Stats, Note, Portrait & Actions */}
        <div className="iris-mf">
          <div className="iris-pr">
            <div>
              <div className="iris-bd">
                <b>7</b>
                <span>
                  years teaching
                  <br />
                  experience
                </span>
              </div>
              <span className="iris-note">
                keep it balanced!
                <svg viewBox="0 0 80 30" aria-hidden="true">
                  <path d="M4 6c20 22 46 22 68 4" />
                  <path d="M60 4l12 6-10 8" />
                </svg>
              </span>
            </div>

            {/* Arch cutout frame with Sir Hammad's portrait */}
            <div className="iris-arch">
              <Image
                src="/images/portrait_transparent.png"
                alt="Sir Sahibzada Hammad"
                width={190}
                height={200}
                priority
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130%] max-w-none object-contain pointer-events-none select-none"
              />
            </div>
          </div>

          {/* Quick Portal & Enrolment CTAs */}
          <div className="iris-ac">
            <Link href="/portal" onClick={onClose} className="iris-btn">
              Log in
            </Link>
            <Link
              href="/courses"
              onClick={onClose}
              className="iris-btn iris-btn-gd"
            >
              Enrol now ↗
            </Link>
          </div>

          {/* Social and Attribution */}
          <div className="iris-mt">
            <a
              href={SITE_CONFIG.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
            <em>made by Rayan</em>
          </div>
        </div>
      </div>
    </div>
  );
}
