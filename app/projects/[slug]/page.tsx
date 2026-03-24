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
import { useEffect } from "react";

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsDb[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <article className="space-y-14 pb-12">
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
