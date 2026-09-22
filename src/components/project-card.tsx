"use client";

import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import type { Project } from "@/data/projects";
import { GithubIcon } from "@/components/icons";
import { ProjectThumbnail } from "@/components/project-visuals";
import { ProjectModal } from "@/components/project-modal";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5">
      <div className="relative overflow-hidden">
        {project.featured ? (
          <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-foreground shadow">
            <Sparkles className="h-3 w-3" />
            Featured
          </span>
        ) : null}
        <ProjectThumbnail diagramLabel={project.diagramLabel} flow={project.flow} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm font-medium text-muted-foreground">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.category.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 ? (
            <span className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
              +{project.tech.length - 5}
            </span>
          ) : null}
        </div>

        <div className="mt-6 flex flex-1 items-end gap-2">
          <ProjectModal
            project={project}
            trigger={
              <button
                type="button"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                View Project
                <ArrowUpRight className="h-4 w-4" />
              </button>
            }
          />
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
