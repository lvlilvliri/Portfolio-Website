import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Project } from "@/@types/project";
import Image from "next/image";

interface Props {
  project: Project;
}

export const ProjectHeroImage: React.FC<Props> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 aspect-video"
    >
      <div className="absolute inset-0 bg-linear-to-t from-zinc-950/40 to-transparent z-10" />
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover"
      />
    </motion.div>
  );
};
