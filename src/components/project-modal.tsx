"use client";

import { useState, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  Layers,
  Lightbulb,
  ListChecks,
  Rocket,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { GithubIcon } from "@/components/icons";
import { ProjectDiagram } from "@/components/project-visuals";

function DetailBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Target;
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <Icon className="h-4 w-4" />
        </span>
        {title}
      </div>
      <div className="mt-2.5 pl-9">{children}</div>
    </div>
  );
}

export function ProjectModal({
  project,
  trigger,
}: {
  project: Project;
  trigger: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <AnimatePresence>
        {open ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount>
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="fixed inset-x-0 bottom-0 top-6 z-[61] mx-auto flex max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-border bg-card shadow-2xl sm:inset-x-4 sm:bottom-6 sm:top-10 sm:rounded-3xl md:inset-x-auto md:left-1/2 md:w-[min(48rem,92vw)] md:-translate-x-1/2"
              >
                <div className="flex items-start justify-between gap-4 border-b border-border p-6">
                  <div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.category.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                    <Dialog.Title className="mt-2 text-xl font-semibold sm:text-2xl">
                      {project.title}
                    </Dialog.Title>
                    <Dialog.Description className="mt-1 text-sm text-muted-foreground">
                      {project.tagline}
                    </Dialog.Description>
                  </div>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Close project details"
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </Dialog.Close>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                  <ProjectDiagram diagramLabel={project.diagramLabel} flow={project.flow} />

                  <div className="mt-8 space-y-7">
                    <DetailBlock icon={Target} title="Problem">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {project.problem}
                      </p>
                    </DetailBlock>

                    <DetailBlock icon={Lightbulb} title="Solution">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {project.solution}
                      </p>
                    </DetailBlock>

                    <DetailBlock icon={Layers} title="Architecture">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {project.architecture}
                      </p>
                    </DetailBlock>

                    <DetailBlock icon={Sparkles} title="Technology Stack">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </DetailBlock>

                    <DetailBlock icon={ListChecks} title="Key Features">
                      <ul className="space-y-1.5">
                        {project.keyFeatures.map((point, idx) => (
                          <li
                            key={idx}
                            className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </DetailBlock>

                    <DetailBlock icon={AlertTriangle} title="Engineering Challenges">
                      <ul className="space-y-1.5">
                        {project.challenges.map((point, idx) => (
                          <li
                            key={idx}
                            className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </DetailBlock>

                    <DetailBlock icon={Rocket} title="Outcome & Impact">
                      <ul className="space-y-1.5">
                        {project.impact.map((point, idx) => (
                          <li
                            key={idx}
                            className="relative flex gap-2 text-sm leading-relaxed text-muted-foreground"
                          >
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </DetailBlock>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 border-t border-border p-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                  >
                    <GithubIcon className="h-4 w-4" />
                    View Repository
                  </a>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      Live Demo
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
}
