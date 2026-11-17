export interface CourseModule {
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  category: "one-on-one" | "group";
  type: string;
  title: string;
  duration: string;
  fee: string;
  feeNumeric: number;
  shortDescription: string;
  highlights: string[];
  modules: CourseModule[];
  whatsappMessage: string;
  badge?: string;
}

export const courses: Course[] = [
  {
    id: "1on1-meta-ads",
    category: "one-on-one",
    type: "Personal 1:1 Mentorship",
    title: "Meta Ads Mastery",
    duration: "3 Months",
    fee: "₹49,999",
    feeNumeric: 49999,
    shortDescription: "Master Facebook and Instagram advertising with personalised 1:1 guidance, live campaign practice, and direct mentorship from an experienced practitioner.",
    highlights: [
      "Personalised 1:1 sessions",
      "Live campaign execution",
      "Real ad account access",
      "Direct mentor feedback",
      "Flexible scheduling",
      "Post-course support",
    ],
    modules: [
      {
        title: "Meta Business Suite & Ads Manager",
        topics: [
          "Meta Business Suite setup and structure",
          "Ads Manager navigation and account setup",
          "Pixel installation and event tracking",
          "Business Manager setup and permissions",
        ],
      },
      {
        title: "Campaign Strategy & Structure",
        topics: [
          "Campaign objectives and when to use them",
          "Campaign, Ad Set, and Ad level structure",
          "Budget strategy — CBO vs ABO",
          "Campaign planning and brief creation",
        ],
      },
      {
        title: "Audience Research & Targeting",
        topics: [
          "Interest-based audience targeting",
          "Custom audience creation",
          "Lookalike audience strategy",
          "Audience research methodology",
        ],
      },
      {
        title: "Ad Creative & Copywriting",
        topics: [
          "High-performing ad formats",
          "Ad copywriting principles",
          "Creative strategy for different objectives",
          "Creative testing frameworks",
        ],
      },
      {
        title: "Campaign Optimisation",
        topics: [
          "Reading and interpreting campaign data",
          "Optimisation strategies based on results",
          "Scaling campaigns profitably",
          "Troubleshooting underperforming campaigns",
        ],
      },
      {
        title: "Lead Generation & Conversion Campaigns",
        topics: [
          "Lead generation campaign setup",
          "Instant forms and landing page campaigns",
          "Retargeting strategies",
          "Cost per lead optimisation",
        ],
      },
    ],
    whatsappMessage:
      "Hi GrowClickers Academy, I'm interested in the 1:1 Meta Ads Mastery program (3 Months). Please share the syllabus, class schedule, mentorship details, and admission process.",
    badge: "Most Popular",
  },
  {
    id: "1on1-google-ads",
    category: "one-on-one",
    type: "Personal 1:1 Mentorship",
    title: "Google Ads Mastery",
    duration: "3 Months",
    fee: "₹59,999",
    feeNumeric: 59999,
    shortDescription: "Learn Google Ads from strategy to execution with personalised mentorship, covering Search, Display, and Performance Max campaigns with real account practice.",
    highlights: [
      "Personalised 1:1 sessions",
      "Live Google Ads account access",
      "Search, Display, and PMax training",
      "Real campaign execution",
      "Direct mentor feedback",
      "Flexible scheduling",
    ],
    modules: [
      {
        title: "Google Ads Platform Fundamentals",
        topics: [
          "Google Ads account structure",
          "Campaign types and objectives",
          "Google Analytics 4 integration",
          "Conversion tracking setup",
        ],
      },
      {
        title: "Keyword Research & Planning",
        topics: [
          "Keyword research methodology",
          "Match types and when to use them",
          "Negative keyword strategy",
          "Search term analysis",
        ],
      },
      {
        title: "Search Campaign Mastery",
        topics: [
          "Search campaign setup and structure",
          "Ad copy writing for search",
          "Ad extensions and assets",
          "Quality score optimisation",
        ],
      },
      {
        title: "Display & Remarketing",
        topics: [
          "Google Display Network campaigns",
          "Audience targeting for display",
          "Remarketing list creation",
          "Display creative strategy",
        ],
      },
      {
        title: "Performance Max Campaigns",
        topics: [
          "PMax campaign setup",
          "Asset group creation",
          "Audience signals",
          "PMax vs Search strategy",
        ],
      },
      {
        title: "Campaign Optimisation & Scaling",
        topics: [
          "Bid strategy selection",
          "Budget optimisation",
          "Campaign performance analysis",
          "Scaling profitable campaigns",
        ],
      },
    ],
    whatsappMessage:
      "Hi GrowClickers Academy, I'm interested in the 1:1 Google Ads Mastery program (3 Months). Please share the syllabus, class schedule, mentorship details, and admission process.",
  },
  {
    id: "1on1-complete-performance",
    category: "one-on-one",
    type: "Personal 1:1 Mentorship",
    title: "Complete Performance Marketing",
    duration: "6 Months",
    fee: "₹89,999",
    feeNumeric: 89999,
    shortDescription: "A comprehensive 6-month 1:1 programme covering Meta Ads, Google Ads, strategy, analytics, and business growth — the complete performance marketer's journey.",
    highlights: [
      "Complete Meta Ads + Google Ads",
      "Business strategy fundamentals",
      "Analytics and data interpretation",
      "Agency-ready skill development",
      "Real campaign portfolio",
      "Personalised 1:1 mentorship throughout",
    ],
    modules: [
      {
        title: "Meta Ads Mastery (Months 1–2)",
        topics: [
          "Full Meta Ads curriculum",
          "Live campaign execution",
          "Lead generation and conversion campaigns",
          "Campaign optimisation",
        ],
      },
      {
        title: "Google Ads Mastery (Months 3–4)",
        topics: [
          "Full Google Ads curriculum",
          "Search, Display, and Performance Max",
          "Conversion tracking and analytics",
          "Campaign management",
        ],
      },
      {
        title: "Strategy & Analytics (Month 5)",
        topics: [
          "Marketing strategy fundamentals",
          "Business growth frameworks",
          "Data analysis and reporting",
          "Client communication",
        ],
      },
      {
        title: "Real-World Projects (Month 6)",
        topics: [
          "Live client campaigns",
          "Portfolio development",
          "Agency workflow and client management",
          "Career and business development",
        ],
      },
    ],
    whatsappMessage:
      "Hi GrowClickers Academy, I'm interested in the 1:1 Complete Performance Marketing Program (6 Months). Please share the complete syllabus, class schedule, mentorship details, and admission process.",
    badge: "Complete Package",
  },
  {
    id: "group-meta-ads",
    category: "group",
    type: "Group Training",
    title: "Meta Ads",
    duration: "3 Months",
    fee: "₹14,999",
    feeNumeric: 14999,
    shortDescription: "Learn Meta advertising in a structured group setting with live sessions, peer learning, and practical campaign exercises.",
    highlights: [
      "Live group sessions",
      "Peer learning environment",
      "Recorded session access",
      "Practical assignments",
      "Group doubt clearing",
      "Certificate on completion",
    ],
    modules: [
      {
        title: "Meta Ads Fundamentals",
        topics: ["Platform setup", "Campaign structure", "Audience basics", "Ad formats"],
      },
      {
        title: "Campaign Strategy",
        topics: ["Objective selection", "Budget planning", "Creative strategy", "Targeting methodology"],
      },
      {
        title: "Optimisation & Scaling",
        topics: ["Performance reading", "Optimisation frameworks", "Scaling strategies", "Reporting"],
      },
    ],
    whatsappMessage:
      "Hi GrowClickers Academy, I'm interested in the Group Meta Ads Course (3 Months). Please share the syllabus, upcoming batch schedule, class timings, and admission process.",
  },
  {
    id: "group-google-ads",
    category: "group",
    type: "Group Training",
    title: "Google Ads",
    duration: "3 Months",
    fee: "₹19,999",
    feeNumeric: 19999,
    shortDescription: "Master Google Ads in a collaborative group environment with live sessions, real account demonstrations, and practical exercises.",
    highlights: [
      "Live group sessions",
      "Real account demonstrations",
      "Recorded session access",
      "Practical assignments",
      "Group doubt clearing",
      "Certificate on completion",
    ],
    modules: [
      {
        title: "Google Ads Fundamentals",
        topics: ["Account setup", "Campaign types", "Keyword research", "Ad copy basics"],
      },
      {
        title: "Campaign Management",
        topics: ["Search campaigns", "Display campaigns", "Performance Max", "Conversion tracking"],
      },
      {
        title: "Optimisation & Analytics",
        topics: ["Bid strategies", "Performance analysis", "GA4 integration", "Scaling"],
      },
    ],
    whatsappMessage:
      "Hi GrowClickers Academy, I'm interested in the Group Google Ads Course (3 Months). Please share the syllabus, upcoming batch schedule, class timings, and admission process.",
  },
  {
    id: "group-complete-performance",
    category: "group",
    type: "Group Training",
    title: "Complete Performance Marketing",
    duration: "6 Months",
    fee: "₹34,999",
    feeNumeric: 34999,
    shortDescription: "A comprehensive group programme covering both Meta Ads and Google Ads, designed to build job-ready and freelance-ready performance marketing skills.",
    highlights: [
      "Meta Ads + Google Ads",
      "Live group sessions",
      "Real campaign demonstrations",
      "Practical portfolio projects",
      "Job and freelance readiness",
      "Certificate on completion",
    ],
    modules: [
      {
        title: "Meta Ads (Months 1–3)",
        topics: ["Complete Meta Ads curriculum", "Live campaign demonstrations", "Practical exercises"],
      },
      {
        title: "Google Ads (Months 4–6)",
        topics: ["Complete Google Ads curriculum", "Real account demonstrations", "Campaign management projects"],
      },
    ],
    whatsappMessage:
      "Hi GrowClickers Academy, I'm interested in the Group Complete Performance Marketing Program (6 Months). Please share the syllabus, upcoming batch schedule, class timings, and admission process.",
    badge: "Best Value",
  },
];

