export const PROFILE = {
  name: "Hamdil Hasan",
  styled: "H4MDiL HA$AN",
  handle: "ENiGMA-101",
  github: "https://github.com/ENiGMA-101",
  avatar: "https://avatars.githubusercontent.com/u/175789768?v=4",
  site: "https://enigma-101.github.io/Portfolio/",
  resume: "https://enigma-101.github.io/Portfolio/Documents/CV%20of%20HamdilHasan.pdf",
  location: "Dhaka, Bangladesh",
  timezone: "Asia/Dhaka",
  role: "Software Developer · CSE Undergrad",
  tagline: "Future-proofing my skills for tomorrow's tech.",
  quote: "Let's turn ideas into code — and code into impact.",
  since: 2024,
};

export const HERO_WORDS = ["enigmatic", "resilient", "elegant", "playful", "intelligent"];

export const HERO_STATS: Array<[string, string]> = [
  ["2+", "Years writing code"],
  ["16", "Public repositories"],
  ["3×", "Golden A+ scholarships"],
];

export interface FloatingIcon {
  id: string;
  label: string;
  color: string;
  top: string;
  left: string;
  size: number;
  rotate: number;
  delay: number;
}

export const FLOATING_ICONS: FloatingIcon[] = [
  { id: "python", label: "🐍", color: "#3572A5", top: "12%", left: "8%", size: 44, rotate: -12, delay: 0 },
  { id: "java", label: "☕", color: "#b07219", top: "30%", left: "3%", size: 40, rotate: 8, delay: 0.5 },
  { id: "cpp", label: "⚡", color: "#D1467F", top: "60%", left: "5%", size: 38, rotate: -6, delay: 1.0 },
  { id: "git", label: "🔀", color: "#F05032", top: "22%", left: "28%", size: 36, rotate: 15, delay: 0.3 },
  { id: "react", label: "⚛", color: "#61DAFB", top: "75%", left: "22%", size: 42, rotate: -20, delay: 0.8 },
  { id: "html", label: "📄", color: "#E34C26", top: "50%", left: "15%", size: 34, rotate: 10, delay: 1.2 },
  { id: "css", label: "🎨", color: "#7B5EA7", top: "35%", left: "38%", size: 38, rotate: -8, delay: 0.6 },
  { id: "mysql", label: "🗄️", color: "#4479A1", top: "80%", left: "38%", size: 40, rotate: 12, delay: 0.9 },
  { id: "node", label: "📦", color: "#339933", top: "15%", left: "55%", size: 36, rotate: -14, delay: 0.4 },
  { id: "linux", label: "🐧", color: "#5B5643", top: "68%", left: "58%", size: 42, rotate: 6, delay: 1.1 },
  { id: "chrome", label: "🌐", color: "#4285F4", top: "30%", left: "65%", size: 38, rotate: -10, delay: 0.7 },
  { id: "java", label: "☕", color: "#b07219", top: "85%", left: "60%", size: 36, rotate: 18, delay: 1.3 },
  { id: "mongo", label: "🍃", color: "#4DB33D", top: "10%", left: "80%", size: 34, rotate: -16, delay: 0.2 },
  { id: "python2", label: "🐍", color: "#3572A5", top: "45%", left: "85%", size: 40, rotate: 10, delay: 0.8 },
  { id: "postgre", label: "🐘", color: "#336791", top: "70%", left: "82%", size: 38, rotate: -5, delay: 0.5 },
  { id: "vscode", label: "⌨", color: "#007ACC", top: "55%", left: "75%", size: 36, rotate: 14, delay: 1.0 },
];

export const MARQUEE_ITEMS = [
  "C / C++",
  "Python",
  "Java",
  "SQL",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Git & GitHub",
  "HTML / CSS",
  "Browser Extensions",
  "Telegram Bots",
  "REST APIs",
];

export interface SkillBar {
  name: string;
  level: number;
  note?: string;
}

export const SKILL_CORE: SkillBar[] = [
  { name: "Git & GitHub", level: 97, note: "daily driver" },
  { name: "C / C++", level: 92, note: "problem solving" },
  { name: "Python", level: 90, note: "bots & automation" },
  { name: "Java", level: 85, note: "OOP fundamentals" },
  { name: "HTML / CSS", level: 85, note: "hand-crafted UI" },
];

export const SKILL_DATA: SkillBar[] = [
  { name: "MySQL", level: 94, note: "relational design" },
  { name: "PostgreSQL", level: 60, note: "learning" },
  { name: "MongoDB", level: 58, note: "learning" },
];

export const SKILL_CHIPS = [
  "Data Structures",
  "Algorithms",
  "OOP",
  "Chrome APIs",
  "python-telegram-bot",
  "Automation",
  "Web Scraping",
  "Notifications",
  "CLI Tools",
  "API Design",
  "Debugging",
  "Linux",
];

