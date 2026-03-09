import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, Layers } from "lucide-react";
import { Project } from "@/@types/project";
import { motion } from "motion/react";

interface Props {
  project: Project;
}

export const ProjectFeatures: React.FC<Props> = ({ project }) => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 flex items-center gap-2">
        <Layers className="w-5 h-5 text-emerald-400" /> Key Features
      </h2>
      <ul className="grid sm:grid-cols-2 gap-4">
        {project.features.map((feature: string, i: number) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: i * 0.08,
            }}
            viewport={{ once: true }}
            className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <span className="text-zinc-300">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
