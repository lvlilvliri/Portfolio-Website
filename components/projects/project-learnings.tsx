import React from "react";
import { cn } from "@/lib/utils";
import { Project } from "@/@types/project";

interface Props {
  project: Project;
}

export const ProjectLearnings: React.FC<Props> = ({ project }) => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
        Challenges & Learnings
      </h2>
      <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50 border-l-2 border-l-emerald-500">
        <p className="text-zinc-400 leading-relaxed">{project.learnings}</p>
      </div>
    </section>
  );
};
