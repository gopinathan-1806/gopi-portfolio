import { Briefcase, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career Timeline"
          title="Professional Experience"
          description="Nine years of enterprise cloud, DevOps, and (more recently) AI infrastructure engineering."
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border sm:left-1/2" />

          <div className="space-y-14">
            {experience.map((job, i) => {
              const alignLeft = i % 2 === 0;
              return (
                <Reveal
                  key={job.company + job.role}
                  delay={0.05}
                  className={`relative sm:grid sm:grid-cols-2 sm:gap-10 ${
                    alignLeft ? "" : "sm:[&>div:first-child]:col-start-2"
                  }`}
                >
                  <span className="absolute left-4 top-1.5 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-background sm:left-1/2" />

                  <div
                    className={`pl-10 sm:pl-0 ${
                      alignLeft ? "sm:pr-10 sm:text-right" : "sm:col-start-2 sm:pl-10"
                    }`}
                  >
                    <div className="rounded-2xl border border-border bg-card p-6">
                      <div
                        className={`flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-accent ${
                          alignLeft ? "sm:justify-end" : ""
                        }`}
                      >
                        <Briefcase className="h-3.5 w-3.5" />
                        {job.start} &ndash; {job.end}
                      </div>
                      <h3 className="mt-2 text-lg font-semibold">{job.role}</h3>
                      <p className="text-sm font-medium text-muted-foreground">
                        {job.company}
                      </p>
                      <div
                        className={`mt-1 flex items-center gap-1.5 text-xs text-muted-foreground ${
                          alignLeft ? "sm:justify-end" : ""
                        }`}
                      >
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {job.summary}
                      </p>

                      <div
                        className={`mt-4 flex flex-wrap gap-1.5 ${
                          alignLeft ? "sm:justify-end" : ""
                        }`}
                      >
                        {job.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`mt-4 pl-10 sm:mt-0 sm:pl-0 ${
                      alignLeft ? "sm:col-start-2 sm:pl-10" : "sm:pr-10"
                    }`}
                  >
                    <ul className="space-y-2.5">
                      {job.highlights.map((point, idx) => (
                        <li
                          key={idx}
                          className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
