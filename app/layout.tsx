import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdullah Shah | Software Engineer",
  description:
    "Portfolio of Syed Mohammed Abdullah Shah — Full Stack Developer, Competitive Programmer, and Software Engineer.",
  keywords: [
    "Syed Mohammed Abdullah Shah",
    "Abdullah",
    "Full Stack Developer",
    "Competitive Programmer",
    "Backend Engineer",
    "Muffakham Jah College",
    "FastAPI",
    "Next.js",
  ],
  authors: [{ name: "Syed Mohammed Abdullah Shah" }],
  creator: "Syed Mohammed Abdullah Shah",
  openGraph: {
    title: "Abdullah Shah | Software Engineer",
    description:
      "Full Stack Developer, Competitive Programmer, and Software Engineer.",
    type: "website",
    locale: "en_US",
    siteName: "ABDULLAH Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Shah | Software Engineer",
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
