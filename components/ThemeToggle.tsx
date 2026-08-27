"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from "react";

interface ThemeContextType {
  isDark: boolean;
  isPulling: boolean;
  toggleTheme: (origin?: { x: number; y: number }) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(true);
  const [isPulling, setIsPulling] = useState(false);
  const [overlay, setOverlay] = useState<{
    expanded: boolean;
    dark: boolean;
    x?: number;
    y?: number;
  } | null>(null);

  useEffect(() => {
    const theme = document.documentElement.getAttribute("data-theme");
    if (theme === "light") {
      setIsDark(false);
    }
  }, []);

  const toggleTheme = useCallback(
    (origin?: { x: number; y: number }) => {
      if (isPulling) return;
      const toLight = isDark;
      setIsPulling(true);

      setTimeout(() => {
        setOverlay({
          expanded: false,
          dark: !toLight,
          x: origin?.x,
          y: origin?.y,
        });
        requestAnimationFrame(() =>
          requestAnimationFrame(() =>
            setOverlay((prev) => (prev ? { ...prev, expanded: true } : null)),
          ),
        );
      }, 280);
    },
    [isDark, isPulling],
  );

  const onOverlayEnd = useCallback(() => {
    if (!overlay?.expanded) return;
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute(
      "data-theme",
      next ? "dark" : "light",
    );
    setOverlay(null);
    setIsPulling(false);
  }, [isDark, overlay]);

  const clipCenter =
    overlay?.x !== undefined && overlay?.y !== undefined
      ? `${overlay.x}px ${overlay.y}px`
      : `calc(100% - 36px) 80px`;

  return (
    <ThemeContext.Provider value={{ isDark, isPulling, toggleTheme }}>
      {overlay && (
        <div
          onTransitionEnd={onOverlayEnd}
          className="fixed inset-0 z-[9999] pointer-events-none"
          style={{
            background: overlay.dark ? "#0a0a0a" : "#f0f0e8",
            clipPath: overlay.expanded
              ? `circle(200vmax at ${clipCenter})`
              : `circle(0px at ${clipCenter})`,
            transition: "clip-path 0.7s cubic-bezier(0.77, 0, 0.18, 1)",
          }}
        />
      )}
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export default function ThemeToggle({ mobile = false }: { mobile?: boolean }) {
  const { isDark, toggleTheme } = useTheme();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    toggleTheme({ x, y });
  };

  return (
    <button
      type="button"
      className={
        mobile
          ? "w-9 h-9 flex items-center justify-center rounded-full border transition-colors duration-200 hover:border-[var(--accent)]"
          : "hidden md:flex fixed top-2 right-6 z-50 w-9 h-9 items-center justify-center rounded-full border transition-colors duration-200 hover:border-[var(--accent)]"
      }
      style={{ borderColor: "var(--border)", color: "var(--accent)" }}
      onClick={handleClick}
      aria-label="Toggle light/dark mode"
      aria-pressed={!isDark}
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {isDark ? (
          <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
          </>
        )}
      </svg>
    </button>
  );
}
