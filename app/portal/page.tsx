"use client";

import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { AdminPreviewTable } from "@/components/site/AdminPreviewTable";
import { Icon, IconName } from "@/components/ui/Icon";

const SIDEBAR_TABS = [
  { name: "Dashboard", icon: "monitor" },
  { name: "My Courses", icon: "book" },
  { name: "Lectures", icon: "play" },
  { name: "Resources", icon: "file" },
  { name: "Progress", icon: "chart" },
];

export default function PortalPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFeedback, setLoginFeedback] = useState<string | null>(null);

  // Portal dashboard demo state
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [selectedCourse, setSelectedCourse] = useState("AS Level Accounting");
  const [isCompleted, setIsCompleted] = useState(false);

  const progress = isCompleted ? 100 : 68;
  const lessonsCompleted = isCompleted ? 13 : 12;

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

      {/* Login Form + Student Dashboard Preview */}
      <section className="relative z-10 py-20 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Login Form */}
            <div className="p-7 sm:p-9 rounded-[26px] bg-gradient-to-br from-[#131A36]/90 to-[#0B1026]/95 border border-white/10 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              <h2 className="text-2xl sm:text-3xl text-white font-bold mb-2">
                Welcome <span className="cyan-text">back.</span>
              </h2>
              <p className="text-sm text-[#A9B6D3] mb-6">
                Enter your student credentials to open your dashboard.
              </p>

              <form onSubmit={handleLoginSubmit} className="grid gap-4">
                <div>
                  <label className="block text-xs font-mono text-[#A9B6D3] uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-cyan transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A9B6D3] uppercase tracking-wider mb-1.5">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-cyan transition-colors"
                  />
                </div>

                {loginFeedback && (
                  <div className="p-3 rounded-xl bg-cyan/10 border border-cyan/30 text-xs text-cyan leading-relaxed">
                    {loginFeedback}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-gold w-full py-3.5 text-sm font-bold rounded-full mt-2 justify-center flex items-center gap-2"
                >
                  Log in to Portal ↗
                </button>
              </form>

              <div className="mt-6 pt-5 border-t border-white/10 text-xs text-[#A9B6D3] leading-relaxed">
                <b className="text-gold block mb-1">Notice for new students:</b>
                Account access is granted by Sir Hammad upon course enrollment.
                Public registration is disabled for security and student privacy.
              </div>
            </div>

            {/* Right: Live Interactive Portal Dashboard */}
            <div>
              <div className="font-mono text-xs text-gold uppercase tracking-wider mb-3">
                Live Interface Preview
              </div>

              <div className="grid grid-cols-1 min-[500px]:grid-cols-[130px_1fr] gap-3 p-4 sm:p-5 rounded-[22px] bg-[#0b1130] border border-cyan/30 shadow-[0_40px_90px_-30px_rgba(198,40,73,0.55),0_0_40px_rgba(24,215,245,0.12)] text-xs">
                {/* Sidebar */}
                <div className="hidden min-[500px]:flex flex-col pr-2 border-r border-white/10">
                  <b className="font-mono text-[9px] tracking-wider text-[#A9B6D3] uppercase mb-3 block">
                    STUDENT SPACE
                  </b>
                  <div className="flex flex-col gap-1">
                    {SIDEBAR_TABS.map((tab) => {
                      const isActive = activeTab === tab.name;
                      return (
                        <button
                          key={tab.name}
                          onClick={() => setActiveTab(tab.name)}
                          className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg font-medium transition-all text-left ${
                            isActive
                              ? "bg-gold text-[#1a1205] font-bold shadow-sm"
                              : "text-[#A9B6D3] hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <Icon
                            name={tab.icon as IconName}
                            size={13}
                            color={isActive ? "#1a1205" : "currentColor"}
                          />
                          <span className="truncate">{tab.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Dashboard Main Area */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <b className="font-heading font-extrabold text-sm sm:text-base text-white">
                      Welcome, Student!
                    </b>
                    <span className="font-mono text-[9px] text-cyan px-2 py-0.5 rounded-full border border-cyan/35 bg-cyan/10">
                      Active Enrollment
                    </span>
                  </div>

                  {/* KPI Cards */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2.5 rounded-xl border border-white/10 bg-white/[0.04]">
                      <b className="font-heading font-extrabold text-lg text-white block">
                        02
                      </b>
                      <span className="text-[9px] text-[#A9B6D3] leading-tight block">
                        Courses
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl border border-white/10 bg-white/[0.04]">
                      <b className="font-heading font-extrabold text-lg text-white block">
                        {progress}%
                      </b>
                      <span className="text-[9px] text-[#A9B6D3] leading-tight block">
                        Progress
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl border border-white/10 bg-white/[0.04]">
                      <b className="font-heading font-extrabold text-lg text-white block">
                        {lessonsCompleted}
                      </b>
                      <span className="text-[9px] text-[#A9B6D3] leading-tight block">
                        Lessons
                      </span>
                    </div>
                  </div>

                  {/* Active Course Card */}
                  <div className="p-3 rounded-xl border border-white/10 bg-white/[0.04]">
                    <div className="flex items-center justify-between gap-2">
                      <select
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        className="bg-[#121c39] border border-white/10 text-white rounded-lg px-2 py-1 text-xs font-semibold focus:outline-none focus:border-cyan"
                      >
                        <option>AS Level Accounting</option>
                        <option>O Level Accounting</option>
                      </select>
                      <b className="font-heading font-bold text-xs text-cyan">
                        {progress}%
                      </b>
                    </div>

                    <span className="text-[11px] text-[#A9B6D3] block mt-2">
                      Continue: Chapter 4 · Inventory valuation (FIFO & AVCO)
                    </span>

                    <div className="h-1.5 rounded-full bg-[#1c2748] overflow-hidden mt-2">
                      <div
                        className="h-full bg-gradient-to-r from-crimson via-gold to-cyan transition-all duration-700 ease-out"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <button
                      onClick={() => setIsCompleted(!isCompleted)}
                      className={`mt-3 w-full py-2 px-3 text-xs font-bold rounded-lg border transition-all ${
                        isCompleted
                          ? "bg-emerald-500/20 border-emerald-400 text-emerald-300"
                          : "btn-ghost text-white"
                      }`}
                    >
                      {isCompleted
                        ? "✓ Lesson completed (undo)"
                        : "Mark current lesson complete"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Dashboard Preview Section (matching prototype line 128) */}
      <section className="relative z-10 py-20 bg-[#070D20]/70 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="eyebrow-badge">For Sir Hammad</div>
          <h2 className="text-3xl sm:text-4xl text-white mb-3">
            The admin <span className="cyan-text">control room.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A9B6D3] max-w-[620px] mb-8 leading-relaxed">
            Create, suspend and manage student accounts, and see each student&apos;s
            watchtime and progress. Try clicking the Active/Suspended status buttons
            below to preview teacher management.
          </p>

          <AdminPreviewTable />
        </div>
      </section>
    </>
  );
}
