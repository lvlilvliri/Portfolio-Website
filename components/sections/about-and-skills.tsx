"use client";

import React from "react";
import { motion } from "motion/react";
import { skills } from "@/shared/constants/skills";

interface Props {
  className?: string;
}

export const AboutAndSkills: React.FC<Props> = ({ className }) => {
  return (
    <section
      className="grid md:grid-cols-[1fr_300px] gap-12 scroll-mt-26"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold tracking-tight">About Me</h2>
        <div className="prose prose-zinc prose-invert max-w-none text-zinc-400 leading-relaxed space-y-4">
          <p>
            I'm a passionate developer who loves connecting design and
            engineering, turning ideas into polished, high-performance web
            applications. I focus on building accessible, inclusive digital
            experiences that look great, feel intuitive, and perform flawlessly
            under pressure, whether for small projects or complex systems.
          </p>
          <p>
            Lately, I've been crafting highly interactive web apps using Next.js
            App Router, TypeScript, React, and robust backend systems like
            Node.js and PostgreSQL. I strive to write clean, maintainable code,
            implement modern state management tools like Redux, Zustand, and
            TanStack Query, and build architectures that scale as the business
            grows. Along the way, I enjoy refining UI details, optimizing
            performance, and ensuring every product feels thoughtful, reliable,
            and enjoyable for users.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
          Technologies
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900/50 border border-zinc-800/50 text-xs font-medium text-zinc-300 hover:bg-zinc-800 hover:text-emerald-400 transition-colors cursor-default"
            >
              {skill.icon}
              {skill.name}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
