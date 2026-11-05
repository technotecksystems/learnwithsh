"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SITE_CONFIG } from "@/content/site";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: (returnFocus?: boolean) => void;
  burgerRef: React.RefObject<HTMLButtonElement>;
  links: Array<{ href: string; label: string }>;
  activeHref: string;
}

export function MobileMenu({
  isOpen,
  onClose,
  burgerRef,
  links,
  activeHref,
}: MobileMenuProps) {
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);

  // Position origin (--x, --y) at the center of the burger button
  const setOrigin = () => {
    if (burgerRef.current && menuRef.current) {
      const rect = burgerRef.current.getBoundingClientRect();
      menuRef.current.style.setProperty("--x", `${rect.left + rect.width / 2}px`);
      menuRef.current.style.setProperty("--y", `${rect.top + rect.height / 2}px`);
    }
  };

  // Lock scroll when open & manage accessibility
  useEffect(() => {
    if (isOpen) {
      setOrigin();
      const oldHtmlOverflow = document.documentElement.style.overflow;
      const oldBodyOverflow = document.body.style.overflow;

      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("lock");

      // Set focus to the active link or the first link after iris opens
      const timer = setTimeout(() => {
        if (!menuRef.current) return;
        const activeLink = menuRef.current.querySelector<HTMLAnchorElement>('a[aria-current="page"]');
        const firstLink = menuRef.current.querySelector<HTMLAnchorElement>("a");
        (activeLink || firstLink)?.focus({ preventScroll: true });
      }, 350);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault();
          onClose(true);
          return;
        }

        if (e.key === "Tab" && menuRef.current) {
          const focusables = Array.from(
            menuRef.current.querySelectorAll<HTMLElement>(
              'a[href]:not([tabindex="-1"]), button:not([disabled])'
            )
          );
          if (burgerRef.current) {
            focusables.push(burgerRef.current);
          }

          if (!focusables.length) return;

          const first = focusables[0];
          const last = focusables[focusables.length - 1];
          const current = document.activeElement;

          if (e.shiftKey && (current === first || !focusables.includes(current as HTMLElement))) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && (current === last || !focusables.includes(current as HTMLElement))) {
            e.preventDefault();
            first.focus();
          }
        }
      };

      const handleResize = () => {
        if (window.innerWidth > 1000) {
          onClose(false);
        } else {
          setOrigin();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("resize", handleResize);

      return () => {
        clearTimeout(timer);
        document.documentElement.style.overflow = oldHtmlOverflow;
        document.body.style.overflow = oldBodyOverflow;
        document.documentElement.classList.remove("lock");
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isOpen, onClose, burgerRef]);

  const handleNavigate = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    onClose(false);

    // Smooth navigation delay matching iris retract
    setTimeout(() => {
      router.push(href);
    }, 280);
  };

  return (
    <div
      ref={menuRef}
      id="mobile-menu-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Main navigation menu"
      className={`mobile-iris-menu ${isOpen ? "open" : ""}`}
      style={{
        pointerEvents: isOpen ? "auto" : "none",
        visibility: isOpen ? "visible" : "hidden",
      }}
    >
      <div className="mi-container">
        {/* Eyebrow */}
        <div className="menu-eyebrow">Menu</div>

        {/* Big numbered navigation links */}
        <nav aria-label="Primary Mobile Navigation">
          <ol ref={listRef} className="menu-list">
            {links.map((link, index) => {
              const isActive =
                link.href === "/"
                  ? activeHref === "/"
                  : activeHref.startsWith(link.href);

              return (
                <li
                  key={link.href}
                  className="menu-item"
                  style={{ "--i": index } as React.CSSProperties}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavigate(link.href, e)}
                    className={`menu-link ${isActive ? "on" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="n font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="t font-heading">
                      {link.label}
                    </span>
                    <span className="ar" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Menu Footer */}
        <div className="menu-footer">
          {/* Confirmed fact badge & Sir Hammad Arch Portrait */}
          <div className="pr-row">
            <div>
              <div className="teaching-badge">
                <b className="font-heading">7</b>
                <span>
                  years teaching
                  <br />
                  experience
                </span>
              </div>
              <span className="caveat-note">
                keep it balanced!
                <svg viewBox="0 0 80 30" aria-hidden="true">
                  <path d="M4 6c20 22 46 22 68 4" />
                  <path d="M60 4l12 6-10 8" />
                </svg>
              </span>
            </div>

            {/* Arch Portrait of Sir Hammad */}
            <div className="portrait-arch">
              <Image
                src="/images/portrait_transparent.png"
                alt="Sir Sahibzada Hammad, accounting educator"
                width={200}
                height={200}
                priority
                className="portrait-img"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons-row">
            <a
              href="/portal"
              onClick={(e) => handleNavigate("/portal", e)}
              className="menu-action-btn ghost"
            >
              Log in
            </a>
            <a
              href="/courses"
              onClick={(e) => handleNavigate("/courses", e)}
              className="menu-action-btn gold"
            >
              Enrol now ↗
            </a>
          </div>

          {/* Meta footer row */}
          <div className="menu-meta-row">
            <a
              href={SITE_CONFIG.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan transition-colors"
            >
              Instagram ({SITE_CONFIG.contact.instagramHandle}) ↗
            </a>
            <em className="italic text-white/90">made by Rayan</em>
          </div>
        </div>
      </div>
    </div>
  );
}
