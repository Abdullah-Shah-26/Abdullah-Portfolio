"use client";

import { motion } from "framer-motion";

export default function SignCastThumbnail() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full" fill="none">
      <rect
        x="8"
        y="30"
        width="22"
        height="16"
        rx="2"
        fill="var(--surface)"
        stroke="var(--accent)"
        strokeWidth="1"
      />
      <path
        d="M13 35 19 41 25 35M13 41h12"
        stroke="var(--accent)"
        strokeWidth="0.8"
      />
      <motion.path
        d="M34 38h18"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeDasharray="3 3"
        animate={{ pathLength: [0, 1, 0], opacity: [0.25, 1, 0.25] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <rect
        x="54"
        y="24"
        width="22"
        height="28"
        rx="2"
        fill="var(--surface)"
        stroke="var(--accent)"
        strokeWidth="1"
      />
      <path
        d="M59 32h12M59 38h8M59 44h12"
        stroke="var(--accent)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M80 38h12"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
      <g transform="translate(92 27)">
        <circle
          cx="10"
          cy="9"
          r="7"
          fill="var(--surface)"
          stroke="var(--accent)"
          strokeWidth="1"
        />
        <path
          d="M6 13c2-5 3-5 4-1 1-7 3-7 3-1 2-4 3-2 3 1"
          stroke="var(--accent)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
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
        SPEECH · TRANSLATION · SIGN
      </text>
    </svg>
  );
}
