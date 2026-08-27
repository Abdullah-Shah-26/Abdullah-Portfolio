"use client";

import { motion } from "framer-motion";
import {
  siCodechef,
  siCodeforces,
  siDevpost,
  siGeeksforgeeks,
  siLeetcode,
} from "simple-icons";
import { BATTLE_LOG } from "@/lib/data";

const PLATFORM_ICONS = {
  codechef: siCodechef,
  codeforces: siCodeforces,
  devpost: siDevpost,
  geeksforgeeks: siGeeksforgeeks,
  leetcode: siLeetcode,
} as const;

export default function BattleLog() {
  return (
    <section
      id="battlelog"
      className="py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p
          className="font-mono text-xs tracking-widest mb-3"
          style={{ color: "var(--accent)" }}
        >
          EARNED
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          ACHIEVEMENTS
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {BATTLE_LOG.achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col gap-1 p-6 rounded-sm border-l-2"
            style={{
              borderLeftColor: "var(--accent)",
              background: "var(--surface)",
            }}
          >
            <div className="flex flex-col gap-1">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-base leading-snug hover:text-[var(--accent)] transition-colors duration-200"
                >
                  <span className="flex items-start gap-2">
                    {item.platform && (
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 mt-0.5 shrink-0 text-[var(--foreground)]/55"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          d={
                            PLATFORM_ICONS[
                              item.platform as keyof typeof PLATFORM_ICONS
                            ].path
                          }
                        />
                      </svg>
                    )}
                    <span>{item.title}</span>
                  </span>
                </a>
              ) : (
                <p className="flex items-start gap-2 font-semibold text-base leading-snug">
                  {item.platform && (
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 mt-0.5 shrink-0 text-[var(--foreground)]/55"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d={
                          PLATFORM_ICONS[
                            item.platform as keyof typeof PLATFORM_ICONS
                          ].path
                        }
                      />
                    </svg>
                  )}
                  <span>{item.title}</span>
                </p>
              )}
              <p className="text-sm text-[var(--foreground)]/55 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
