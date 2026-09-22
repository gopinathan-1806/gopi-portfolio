import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Key Engineering Achievements"
          title="Impact, measured"
          description="Quantified outcomes from architecting and operating enterprise cloud and AI platforms."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, i) => (
            <Reveal key={item.label} delay={0.05 * (i % 4)}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <p className="text-3xl font-semibold text-gradient">{item.metric}</p>
                <p className="mt-1.5 text-sm font-semibold">{item.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
