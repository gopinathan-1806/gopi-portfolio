import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";
import { Cloud, Cpu, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Cloud,
    title: "9+ years, 3 clouds",
    description: "AWS, Azure, and IBM Cloud — from region bring-up to cost-optimized production.",
  },
  {
    icon: Cpu,
    title: "Production GenAI",
    description: "RAG microservices, AI agents, and LLMOps shipped and operated in real enterprise systems.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability-first",
    description: "GitOps, guardrailed automation, and observability that sustain 99.9% platform SLAs.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Infrastructure discipline, applied to AI"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <Reveal delay={0.05} className="lg:col-span-3">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              {profile.about.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="grid gap-4">
              {pillars.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/60"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold">{title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
