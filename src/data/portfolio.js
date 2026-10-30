const GH = "https://github.com/TRISHNA-K";
const TREE = `${GH}/Product-Project-Management-portfolio/tree/3b84443a435f58b755444b3fd5c0030cecce30af`;

export const EMAIL = "trishnakuruppath@gmail.com";
export const GITHUB_URL = GH;
export const LINKEDIN_URL = "https://www.linkedin.com/in/trishna-k-834230275";
export const RESUME_URL = "https://drive.google.com/file/d/10BJjA4_xW_qrF7okeBSkhF9Lp8R-KtuM/view?usp=sharing";

export const getGmailUrl = (subject = "", body = "") => {
  const su = subject ? `&su=${encodeURIComponent(subject)}` : "";
  const b = body ? `&body=${encodeURIComponent(body)}` : "";
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}${su}${b}`;
};

export const getMailtoUrl = (subject = "", body = "") => {
  const su = subject ? `subject=${encodeURIComponent(subject)}` : "";
  const b = body ? `body=${encodeURIComponent(body)}` : "";
  const query = [su, b].filter(Boolean).join("&");
  return `mailto:${EMAIL}${query ? `?${query}` : ""}`;
};

export const SKILLS = [
  "PRD authoring",
  "User research",
  "RICE prioritisation",
  "A/B testing",
  "Cohort analysis",
  "RAG architecture",
  "Roadmapping",
  "Sentiment analysis",
  "Heuristic audits",
  "North Star metrics",
];

export const STATS = [
  { value: "14", label: "Documented case studies" },
  { value: "10", label: "Core PM artifacts" },
  { value: "02", label: "Data analyses" },
  { value: "02", label: "AI & ML builds" },
];

export const ARTIFACTS = [
  {
    code: "DOC-01",
    status: "Approved",
    category: "pm",
    domain: "UX & Live Tracking",
    title: "One-Screen Mobile Redesign",
    impact: "Making delivery detours understandable",
    description:
      "A self-directed product management case study redesigning Swiggy's live order-tracking screen. Solves post-order detour uncertainty during batched food deliveries with contextual ETA badges, anonymous sequence timelines, and privacy-first route explanations.",
    problem:
      "When delivery partners take apparent detours due to multi-drop routing, customers experience anxiety without contextual updates, driving unnecessary status-check support tickets.",
    tags: ["Swiggy", "Live Tracking", "UX Redesign", "Figma"],
    url: `${TREE}/Swiggy-Delivery-Transparency-One-Screen-Redesign`,
  },
  {
    code: "DOC-02",
    status: "Approved",
    category: "pm",
    domain: "User Research & Discovery",
    title: "Five Discovery User Interviews",
    impact: "3 friction bottlenecks found",
    description:
      "A qualitative user research and product discovery case study on university off-campus mobility. Evaluated travel friction across 5 student archetypes via 1-on-1 interviews to synthesize behavioral trade-offs and define verified carpooling concepts.",
    problem:
      "Informal coordination channels (like 300+ member WhatsApp groups) collapse during high-stakes travel (flights/trains), driving extreme anxiety, flakes, and costly last-minute workarounds.",
    tags: ["User Research", "Interviews", "Mobility", "Affinity Map"],
    url: `${TREE}/Campus-Ride-Sharing-User-Research`,
  },
  {
    code: "DOC-03",
    status: "Approved",
    category: "pm",
    domain: "Product Strategy & Growth",
    title: "Competitor Landscape Comparison",
    impact: "First-order conversion gap uncovered",
    description:
      "A product strategy and competitive teardown deconstructing how Nykaa, Purplle, and Tira convert, retain, and monetize Indian beauty shoppers across acquisition funnels, membership architectures, and shipping unit economics.",
    problem:
      "High CAC, low AOV pressure, and rigid shipping thresholds on small-basket orders create a significant checkout abandonment chasm for first-time shoppers.",
    tags: ["Competitive Analysis", "Funnel Economics", "E-Commerce", "Strategy"],
    url: `${TREE}/Beauty-Ecommerce-Competitor-Analysis`,
  },
  {
    code: "DOC-04",
    status: "Approved",
    category: "pm",
    domain: "Product Analytics & Metric Trees",
    title: "North Star & Metrics Breakdown",
    impact: "Moving past \"zombie scrolling\"",
    description:
      "A product analytics framework for Instagram deconstructing platform telemetry from passive 'time spent' into a high-intent North Star metric: Weekly Active Connectors (WAC), supported by 3 input drivers and anti-gaming guardrails.",
    problem:
      "Optimizing for passive video consumption causes 'zombie scrolling', creating engagement fatigue, silent churn, and eroding durable network health over time.",
    tags: ["Instagram", "North Star", "Metrics Tree", "Analytics"],
    url: `${TREE}/Instagram-Metrics-Breakdown-Framework`,
  },
  {
    code: "DOC-05",
    status: "Approved",
    category: "pm",
    domain: "Growth UX & Activation",
    title: "User Onboarding Flow Audit",
    impact: "Targeting +32% activation lift",
    description:
      "A heuristic evaluation and growth experimentation audit of Nykaa's first-time mobile onboarding. Synthesizes 50 app reviews against Jakob Nielsen's heuristics to design a guest-first lazy registration flow targeting a +32% session activation lift.",
    problem:
      "Mandatory phone OTP gates on cold launch and premature permission dialogs create severe cognitive friction and drop-off before users experience product value.",
    tags: ["Nykaa", "UX Audit", "Heuristics", "A/B Testing"],
    url: `${TREE}/Nykaa-UX-Onboarding-AB-Test-Plan`,
  },
  {
    code: "DOC-06",
    status: "Approved",
    category: "pm",
    domain: "PRD & Growth Execution",
    title: "One-Page PRD: Feature Launch",
    impact: "Eliminating sub-₹299 checkout drop-off",
    description:
      "An execution-ready PRD specifying Nykaa's First-Order Beauty Trial Pass. Solves small-basket cart abandonment by automatically waiving the ₹70 shipping barrier under ₹299 for new users, paired with 4-layer fraud controls and unit economics modeling.",
    problem:
      "Nykaa's ₹70 shipping charge on orders under ₹299 inflates checkout cost by +35% to +39% on small trial purchases, driving immediate cart abandonment among price-conscious first-time buyers.",
    tags: ["PRD", "Checkout", "Unit Economics", "Fraud Prevention"],
    url: `${TREE}/Nykaa-First-Order-Trial-Pass-PRD`,
  },
  {
    code: "DOC-07",
    status: "Approved",
    category: "pm",
    domain: "Growth Experimentation",
    title: "A/B Experiment Plan & Hypothesis",
    impact: "95% confidence design",
    description:
      "A rigorous experiment design testing CTA copy variants and price-anchor placement with proper power analysis.",
    tags: ["A/B Testing", "Hypothesis", "Statistics"],
    url: `${TREE}/Nykaa-UX-Onboarding-AB-Test-Plan`,
  },
  {
    code: "DOC-08",
    status: "Approved",
    category: "pm",
    domain: "Voice of Customer (VoC)",
    title: "App Store Review Analysis",
    impact: "50 reviews analyzed from Play Store",
    description:
      "A comprehensive Voice of Customer (VoC) case study deconstructing 50 Play Store customer reviews for Swiggy. Isolates end-to-end service journey breakdowns across delivery promises, missing items, and refund disputes into a P0/P1/P2 prioritization matrix and Failed-Order Resolution PRD.",
    problem:
      "Breakdown across the fulfillment lifecycle—unreliable ETA promises, missing items, and automated refund rejections—destroys customer trust, driving 64% of 1-star rage churn.",
    tags: ["Swiggy", "VoC", "Play Store Reviews", "P0/P1/P2"],
    url: `${TREE}/Swiggy-App-Store-Review-Analysis`,
  },
  {
    code: "DOC-09",
    status: "In Progress",
    category: "pm",
    domain: "AI / UX Prototyping",
    title: "AI Assistant Prototype",
    impact: "Prototype in progress",
    description:
      "An ongoing functional prototype exploring conversational UI patterns for context-aware recommendations. Currently in active development and iteration.",
    tags: ["AI UX", "Prototyping", "Conversational UI"],
    url: null,
  },
  {
    code: "DOC-10",
    status: "Approved",
    category: "pm",
    domain: "2x2 Impact vs Effort · E2EE",
    title: "WhatsApp Feature Prioritization",
    impact: "Ranking 10 high-value opportunities",
    description:
      "WhatsApp Feature Prioritization: Impact vs. Effort Framework. Ranking 10 high-value product opportunities, 2x2 matrix mapping, and in-depth architectural teardown of the top 3 strategic bets (Scheduled Messages, Group AI Summaries, Smart Search) under End-to-End Encryption constraints.",
    problem:
      "In hyper-scale messaging products, roadmap prioritization requires ruthless sequencing: delivering high user leverage while respecting non-negotiable on-device privacy and E2EE boundaries.",
    tags: ["WhatsApp", "2x2 Matrix", "E2EE", "Feature Strategy", "Prioritization"],
    url: `${TREE}/WhatsApp-Feature-Prioritization-Matrix`,
  },
  {
    code: "DATA-01",
    status: "Dashboard",
    category: "data",
    domain: "Data Analysis",
    title: "IT Helpdesk Operations Dashboard",
    impact: "Centralised ticket visibility",
    description:
      "An IT Helpdesk Operations Dashboard designed to centralize ticket monitoring across departments, priorities, and support queues, helping visualize ticket distribution, workload, and potential bottlenecks.",
    problem:
      "IT support teams handle tickets across multiple departments, priorities, and support queues. Monitoring ticket distribution and operational workload through spreadsheets can be inefficient and time-consuming. Managers need a centralized dashboard to track support activities and identify operational bottlenecks.",
    tags: ["Dashboard", "Data Visualization", "Operations"],
    url: `${GH}/IT-Help-Desk-Operations-Dashboard-.git`,
  },
  {
    code: "DATA-02",
    status: "Dashboard",
    category: "data",
    domain: "Data Analysis",
    title: "Real-Time Interactive Swiggy Dashboard",
    impact: "197,430 sales records analysed",
    description:
      "An interactive Excel dashboard analyzing 197,430 Swiggy sales records to explore revenue, customer behavior, restaurant performance, and regional trends using pivot tables, charts, and slicers.",
    problem:
      "Large-scale food delivery platforms generate hundreds of thousands of fragmented order logs. Without interactive drill-downs and dynamic slicers, operational teams struggle to detect city-level demand dips, peak delivery bottlenecks, and underperforming restaurant categories.",
    tags: ["Excel", "Data Visualization", "Pivot Tables", "Slicers"],
    url: `${GH}/REAL-TIME-INTERACTIVE-SWIGGY-DASHBOARD.git`,
  },
  {
    code: "AI-RAG-01",
    status: "AI System",
    category: "data",
    domain: "AI & RAG Engineering",
    title: "Medical Chatbot — RAG System",
    impact: "Context-grounded clinical responses",
    description:
      "A full-stack Retrieval-Augmented Generation (RAG) application enabling users to interact with custom medical knowledge bases via natural language. Combines semantic vector retrieval (Pinecone, Sentence Transformers) with LangChain and LLMs over a Flask REST backend with Docker and AWS deployment support.",
    problem:
      "General LLMs frequently hallucinate and invent medical facts when answering domain-specific clinical queries. Healthcare users need context-grounded, multi-turn conversational responses retrieved directly from verified medical literature and uploaded PDFs.",
    tags: ["RAG", "Pinecone", "LangChain", "Sentence Transformers", "Flask", "Docker", "AWS"],
    url: `${GH}/Medical-Chatbot-RAG-System.git`,
  },
  {
    code: "AI-CV-01",
    status: "AI System",
    category: "data",
    domain: "Computer Vision & AI Systems",
    title: "Attendly — Smart Attendance System",
    impact: "Automated facial recognition logging",
    description:
      "A modular, service-oriented smart attendance platform built with Flask, DeepFace (Facenet512, RetinaFace), and MySQL. Features real-time facial recognition verification, confidence score logging, manual discrepancy audits, and personalized student attendance analytics.",
    problem:
      "Manual roll calls and paper sign-in sheets in university lectures consume 10–15 minutes per class, enable proxy attendance fraud, and lack automated historical audit trails.",
    tags: ["Computer Vision", "DeepFace", "Flask", "MySQL", "Chart.js"],
    url: `${GH}/ATTENDLY.git`,
  },
];

export const LAB_STEPS = [
  {
    id: "investigate",
    index: "01",
    title: "INVESTIGATE",
    description:
      "Uncover the user problem, examine available evidence, and separate assumptions from insights.",
    items: [
      [
        "Problem statement",
        "Nykaa grants free delivery only above ₹299; orders below it carry a mandatory ₹70 shipping charge. For a new user making a small, low-risk trial purchase, that fee inflates checkout cost by +35–39% — a structural barrier to first-order conversion.",
      ],
      [
        "Target users",
        "The Cautious Trial Buyer — college students and first-time earners (18–24) wanting to test one ₹150–₹250 item risk-free — and the Dormant Re-Activator, registered ≥90 days without an order, who churned at previous checkouts.",
      ],
      [
        "Research questions",
        "The same discovery method used in my campus ride-sharing research: current behaviours and frequency; failure modes and coping mechanisms; safety and affordability perceptions; and behavioural avoidance — the situations users quietly walk away from.",
      ],
      [
        "Key assumptions",
        "New users will commit to a small trial order if the shipping penalty disappears, and a ₹70 logistics subsidy on a first order is an order of magnitude more capital-efficient than retargeting ads spent recovering the same lost shopper.",
      ],
    ],
    artifact: {
      label: "Source artifact: Campus Ride-Sharing user research ↗",
      url: `${TREE}/Campus-Ride-Sharing-User-Research`,
    },
  },
  {
    id: "make-the-call",
    index: "02",
    title: "MAKE THE CALL",
    description:
      "Evaluate competing ideas, prioritize constraints, and explain the trade-offs behind a product decision.",
    items: [
      [
        "Options considered",
        "A coupon code users hunt, copy, and type; a site-wide shipping threshold cut; or the call: an automated First-Order Beauty Trial Pass that waives the ₹70 fee on a new user's first sub-₹299 order and unlocks a complimentary sample mini.",
      ],
      [
        "Prioritization criteria",
        "Zero-friction by default (no codes to find or enter), fraud containment, capital efficiency per acquired first order, and alignment with the trial-buyer persona identified in the problem work.",
      ],
      [
        "Decision rationale",
        "Automation wins: the pass applies itself in the cart summary only for accounts with zero completed orders — removing decision effort exactly where first-time buyers hesitate, and containing cost to genuinely new users.",
      ],
      [
        "Trade-offs",
        "The company absorbs ₹70 in subsidised logistics per first order, betting on downstream repeat revenue, and caps the benefit at sub-₹299 carts — accepting that margin on trial orders is sacrificed for activation.",
      ],
    ],
    artifact: {
      label: "Source artifact: Nykaa First-Order Trial Pass PRD ↗",
      url: `${TREE}/Nykaa-First-Order-Trial-Pass-PRD`,
    },
  },
  {
    id: "prove-the-impact",
    index: "03",
    title: "PROVE THE IMPACT",
    description:
      "Define what success looks like and determine how the outcome should be measured.",
    items: [
      [
        "Hypothesis",
        "From the Nykaa onboarding experiment plan: replacing a mandatory upfront sign-in wall with a guest-first lazy registration flow will lift First-Session Activation by +32% (decision bar: p < 0.01).",
      ],
      [
        "Primary success metric",
        "First-Session Activation Rate — share of new users viewing a PDP or adding to cart — run 14 days at 95% significance and 80% power, with a minimum detectable effect of ≥2.5 points.",
      ],
      [
        "Guardrail metrics",
        "Net new registered accounts (guest browsing must not erode sign-ups) and coupon redemption fraud rate (the ₹200-off incentive must not be gamed).",
      ],
      [
        "Next steps",
        "Run the 14-day controlled test, read primary and guardrails together, then ship, iterate, or kill — and apply the same experiment discipline to validating the Trial Pass before a full rollout.",
      ],
    ],
    artifact: {
      label: "Source artifact: Nykaa onboarding A/B test plan ↗",
      url: `${TREE}/Nykaa-UX-Onboarding-AB-Test-Plan`,
    },
  },
];

export const COMPETENCIES = [
  {
    index: "01",
    title: "Product Strategy & PRDs",
    items: [
      "PRD authoring",
      "Feature scoping",
      "Roadmapping",
      "RICE prioritisation",
      "Competitive teardowns",
    ],
  },
  {
    index: "02",
    title: "User Research & UX",
    items: [
      "User interviewing",
      "Heuristic audits",
      "Figma wireframing",
      "Usability testing",
      "Journey mapping",
    ],
  },
  {
    index: "03",
    title: "Data & Experimentation",
    items: [
      "SQL",
      "A/B testing",
      "Cohort analysis",
      "KPI definition",
      "Python / Pandas",
    ],
  },
  {
    index: "04",
    title: "AI & Technical Systems",
    items: [
      "RAG architecture",
      "Prompt engineering",
      "Vector databases",
      "REST APIs",
      "ML fundamentals",
    ],
  },
];

export const EDUCATION = {
  degree: "Integrated M.Tech in Software Engineering",
  institution: "Vellore Institute of Technology (VIT)",
  period: "2022 — 2027",
  cgpa: "9.04 / 10",
  badge: "Academic Excellence",
  description:
    "Comprehensive 5-year software engineering program combining computer science fundamentals, modular system architecture, data structures, and human-computer interaction.",
  highlights: [
    "Academic Standing: 9.04 / 10 CGPA, demonstrating consistent excellence across technical engineering coursework.",
    "Core Coursework: Software Architecture, Data Structures & Algorithms, Database Management Systems, System Design, Machine Learning, and HCI.",
    "Technical Edge for PM: Translates complex architectural constraints into clear product requirements and feasible roadmaps.",
  ],
  coursework: [
    "Software Architecture",
    "Data Structures & Algorithms",
    "DBMS & SQL",
    "Human-Computer Interaction",
    "Machine Learning & AI",
    "System Design",
  ],
};

export const EXPERIENCES = [
  {
    id: "swe-intern",
    period: "Jun 2024 — Jul 2024",
    role: "Software Engineer Intern",
    organization: "Open Financial Technologies · Bangalore",
    type: "Internship",
    badge: "Fintech & Engineering",
    description:
      "Worked with the engineering team at Open Financial Technologies in Bangalore, collaborating in an agile environment on day-to-day software development tasks and sprint goals.",
    responsibilities: [
      "Collaborated with the engineering team in Bangalore in an agile environment, participating in daily standups and sprint planning.",
      "Assisted with developing, testing, and debugging software features alongside senior developers.",
      "Gained practical exposure to team workflows, version control, code reviews, and fintech software practices.",
    ],
    skills: ["Agile Workflows", "Team Collaboration", "Software Development", "Debugging", "Git"],
  },
  {
    id: "codsoft-intern",
    period: "Jan 2024 — Feb 2024",
    role: "Web Developer Intern",
    organization: "CodSoft",
    type: "Internship",
    badge: "Frontend & Web",
    description:
      "Developed responsive web applications, focusing on clean user interface layouts, component structure, and cross-browser responsiveness.",
    responsibilities: [
      "Built and deployed functional web pages and interactive components using HTML5, CSS3, and JavaScript.",
      "Ensured mobile and desktop responsiveness while adhering to clean frontend design practices.",
      "Collaborated on assigned development tasks and refined UI features based on feedback.",
    ],
    skills: ["Web Development", "JavaScript", "HTML5 / CSS3", "Responsive Design", "Git"],
  },
];

export const LEADERSHIP_CLUBS = [
  {
    id: "iquest-club",
    role: "Design Team Member",
    organization: "IQuest Club",
    institution: "Vellore Institute of Technology (VIT)",
    badge: "Design & UX",
    description:
      "Spearheaded UI/UX design concepts, visual storytelling, and creative direction for flagship college fests and student engagement initiatives across campus.",
    responsibilities: [
      "Designed high-fidelity UI wireframes, promotional graphics, and design systems for university events and student hackathons.",
      "Collaborated with technical and operations teams to align event attendee journeys with compelling, accessible visual identities.",
      "Conducted heuristic evaluations of club digital assets to ensure consistent typography, branding, and layout clarity.",
    ],
    skills: ["UI/UX Design", "Figma", "Visual Hierarchy", "Design Systems", "Cross-Functional Collaboration"],
  },
  {
    id: "acm-chapter",
    role: "Technical Team Member",
    organization: "ACM Student Chapter",
    institution: "Vellore Institute of Technology (VIT)",
    badge: "Technical Operations",
    description:
      "Contributed to technical workshop coordination, hackathons, and platform infrastructure for one of VIT's foremost computer science student chapters.",
    responsibilities: [
      "Assisted in technical platform setups and live problem coordination for campus-wide competitive programming and hackathon challenges.",
      "Mentored junior students on developer workflows, Git version control, and algorithmic problem-solving methodologies.",
      "Facilitated peer tech sessions, fostering an inclusive engineering community centered on modern computing practices.",
    ],
    skills: ["Technical Mentorship", "Event Infrastructure", "Developer Tooling", "Git", "Community Leadership"],
  },
];

export const PITCH_DATA = {
  kicker: "Open for Opportunities",
  badge: "Product & Project Management",
  headline: "Looking for a PM / Project Management intern who speaks fluent code, obsesses over user friction, and executes without fluff?",
  lead:
    "I bridge the gap between technical engineering, user-centric design, and business outcomes. With an Integrated M.Tech in Software Engineering, hands-on developer internships, and 14 documented case studies spanning PRDs, metric trees, and RAG systems, I come ready to contribute on day one.",
  valueProps: [
    {
      title: "Engineers respect the spec",
      desc: "Having worked with engineering teams in agile environments and written code, I understand developer workflows, sprint cycles, and technical feasibility.",
    },
    {
      title: "Users feel the clarity",
      desc: "Having led UI/UX design in VIT's IQuest Club, I design flows rooted in human-centered heuristics, not guesswork.",
    },
    {
      title: "Business sees the numbers",
      desc: "Trained in RICE scoring, North Star metric trees, and SQL/Python data analysis to connect features to real retention and activation lift.",
    },
  ],
  compellingPitch:
    "\"Give me 15 minutes on a quick call or product talk. I'll bring fresh curiosity, a sharp teardown of one of your product flows, and zero ego — ready to show you how I can help your team ship faster, prioritize ruthlessly, and build things customers genuinely love.\"",
  ctaButtonText: "Schedule a 15-Min Product Talk",
  ctaEmailSubject: "Product / Project Management Internship — Quick Call / Product Chat",
  ctaEmailBody:
    "Hi Trishna,\n\nI came across your portfolio and would love to connect for a quick call / product talk regarding a Product or Project Management Internship.\n\nBest,",
};
