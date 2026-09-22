// ---------------------------------------------------------------------------
// Career timeline. Add a new object to the TOP of `experience` for a new role.
// ---------------------------------------------------------------------------

export type Experience = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string; // "Present" for current role
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Cloud DevOps Engineer",
    company: "IBM",
    location: "Bangalore, India",
    start: "Nov 2022",
    end: "Present",
    summary:
      "Own the DevOps and AI infrastructure platform for enterprise engineering teams — CI/CD, GitOps, cloud provisioning, observability, and production Generative AI systems.",
    highlights: [
      "Architected and maintained 50+ enterprise Jenkins pipelines using Groovy, reducing deployment cycle time by 40% and eliminating 90% of manual release errors across non-production and production environments.",
      "Designed and deployed containerized RAG application microservices on AWS EKS and IBM IKS using Docker, LangChain, and FAISS, integrating LLM-powered capabilities into cloud-native platforms.",
      "Built an AI-powered GitHub pull request validation tool leveraging LLM-based Generative AI to automate code reviews, static security analysis, and secret exposure detection, strengthening CI/CD pipeline security.",
      "Automated QA infrastructure provisioning through an AI ChatOps workflow using Slack, n8n, and Azure OpenAI, handling 250+ monthly requests across 8 engineering teams and reducing setup time from 35 minutes to under 3 minutes.",
      "Engineered a Generative AI-based Infrastructure as Code (IaC) drift detection pipeline using LLMs and n8n that captures manual cloud console changes, evaluates security risk against Terraform state with context-aware prompts, and triggers real-time Slack alerts within 2 minutes.",
      "Implemented LangSmith tracing and AI guardrails for LLM/agent workflows, improving observability and reducing troubleshooting effort across AI-enabled applications.",
      "Integrated SonarQube, JFrog Artifactory, and Trivy into Jenkins and Azure DevOps pipelines, improving software quality and security controls across the delivery lifecycle.",
      "Refactored enterprise Docker image strategy using multi-stage builds and Alpine/distroless base images, reducing average image size by 70% (1.2GB → 350MB) and container vulnerabilities by 85%.",
      "Led migration to GitOps-based continuous delivery using Argo CD, Docker, and Kubernetes, increasing release frequency from weekly batches to 15+ daily zero-downtime deployments.",
      "Built modular, reusable Terraform frameworks to automate provisioning across 5+ enterprise cloud environments on Azure and IBM Cloud, cutting provisioning time by 75% (3 hours → 45 minutes).",
      "Redesigned production AWS e-commerce infrastructure to eliminate architectural bottlenecks, reducing monthly cloud infrastructure spend by more than 20% through right-sizing and lifecycle automation.",
      "Migrated legacy workloads to containerized Kubernetes applications and serverless microservices, cutting annual AWS and Azure cloud costs by 35%.",
      "Established a unified observability stack combining Prometheus, Grafana, ELK, Sysdig, and Zabbix, increasing monitoring coverage by 60%.",
      "Led IBM Cloud regional expansion across India by directing bring-up, configuration, and operational readiness of core VPC compute services for the Chennai and Mumbai data centres, earning recognition for onboarding NGDC regions.",
      "Mentored 5 DevOps engineers and coordinated delivery across 10 engineering pillar teams, sustaining a 99.9% platform availability SLA.",
    ],
    stack: [
      "AWS",
      "Azure",
      "IBM Cloud",
      "Kubernetes",
      "Terraform",
      "Argo CD",
      "Jenkins",
      "LangChain",
      "n8n",
      "Azure OpenAI",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Infinite Computer Solutions",
    location: "India",
    start: "Mar 2021",
    end: "Oct 2022",
    summary:
      "Owned Kubernetes infrastructure and production support for critical core microservices.",
    highlights: [
      "Provisioned and managed AWS EKS clusters using Terraform and Docker containers, achieving 99.95% uptime for critical core microservices.",
      "Led production support, incident triage, and root cause analysis (RCA) for critical incidents, improving system stability and preventing repeat outages.",
    ],
    stack: ["AWS", "EKS", "Terraform", "Docker", "Incident Management"],
  },
  {
    role: "Associate Engineer",
    company: "Accenture",
    location: "India",
    start: "Apr 2017",
    end: "Feb 2021",
    summary:
      "Managed cloud infrastructure supporting business-critical enterprise applications.",
    highlights: [
      "Managed 100+ AWS EC2 Linux instances, Lambda functions, and cloud resources supporting business-critical enterprise applications, maintaining 99.9% uptime.",
      "Received the Accenture Pinnacle Award for outstanding performance and contribution to enterprise cloud operations.",
    ],
    stack: ["AWS", "EC2", "Lambda", "Linux"],
  },
];