export interface Education {
  year: string;
  title: string;
  school: string;
  detail: string;
  current?: boolean;
}

export const EDUCATION: Education[] = [
  {
    year: "2023 — Now",
    title: "B.Sc. in Computer Science & Engineering",
    school: "University of Asia Pacific, Dhaka",
    detail: "Currently studying — diving deep into systems, data and software craft.",
    current: true,
  },
  {
    year: "2021",
    title: "Higher Secondary Certificate",
    school: "Anondo Mohon College, Mymensingh",
    detail: "Golden A+ · Talentpool Scholarship",
  },
  {
    year: "2019",
    title: "Secondary School Certificate",
    school: "Mymensingh Zilla School, Mymensingh",
    detail: "Golden A+ · Talentpool Scholarship",
  },
  {
    year: "2016",
    title: "Junior School Certificate",
    school: "Mymensingh Zilla School, Mymensingh",
    detail: "Golden A+ · Talentpool Scholarship",
  },
];

export const HOBBIES = [
  { icon: "book", label: "Reading Books" },
  { icon: "music", label: "Listening to Music" },
  { icon: "chess", label: "Playing Chess" },
  { icon: "plane", label: "Traveling" },
  { icon: "camera", label: "Photography" },
  { icon: "game", label: "Gaming" },
] as const;

export interface FallbackProject {
  name: string;
  title: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  homepage?: string | null;
  updated: string;
  tags: string[];
}

/* Curated snapshot — used while the GitHub API loads, or if it's unreachable */
export const FALLBACK_PROJECTS: FallbackProject[] = [
  {
    name: "FIFA-World-cup-2026-reminder-extension",
    title: "FIFA WC26 — Reminder Extension",
    description:
      "A beautiful FIFA World Cup 2026 browser extension featuring live scores, upcoming fixtures, results, favorites tracking, and match notifications.",
    language: "JavaScript",
    stars: 2,
    forks: 0,
    url: "https://github.com/ENiGMA-101/FIFA-World-cup-2026-reminder-extension",
    updated: "2026-06-10",
    tags: ["Chrome APIs", "Live Data", "Notifications"],
  },
  {
    name: "FIFA-World-cup-2026-telegram-bot",
    title: "FIFA WC26 — Telegram Bot",
    description:
      "Telegram bot for FIFA World Cup 2026 match reminders, half-time updates, full-time scores, goal scorers, and next-match notifications.",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/ENiGMA-101/FIFA-World-cup-2026-telegram-bot",
    updated: "2026-06-17",
    tags: ["python-telegram-bot", "Automation", "MIT"],
  },
  {
    name: "chatPal-AI-Desktop",
    title: "chatPal AI — Desktop",
    description:
      "An AI chat companion for the desktop — a clean, minimal interface for conversing with a local assistant.",
    language: "HTML",
    stars: 0,
    forks: 0,
    url: "https://github.com/ENiGMA-101/chatPal-AI-Desktop",
    updated: "2026-09-11",
    tags: ["AI", "Desktop", "MIT"],
  },
  {
    name: "hamdilhasan.dev",
    title: "hamdilhasan.dev",
    description:
      "This very corner of the internet — designed, built and shipped by hand. Smooth scrolling, live GitHub data and a chess board included.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/ENiGMA-101/hamdilhasan.dev",
    updated: "2026-09-09",
    tags: ["Portfolio", "React", "Tailwind"],
  },
  {
    name: "Portfolio",
    title: "Portfolio — v1",
    description:
      "The first edition of my digital workspace — where it all started. Static, honest and shipped with GitHub Pages.",
    language: "HTML",
    stars: 0,
    forks: 0,
    url: "https://github.com/ENiGMA-101/Portfolio",
    homepage: "https://enigma-101.github.io/Portfolio/",
    updated: "2025-03-01",
    tags: ["GitHub Pages", "Vanilla"],
  },
];

export const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#bfa32e",
  TypeScript: "#3178c6",
  Python: "#3572a5",
  HTML: "#c9552e",
  CSS: "#7b5ea7",
  Java: "#b07219",
  C: "#777777",
  "C++": "#d1467f",
  Shell: "#6f9b4e",
  "Jupyter Notebook": "#da5b0b",
};

export const LANGUAGE_HINTS: Record<string, string[]> = {
  JavaScript: ["Web", "Interactive"],
  TypeScript: ["React", "Typed"],
  Python: ["Automation", "Scripting"],
  HTML: ["Frontend", "Markup"],
  CSS: ["Styling"],
  Java: ["OOP"],
  C: ["Systems"],
  "C++": ["Systems", "DSA"],
};
