import React, { useState } from "react";

/**
 * Sir Hammad Academy — standalone React + Tailwind component collection.
 * Requires React and Tailwind CSS. No icon libraries, images, APIs, or external assets.
 *
 * Import individual components to embed in an existing page:
 *   import { AcademyFeatureGrid, AcademyCourseCards, AcademyStudentDashboard,
 *            AcademyStatsStrip, AcademyLecturePreview, AcademyShowcase }
 *     from './SirHammadComponents';
 *
 * Interactive controls are functional local-state demos by default.
 * Pass onCourseSelect, onOpenLecture, or onNavigate to connect real navigation.
 */

const palette = {
  navy: '#070D25', panel: '#101830', cyan: '#12D7FA', crimson: '#D92B58', gold: '#FFC45E',
};
const courses = [
  { id: 'o-level', tag: 'O LEVEL', name: 'O Level Accounting', details: 'Build strong foundations with structured lessons and topic-wise practice.', duration: '28 chapters', icon: '◈', lessons: 42 },
  { id: 'as-a-level', tag: 'AS & A LEVEL', name: 'AS & A Level Accounting', details: 'Master advanced topics with worked examples, exam strategy and revision.', duration: '36 chapters', icon: '▱', lessons: 58 },
  { id: 'revision', tag: 'EXAM PREP', name: 'Revision & Past Papers', details: 'Practice confidently with examiner-style questions and guided solutions.', duration: 'Past paper library', icon: '✓', lessons: 24 },
];
const features = [
  { icon: '▶', title: 'Recorded Lectures', text: 'Learn at your pace, any time.' },
  { icon: '▤', title: 'Structured Syllabus', text: 'Clear, chapter-by-chapter learning.' },
  { icon: '◎', title: 'Exam Preparation', text: 'Practice for O, AS & A Level exams.' },
  { icon: '▱', title: 'Student Portal', text: 'Track lessons and stay organized.' },
];

function IconTile({ children, tint = 'cyan' }) {
  return <span aria-hidden="true" className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border text-2xl font-bold shadow-lg ${tint === 'gold' ? 'border-amber-400/40 bg-amber-400/10 text-amber-300' : 'border-cyan-400/40 bg-cyan-400/10 text-cyan-300'}`}>{children}</span>;
}
function GlassPanel({ children, className = '' }) {
  return <div className={`relative overflow-hidden rounded-2xl border border-white/15 bg-[#0c1430]/90 shadow-[0_14px_45px_rgba(0,0,0,.25)] ${className}`}>{children}</div>;
}
function SectionIntro({ eyebrow, title, accent, description }) {
  return <div className="mb-7 max-w-2xl">
    <p className="mb-2 text-xs font-bold uppercase tracking-[.25em] text-amber-300">{eyebrow}</p>
    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title} <span className="text-cyan-300">{accent}</span></h2>
    {description && <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{description}</p>}
  </div>;
}

export function AcademyFeatureGrid() {
  return <section aria-label="Academy features" className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
    {features.map((feature) => <GlassPanel key={feature.title} className="group p-4 transition hover:-translate-y-1 hover:border-cyan-400/60">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
      <div className="flex items-center gap-3"><IconTile>{feature.icon}</IconTile><div><h3 className="text-sm font-bold text-white">{feature.title}</h3><p className="mt-1 text-xs text-slate-300">{feature.text}</p></div></div>
    </GlassPanel>)}
  </section>;
}

export function AcademyStatsStrip({ students = '500+', lectures = '100+', courseCount = '6+', rating = '4.9/5' }) {
  const stats = [
    { symbol: '♟', number: students, label: 'Students' },
    { symbol: '▶', number: lectures, label: 'Recorded Lectures' },
    { symbol: '▱', number: courseCount, label: 'Courses' },
    { symbol: '☆', number: rating, label: 'Student Rating' },
  ];
  return <GlassPanel className="grid grid-cols-2 gap-px bg-white/10 p-px sm:grid-cols-4">
    {stats.map((stat, i) => <div key={stat.label} className="flex items-center gap-3 bg-[#0b1530] px-4 py-5 sm:justify-center"><span aria-hidden="true" className={`text-2xl ${i === 3 ? 'text-amber-300' : 'text-cyan-300'}`}>{stat.symbol}</span><div><p className="text-xl font-extrabold text-white sm:text-2xl">{stat.number}</p><p className="text-xs text-slate-300">{stat.label}</p></div></div>)}
  </GlassPanel>;
}

