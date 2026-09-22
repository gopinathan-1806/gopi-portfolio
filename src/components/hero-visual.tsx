"use client";

import { motion } from "framer-motion";
import { Activity, Boxes, Brain, Cloud, Workflow } from "lucide-react";

const layers = [
  {
    icon: Cloud,
    title: "Cloud Platforms",
    tags: ["AWS", "Azure", "IBM Cloud"],
  },
  {
    icon: Boxes,
    title: "Containers & Kubernetes",
    tags: ["Docker", "EKS / IKS", "Helm"],
  },
  {
    icon: Workflow,
    title: "CI/CD & GitOps",
    tags: ["Jenkins", "Argo CD", "Terraform"],
  },
  {
    icon: Activity,
    title: "Observability & SRE",
    tags: ["Prometheus", "Grafana", "ELK"],
  },
  {
    icon: Brain,
    title: "GenAI & AI Agents",
    tags: ["RAG", "LangChain", "LLMOps"],
  },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, var(--accent-2) 50%, transparent 75%)",
        }}
      />

      <div className="relative rounded-3xl border border-border bg-card/70 p-4 backdrop-blur">
        <div className="relative">
          {/* connecting spine */}
          <div className="absolute bottom-6 left-[27px] top-6 w-px bg-border" aria-hidden />
          <motion.div
            aria-hidden
            className="absolute left-[24px] top-6 h-1.5 w-1.5 rounded-full bg-accent"
            animate={{ top: ["24px", "calc(100% - 24px)"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
          />

          <ul className="relative flex flex-col gap-2">
            {layers.map((layer) => (
              <li
                key={layer.title}
                className="flex items-center gap-3 rounded-2xl border border-transparent px-2 py-2 transition-colors hover:border-border hover:bg-muted/50"
              >
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-accent">
                  <layer.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold leading-tight">{layer.title}</span>
                  <span className="mt-1 flex flex-wrap gap-1">
                    {layer.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
