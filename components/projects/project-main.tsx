import React from "react";
import { motion } from "motion/react";
import { Project } from "@/@types/project";
import { ProjectOverview } from "./project-overview";
import { ProjectFeatures } from "./project-features";
import { ProjectLearnings } from "./project-learnings";

interface Props {
  project: Project;
}

export const ProjectMain: React.FC<Props> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="space-y-12"
    >
      {/* Overview */}
      <ProjectOverview project={project} />

      {/* Features */}
      <ProjectFeatures project={project} />

      {/* Learnings */}
      <ProjectLearnings project={project} />
    </motion.div>
  );
};
