import React from "react";
import { motion } from "motion/react";
import { Project } from "@/@types/project";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  project: Project;
}

export const ProjectNav: React.FC<Props> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Portfolio
      </Link>
    </motion.div>
  );
};
