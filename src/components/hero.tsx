"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileDown, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { HeroVisual } from "@/components/hero-visual";

const roleWords = profile.roles;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, var(--accent-2) 45%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto flex max-w-2xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
              Open to Senior Cloud DevOps &amp; AI Infrastructure roles
            </span>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              {profile.name}
            </h1>

            <p className="mt-4 text-lg font-medium text-gradient sm:text-xl">
              {profile.title}
            </p>

            <p className="mt-5 text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.tagline} Cloud infrastructure, Kubernetes &amp; GitOps automation, and
              production Generative AI &mdash; RAG, AI agents, and LLMOps &mdash; under one roof.
            </p>

            <div className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {profile.location}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-[0_0_0_1px_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-0.5"
              >
                View Featured Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              >
                <FileDown className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-transform hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-transform hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-2 lg:justify-start">
              {roleWords.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {role}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden sm:block"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
