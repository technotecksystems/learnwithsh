"use client";

import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { SITE_CONFIG } from "@/content/site";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    level: "O Level",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Say hello"
        title={
          <>
            Talk to <span className="cyan-text">Sir Hammad.</span>
          </>
        }
        subtitle="Questions about courses, syllabus pacing, or enrolment? Send an inquiry and Sir Hammad will get back to you."
      />

      <section className="relative z-10 py-20 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Information & Channels */}
            <div>
              <div className="eyebrow-badge">Direct Inquiries</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white">
                Let&apos;s make it <span className="cyan-text">make sense.</span>
              </h2>
              <p className="mt-5 text-[#c3cde4] text-base sm:text-lg leading-relaxed max-w-[500px]">
                Reach out regarding O Level, AS Level, or A Level Accounting course
                packs, revision bundles, or private student portal access.
              </p>

              {/* Verified Contact Channels */}
              <div className="mt-8 grid gap-3 max-w-[460px]">
                {/* WhatsApp Primary Card */}
                <a
                  href={SITE_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] hover:bg-[#25D366]/10 border border-white/10 hover:border-[#25D366]/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <svg
                        className="w-5 h-5 text-[#25D366]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.818-.981zm10.742-6.538c-.144-.241-.531-.386-1.11-.676-.579-.29-3.424-1.688-3.955-1.881-.53-.193-.916-.29-1.303.29-.386.58-1.496 1.881-1.834 2.268-.338.386-.676.434-1.255.145-.579-.29-2.446-.902-4.66-2.876-1.724-1.538-2.888-3.44-3.226-4.02-.338-.58-.036-.893.253-1.182.26-.26.579-.676.868-1.014.29-.338.386-.58.579-.966.193-.386.096-.724-.048-1.014-.145-.29-1.303-3.138-1.786-4.3-.472-1.13-1.015-.976-1.392-.995l-1.187-.021c-.41 0-1.08.154-1.644.772-.564.618-2.155 2.106-2.155 5.136 0 3.03 2.203 5.961 2.509 6.372.306.411 4.336 6.621 10.505 9.287 1.468.634 2.614 1.013 3.509 1.298 1.474.469 2.815.403 3.876.244 1.182-.177 3.633-1.485 4.148-2.921.515-1.437.515-2.668.369-2.921z" />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm group-hover:text-[#25D366] transition-colors">
                          WhatsApp Sir Hammad
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                          Fast Reply
                        </span>
                      </div>
                      <span className="text-xs font-mono text-[#A9B6D3]">
                        {SITE_CONFIG.contact.whatsapp}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#25D366] group-hover:translate-x-1 transition-transform">
                    Chat ↗
                  </span>
                </a>

                {/* Direct Phone Call Card */}
                <a
                  href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] hover:bg-cyan/10 border border-white/10 hover:border-cyan/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-cyan/15 border border-cyan/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <svg
                        className="w-5 h-5 text-cyan"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold text-white text-sm block group-hover:text-cyan transition-colors">
                        Direct Phone Call
                      </span>
                      <span className="text-xs font-mono text-[#A9B6D3]">
                        {SITE_CONFIG.contact.phone}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-cyan group-hover:translate-x-1 transition-transform">
                    Call ↗
                  </span>
                </a>

                {/* Instagram DM Card */}
                <a
                  href={SITE_CONFIG.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] hover:bg-gold/10 border border-white/10 hover:border-gold/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <svg
                        className="w-5 h-5 text-gold"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-bold text-white text-sm block group-hover:text-gold transition-colors">
                        Instagram DM
                      </span>
                      <span className="text-xs font-mono text-[#A9B6D3]">
                        {SITE_CONFIG.contact.instagramHandle}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-gold group-hover:translate-x-1 transition-transform">
                    Message ↗
                  </span>
                </a>
              </div>

              {/* Verified Status Notice */}
              <div className="mt-8 p-4 rounded-2xl bg-white/[0.03] border border-white/10 max-w-[460px]">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <b className="font-mono text-xs text-white uppercase tracking-wider">
                    Official Support Verified
                  </b>
                </div>
                <p className="text-xs text-[#A9B6D3] leading-relaxed">
                  WhatsApp and direct calls to{" "}
                  <a
                    href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                    className="text-white font-semibold underline hover:text-cyan transition-colors"
                  >
                    {SITE_CONFIG.contact.phone}
                  </a>{" "}
                  are active for course enquiries and student support. You can also send
                  a message through the inquiry form.
                </p>
              </div>
            </div>

            {/* Right: Interactive Inquiry Form */}
            <div className="p-7 sm:p-9 rounded-[26px] bg-gradient-to-br from-[#131A36]/90 to-[#0B1026]/95 border border-white/10 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              {submitted ? (
                <div className="text-center py-10 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center text-3xl mb-4">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-[#A9B6D3] max-w-sm mx-auto mb-6">
                    Thank you for reaching out, {formState.name}. Sir Hammad will review
                    your message regarding {formState.level} Accounting.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", level: "O Level", message: "" });
                    }}
                    className="btn-ghost px-5 py-2.5 text-xs font-bold rounded-full"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Send a Message
                  </h3>
                  <p className="text-xs text-[#A9B6D3] mb-3">
                    Fill in your details below and select your intended course level.
                  </p>

                  <div>
                    <label className="block text-xs font-mono text-[#A9B6D3] uppercase tracking-wider mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rayan Ahmed"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A9B6D3] uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. student@gmail.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A9B6D3] uppercase tracking-wider mb-1.5">
                      Course Level
                    </label>
                    <select
                      value={formState.level}
                      onChange={(e) =>
                        setFormState({ ...formState, level: e.target.value })
                      }
                      className="w-full bg-[#121c39] border border-white/10 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-cyan transition-colors"
                    >
                      <option>O Level Accounting (7707)</option>
                      <option>AS Level Accounting (9706 · AS)</option>
                      <option>A Level Accounting (9706 · A2)</option>
                      <option>Revision & Past Papers Pack</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A9B6D3] uppercase tracking-wider mb-1.5">
                      Message / Questions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Ask about syllabus coverage, enrollment, or study materials..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full py-3.5 text-sm font-bold rounded-full mt-2 justify-center flex items-center gap-2"
                  >
                    Send message ↗
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
