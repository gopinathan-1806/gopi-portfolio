// ---------------------------------------------------------------------------
// Headline, quantified achievements shown as stat cards. Keep these short —
// full context lives in the Experience section.
// ---------------------------------------------------------------------------

export type Achievement = {
  metric: string;
  label: string;
  detail: string;
};

export const achievements: Achievement[] = [
  {
    metric: "40%",
    label: "Faster deployments",
    detail: "Cut deployment cycle time across 50+ enterprise Jenkins pipelines while eliminating 90% of manual release errors.",
  },
  {
    metric: "15+/day",
    label: "Zero-downtime releases",
    detail: "Migrated to GitOps delivery with Argo CD, moving from weekly release batches to 15+ daily deployments.",
  },
  {
    metric: "75%",
    label: "Faster provisioning",
    detail: "Modular Terraform frameworks cut cloud environment provisioning from 3 hours to 45 minutes across 5+ environments.",
  },
  {
    metric: "35%",
    label: "Lower cloud spend",
    detail: "Migrated legacy workloads to Kubernetes and serverless, cutting annual AWS and Azure costs by over a third.",
  },
  {
    metric: "70%",
    label: "Smaller container images",
    detail: "Multi-stage, distroless Docker builds shrank average image size from 1.2GB to 350MB and cut vulnerabilities by 85%.",
  },
  {
    metric: "<3 min",
    label: "AI ChatOps provisioning",
    detail: "AI-driven Slack + n8n + Azure OpenAI workflow handles 250+ monthly requests, down from a 35-minute manual process.",
  },
  {
    metric: "<2 min",
    label: "Real-time drift detection",
    detail: "Generative-AI IaC drift pipeline flags risky manual cloud changes against Terraform state with real-time Slack alerts.",
  },
  {
    metric: "99.9%",
    label: "Platform availability",
    detail: "Sustained SLA across 10 engineering pillar teams while mentoring 5 DevOps engineers.",
  },
];
