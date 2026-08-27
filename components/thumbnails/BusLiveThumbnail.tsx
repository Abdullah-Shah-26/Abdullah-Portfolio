"use client";

import { motion } from "framer-motion";

export default function BusLiveThumbnail() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full" fill="none">
      <path
        d="M12 58C28 18 48 62 66 30s25-16 42-20"
        stroke="var(--accent)"
        strokeWidth="1"
        opacity="0.45"
      />
      <path
        d="M12 58C28 18 48 62 66 30s25-16 42-20"
        stroke="var(--accent)"
        strokeWidth="0.7"
        strokeDasharray="3 3"
      />
      <motion.circle
        cx="66"
        cy="30"
        r="4"
        fill="var(--accent)"
        animate={{ r: [3, 7, 3], opacity: [1, 0.25, 1] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
      <circle
        cx="12"
        cy="58"
        r="2.5"
        fill="var(--surface)"
        stroke="var(--accent)"
      />
      <circle
        cx="108"
        cy="10"
        r="2.5"
        fill="var(--surface)"
        stroke="var(--accent)"
      />
      <g transform="translate(57 22)">
        <rect
          x="0"
          y="0"
          width="18"
          height="12"
          rx="2"
          fill="var(--surface)"
          stroke="var(--accent)"
          strokeWidth="1"
        />
        <path
          d="M3 4h12M4 9h2m6 0h2"
          stroke="var(--accent)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <circle cx="4" cy="14" r="1.5" fill="var(--accent)" />
        <circle cx="14" cy="14" r="1.5" fill="var(--accent)" />
      </g>
      <text
        x="60"
        y="72"
        textAnchor="middle"
        fontSize="3.5"
        fill="var(--foreground)"
        opacity="0.55"
        fontFamily="monospace"
      >
        GPS TELEMETRY · LIVE ETA
      </text>
    </svg>
  );
}
