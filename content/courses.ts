export interface CourseData {
  slug: string;
  level: string;
  code: string;
  name: string;
  blurb: string;
  pricePkr: number | null;
  includes: string[];
  topics: string[];
  overview?: string;
  targetAudience?: string;
}

export const COURSES: CourseData[] = [
  {
    slug: "o-level-accounting",
    level: "O Level",
    code: "CAMBRIDGE 7707",
    name: "O Level Accounting",
    blurb: "Start from the ground up. Build double-entry fluency, then work towards complete financial statements.",
    overview: "A comprehensive course designed for students beginning their accounting journey under the Cambridge 7707 syllabus. Covers fundamental principles of bookkeeping through to the preparation and interpretation of final financial statements.",
    targetAudience: "Students preparing for Cambridge O Level or IGCSE Accounting exams.",
    pricePkr: null,
    includes: [
      "Full lecture recordings",
      "Past paper sessions",
      "Formulae booklet",
      "Student portal access",
    ],
    topics: [
      "Accounting fundamentals & double entry",
      "Books of prime entry & ledger accounts",
      "Trial balance, errors & suspense accounts",
      "Bank reconciliation & control accounts",
      "Depreciation, irrecoverable debts & provisions",
      "Accruals, prepayments & year-end adjustments",
      "Sole trader final accounts",
      "Partnerships, clubs & societies",
      "Limited company accounts",
      "Manufacturing accounts & incomplete records",
      "Ratio analysis & interpretation",
    ],
  },
  {
    slug: "as-level-accounting",
    level: "AS Level",
    code: "CAMBRIDGE 9706 · AS",
    name: "AS Level Accounting",
    blurb: "Sharpen technique on the AS papers with a deeper treatment of the core accounting system.",
    overview: "Rigorous preparation for Cambridge International AS Level Accounting (Paper 1 & Paper 2). Focuses on deep conceptual understanding, complex year-end adjustments, and structured problem-solving under exam conditions.",
    targetAudience: "Students enrolled in Cambridge AS Level Accounting.",
    pricePkr: null,
    includes: [
      "Full lecture recordings",
      "Past paper sessions",
      "Formulae booklet",
      "Student portal access",
    ],
    topics: [
      "The accounting system & double entry",
      "Inventory valuation (FIFO, AVCO)",
      "Non-current assets & depreciation",
      "Irrecoverable debts & allowances",
      "Control accounts & bank reconciliation",
      "Errors, suspense & journal corrections",
      "Sole trader accounts & incomplete records",
      "Partnership accounts",
      "Company accounts basics",
      "Ratio analysis & business decisions",
    ],
  },
  {
    slug: "a-level-accounting",
    level: "A Level",
    code: "CAMBRIDGE 9706 · A2",
    name: "A Level Accounting",
    blurb: "Go deeper into company reporting, then master costing, budgeting and investment decisions.",
    overview: "Advanced Cambridge A2 Level syllabus coverage (Paper 3 & Paper 4). Blends complex financial reporting, partnership changes, cash flow statements, with managerial and cost accounting disciplines.",
    targetAudience: "Second-year A Level students aiming for top marks in Cambridge 9706.",
    pricePkr: null,
    includes: [
      "Full lecture recordings",
      "Past paper sessions",
      "Formulae booklet",
      "Student portal access",
    ],
    topics: [
      "Changes in partnerships & goodwill",
      "Company share capital & reserves",
      "Statement of cash flows",
      "Published accounts & interpretation",
      "Marginal & absorption costing",
      "Budgeting & budgetary control",
      "Standard costing & variance analysis",
      "Capital investment appraisal (payback, ARR, NPV)",
      "Advanced ratio analysis",
    ],
  },
  {
    slug: "revision-past-papers",
    level: "Revision",
    code: "REVISION PACK",
    name: "Revision & Past Papers",
    blurb: "For the final stretch: timed practice, worked solutions and examiner-style technique.",
    overview: "Intensive exam workshop pack designed for the final weeks before Cambridge examinations. Features topic-wise past paper breakdowns, mark scheme strategies, and common examiner trap alerts.",
    targetAudience: "O Level, AS, and A Level students preparing for upcoming exam sessions.",
    pricePkr: null,
    includes: [
      "Full lecture recordings",
      "Past paper sessions",
      "Formulae booklet",
      "Student portal access",
    ],
    topics: [
      "Exam technique & time management",
      "Topic-wise past paper sessions",
      "Worked solutions, mark by mark",
      "Common mistakes to avoid",
      "Formulae & format sheets",
      "Mock paper walkthroughs",
    ],
  },
];
