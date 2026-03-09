"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { projects } from "@/shared/constants/data";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface Props {
  className?: string;
}

export const Projects: React.FC<Props> = ({ className }) => {
  const MotionLink = motion.create(Link);
  return (
    <section className="space-y-8 scroll-mt-26" id="projects">
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <MotionLink
            key={i}
            href={"/projects/" + project.link}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group block relative rounded-xl border border-zinc-800/50 bg-zinc-900/20 overflow-hidden hover:bg-zinc-800/40 hover:border-zinc-700/50 transition-all duration-300"
          >
            <div className="aspect-video overflow-hidden bg-zinc-800 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent z-10" />
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out opacity-80 group-hover:opacity-100"
                width={800}
                height={450}
              />
            </div>
            <div className="p-6 relative z-20 -mt-14">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-zinc-100 text-lg group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </div>
              <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-zinc-500 bg-zinc-900/80 px-2 py-1 rounded-sm border border-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </MotionLink>
        ))}
      </div>
    </section>
  );
};
