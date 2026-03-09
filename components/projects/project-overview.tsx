import React from "react";
import { cn } from "@/lib/utils";
import { LayoutTemplate } from "lucide-react";
import { Project } from "@/@types/project";

interface Props {
  project: Project;
}

export const ProjectOverview: React.FC<Props> = ({ project }) => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 flex items-center gap-2">
        <LayoutTemplate className="w-5 h-5 text-emerald-400" /> Overview
      </h2>
      <p className="text-zinc-400 leading-relaxed text-lg">
        {project.description}
      </p>
    </section>
  );
};
