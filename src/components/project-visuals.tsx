import {
  ArrowDown,
  ArrowRight,
  Brain,
  CheckCircle2,
  Database,
  FileSearch,
  FileSpreadsheet,
  Files,
  Filter,
  GitPullRequest,
  HelpCircle,
  Layers,
  ListChecks,
  Mail,
  MessageSquare,
  MessageSquareText,
  Network,
  RefreshCcw,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { FlowStep } from "@/data/projects";

// Maps the string icon names used in src/data/projects.ts to the actual
// lucide-react components. Add an entry here when a new project's `flow`
// needs an icon that isn't listed yet.
const iconMap: Record<string, LucideIcon> = {
  ArrowDown,
  ArrowRight,
  Brain,
  CheckCircle2,
  Database,
  FileSearch,
  FileSpreadsheet,
  Files,
  Filter,
  GitPullRequest,
  HelpCircle,
  Layers,
  ListChecks,
  Mail,
  MessageSquare,
  MessageSquareText,
  Network,
  RefreshCcw,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Workflow,
};

function resolveIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}

/**
 * Compact, glanceable diagram used as the project card's thumbnail: icon
 * nodes only, connected by arrows, with the diagram's short label as a
 * caption chip. Intentionally has no text-per-step so it stays legible at
 * card width — the full labeled flow lives in <ProjectDiagram variant="detailed" />.
 */
export function ProjectThumbnail({
  diagramLabel,
  flow,
  className,
}: {
  diagramLabel: string;
  flow: FlowStep[];
  className?: string;
}) {
  return (
    <div
      className={`bg-grid relative flex aspect-video w-full items-center justify-center overflow-hidden bg-muted/60 ${className ?? ""}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(120% 100% at 0% 0%, var(--accent) 0%, transparent 45%), radial-gradient(120% 100% at 100% 100%, var(--accent-2) 0%, transparent 45%)",
        }}
      />
      <span className="absolute left-3 top-3 rounded-full border border-border bg-card/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-accent backdrop-blur">
        {diagramLabel}
      </span>

      <div className="relative flex items-center gap-1.5 px-6 transition-transform duration-500 ease-out group-hover:scale-[1.04]">
        {flow.map((step, i) => {
          const Icon = resolveIcon(step.icon);
          const isLast = i === flow.length - 1;
          return (
            <div key={step.label} className="flex items-center gap-1.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-accent shadow-sm sm:h-12 sm:w-12">
                <Icon className="h-5 w-5" />
              </div>
              {!isLast ? (
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/70" />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Full, labeled architecture/workflow diagram used inside the project
 * detail modal. Flows as a row on wider viewports and stacks vertically on
 * narrow ones.
 */
export function ProjectDiagram({
  diagramLabel,
  flow,
}: {
  diagramLabel: string;
  flow: FlowStep[];
}) {
  return (
    <div className="bg-grid relative overflow-hidden rounded-2xl border border-border bg-muted/40 p-6 sm:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(120% 100% at 0% 0%, var(--accent) 0%, transparent 45%), radial-gradient(120% 100% at 100% 100%, var(--accent-2) 0%, transparent 45%)",
        }}
      />
      <p className="relative mb-6 text-xs font-semibold uppercase tracking-widest text-accent">
        {diagramLabel}
      </p>

      <div className="relative flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-2">
        {flow.map((step, i) => {
          const Icon = resolveIcon(step.icon);
          const isLast = i === flow.length - 1;
          return (
            <div key={step.label} className="flex flex-1 flex-col items-center sm:flex-row">
              <div className="flex w-full flex-col items-center gap-2 rounded-xl border border-border bg-card px-3 py-4 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold leading-tight">{step.label}</p>
                  {step.sublabel ? (
                    <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                      {step.sublabel}
                    </p>
                  ) : null}
                </div>
              </div>
              {!isLast ? (
                <>
                  <ArrowDown className="my-1 h-4 w-4 shrink-0 text-muted-foreground/60 sm:hidden" />
                  <ArrowRight className="mx-1 hidden h-4 w-4 shrink-0 text-muted-foreground/60 sm:block" />
                </>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
