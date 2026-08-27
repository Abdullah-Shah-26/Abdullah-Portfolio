"use client";

import { motion } from "framer-motion";
import { ABOUT } from "@/lib/data";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p className="font-mono text-xs text-[var(--accent)] tracking-widest mb-3">
          SKILLS
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Tech Stack
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {ABOUT.techStack.map((category, i) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col gap-4 pb-6 border-b"
            style={{ borderColor: "var(--border)" }}
          >
            <span className="font-mono text-sm font-semibold text-[var(--accent)] tracking-wider">
              {category.label}
            </span>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
              {category.items.split(" · ").map((item) => (
                <span
                  key={item}
                  className="font-mono text-sm text-[var(--foreground)]/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
