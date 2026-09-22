import { Award, BadgeCheck, GraduationCap, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { certifications, education } from "@/data/credentials";

const typeIcon = {
  certification: BadgeCheck,
  award: Award,
  recognition: Star,
};

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certifications & Education"
          title="Credentials & academic background"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert) => {
                const Icon = typeIcon[cert.type];
                return (
                  <div
                    key={cert.title}
                    className="flex h-full gap-4 rounded-2xl border border-border bg-card p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-snug">{cert.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-accent">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Education
              </h3>
              <div className="mt-3 space-y-4">
                {education.map((item) => (
                  <div key={item.degree}>
                    <p className="text-sm font-semibold">{item.degree}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                    <p className="text-xs text-muted-foreground">{item.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
