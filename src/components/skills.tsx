import { ArrowRight, Boxes, Brain, Cloud } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { expertisePillars, skillGroups } from "@/data/skills";

const pillarIcons = [Cloud, Boxes, Brain];
const pillarStory = ["Foundations", "Delivery", "Intelligence"];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Cloud, DevOps & AI expertise"
          description="Deep in three clouds, fluent across the full delivery pipeline, and hands-on with production Generative AI."
        />

        <Reveal className="mt-14 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {pillarStory.map((word, i) => (
            <span key={word} className="flex items-center gap-2">
              <span className={i === pillarStory.length - 1 ? "text-accent" : undefined}>
                {word}
              </span>
              {i < pillarStory.length - 1 ? (
                <ArrowRight className="h-3.5 w-3.5 text-accent/60" />
              ) : null}
            </span>
          ))}
        </Reveal>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {expertisePillars.map((pillar, i) => {
            const Icon = pillarIcons[i % pillarIcons.length];
            return (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {pillar.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.id} delay={0.04 * i}>
              <div className="h-full rounded-2xl border border-border bg-card p-5">
                <h4 className="text-sm font-semibold">{group.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{group.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
