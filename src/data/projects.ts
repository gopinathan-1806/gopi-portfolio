// ---------------------------------------------------------------------------
// Featured projects. To add a new project when you ship something new on
// GitHub, copy an object below, fill in the fields, and add its category
// tags. Set `featured: true` to pin it near the top of the grid.
// ---------------------------------------------------------------------------

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  tech: string[];
  impact: string[];
  githubUrl: string;
  category: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "voyage-ai",
    title: "VoyageAI",
    tagline: "Travel & Immigration Intelligence Assistant",
    problem:
      "Travelers and immigrants need trustworthy, up-to-date answers to complex visa and travel questions, but naive single-pass RAG chatbots hallucinate confidently and give no way to verify whether an answer is actually grounded in a source document.",
    solution:
      "Built a competition-grade, enterprise-ready assistant on a hybrid retrieval pipeline that fuses dense (FAISS) and sparse (BM25) search, adds a corrective-RAG loop that re-retrieves when confidence is low, and runs a self-RAG grounding-verification pass with multi-layer guardrails before an answer ever reaches the user.",
    tech: [
      "Python",
      "Streamlit",
      "OpenAI GPT-4o-mini",
      "text-embedding-3-small",
      "FAISS",
      "rank_bm25",
      "LangChain",
      "LangSmith",
      "Pydantic",
      "Playwright",
      "PyTest",
    ],
    impact: [
      "Hybrid dense + sparse retrieval with a corrective-RAG re-retrieval loop for low-confidence answers",
      "Self-RAG grounding verification and multi-layer guardrails to catch hallucinated or unsupported claims",
      "22-test automated evaluation suite covering retrieval quality and answer groundedness",
      "Swappable session-memory abstraction (in-memory → Redis/PostgreSQL) built for production deployment",
    ],
    githubUrl: "https://github.com/gopinathan-1806/Voyage-AI",
    category: ["Hybrid RAG", "AI Agents", "Production AI Systems"],
    featured: true,
  },
  {
    slug: "ai-pr-review-sim-ai",
    title: "AI-Assisted PR Security Review",
    tagline: "LLM-powered pull request security automation",
    problem:
      "Manual code review at enterprise scale consistently misses security issues — hardcoded secrets, injection vulnerabilities, unsafe deserialization, and OWASP Top 10 risks — while also slowing down CI/CD throughput.",
    solution:
      "Designed an automated workflow, triggered on every PR open/update/reopen, that pulls the changed files via the GitHub API, runs an LLM-based static security analysis across multiple vulnerability classes, classifies findings by severity (Critical → Low), and posts a structured Markdown report directly as a PR comment — with the GitHub token stored only as a workspace secret, never in code or logs.",
    tech: ["Sim.ai", "GitHub API", "LLM Static Analysis", "Secret Scanning", "Workflow Orchestration"],
    impact: [
      "Security review runs automatically on every PR event — no reviewer has to remember to trigger it",
      "Findings are severity-classified and posted inline, cutting review turnaround time",
      "Mirrors the production AI PR-validation tool built at IBM that strengthened CI/CD pipeline security enterprise-wide",
    ],
    githubUrl: "https://github.com/gopinathan-1806/AI-assisted-PR-review-using-sim-ai",
    category: ["AI Agents", "CI/CD Automation"],
    featured: true,
  },
  {
    slug: "devops-chatbot-rag",
    title: "Aurora Dynamics GPT",
    tagline: "RAG-powered company knowledge assistant",
    problem:
      "Engineering and support teams waste hours acting as a human search index for internal documentation, and generic LLM answers aren't trustworthy without a citation back to the source.",
    solution:
      "Built a Retrieval-Augmented Generation pipeline that ingests company documents, chunks and embeds them, stores vectors in FAISS, and answers natural-language questions through a LangChain-orchestrated retrieve-then-generate flow — every answer is scoped to company context and attributed back to its source document.",
    tech: ["Python", "Streamlit", "LangChain", "OpenAI", "FAISS", "python-dotenv"],
    impact: [
      "End-to-end RAG pipeline: ingest → chunk → embed → retrieve → generate → cite",
      "Source-attributed answers instead of unverifiable LLM output",
      "Direct open-source prototype of the containerized RAG microservices shipped on AWS EKS / IBM IKS in production",
    ],
    githubUrl: "https://github.com/gopinathan-1806/devops-chatbot-RAG",
    category: ["Hybrid RAG", "Production AI Systems"],
    featured: true,
  },
  {
    slug: "tn-schemegraph-ai",
    title: "TN SchemeGraph AI",
    tagline: "Knowledge-graph chatbot for government scheme discovery",
    problem:
      "Citizens struggle to navigate scattered, relationship-heavy eligibility rules across dozens of government schemes and departments — flat keyword or document search can't represent how a scheme, its eligibility criteria, and its beneficiaries relate to each other.",
    solution:
      "Modeled Tamil Nadu government schemes as a knowledge graph in Neo4j (Scheme, Department, Beneficiary, Benefit, Eligibility, Document nodes) and built a conversational layer where OpenAI parses user intent and entities, translates the question into a Cypher query, retrieves the matching subgraph, and generates a grounded natural-language answer.",
    tech: ["Python", "Streamlit", "Neo4j", "Cypher", "OpenAI API", "PyTest"],
    impact: [
      "Graph-based retrieval captures relationships (eligibility, benefits, department ownership) that flat RAG misses",
      "Natural-language-to-Cypher query translation for non-technical end users",
      "Automated test suite validating retrieval correctness against the knowledge graph",
    ],
    githubUrl: "https://github.com/gopinathan-1806/tn-schemegraph-ai",
    category: ["AI Agents", "Knowledge Graphs"],
  },
  {
    slug: "etl-automation-n8n",
    title: "AI-Powered Enrollment ETL Pipeline",
    tagline: "n8n + LLM data cleaning and routing automation",
    problem:
      "A weekly influx of messy student enrollment data from Google Forms — inconsistent names, invalid emails, mismatched cities, varying date formats — made downstream reporting unreliable and required hours of manual cleanup.",
    solution:
      "Built an end-to-end n8n ETL pipeline that extracts raw CSV data, processes every record independently through an LLM step that cleans and standardizes names, emails, courses, dates, and fees, applies deterministic city/email-validity routing, and loads four clean, purpose-routed CSV outputs.",
    tech: ["n8n", "OpenAI Chat Model", "JavaScript", "CSV", "Google Forms"],
    impact: [
      "Fully automated Extract → Transform → Filter → Load pattern replacing manual spreadsheet cleanup",
      "LLM-based field normalization applied consistently across every record",
      "Same AI-orchestration pattern that powers the 250+ monthly ChatOps automation requests at IBM",
    ],
    githubUrl: "https://github.com/gopinathan-1806/ETL-automation-using-n8n",
    category: ["Workflow Automation", "CI/CD Automation"],
  },
  {
    slug: "n8n-gmail-automation",
    title: "Student Progress Email Automation",
    tagline: "Event-driven n8n + Gmail notification pipeline",
    problem:
      "Manually emailing progress updates to students and stakeholders every time a spreadsheet is updated is slow, easy to forget, and doesn't scale past a handful of recipients.",
    solution:
      "Built an event-driven n8n workflow that watches a Google Sheet for new rows via a trigger node, formats a personalized progress email, and sends it automatically through Gmail — a clean trigger → transform → action pattern with no manual intervention.",
    tech: ["n8n", "Google Sheets API", "Gmail API", "n8n Expressions"],
    impact: [
      "Zero-touch notification pipeline triggered directly by spreadsheet updates",
      "Reusable trigger → transform → action pattern later extended to IaC drift alerts and ChatOps notifications",
    ],
    githubUrl: "https://github.com/gopinathan-1806/n8n-gmail-automation",
    category: ["Workflow Automation"],
  },
];

export const projectCategories = [
  "All",
  "Hybrid RAG",
  "AI Agents",
  "Production AI Systems",
  "Knowledge Graphs",
  "CI/CD Automation",
  "Workflow Automation",
] as const;
