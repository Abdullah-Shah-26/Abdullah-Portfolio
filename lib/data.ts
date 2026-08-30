export const OWNER = {
  name: "ABDULLAH SHAH",
  fullName: "Syed Mohammed Abdullah Shah",
  title: "Full Stack Developer",
  positioning:
    "Full Stack Developer · Competitive Programmer · Software Engineer",
  location: "Hyderabad, Telangana",
  email: "syedmohammedabdullahshah@gmail.com",
  phone: "+91 9014436155",
  github: "https://github.com/Abdullah-Shah-26",
  githubUsername: "Abdullah-Shah-26",
  linkedin: "https://www.linkedin.com/in/syed-mohammed-abdullah-shah/",
  leetcode: "https://leetcode.com/u/Abdullah_Shah_26/",
  codeforces: "https://codeforces.com/profile/Perfectionist_26",
  resume:
    "https://drive.google.com/file/d/1m0MePaa6isFo2CAseejIJpBnK-YQmu1u/view?usp=sharing",
  education:
    "B.Tech in Computer Science and Engineering, Muffakham Jah College of Engineering & Technology (Aug 2024 – May 2028)",
  languages: "Not provided",
  seeking: "Not provided",
};

export const ABOUT = {
  paragraphs: [
    "I am a Full Stack Developer, Competitive Programmer, and Backend Engineer studying Computer Science and Engineering at Muffakham Jah College of Engineering & Technology.",
    "I build full-stack platforms, real-time systems, and backend services with technologies including Next.js, React, TypeScript, FastAPI, PostgreSQL, Firebase, and AI APIs.",
    "My competitive programming profile includes Guardian on LeetCode and Expert on Codeforces. I also enjoy building practical systems, including AI-powered marketplaces, real-time transit tracking, and speech-to-sign applications.",
  ],
  techStack: [
    {
      label: "Languages",
      items: "C++ · Python · JavaScript · TypeScript · SQL",
    },
    {
      label: "Frontend",
      items: "React · Next.js · HTML5 · CSS3 · Tailwind CSS",
    },
    {
      label: "Backend & Databases",
      items:
        "Node.js · Express.js · FastAPI · PostgreSQL · MySQL · MongoDB · Redis",
    },
    {
      label: "Platforms & Tools",
      items:
        "Firebase · Supabase · Prisma · Git · GitHub · Docker · Vercel · Postman",
    },
  ],
};

export const EDUCATION = {
  entries: [
    {
      institution: "MJCET · Osmania University",
      degree: "B.E. Computer Science & Engineering",
      location: "Hyderabad, Telangana",
      period: "2024–Present",
      achievement: "Semester 1 · Rank #1 · 9.45 SGPA · among 600+ students",
    },
    {
      institution: "St. Mary's Junior College",
      degree: "Intermediate — MPC",
      period: "2022–2024",
      location: "Hyderabad, Telangana",
      achievement: "12th Boards · 97.7%",
    },
    {
      institution: "Little Flower High School",
      degree: "Secondary School Certificate (SSC)",
      period: "2010–2022",
      location: "Hyderabad, Telangana",
      achievement: "10th Boards · 9.8 GPA",
    },
  ],
};

export const EXPERIENCE = [
  {
    company: "Ussop",
    role: "Open Source Contributor",
    period: "Oct 2025",
    location: "Remote",
    bullets: [
      "Contributed 4 accepted pull requests implementing frontend and styling enhancements to a Next.js-based virtual meeting platform.",
      "Collaborated through code reviews and incorporated maintainer feedback to align contributions with project standards.",
    ],
  },
];

export const BATTLE_LOG = {
  certifications: [] as {
    title: string;
    issuer: string;
    date: string;
    url?: string;
  }[],
  achievements: [
    {
      title: "Guardian — LeetCode",
      description: "Maximum rating: 2200+",
      url: "https://leetcode.com/u/Abdullah_Shah_26/",
      platform: "leetcode",
    },
    {
      title: "Expert — Codeforces",
      description: "Maximum rating: 1700+",
      url: "https://codeforces.com/profile/Perfectionist_26",
      platform: "codeforces",
    },
    {
      title: "#9 Global — LeetCode Biweekly Contest 186",
      description: "Among 39K+ participants in Biweekly Contest 186.",
      url: "https://leetcode.com/u/Abdullah_Shah_26/",
      platform: "leetcode",
    },
    {
      title: "#74 Global — CodeChef Starters 226",
      description: "Among 4.2K+ participants in Starters 226.",
      platform: "codechef",
    },
    {
      title: "#1 Institute — GeeksforGeeks",
      description: "Among 1,200+ students on the platform.",
      url: "https://www.geeksforgeeks.org/profile/abdullahshah?tab=activity",
      platform: "geeksforgeeks",
    },
    {
      title: "5× Hackathon Winner — Devpost",
      description: "Recognition for five winning hackathon projects.",
      url: "https://devpost.com/syedmohammedabdullahshah",
      platform: "devpost",
    },
  ],
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  thumbnail: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "AIxArtisans",
    title: "AIxArtisans",
    description:
      "Built an AI-powered marketplace with role-based collaboration workflows for artisans, volunteers, and customers, including offer negotiation, project management, REST APIs, and QR-based product authenticity certificates.",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Google Vertex AI",
    ],
    github: "https://github.com/Abdullah-Shah-26/AI-X-Artisans",
    thumbnail: "aixartisans",
    // featured: true,
  },
  {
    id: "BusLive",
    title: "BusLive",
    description:
      "Built a real-time bus tracking platform with live location tracking, route visualization, ETA estimation, geolocation alerts, Firebase telemetry, and AI-powered traffic analysis.",
    tags: ["Next.js", "TypeScript", "Firebase", "Leaflet.js", "Genkit"],
    github: "https://github.com/Abdullah-Shah-26/Bus-Live",
    thumbnail: "buslive",
    // featured: true,
  },
  {
    id: "SignCast",
    title: "SignCast",
    description:
      "Built an end-to-end speech-to-sign inference pipeline using Whisper ASR, Llama-3.3-70B, and Sockeye NMT, with an asynchronous FastAPI backend and real-time animated sign visualization.",
    tags: ["React", "FastAPI", "Python", "OpenAI Whisper", "Sockeye NMT"],
    github: "https://github.com/Abdullah-Shah-26/Sign-Cast",
    thumbnail: "signcast",
    // featured: true,
  },
];
