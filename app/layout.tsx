import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdullah",
  description:
    "Portfolio of Syed Mohammed Abdullah Shah — Full Stack Developer, Competitive Programmer, and Backend Engineer.",
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
    title: "Abdullah",
    description:
      "Full Stack Developer, Competitive Programmer, and Backend Engineer.",
    type: "website",
    locale: "en_US",
    siteName: "ABDULLAH Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah",
    description:
      "Full Stack Developer, Competitive Programmer, and Backend Engineer.",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
