export const profile = {
  name: "Sneha Zalte",
  firstName: "Sneha",
  title: "MCA Graduate · ML Engineer",
  location: "Mumbai, India",
  email: "snehazalte005@gmail.com",
  phone: "+91 86576 84375",
  phoneHref: "+918657684375",
  photo: "/sneha-cutout.png",
  github: "https://github.com/Sneha-zalte",
  linkedin: "https://www.linkedin.com/in/sneha-zalte/",
  availability: "Open to full-time roles",
  headline:
    "MCA graduate building AI products that make media, learning, and communication more accessible.",
  about: `I'm a programmer with strong foundations in Python, Java, SQL, and machine learning. I completed my MCA at DES NMITD (CGPA 9.26) and work as a Junior Software Engineer at Ant Systemz, where I contribute to adaptive dubbing and AI-driven media tech. I enjoy shipping end-to-end products — from Android apps to assistive tools — and leading with empathy in fast-moving teams.`,
  roles: [
    "ML Engineer",
    "Python Developer",
    "Full-Stack Builder",
    "Android Enthusiast",
  ],
  languages: ["English", "Hindi", "Marathi"],
};

export const experience = [
  {
    role: "Junior Software Engineer",
    focus: "ML · AI · Full-Stack",
    company: "Ant Systemz Pvt Ltd",
    period: "Oct 2025 — Present",
    location: "Mumbai, India",
    summary:
      "Engineering team at an online audio & video media company building AI-powered dubbing and media products.",
    points: [
      "Contribute across machine learning, Python services, data architecture, and full-stack features on a small product team.",
      "Supported the launch of India’s first adaptive-dubbed theatrical film, helping stories travel across Hindi, Tamil, Telugu, and Kannada while preserving emotion.",
      "Build and refine AI-assisted media workflows — from model-backed processing to tools used in day-to-day production.",
      "Ship reliable software for audio/video use cases with a focus on practical ML, clean interfaces, and fast iteration.",
    ],
    tags: [
      "Python",
      "Machine Learning",
      "Full-Stack",
      "Data Architecture",
      "Media AI",
      "Android",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "C++",
      "HTML",
      "CSS",
      "XML",
    ],
  },
  {
    title: "AI & Data",
    items: [
      "Artificial Intelligence",
      "Applied AI",
      "Machine Learning",
      "Deep Learning",
      "MLOps",
      "NLP",
      "Data Science",
      "Data Analytics",
      "Data Architecture",
      "Pandas",
      "MediaPipe",
      "OpenCV",
      "NLTK",
      "SpaCy",
      "Scikit-Learn",
      "Tableau",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "GCP",
      "Azure",
      "Terraform",
      "Docker",
      "Jenkins",
      "CI/CD",
      "Git",
    ],
  },
  {
    title: "Product & Platforms",
    items: [
      "Android",
      "Android Studio",
      "Firebase",
      "Flask",
      "Next.js",
      "Full-Stack Development",
      "Web Development",
      "WebRTC",
      "Socket.IO",
      "MySQL",
      "Streamlit",
    ],
  },
];

export const projects = [
  {
    slug: "signconnect",
    title: "SignConnect",
    tagline: "Video calls between deaf and hearing users with sign translation.",
    description:
      "Flask + WebRTC for low-latency calls, MediaPipe and OpenCV for gesture detection, and gTTS for voice — converting signs to text and speech across devices.",
    tags: ["Python", "Flask", "WebRTC", "MediaPipe", "OpenCV"],
    category: "AI/ML" as const,
    href: "https://github.com/Sneha-zalte/SignConnect",
    accent: "from-emerald-400/50 to-sky-500/40",
  },
  {
    slug: "learn-in",
    title: "Learn-In",
    tagline: "Android e-learning with real-time Firebase data.",
    description:
      "Android Studio (XML + Java) app with Firebase auth and content sync. Clean UI and a scalable structure for courses, quizzes, and progress tracking.",
    tags: ["Android", "Java", "XML", "Firebase"],
    category: "Mobile" as const,
    href: "https://github.com/Sneha-zalte/Learn-In",
    accent: "from-sky-500/50 to-rose-400/40",
  },
  {
    slug: "ai-resume",
    title: "AI Resume Analyzer",
    tagline: "NLP scoring for skills, JD match, and ATS compatibility.",
    description:
      "Evaluates resumes with keyword extraction, job-description matching, and ATS-style scoring so recruiters get a clearer lens on candidates.",
    tags: ["Python", "NLTK", "SpaCy", "Streamlit"],
    category: "AI/ML" as const,
    href: "https://github.com/Sneha-zalte/AI-resume-analyzer",
    live: "https://ai-resume-analyzer-alpha-blue.vercel.app",
    accent: "from-amber-400/45 to-sky-500/35",
  },
  {
    slug: "zentrae",
    title: "Zentrae",
    tagline: "Web presence for a social media marketing agency.",
    description:
      "TypeScript site for a social media marketing agency — modern layout, campaign-ready storytelling, and a conversion-focused experience.",
    tags: ["TypeScript", "Web", "UI"],
    category: "Web" as const,
    href: "https://github.com/Sneha-zalte/Zentrae",
    accent: "from-fuchsia-400/45 to-cyan-400/35",
  },
];

export const education = [
  {
    school: "DES Navinchandra Mehta Institute of Technology & Development",
    degree: "Master of Computer Applications (MCA)",
    period: "2024 — 2026",
    note: "CGPA 9.26 / 10",
  },
  {
    school: "SNDT Women's University",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2021 — 2024",
    note: "CGPA 9.08 / 10",
  },
  {
    school: "B.K. Birla College, Kalyan",
    degree: "HSC (Science)",
    period: "2019 — 2021",
    note: "92%",
  },
  {
    school: "I.E.S. School, Titwala",
    degree: "SSC",
    period: "2019",
    note: "89.04%",
  },
];

export const achievements = [
  {
    title: "Head of Student Council",
    detail:
      "Led cross-department events and initiatives that improved student engagement and representation.",
  },
  {
    title: "Innovation Award — SNDT University (2024)",
    detail:
      "Recognized for an assistive technology project that helped students communicate more independently.",
  },
  {
    title: "Orientation host — MCA 2025–27",
    detail:
      "Organized and hosted the Freshers’ Orientation (परिचय) for juniors at DES NMITD.",
  },
  {
    title: "Data Science certification",
    detail:
      "Hands-on certification covering machine learning, analytics, and real-world project work.",
  },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
