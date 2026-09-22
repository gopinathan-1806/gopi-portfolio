// ---------------------------------------------------------------------------
// Technical skills, grouped for the Skills section. Add/remove items freely —
// the UI renders whatever groups exist here.
// ---------------------------------------------------------------------------

export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "cloud",
    title: "Cloud Platforms",
    description: "Multi-cloud enterprise infrastructure across three providers.",
    items: ["AWS", "Microsoft Azure", "IBM Cloud"],
  },
  {
    id: "iac",
    title: "Infrastructure as Code",
    description: "Modular, reusable provisioning frameworks.",
    items: ["Terraform", "Ansible", "Azure Bicep", "Azure DevOps"],
  },
  {
    id: "cicd",
    title: "CI/CD & GitOps",
    description: "Enterprise-scale pipelines and zero-downtime delivery.",
    items: [
      "Jenkins",
      "Groovy",
      "Argo CD",
      "GitLab",
      "AWS CodePipeline",
      "SonarQube",
      "Trivy",
      "JFrog Artifactory",
    ],
  },
  {
    id: "containers",
    title: "Containers & Orchestration",
    description: "Kubernetes-native platforms and image hardening.",
    items: ["Docker", "Kubernetes", "Helm", "Container Registries", "Velero"],
  },
  {
    id: "observability",
    title: "Observability & SRE",
    description: "Unified monitoring, tracing, and incident response.",
    items: ["Prometheus", "Grafana", "Zabbix", "Sysdig", "ELK Stack", "LangSmith"],
  },
  {
    id: "genai",
    title: "Generative AI & LLMOps",
    description: "Production RAG, agents, and LLM platform engineering.",
    items: [
      "LLMs",
      "LangChain",
      "LangGraph",
      "RAG",
      "AI Agents",
      "Model Context Protocol (MCP)",
      "AutoGen",
      "CrewAI",
      "AWS Bedrock",
      "Azure OpenAI",
      "Azure AI Foundry",
      "Knowledge Graphs",
    ],
  },
  {
    id: "automation",
    title: "Automation & Development",
    description: "Glue code, APIs, and workflow orchestration.",
    items: ["Python", "Bash", "Shell Scripting", "SQL", "Git", "FastAPI", "Streamlit", "n8n"],
  },
  {
    id: "os",
    title: "Operating Systems",
    description: "Linux-first infrastructure operations.",
    items: ["Linux", "Troubleshooting"],
  },
];

// Highlighted pillars shown as the big "expertise" cards near the top of the
// Skills section.
export const expertisePillars = [
  {
    title: "Cloud Platforms",
    description:
      "Enterprise infrastructure across AWS, Azure, and IBM Cloud — from VPC/region bring-up to cost-optimized, right-sized production workloads.",
    items: ["AWS", "Azure", "IBM Cloud"],
  },
  {
    title: "Kubernetes, Docker, Terraform & CI/CD",
    description:
      "GitOps delivery with Argo CD, hardened container images, and reusable Terraform frameworks powering 15+ daily zero-downtime deployments.",
    items: ["Kubernetes", "Docker", "Terraform", "Argo CD", "Jenkins", "Helm"],
  },
  {
    title: "AI/GenAI & Agentic Systems",
    description:
      "Production RAG microservices, LLM-powered automation, and multi-agent workflows with tracing and guardrails baked in.",
    items: ["RAG", "AI Agents", "LangChain", "LangGraph", "n8n", "MCP"],
  },
];
