"use client";

import { motion } from "framer-motion";

const NODES = [
  { x: 24, y: 40, label: "A" },
  { x: 60, y: 20, label: "V" },
  { x: 60, y: 60, label: "C" },
  { x: 96, y: 40, label: "QR" },
];

export default function AixArtisansThumbnail() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full" fill="none">
      <motion.path
        d="M24 40 60 20 96 40 60 60Z"
        stroke="var(--accent)"
        strokeWidth="0.8"
        strokeDasharray="3 3"
        animate={{ opacity: [0.25, 0.8, 0.25] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />
      {NODES.map((node, index) => (
        <g key={node.label}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={index === 3 ? 9 : 7}
            fill="var(--surface)"
            stroke="var(--accent)"
            strokeWidth="1.1"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          />
          <text
            x={node.x}
            y={node.y + 1.5}
            textAnchor="middle"
            fontSize={node.label === "QR" ? "3.2" : "5"}
            fill="var(--accent)"
            fontFamily="monospace"
          >
            {node.label}
          </text>
        </g>
      ))}
      <text
        x="60"
        y="77"
        textAnchor="middle"
        fontSize="3.2"
        fill="var(--foreground)"
        opacity="0.55"
        fontFamily="monospace"
      >
        COLLABORATION · AUTHENTICITY
      </text>
    </svg>
  );
}
