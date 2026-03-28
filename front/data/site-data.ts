export const siteData = {
  name: "Robert Pope II",
  title: "Computer Science Senior • Software Engineer • IT",
  description:
    "I build clean, practical software experiences with a focus on full-stack development, technical problem solving, and professional impact.",

  heroSummary:
    "I’m a senior at Ashland University focused on software engineering, IT, and building polished user-facing applications. I like taking ideas from rough concept to clean product, with attention to both functionality and presentation.",

  links: {
    github: "https://github.com/rpope5",
    linkedin: "https://www.linkedin.com/in/robert-pope-ii/",
    email: "mailto:robertpopecs@gmail.com",
    resume: "/resume/robert-pope-resume.pdf",
  },

  experience: [
    {
      company: "Mississippi State University",
      role: "Cybersecurity Researcher",
      period: "May 2025 – Aug 2025",
      description:
        "Worked on privacy-preserving machine learning and signal classification, contributing to secure data analysis workflows and model evaluation.",
    },
    {
      company: "K&K Interiors",
      role: "Warehouse Supervisor",
      period: "May 2024 – June 2025",
      description:
        " Supervised daily warehouse operations including scheduling, cash reconciliation, and override approvals. Maintained inventory organization and supported customer service operations.",
    },
    {
      company: "Mach Iron Works",
      role: "Web Design Intern",
      period: "Jan 2022 – Apr 2022",
      description:
        "Redesigned company website using HTML and modern design practices. Increased web traffic by 30% through improved layout and optimized assets.",
    },
  ],

  projects: [
    {
      slug: "esports-recruit-hub",
      name: "Esports Recruit Hub (Coming Soon)",
      description:
        "A full-stack recruiting platform designed for esports programs, built with modern web tooling and a coach-focused workflow.",
      href: "https://github.com/rpope5/AU-Esports-Web-Refresh",
      tags: ["Next.js", "FastAPI", "SQLite", "UI/UX"],
      overview:
        "This project was built to help esports programs collect recruit data, review applicants, and manage coach-side workflows in a cleaner system.",
      highlights: [
        "Built a structured recruit intake flow",
        "Separated UI concerns into reusable components",
        "Focused on coach usability and practical data organization",
      ],
    },
    {
      slug: "devtrackr",
      name: "DevTrackr",
      description:
        "A productivity and tracking platform centered around goals, tasks, and workflow visibility.",
      href: "https://devtrackr.xyz/",
      tags: ["React", "FastAPI", "SQL", "REST API"],
      overview:
        "DevTrackr was designed as a clean system for tracking goals and tasks while practicing full-stack architecture and API design.",
      highlights: [
        "Created task and goal relationships in the backend",
        "Connected frontend state to API-driven updates",
        "Focused on clear CRUD flows and practical UX",
      ],
    },
  ],

    skills: [
    { name: "Java", icon: "coffee" },
    { name: "Python", icon: "code2" },
    { name: "React", icon: "atom" },
    { name: "Next.js", icon: "layers3" },
    { name: "FastAPI", icon: "server" },
    { name: "SQL", icon: "database" },
    { name: "Tailwind CSS", icon: "wind" },
    { name: "REST APIs", icon: "workflow" },
    { name: "Git", icon: "gitBranch" },
    { name: "Machine Learning", icon: "brain" },
  ],
};