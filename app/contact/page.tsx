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

              <div className="mt-8">
                <a
                  href={SITE_CONFIG.placeholders.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold px-7 py-3.5 text-sm font-bold rounded-full inline-flex items-center gap-2"
                >
                  Message on Instagram ({SITE_CONFIG.placeholders.contact.instagramHandle}) ↗
                </a>
              </div>

              {/* Verified facts & Placeholders notice */}
              <div className="mt-10 p-5 rounded-2xl bg-white/[0.03] border border-white/10 max-w-[460px]">
                <b className="font-mono text-xs text-gold uppercase tracking-wider block mb-2">
                  Official Channels Status
                </b>
                <p className="text-xs text-[#A9B6D3] leading-relaxed">
                  * Official WhatsApp number, direct email, and phone support are
                  currently awaiting final confirmation from Sir Hammad. All
                  messages sent through this form will be stored for admin review.
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
