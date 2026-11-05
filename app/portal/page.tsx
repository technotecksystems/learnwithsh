"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/site/PageHeader";

export default function PortalPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFeedback, setLoginFeedback] = useState<string | null>(null);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginFeedback(
      "Demo login notice: Full authentication with Argon2 password hashing and PostgreSQL database sessions will be connected in Phase 2."
    );
  };

  return (
    <>
      <PageHeader
        eyebrow="Student login"
        title={
          <>
            Student <span className="cyan-text">Portal.</span>
          </>
        }
        subtitle="Log in with the email and password provided by Sir Hammad to access your lectures, notes, and revision progress."
      />

      {/* Horizontal Student Login Section */}
      <section className="relative z-10 py-10 sm:py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="p-7 sm:p-10 lg:p-12 rounded-[28px] bg-gradient-to-br from-[#131A36]/90 via-[#0B1026]/95 to-[#070D20] border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8),0_0_40px_rgba(24,215,245,0.06)] backdrop-blur-xl">
            {/* Header copy */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl text-white font-bold mb-2">
                Welcome <span className="cyan-text">back.</span>
              </h2>
              <p className="text-sm text-[#A9B6D3]">
                Enter your student credentials to open your dashboard.
              </p>
            </div>

            {/* Horizontal Form on md/lg screens */}
            <form
              onSubmit={handleLoginSubmit}
              className="grid grid-cols-1 md:grid-cols-[1.3fr_1.3fr_auto] gap-5 items-end"
            >
              <div>
                <label className="block text-xs font-mono text-[#A9B6D3] uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="student@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[52px] bg-white/5 border border-white/10 rounded-xl px-4 text-sm text-white focus:outline-none focus:border-cyan transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#A9B6D3] uppercase tracking-wider mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-[52px] bg-white/5 border border-white/10 rounded-xl px-4 text-sm text-white focus:outline-none focus:border-cyan transition-colors"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="btn-gold w-full md:w-auto h-[52px] px-8 text-sm font-bold rounded-xl justify-center flex items-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  Log in to Portal ↗
                </button>
              </div>

              {loginFeedback && (
                <div className="col-span-full p-4 rounded-xl bg-cyan/10 border border-cyan/30 text-xs text-cyan leading-relaxed mt-2">
                  {loginFeedback}
                </div>
              )}
            </form>

            {/* Footer notice */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#A9B6D3] leading-relaxed">
              <div>
                <b className="text-gold">Notice for new students: </b>
                Account access is granted by Sir Hammad upon course enrollment. Public registration is disabled for security and student privacy.
              </div>
              <Link
                href="/contact"
                className="text-cyan hover:underline whitespace-nowrap"
              >
                Need help logging in? ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
