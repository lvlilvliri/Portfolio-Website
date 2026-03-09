"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { experience } from "@/shared/constants/experience";
import { motion } from "motion/react";

interface Props {
  className?: string;
}

export const Experience: React.FC<Props> = ({ className }) => {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
      <div className="space-y-12">
        {experience.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative grid md:grid-cols-[1fr_3fr] gap-4 md:gap-8 items-baseline"
          >
            {/* Timeline dot & line (hidden on mobile for cleaner look) */}
            <div className="hidden md:block absolute -left-10.25 top-2 -bottom-12 w-px bg-zinc-800 group-last:bottom-0">
              <div className="absolute top-0 -left-1 w-2 h-2 rounded-full bg-zinc-700 border-2 border-zinc-950 group-hover:bg-emerald-500 transition-colors" />
            </div>

            <div className="text-sm font-medium text-zinc-500 tabular-nums">
              {item.period}
            </div>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                <h3 className="font-semibold text-zinc-200">{item.role}</h3>
                <span className="hidden sm:inline text-zinc-600">•</span>
                <span className="text-sm text-zinc-400">{item.company}</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