export function AcademyCourseCards({ onCourseSelect }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const handleSelect = (course) => { setSelectedCourse(course); onCourseSelect?.(course); };
  return <section aria-label="Academy courses">
    <SectionIntro eyebrow="Courses built for your success" title="Learn with" accent="confidence." description="Explore guided learning paths designed for accounting students at every stage." />
    <div className="grid gap-4 md:grid-cols-3">
      {courses.map((course) => <GlassPanel key={course.id} className="group flex flex-col p-5 transition hover:-translate-y-1 hover:border-rose-400/60">
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-rose-500/15 blur-3xl" />
        <div className="relative flex items-start justify-between"><span className="rounded-full border border-amber-300/70 px-3 py-1 text-[10px] font-bold tracking-wider text-amber-200">{course.tag}</span><IconTile tint="gold">{course.icon}</IconTile></div>
        <h3 className="relative mt-5 text-xl font-extrabold text-white">{course.name}</h3><p className="relative mt-2 min-h-[4.5rem] text-sm leading-6 text-slate-300">{course.details}</p>
        <div className="relative mt-auto flex items-center justify-between border-t border-white/10 pt-4"><span className="text-xs text-slate-300">{course.duration}</span><button type="button" onClick={() => handleSelect(course)} className="rounded-xl bg-gradient-to-r from-amber-300 to-orange-400 px-4 py-2 text-sm font-bold text-[#10162b] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300">Explore ↗</button></div>
      </GlassPanel>)}
    </div>
    {selectedCourse && <p role="status" className="mt-4 text-sm text-cyan-200">Selected: {selectedCourse.name}. {onCourseSelect ? 'Your course callback has been called.' : 'Connect onCourseSelect to your course route.'}</p>}
  </section>;
}

export function AcademyLecturePreview({ onOpenLecture }) {
  const [playing, setPlaying] = useState(false);
  const handlePlay = () => { setPlaying((previous) => !previous); onOpenLecture?.({ id: 'financial-statements', title: 'Financial Statements' }); };
  return <GlassPanel className="grid items-center gap-6 p-6 md:grid-cols-[1fr_1.2fr] md:p-8">
    <div><p className="text-xs font-bold uppercase tracking-[.22em] text-amber-300">Lecture spotlight</p><h2 className="mt-3 text-3xl font-extrabold text-white">Accounting concepts, <span className="text-cyan-300">made clearer.</span></h2><p className="mt-4 text-sm leading-7 text-slate-300">A sample lecture card for the student learning experience. Hook it to your actual course player to launch real video lessons.</p><div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-200"><span className="rounded-full border border-white/20 px-3 py-1">Worked examples</span><span className="rounded-full border border-white/20 px-3 py-1">Past paper practice</span><span className="rounded-full border border-white/20 px-3 py-1">Exam focus</span></div></div>
    <div className="relative overflow-hidden rounded-2xl border border-cyan-400/35 bg-gradient-to-br from-[#142a58] via-[#0b1027] to-[#4e1333] p-6 shadow-[0_0_35px_rgba(12,184,243,.12)]">
      <div className="mb-5 flex items-center justify-between text-xs text-slate-300"><span>O & A Level Accounting</span><span>Sample lesson</span></div><div className="flex min-h-40 flex-col items-center justify-center"><button type="button" onClick={handlePlay} aria-label={playing ? 'Pause preview' : 'Play preview'} aria-pressed={playing} className="grid h-20 w-20 place-items-center rounded-full border border-cyan-200/50 bg-cyan-300/15 text-3xl text-white shadow-[0_0_35px_rgba(12,184,243,.4)] transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300">{playing ? 'Ⅱ' : '▶'}</button><p className="mt-4 text-center text-xl font-bold text-white">Financial Statements</p><p className="mt-1 text-sm text-slate-300">Assets • Liabilities • Equity</p></div>
      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/15"><div className={`h-full rounded-full bg-gradient-to-r from-amber-300 to-rose-500 transition-all duration-500 ${playing ? 'w-2/3' : 'w-1/4'}`} /></div><p role="status" className="mt-2 text-xs text-slate-300">{playing ? 'Preview active — connect your real lesson video.' : 'Select play to preview the interaction.'}</p>
    </div>
  </GlassPanel>;
}

