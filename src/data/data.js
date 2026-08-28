// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to personalize
// the site — nothing else needs to change.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Wajhat",
  title: "Frontend / React Developer",
  tagline:
    "I build clean, responsive interfaces with React — and I'm looking for opportunities to keep building.",
  location: "Rawalpindi, Pakistan",
  email: "wajhat.dev@example.com",
  phone: "+92 300 1239967",
  resumeUrl: "#",
  avatarInitials: "W",
  socials: {
    github: "https://github.com/wajhat",
    linkedin: "https://linkedin.com/in/wajhat",
    twitter: "",
  },
};

export const about = {
  heading: "About Me",
  paragraphs: [
    "I'm a frontend developer who spent the last few months in an intensive web development internship, going from static HTML pages to full React applications with real component architecture, state management, and deployment pipelines.",
    "My background is in computer science fundamentals, and along the way I picked up a genuine interest in the small details of interface design — spacing, motion, and how a UI feels to use, not just how it looks in a screenshot.",
    "Right now my goal is simple: join a team where I can keep shipping real products, learn from developers ahead of me, and grow from 'intern who finished the tasks' into an engineer people trust with hard problems.",
  ],
  highlights: [
    { label: "Tasks completed", value: "11" },
    { label: "Weeks interning", value: "8" },
    { label: "Components shipped", value: "40+" },
  ],
};

export const skills = [
  { name: "HTML5", level: 90, group: "Core" },
  { name: "CSS3", level: 88, group: "Core" },
  { name: "JavaScript (ES6+)", level: 82, group: "Core" },
  { name: "React.js", level: 85, group: "Framework" },
  { name: "React Hooks", level: 80, group: "Framework" },
  { name: "Tailwind CSS", level: 85, group: "Styling" },
  { name: "Bootstrap", level: 75, group: "Styling" },
  { name: "Git & GitHub", level: 80, group: "Tooling" },
  { name: "REST APIs", level: 70, group: "Tooling" },
  { name: "Responsive Design", level: 88, group: "Core" },
  { name: "Vercel / Netlify", level: 78, group: "Tooling" },
  { name: "Figma → Code", level: 65, group: "Design" },
];

export const projects = [
  {
    name: "Personal Portfolio (This Site)",
    description:
      "The final internship project — a fully responsive React portfolio built with reusable components, theming, and animated sections, deployed live.",
    tech: ["React", "Tailwind CSS", "Vite", "Vercel"],
    github: "https://github.com/wajhat/portfolio",
    demo: "",
    featured: true,
  },
  {
    name: "Task Manager App",
    description:
      "A to-do / task tracking app with add, edit, complete and delete functionality, built around React state and local storage persistence.",
    tech: ["React", "useState", "useEffect", "CSS3"],
    github: "https://github.com/wajhat/task-manager",
    demo: "",
    featured: false,
  },
  {
    name: "Weather Dashboard",
    description:
      "A weather lookup app that calls a public weather API and renders current conditions with a clean, card-based responsive layout.",
    tech: ["React", "Fetch API", "Bootstrap"],
    github: "https://github.com/wajhat/weather-dashboard",
    demo: "",
    featured: false,
  },
  {
    name: "E-Commerce Product Grid",
    description:
      "A product listing page with filtering, search and a cart counter, focused on component reuse and prop-driven UI.",
    tech: ["React", "Props", "Tailwind CSS"],
    github: "https://github.com/wajhat/product-grid",
    demo: "",
    featured: false,
  },
  {
    name: "Landing Page Clone",
    description:
      "A pixel-conscious clone of a modern SaaS landing page, focused on layout precision and responsive breakpoints.",
    tech: ["HTML5", "CSS3", "Bootstrap"],
    github: "https://github.com/wajhat/landing-clone",
    demo: "",
    featured: false,
  },
  {
    name: "Quiz App",
    description:
      "A multi-question quiz with score tracking and instant feedback, used to practice conditional rendering and component composition.",
    tech: ["React", "JavaScript", "CSS3"],
    github: "https://github.com/wajhat/quiz-app",
    demo: "",
    featured: false,
  },
];

export const education = [
  {
    type: "internship",
    title: "Web Development Internship",
    org: "Internship Program",
    period: "2026",
    description:
      "Completed an 11-task internship progressing from HTML/CSS fundamentals through JavaScript, React components, state management, and deployment — culminating in this portfolio.",
  },
  {
    type: "education",
    title: "BS Computer Science",
    org: "University",
    period: "2022 — Present",
    description:
      "Coursework covering data structures, algorithms, databases, and web technologies, alongside self-driven frontend projects.",
  },
  {
    type: "certification",
    title: "React.js — Fundamentals to Advanced",
    org: "Online Course",
    period: "2026",
    description:
      "Covered component architecture, hooks, routing, and state management patterns used throughout this project.",
  },
  {
    type: "achievement",
    title: "11/11 Internship Tasks Completed",
    org: "Internship Program",
    period: "2026",
    description:
      "Delivered every internship task on schedule, from static pages to this final deployed React application.",
  },
];

export const navLinks = [
  { id: "home", label: "Hero.jsx" },
  { id: "about", label: "About.jsx" },
  { id: "skills", label: "Skills.jsx" },
  { id: "projects", label: "Projects.jsx" },
  { id: "education", label: "Journey.jsx" },
  { id: "contact", label: "Contact.jsx" },
];
