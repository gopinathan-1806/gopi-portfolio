"use client";

import { useState } from "react";
import { Check, Copy, FileDown, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — the mailto link still works
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something reliable"
          description="Open to Senior Cloud DevOps, Platform Engineering, SRE, AI Infrastructure, MLOps, and DevOps + GenAI roles. Reach out directly or connect on LinkedIn."
        />

        <Reveal delay={0.1} className="mt-12">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-muted/40 p-5 transition-colors hover:border-accent/60"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-accent">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Email
                  </span>
                  <span className="block text-sm font-medium">{profile.email}</span>
                </span>
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center gap-4 rounded-2xl border border-border bg-muted/40 p-5 text-left transition-colors hover:border-accent/60"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-accent">
                  {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {copied ? "Copied!" : "Copy email address"}
                  </span>
                  <span className="block text-sm font-medium">Quick copy to clipboard</span>
                </span>
              </button>

              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-muted/40 p-5 transition-colors hover:border-accent/60"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-accent">
                  <LinkedinIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    LinkedIn
                  </span>
                  <span className="block text-sm font-medium">/in/gopinathan-krishnasamy</span>
                </span>
              </a>

              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-muted/40 p-5 transition-colors hover:border-accent/60"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-accent">
                  <GithubIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    GitHub
                  </span>
                  <span className="block text-sm font-medium">@gopinathan-1806</span>
                </span>
              </a>
            </div>

            <a
              href={profile.resumeUrl}
              download
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-5 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              <FileDown className="h-4 w-4" />
              Download Full Resume (PDF)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
