"use client";

import { useEffect, useRef, useCallback } from "react";
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
  const navRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLOListElement>(null);

  // Position origin (--x, --y) at the center of the burger button
  const setOrigin = useCallback(() => {
    if (burgerRef.current && menuRef.current) {
      const rect = burgerRef.current.getBoundingClientRect();
      menuRef.current.style.setProperty("--x", `${rect.left + rect.width / 2}px`);
      menuRef.current.style.setProperty("--y", `${rect.top + rect.height / 2}px`);
    }
  }, [burgerRef]);

  // Set --vvh from window.visualViewport.height (px) on load, visualViewport resize & scroll, and orientationchange
  useEffect(() => {
    const updateVvh = () => {
      const vh = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;
      document.documentElement.style.setProperty("--vvh", `${vh}px`);
      if (menuRef.current) {
        menuRef.current.style.setProperty("--vvh", `${vh}px`);
      }
    };

    updateVvh();

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", updateVvh);
      window.visualViewport.addEventListener("scroll", updateVvh);
    }
    window.addEventListener("orientationchange", updateVvh);
    window.addEventListener("resize", updateVvh);

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", updateVvh);
        window.visualViewport.removeEventListener("scroll", updateVvh);
      }
      window.removeEventListener("orientationchange", updateVvh);
      window.removeEventListener("resize", updateVvh);
    };
  }, []);

  // JS Safety net: check if menu overflows client height and apply shedding classes
  const checkSafetyFit = useCallback(() => {
    const menu = menuRef.current;
    if (!menu) return;

    menu.classList.remove("shed-1", "shed-2", "shed-3");
    menu.style.setProperty("--row-scale", "1");

    if (menu.scrollHeight > menu.clientHeight + 1) {
      menu.classList.add("shed-1");
    }
    if (menu.scrollHeight > menu.clientHeight + 1) {
      menu.classList.add("shed-2");
    }
    if (menu.scrollHeight > menu.clientHeight + 1) {
      menu.classList.add("shed-3");
    }
    if (menu.scrollHeight > menu.clientHeight + 1) {
      let scale = 0.95;
      while (menu.scrollHeight > menu.clientHeight + 1 && scale >= 0.6) {
        menu.style.setProperty("--row-scale", String(scale));
        scale -= 0.05;
      }
    }
  }, []);

  // Measure row height with ResizeObserver and set --row-h = nav.clientHeight / linkCount
  useEffect(() => {
    if (!navRef.current) return;
    const count = links.length || 6;

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const h = entry.contentRect.height;
        if (h > 0) {
          const rowH = h / count;
          menuRef.current?.style.setProperty("--row-h", `${rowH}px`);
          checkSafetyFit();
        }
      }
    });

    ro.observe(navRef.current);
    return () => ro.disconnect();
  }, [links.length, checkSafetyFit]);

  // Real scroll lock (iOS-proof): body position fixed at -scrollY, restore on close
  useEffect(() => {
    if (isOpen) {
      setOrigin();

      const y = window.scrollY;
      document.body.dataset.y = String(y);
      Object.assign(document.body.style, {
        position: "fixed",
        top: `-${y}px`,
        left: "0",
        right: "0",
        width: "100%",
      });
      document.documentElement.style.overscrollBehavior = "none";
      document.documentElement.classList.add("lock");

      checkSafetyFit();

      // Focus active link or first link after iris reveals
      const timer = setTimeout(() => {
        if (!menuRef.current) return;
        const activeLink = menuRef.current.querySelector<HTMLAnchorElement>(
          'a[aria-current="page"]'
        );
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

          if (
            e.shiftKey &&
            (current === first || !focusables.includes(current as HTMLElement))
          ) {
            e.preventDefault();
            last.focus();
          } else if (
            !e.shiftKey &&
            (current === last || !focusables.includes(current as HTMLElement))
          ) {
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
          checkSafetyFit();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("resize", handleResize);

      return () => {
        clearTimeout(timer);
        const savedY = +(document.body.dataset.y || 0);
        document.body.removeAttribute("style");
        document.documentElement.style.overscrollBehavior = "";
        document.documentElement.classList.remove("lock");
        window.scrollTo(0, savedY);

        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isOpen, onClose, burgerRef, setOrigin, checkSafetyFit]);

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
        {/* Row 1: Eyebrow */}
        <div className="menu-eyebrow">Menu</div>

        {/* Row 2: Fluid Links sharing equal space */}
        <nav
          ref={navRef}
          className="menu-nav"
          aria-label="Primary Mobile Navigation"
        >
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
                    <span className="t font-heading">{link.label}</span>
                    <span className="ar" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Row 3: Bottom block */}
        <div className="menu-footer">
          <div className="pr-row">
            <div className="pr-left">
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
              className="insta-link hover:text-cyan transition-colors"
            >
              Instagram ({SITE_CONFIG.contact.instagramHandle}) ↗
            </a>
            <em className="made-credit italic text-white/90">made by Rayan</em>
          </div>
        </div>
      </div>
    </div>
  );
}
