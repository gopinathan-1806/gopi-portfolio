"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink, Sparkles } from "lucide-react";
import type { Project } from "@/data/projects";
import { GithubIcon } from "@/components/icons";

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50">
      <div className="flex items-start justify-between gap-3">
        <div>
          {project.featured ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
              <Sparkles className="h-3 w-3" />
              Featured
            </span>
          ) : null}
          <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
          <p className="text-sm font-medium text-muted-foreground">{project.tagline}</p>
        </div>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} on GitHub`}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <GithubIcon className="h-4 w-4" />
        </a>
      </div>

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

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-4 flex items-center gap-1.5 text-sm font-medium text-accent"
      >
        {open ? "Hide the story" : "Problem → Solution → Impact"}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-4 border-t border-border pt-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Problem
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {project.problem}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Solution
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {project.solution}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Impact
                </p>
                <ul className="mt-1.5 space-y-1.5">
                  {project.impact.map((point, idx) => (
                    <li
                      key={idx}
                      className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 6).map((t) => (
          <span
            key={t}
            className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 6 ? (
          <span className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
            +{project.tech.length - 6}
          </span>
        ) : null}
      </div>

      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
      >
        View repository
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}
