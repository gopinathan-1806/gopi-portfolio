import { SectionHeading } from "@/components/section-heading";
import { ProjectGrid } from "@/components/project-grid";
import { profile } from "@/data/profile";
import { GithubIcon } from "@/components/icons";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured GitHub Projects"
          title="AI systems and automation, shipped in the open"
          description="Every project below follows the same lens I apply at work: a real problem, a deliberate technical solution, and a measurable outcome."
        />

        <div className="mt-10">
          <ProjectGrid />
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
          >
            <GithubIcon className="h-4 w-4" />
            See all repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
