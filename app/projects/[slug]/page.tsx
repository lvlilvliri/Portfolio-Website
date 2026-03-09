"use client";

import { useParams } from "next/navigation";
import { projectsDb } from "@/shared/constants/projectsDb";
import {
  ProjectHeader,
  ProjectHeroImage,
  ProjectMain,
  ProjectNav,
  ProjectSidebar,
} from "@/components/index";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsDb[slug];

  return (
    <article className="space-y-12 pb-16">
      {/* Navigation */}
      <ProjectNav project={project} />

      {/* Header */}
      <ProjectHeader project={project} />

      {/* Hero Image */}
      <ProjectHeroImage project={project} />

      {/* Content Grid */}
      <div className="grid lg:grid-cols-[1fr_300px] gap-12 pt-8">
        {/* Main Content */}
        <ProjectMain project={project} />

        {/* Sidebar */}
        <ProjectSidebar project={project} />
      </div>
    </article>
  );
}
