"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "@/lib/data";

export default function Education() {
  return (
    <section
      id="education"
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
          EDUCATION
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Where I Study
        </h2>
      </motion.div>

      <div className="flex flex-col gap-8">
        {EDUCATION.entries.map((entry, i) => (
          <motion.div
            key={entry.institution}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-6 border-l-2"
            style={{ borderColor: "var(--accent)" }}
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-xl">{entry.institution}</h3>
                  <p className="font-mono text-sm text-[var(--accent)] mt-1">
                    {entry.degree}
                  </p>
                </div>
                <div className="sm:text-right font-mono text-xs text-[var(--foreground)]/50">
                  <p>{entry.period}</p>
                  <p>{entry.location}</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-sm font-mono text-[var(--foreground)]/60">
                <p>{entry.achievement}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