export function AcademyStudentDashboard({ onNavigate }) {
  const tabs = [ { name: 'Dashboard', icon: '⌂' }, { name: 'My Courses', icon: '▱' }, { name: 'Lectures', icon: '▶' }, { name: 'Resources', icon: '▤' }, { name: 'Progress', icon: '▥' } ];
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [completed, setCompleted] = useState(false);
  const [activeCourse, setActiveCourse] = useState('AS & A Level Accounting');
  const progress = completed ? 100 : 68;
  const selectTab = (tab) => { setActiveTab(tab); onNavigate?.(tab); };
  return <section aria-label="Student portal preview">
    <SectionIntro eyebrow="Your personal study space" title="One powerful" accent="student portal." description="An interactive example of how students can organize their learning and monitor progress." />
    <GlassPanel className="p-4 shadow-[0_0_36px_rgba(14,180,245,.12)] sm:p-6"><div className="grid gap-5 md:grid-cols-[170px_1fr]">
      <nav aria-label="Portal preview navigation" className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:pb-0"><p className="hidden px-3 pb-2 text-xs font-bold uppercase tracking-wider text-slate-300 md:block">Student space</p>{tabs.map((tab) => <button type="button" key={tab.name} onClick={() => selectTab(tab.name)} aria-current={activeTab === tab.name ? 'page' : undefined} className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300 ${activeTab === tab.name ? 'bg-gradient-to-r from-amber-300 to-orange-400 text-[#11162c]' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}><span>{tab.icon}</span>{tab.name}</button>)}</nav>
      <div className="min-w-0"><div className="mb-4 flex flex-wrap items-center justify-between gap-2"><h3 className="text-xl font-bold text-white">{activeTab === 'Dashboard' ? 'Welcome back, Student! 👋' : activeTab}</h3><span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">Portal preview</span></div>
        <div className="grid gap-3 sm:grid-cols-3"><div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-xs text-slate-300">Enrolled Courses</p><p className="mt-1 text-2xl font-extrabold text-white">02</p></div><div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-xs text-slate-300">Learning Progress</p><p className="mt-1 text-2xl font-extrabold text-amber-300">{progress}%</p></div><div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-xs text-slate-300">Completed Lessons</p><p className="mt-1 text-2xl font-extrabold text-white">{completed ? '13' : '12'}</p></div></div>
        <div className="mt-4 rounded-xl border border-cyan-400/20 bg-[#091229] p-4"><div className="flex flex-wrap items-center justify-between gap-2"><div><p className="text-xs text-slate-300">Continue Learning</p><label className="sr-only" htmlFor="academy-course-select">Course</label><select id="academy-course-select" value={activeCourse} onChange={(e) => { setActiveCourse(e.target.value); setCompleted(false); }} className="mt-1 max-w-full rounded-md border border-white/20 bg-[#121c39] p-2 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300"><option>AS & A Level Accounting</option><option>O Level Accounting</option></select></div><span className="text-sm font-bold text-cyan-300">{progress}%</span></div>
          <p className="mt-3 text-xs text-slate-300">Chapter 4: Financial Statements</p><div role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Learning progress" className="mt-2 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500" style={{ width: `${progress}%` }} /></div><button type="button" onClick={() => setCompleted((v) => !v)} className="mt-4 rounded-lg border border-amber-300/45 px-4 py-2 text-xs font-bold text-amber-200 transition hover:bg-amber-300/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300">{completed ? 'Undo lesson completion' : 'Mark current lesson complete'}</button>
        </div>
      </div>
    </div></GlassPanel>
  </section>;
}

export function AcademyShowcase(props) {
  return <div className="w-full bg-[#060C21] px-4 py-14 font-sans text-white sm:px-6 lg:px-10" style={{ backgroundImage: 'radial-gradient(circle at 95% 15%, rgba(196,25,73,.15), transparent 35%), radial-gradient(circle at 10% 65%, rgba(0,198,255,.11), transparent 35%)' }}><div className="mx-auto max-w-7xl space-y-16"><AcademyStatsStrip /><AcademyFeatureGrid /><AcademyCourseCards onCourseSelect={props.onCourseSelect} /><AcademyLecturePreview onOpenLecture={props.onOpenLecture} /><AcademyStudentDashboard onNavigate={props.onNavigate} /></div></div>;
}

export default AcademyShowcase;
