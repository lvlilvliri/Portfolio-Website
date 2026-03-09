import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/@types/project";

interface Props {
  project: Project;
}

export const ProjectHeader: React.FC<Props> = ({ project }) => {
  return (
    <header className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-4"
      >
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-zinc-100">
          {project.title}
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl">{project.tagline}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-4 pt-2"
      >
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-zinc-100 text-zinc-950 px-5 py-2.5 rounded-md font-medium text-sm hover:bg-zinc-200 transition-colors"
        >
          <ExternalLink className="w-4 h-4" /> Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-zinc-100 border border-zinc-800 px-5 py-2.5 rounded-md font-medium text-sm hover:bg-zinc-800 hover:border-zinc-700 transition-colors"
        >
          <Github className="w-4 h-4" /> Source Code
        </a>
      </motion.div>
    </header>
  );
};
