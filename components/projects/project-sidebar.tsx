import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import { Project } from "@/@types/project";

interface Props {
  project: Project;
}

export const ProjectSidebar: React.FC<Props> = ({ project }) => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
    whileHover: { scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" },
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="space-y-8"
    >
      {/* Details */}
      <div className="space-y-6 p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/20">
        <div>
          <h3 className="text-sm font-medium text-zinc-500 mb-2">Role</h3>
          <p className="text-zinc-200 font-medium">{project.role}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-zinc-500 mb-2">Timeline</h3>
          <div className="flex items-center gap-2 text-zinc-200">
            <Calendar className="w-4 h-4 text-zinc-400" />
            <span className="font-medium">{project.date}</span>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
          Technologies Used
        </h3>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
          variants={container}
        >
          {project.stack.map((tech: string) => (
            <motion.span
              key={tech}
              variants={item}
              whileHover={item.whileHover}
              className="inline-flex items-center px-3 py-1.5 rounded-md bg-zinc-900/80 border border-zinc-800 text-sm font-medium text-zinc-300 hover:text-emerald-400"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.aside>
  );
};
