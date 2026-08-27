import Navigation from "@/components/Navigation";
import ThemeToggle, { ThemeProvider } from "@/components/ThemeToggle";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import BattleLog from "@/components/BattleLog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <ThemeProvider>
      <Navigation />
      <ThemeToggle />
      <main>
        <Hero />
        <Projects />
        <BattleLog />
        <TechStack />
        <Education />
        <Contact />
      </main>
      <footer
        className="w-full px-4 py-8 text-center font-mono text-xs border-t break-words"
        style={{
          borderColor: "var(--border)",
          color: "var(--foreground)",
          opacity: 0.3,
          overflowWrap: "anywhere",
        }}
      >
        © {new Date().getFullYear()} ABDULLAH. All rights reserved.
      </footer>
    </ThemeProvider>
  );
}
