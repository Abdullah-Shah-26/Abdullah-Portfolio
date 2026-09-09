import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdullah Shah",
  description:
    "Portfolio of Syed Mohammed Abdullah Shah — Full Stack Developer, Competitive Programmer, and Software Engineer.",
  keywords: [
    "Syed Mohammed Abdullah Shah",
    "Abdullah Shah",
    "Abdullah",
    "Full Stack Developer",
    "Competitive Programmer",
    "Competitive Programming",
    "CP",
    "Backend Engineer",
    "Frontend Developer",
    "Software Developer",
    "Software Engineer",
    "Web Developer",
    "LeetCode Guardian",
    "LeetCode 2200",
    "Codeforces Expert",
    "Codeforces 1700",
    "CodeChef",
    "GeeksforGeeks",
    "Algorithm Expert",
    "Data Structures",
    "DSA",
    "Problem Solving",
    "Coding Interview",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Python Developer",
    "Java Developer",
    "C++ Developer",
    "FastAPI",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Prisma",
    "Tailwind CSS",
    "REST API",
    "Firebase",
    "Supabase",
    "Docker",
    "Git",
    "GitHub",
    "Vercel",
    "AI Integration",
    "Real-time Applications",
    "WebSocket",
    "Socket.IO",
    "Muffakham Jah College",
    "MJCET",
    "Osmania University",
    "Hyderabad Developer",
    "India Developer",
    "Student Developer",
    "Tech Portfolio",
    "CS Student",
    "Computer Science",
    "Computer Science Engineering",
    "B.Tech CSE",
    "Hackathon Winner",
    "Open Source Contributor",
    "Full Stack Projects",
    "Portfolio Website",
    "Developer Portfolio",
    "Tech Enthusiast",
    "Programming Portfolio",
  ],
  authors: [{ name: "Syed Mohammed Abdullah Shah" }],
  creator: "Syed Mohammed Abdullah Shah",
  openGraph: {
    title: "Abdullah Shah",
    description:
      "Full Stack Developer, Competitive Programmer, and Software Engineer.",
    type: "website",
    locale: "en_US",
    siteName: "ABDULLAH Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Shah",
    description:
      "Full Stack Developer, Competitive Programmer, and Software Engineer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/appwrite/cdn/fonts/sf-pro.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/appwrite/cdn/fonts/sf-mono.css"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
