"use client";

import { useState } from "react";

interface StudentRow {
  name: string;
  course: string;
  watchtime: string;
  progress: number;
  status: "Active" | "Suspended";
}

const INITIAL_STUDENTS: StudentRow[] = [
  {
    name: "Student A",
    course: "O Level",
    watchtime: "14h 20m",
    progress: 72,
    status: "Active",
  },
  {
    name: "Student B",
    course: "AS Level",
    watchtime: "9h 05m",
    progress: 48,
    status: "Active",
  },
  {
    name: "Student C",
    course: "A Level",
    watchtime: "21h 40m",
    progress: 90,
    status: "Active",
  },
];

export function AdminPreviewTable() {
  const [students, setStudents] = useState<StudentRow[]>(INITIAL_STUDENTS);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleStatus = (idx: number) => {
    setStudents((prev) =>
      prev.map((student, i) =>
        i === idx
          ? {
              ...student,
              status: student.status === "Active" ? "Suspended" : "Active",
            }
          : student
      )
    );
  };

  return (
    <div className="p-6 sm:p-8 rounded-[24px] bg-gradient-to-br from-[#131A36]/85 to-[#0B1026]/90 border border-white/10 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.8)]">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-[13px] border-collapse min-w-[500px]">
          <thead>
            <tr className="border-b border-white/10">
              <th className="font-mono text-[10px] text-[#A9B6D3] tracking-widest uppercase pb-3 px-3">
                STUDENT
              </th>
              <th className="font-mono text-[10px] text-[#A9B6D3] tracking-widest uppercase pb-3 px-3">
                COURSE
              </th>
              <th className="font-mono text-[10px] text-[#A9B6D3] tracking-widest uppercase pb-3 px-3">
                WATCHTIME
              </th>
              <th className="font-mono text-[10px] text-[#A9B6D3] tracking-widest uppercase pb-3 px-3">
                PROGRESS
              </th>
              <th className="font-mono text-[10px] text-[#A9B6D3] tracking-widest uppercase pb-3 px-3 text-right">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.06]">
            {students.map((student, i) => (
              <tr key={student.name} className="hover:bg-white/[0.02]">
                <td className="py-4 px-3 font-semibold text-white">
                  {student.name}
                </td>
                <td className="py-4 px-3 text-[#cfd8ee]">{student.course}</td>
                <td className="py-4 px-3 font-mono text-xs text-gold">
                  {student.watchtime}
                </td>
                <td className="py-4 px-3 min-w-[160px]">
                  <div className="flex items-center justify-between text-[11px] font-mono text-cyan mb-1.5">
                    <span>{student.progress}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#1c2748] overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-crimson via-gold to-cyan rounded-full transition-all duration-500"
                      style={{ width: `${student.progress}%` }}
                    />
                  </div>
                </td>
                <td className="py-4 px-3 text-right">
                  <button
                    onClick={() => toggleStatus(i)}
                    className={`text-[11px] font-semibold px-3 py-1 rounded-full border transition-all cursor-pointer ${
                      student.status === "Active"
                        ? "bg-cyan/15 text-cyan border-cyan/40 hover:bg-cyan/25"
                        : "bg-crimson/30 text-[#ff9db1] border-crimson/40 hover:bg-crimson/45"
                    }`}
                  >
                    {student.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
        <span className="text-xs text-[#A9B6D3]">
          Demo preview: in Phase 4 this links directly to the PostgreSQL database.
        </span>
        <button
          onClick={() => setModalOpen(true)}
          className="btn-gold px-4 py-2 text-xs font-bold rounded-full"
        >
          + Create student account
        </button>
      </div>

      {/* Demo Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-[#070D20]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0f1634] border border-white/10 rounded-2xl p-6 max-w-md w-full shadow-2xl animate-in fade-in zoom-in-95">
            <h3 className="text-xl font-bold text-white mb-2">
              Create Student Account
            </h3>
            <p className="text-xs text-[#A9B6D3] mb-4">
              Demo Preview: In Phase 4, Sir Hammad will use this form to provision real student credentials with automated welcome emails.
            </p>
            <div className="grid gap-3">
              <input
                type="text"
                placeholder="Student full name"
                className="bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan"
                defaultValue="New Student"
                readOnly
              />
              <input
                type="email"
                placeholder="student@example.com"
                className="bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan"
                defaultValue="student@example.com"
                readOnly
              />
              <select
                className="bg-[#121c39] border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan"
                defaultValue="O Level Accounting"
                disabled
              >
                <option>O Level Accounting</option>
                <option>AS Level Accounting</option>
                <option>A Level Accounting</option>
              </select>
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button
                onClick={() => setModalOpen(false)}
                className="btn-ghost px-4 py-2 text-xs font-bold rounded-full"
              >
                Close preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
