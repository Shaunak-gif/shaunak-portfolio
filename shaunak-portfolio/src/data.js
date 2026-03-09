export const NAV_LINKS = ["About", "Skills", "Projects", "Achievements", "Contact"];

export const SOCIAL_LINKS = [
  { label: "Gmail",    icon: "✉",  href: "mailto:shaunakdandavate@gmail.com" },
  { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com/in/shaunak-dandavate" },
  { label: "LeetCode", icon: "LC", href: "https://leetcode.com/u/Shaunakd2207" },
  { label: "GitHub",   icon: "GH", href: "https://github.com/Shaunak-gif" },
  { label: "Phone",    icon: "☎",  href: "tel:+919699421689" },
];

export const FOOTER_LINKS = SOCIAL_LINKS.filter(s => s.label !== "Phone");

export const CONTACT_INFO = [
  { icon: "✉",  label: "Email",    value: "shaunakdandavate@gmail.com",       href: "mailto:shaunakdandavate@gmail.com" },
  { icon: "in", label: "LinkedIn", value: "Shaunak Dandavate",                href: "https://www.linkedin.com/in/shaunak-dandavate" },
  { icon: "LC", label: "LeetCode", value: "Shaunakd2207",                     href: "https://leetcode.com/u/Shaunakd2207" },
  { icon: "GH", label: "GitHub",   value: "Shaunak-gif",                      href: "https://github.com/Shaunak-gif" },
  { icon: "☎",  label: "Phone",    value: "+91 96994 21689",                  href: "tel:+919699421689" },
];

export const SKILLS = {
  "Programming Languages": [
    { name: "Java",       icon: "☕" },
    { name: "Python",     icon: "🐍" },
    { name: "C++",        icon: "⚡" },
    { name: "JavaScript", icon: "✦" },
    { name: "C#",         icon: "🔷" },
  ],
  "Web Development": [
    { name: "HTML",       icon: "🌐" },
    { name: "CSS",        icon: "🎨" },
    { name: "React",      icon: "⚛️" },
    { name: "Node.js",    icon: "🟢" },
    { name: "Express.js", icon: "🚀" },
  ],
  "Databases": [
    { name: "MongoDB",    icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "SQL",        icon: "🗄️" },
  ],
  "Tools & Platforms": [
    { name: "Git",      icon: "🔀" },
    { name: "GitHub",   icon: "🐙" },
    { name: "VS Code",  icon: "💻" },
    { name: "Postman",  icon: "📮" },
  ],
  "Concepts": [
    { name: "DSA",             icon: "🧩" },
    { name: "Machine Learning",icon: "🤖" },
    { name: "OOP",             icon: "🏗️" },
    { name: "REST APIs",       icon: "🔗" },
    { name: "DevOps",          icon: "⚙️" },
  ],
};

export const PROJECTS = [
  {
    num: "01",
    title: "Cardiovascular Risk Stratification",
    desc: "A machine learning project focused on predicting cardiovascular disease risk using medical data and predictive modeling techniques.",
    features: [
      "Risk prediction using ML models",
      "Data preprocessing & feature selection",
      "Model evaluation and optimization",
    ],
    tech: ["Python", "Machine Learning", "Data Analysis"],
    color: "#c0392b",
    github: "https://github.com/Shaunak-gif",
  },
  {
    num: "02",
    title: "URO Fitness — AI Fitness Assistant",
    desc: "A full-stack fitness website that integrates an AI assistant to help users plan workouts and improve fitness routines.",
    features: [
      "AI-powered fitness assistant",
      "Workout recommendations",
      "User-friendly fitness dashboard",
    ],
    tech: ["JavaScript", "Web Development", "AI Integration"],
    color: "#922b21",
    github: "https://github.com/Shaunak-gif",
  },
  {
    num: "03",
    title: "Digital DNA Using ML Models",
    desc: "A machine learning project that analyzes digital behavior patterns to create predictive digital profiles using advanced ML techniques.",
    features: [
      "Digital behavior analysis",
      "ML prediction models",
      "Data-driven pattern recognition",
    ],
    tech: ["Python", "Machine Learning", "Data Science"],
    color: "#7b241c",
    github: "https://github.com/Shaunak-gif",
  },
];

export const ACHIEVEMENTS = [
  {
    icon: "🥈",
    title: "Runner-Up — TECHATHON 2.0",
    desc: "Secured runner-up position at TECHATHON 2.0, a National Level Hackathon, competing against teams from across the country.",
    tag: "Hackathon",
  },
  {
    icon: "🌿",
    title: "President — Green Club, SITS",
    desc: "Led the Green Club at Sharad Institute of Technology, organizing sustainability initiatives and environmental awareness drives.",
    tag: "Leadership",
  },
  {
    icon: "🥉",
    title: "Bronze Medalist — Cancer Research Fundraiser",
    desc: "Awarded bronze medal for outstanding contribution to a fundraising campaign supporting cancer research and patient welfare.",
    tag: "Volunteering",
  },
];

export const MARQUEE_ITEMS = [
  "Python","Java","Machine Learning","DSA","JavaScript",
  "REST APIs","Node.js","C++","Data Science","Backend Dev","DevOps","React",
];
