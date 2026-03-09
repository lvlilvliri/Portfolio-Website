"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useTypewriter } from "@/shared/hooks/useTypeWriter";

interface Props {
  className?: string;
}

export const HeroSection: React.FC<Props> = ({ className }) => {
  const text = useTypewriter(
    [
      { text: "that scale." },
      { text: "that perform." },
      { text: "that users love." },
      { text: "that solve problems." },
    ],
    { loop: true, speed: 40, deleteSpeed: 20, pause: 2000 },
  );
  return (
    <section className="space-y-8 scroll-mt-32" id="home">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-medium text-zinc-300"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Available for new opportunities
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="space-y-4"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-zinc-100 leading-tight">
          Building digital <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-200 to-zinc-500 whitespace-nowrap">
            experiences {text}
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Hi, I'm Viacheslav — a web engineer who loves turning complex ideas
          into fast, polished web apps. I build with React, Next.js, and
          TypeScript, and I enjoy adding small design touches that make users
          smile.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-4 pt-4"
      >
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 bg-zinc-100 text-zinc-950 px-6 py-3 rounded-md font-medium text-sm hover:bg-zinc-200 transition-colors"
        >
          View My Work
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-zinc-100 border border-zinc-800 px-6 py-3 rounded-md font-medium text-sm hover:bg-zinc-800 hover:border-zinc-700 transition-colors"
        >
          GitHub Profile <ArrowUpRight className="w-4 h-4 text-zinc-400" />
        </a>
      </motion.div>
    </section>
  );
};
