export const SITE_CONFIG = {
  brandName: "Learn with SH",
  tagline: "Where accounting finally balances.",
  subTagline: "O Level · AS Level · A Level Accounting",
  teacherName: "Sir Sahibzada Hammad",
  teacherTitle: "Accounting Educator (O Level, AS & A Level)",
  metaDescription:
    "Learn with Sir Hammad through full recorded lectures, worked past papers and formulae booklets, then track every step in your own student portal.",
  siteUrl: "https://learnwithsh.com", // Canonical production URL

  // Client-verified facts (Do not alter without client confirmation)
  verifiedFacts: {
    experienceYears: 7,
    teachingDescription: "7 years of teaching experience across premier academic institutions in Karachi.",
    institutes: [
      {
        name: "Hexis College",
        logo: "/images/institutes/hexis-college.png",
      },
      {
        name: "Credo School",
        logo: "/images/institutes/credo-school.png",
      },
      {
        name: "The Academy",
        logo: "/images/institutes/the-academy.png",
      },
      {
        name: "Veritas Schooling System",
        logo: "/images/institutes/veritas-schooling-system.png",
      },
    ],
    offer: [
      "Full lecture recordings",
      "Past paper sessions",
      "Formulae booklets",
      "Student portal access",
    ],
  },

  // Clearly marked placeholders to be confirmed by Sir Hammad
  placeholders: {
    priceLabel: "PKR —",
    priceNote: "Pack prices will be published once confirmed by Sir Hammad.",
    contact: {
      instagram: "https://instagram.com/accountswithsh",
      instagramHandle: "@accountswithsh",
      instagramPendingVerification: "sahibzadahammad7", // Note: confirm whether sahibzadahammad7 or @accountswithsh is primary
      whatsapp: "[WhatsApp number to be confirmed]",
      email: "[Email address to be confirmed]",
      phone: "[Phone number to be confirmed]",
      teachingHours: "[Teaching & support hours to be confirmed]",
    },
    bankTransfer: {
      bankName: "[Bank Name to be provided by Sir Hammad]",
      accountTitle: "[Account Title to be provided by Sir Hammad]",
      iban: "[IBAN / Account Number to be provided]",
      branch: "[Branch code to be provided]",
      instructions:
        "Transfer the course pack fee and upload your receipt screenshot/PDF for admin approval within 24 hours.",
    },
    unconfirmedStatsNotice:
      "Student counts, ratings, and pass rates are omitted until confirmed with official academic records.",
    qualificationsNotice:
      "Formal degrees and professional credentials will be added upon confirmation.",
  },

  formulaeTopics: [
    "Irrecoverable debts & allowances",
    "Depreciation & disposals",
    "Accruals & prepayments",
    "Sole trader statements",
    "Partnership appropriation",
    "Manufacturing accounts",
    "Profitability & liquidity ratios",
    "Control accounts",
    "Errors & suspense",
  ],

  marqueeTerms: [
    "Debit",
    "Credit",
    "Trial balance",
    "Depreciation",
    "Ratio analysis",
    "Cash flow",
    "Budgeting",
    "Accruals",
    "Suspense accounts",
    "Goodwill",
    "Partnerships",
    "Bank reconciliation",
  ],

  features: [
    {
      id: "lectures",
      theme: "red" as const,
      titlePrimary: "Full Lecture",
      titleAccent: "Recordings",
      desc: "Complete, high-quality lectures you can watch anytime, at your own pace.",
      href: "/courses",
      ariaLabel: "Explore recorded lectures",
    },
    {
      id: "past-papers",
      theme: "blue" as const,
      titlePrimary: "Past Paper",
      titleAccent: "Sessions",
      desc: "Step-by-step walkthroughs of past papers to build exam confidence.",
      href: "/resources",
      ariaLabel: "Explore past-paper sessions",
    },
    {
      id: "formulae",
      theme: "red" as const,
      titlePrimary: "Formulae",
      titleAccent: "Booklets",
      desc: "Concise, well-organised formulae for quick revision and easy recall.",
      href: "/resources",
      ariaLabel: "Explore formulae booklets",
    },
    {
      id: "progress",
      theme: "blue" as const,
      variant: "progress" as const,
      titlePrimary: "Tracking",
      titleAccent: "& Progress",
      desc: "Monitor your learning, track completed topics and stay on schedule.",
      href: "/portal",
      ariaLabel: "Open student progress portal",
    },
  ],

  methodSteps: [
    {
      number: 1,
      title: "Watch",
      desc: "Learn each chapter from full lecture recordings, at your own pace.",
    },
    {
      number: 2,
      title: "Post",
      desc: "Follow worked examples and see exactly how entries are made.",
    },
    {
      number: 3,
      title: "Practise",
      desc: "Work through past paper sessions, step by step.",
    },
    {
      number: 4,
      title: "Balance",
      desc: "Revise with formulae booklets and track your progress.",
    },
  ],

  faqItems: [
    {
      q: "How do I access my course after enrolling?",
      a: "Once enrolled, Sir Hammad will provide your portal credentials (email and password). You can log in at any time to watch your lectures and download course resources.",
    },
    {
      q: "Can I pay via manual bank transfer or debit card?",
      a: "Yes. Both local bank transfer (with receipt upload and admin review) and online card checkout are supported.",
    },
    {
      q: "Are the lectures pre-recorded or live?",
      a: "Lectures are high-quality, chapter-by-chapter recordings that you can pause, rewind, and rewatch at your convenience, supplemented with worked past paper sessions.",
    },
    {
      q: "What syllabus versions are followed?",
      a: "The curriculum is aligned directly with the Cambridge International syllabus (7707 for O Level, 9706 for AS & A Level).",
    },
  ],

  footerBadge: "made by Rayan",
};
