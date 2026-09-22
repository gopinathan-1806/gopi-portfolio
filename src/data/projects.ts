// ---------------------------------------------------------------------------
// Featured projects. To add a new project when you ship something new on
// GitHub, copy an object below, fill in the fields, and add its category
// tags. Set `featured: true` to pin it near the top of the grid.
//
// `flow` drives the on-brand architecture/workflow diagram rendered on the
// project card and in the detail modal — see `icon-key.ts` for the list of
// valid `icon` names, and `project-visuals.tsx` for how it's rendered.
// ---------------------------------------------------------------------------

export type FlowStep = {
  icon: string;
  label: string;
  sublabel?: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  /** One or two sentences shown on the card face. */
  summary: string;
  problem: string;
  solution: string;
  /** Short paragraph describing the technical architecture, for the detail view. */
  architecture: string;
  diagramLabel: string;
  flow: FlowStep[];
  tech: string[];
  keyFeatures: string[];
  challenges: string[];
  impact: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "voyage-ai",
    title: "VoyageAI",
    tagline: "Travel & Immigration Intelligence Assistant",
    summary:
      "A hybrid-retrieval RAG assistant for visa and travel questions, built with a corrective-RAG loop and self-RAG grounding verification so answers are actually traceable to source documents.",
    problem:
      "Travelers and immigrants need trustworthy, up-to-date answers to complex visa and travel questions, but naive single-pass RAG chatbots hallucinate confidently and give no way to verify whether an answer is actually grounded in a source document.",
    solution:
      "Built a competition-grade, enterprise-ready assistant on a hybrid retrieval pipeline that fuses dense (FAISS) and sparse (BM25) search, adds a corrective-RAG loop that re-retrieves when confidence is low, and runs a self-RAG grounding-verification pass with multi-layer guardrails before an answer ever reaches the user.",
    architecture:
      "Query goes through parallel dense (FAISS embeddings) and sparse (BM25) retrieval, fused into a single ranked context. A corrective-RAG controller inspects retrieval confidence and re-queries with reformulated search when it's low. Before the answer is returned, a self-RAG pass checks the generated response against retrieved context for groundedness, and multi-layer guardrails filter unsupported claims. Session memory is abstracted behind an interface that swaps between in-memory and Redis/PostgreSQL.",
    diagramLabel: "Hybrid RAG Pipeline",
    flow: [
      { icon: "MessageSquare", label: "User Query" },
      { icon: "Search", label: "Hybrid Retrieval", sublabel: "BM25 + FAISS" },
      { icon: "RefreshCcw", label: "Corrective RAG", sublabel: "Re-retrieve on low confidence" },
      { icon: "ShieldCheck", label: "Self-RAG Guardrails", sublabel: "Grounding verification" },
      { icon: "Sparkles", label: "Grounded Answer" },
    ],
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
    keyFeatures: [
      "Hybrid dense + sparse retrieval fusing FAISS and BM25 rankings",
      "Corrective-RAG loop that reformulates and re-retrieves on low-confidence answers",
      "Self-RAG grounding verification pass before any answer is returned",
      "Multi-layer guardrails to catch hallucinated or unsupported claims",
      "Swappable session-memory layer (in-memory → Redis/PostgreSQL) built for production",
    ],
    challenges: [
      "Tuning the fusion weighting between dense and sparse retrieval so neither channel dominates on queries where the other is stronger",
      "Deciding a reliable confidence signal to trigger corrective re-retrieval without looping indefinitely on genuinely ambiguous questions",
      "Building a grounding-verification pass that catches unsupported claims without being so strict it rejects correct, well-supported answers",
      "Structuring a 22-test evaluation suite that scores retrieval quality and answer groundedness objectively, not just pass/fail on happy paths",
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
    summary:
      "An automated workflow that reviews every pull request for security risk the moment it opens, and posts a severity-classified report as a PR comment.",
    problem:
      "Manual code review at enterprise scale consistently misses security issues — hardcoded secrets, injection vulnerabilities, unsafe deserialization, and OWASP Top 10 risks — while also slowing down CI/CD throughput.",
    solution:
      "Designed an automated workflow, triggered on every PR open/update/reopen, that pulls the changed files via the GitHub API, runs an LLM-based static security analysis across multiple vulnerability classes, classifies findings by severity (Critical → Low), and posts a structured Markdown report directly as a PR comment — with the GitHub token stored only as a workspace secret, never in code or logs.",
    architecture:
      "A Sim.ai workflow listens for PR open/update/reopen webhooks, calls the GitHub API to diff and fetch changed files, and passes the diff to an LLM analysis step prompted specifically for hardcoded secrets, injection vulnerabilities, unsafe deserialization, auth issues, data exposure, and OWASP Top 10 risk classes. Findings are aggregated, classified by severity, formatted as Markdown, and posted back to the PR through the GitHub API using a workspace-scoped secret.",
    diagramLabel: "Automated PR Security Workflow",
    flow: [
      { icon: "GitPullRequest", label: "PR Opened / Updated" },
      { icon: "FileSearch", label: "Fetch Changed Files", sublabel: "GitHub API" },
      { icon: "ShieldAlert", label: "LLM Security Scan", sublabel: "Secrets · Injection · OWASP Top 10" },
      { icon: "ListChecks", label: "Severity Report" },
      { icon: "MessageSquareText", label: "Posted to PR" },
    ],
    tech: ["Sim.ai", "GitHub API", "LLM Static Analysis", "Secret Scanning", "Workflow Orchestration"],
    keyFeatures: [
      "Runs automatically on every PR open, update, and reopen — no manual trigger required",
      "Scans for hardcoded secrets, injection vulnerabilities, unsafe deserialization, auth issues, and data exposure",
      "Classifies every finding by severity (Critical / High / Medium / Low) before reporting",
      "Posts a structured Markdown report directly as a PR comment for immediate visibility",
      "GitHub token stored as a workspace secret only — never hardcoded or exposed in logs",
    ],
    challenges: [
      "Prompting the LLM to classify findings by severity consistently across very different diff shapes and languages",
      "Keeping false-positive noise low enough that engineers trust and act on the report instead of ignoring it",
      "Scoping GitHub API access tightly enough to fetch diffs without over-granting repository permissions",
    ],
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
    summary:
      "A Retrieval-Augmented Generation chatbot that answers questions from internal company documents with source-attributed, hallucination-resistant responses.",
    problem:
      "Engineering and support teams waste hours acting as a human search index for internal documentation, and generic LLM answers aren't trustworthy without a citation back to the source.",
    solution:
      "Built a Retrieval-Augmented Generation pipeline that ingests company documents, chunks and embeds them, stores vectors in FAISS, and answers natural-language questions through a LangChain-orchestrated retrieve-then-generate flow — every answer is scoped to company context and attributed back to its source document.",
    architecture:
      "Documents from a company-documents folder are split into chunks, embedded with OpenAI embeddings, and persisted in a local FAISS vector store. At query time, LangChain retrieves the top-matching chunks, assembles them into a context window, and prompts OpenAI to answer strictly from that context — with the source document surfaced alongside the answer in the Streamlit UI.",
    diagramLabel: "RAG Knowledge Assistant",
    flow: [
      { icon: "Files", label: "Company Docs" },
      { icon: "Layers", label: "Chunk & Embed" },
      { icon: "Database", label: "FAISS Vector Store" },
      { icon: "Network", label: "LangChain Retriever" },
      { icon: "Sparkles", label: "Cited Answer" },
    ],
    tech: ["Python", "Streamlit", "LangChain", "OpenAI", "FAISS", "python-dotenv"],
    keyFeatures: [
      "End-to-end RAG pipeline: ingest → chunk → embed → retrieve → generate → cite",
      "Source-attributed answers instead of unverifiable LLM output",
      "Company-context-only responses via a scoped system prompt",
      "Local FAISS persistence for fast, dependency-light retrieval",
    ],
    challenges: [
      "Choosing a chunking strategy that keeps enough context per chunk without diluting embedding relevance",
      "Keeping answers scoped strictly to retrieved context instead of the model falling back on general knowledge",
      "Designing for a clear upgrade path (hybrid search, LangSmith observability, production hardening) without over-engineering the first version",
    ],
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
    summary:
      "A conversational assistant that models government schemes as a knowledge graph, so it can answer eligibility and relationship questions flat document search can't.",
    problem:
      "Citizens struggle to navigate scattered, relationship-heavy eligibility rules across dozens of government schemes and departments — flat keyword or document search can't represent how a scheme, its eligibility criteria, and its beneficiaries relate to each other.",
    solution:
      "Modeled Tamil Nadu government schemes as a knowledge graph in Neo4j (Scheme, Department, Beneficiary, Benefit, Eligibility, Document nodes) and built a conversational layer where OpenAI parses user intent and entities, translates the question into a Cypher query, retrieves the matching subgraph, and generates a grounded natural-language answer.",
    architecture:
      "Scheme data is modeled as a labeled property graph in Neo4j with Scheme, Department, Beneficiary, Benefit, Eligibility, and Document node types connected by OFFERS, TARGETS, PROVIDES, HAS_ELIGIBILITY, and REQUIRES relationships. A Streamlit chat UI sends each question to OpenAI for intent and entity extraction, which a SchemeRetriever module turns into a Cypher query against Neo4j; the retrieved subgraph is passed back to OpenAI to generate the final grounded answer.",
    diagramLabel: "Knowledge Graph RAG",
    flow: [
      { icon: "HelpCircle", label: "Natural-Language Question" },
      { icon: "Brain", label: "Intent & Entity Parsing", sublabel: "OpenAI" },
      { icon: "Workflow", label: "Cypher Query Generation" },
      { icon: "Network", label: "Neo4j Knowledge Graph" },
      { icon: "Sparkles", label: "Grounded Answer" },
    ],
    tech: ["Python", "Streamlit", "Neo4j", "Cypher", "OpenAI API", "PyTest"],
    keyFeatures: [
      "Schemes modeled as a knowledge graph (Scheme, Department, Beneficiary, Benefit, Eligibility, Document)",
      "Natural-language-to-Cypher query translation for non-technical end users",
      "Graph-based retrieval captures eligibility and benefit relationships flat RAG misses",
      "Automated test suite validating retrieval correctness against the knowledge graph",
    ],
    challenges: [
      "Getting reliable natural-language-to-Cypher translation across varied phrasings of the same eligibility question",
      "Designing a graph schema expressive enough for real eligibility rules without becoming unwieldy to query",
      "Validating retrieval correctness systematically, since a wrong Cypher query can silently return an empty or misleading subgraph",
    ],
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
    summary:
      "An end-to-end n8n workflow that uses an LLM to clean and standardize messy enrollment data, then routes it into purpose-built outputs automatically.",
    problem:
      "A weekly influx of messy student enrollment data from Google Forms — inconsistent names, invalid emails, mismatched cities, varying date formats — made downstream reporting unreliable and required hours of manual cleanup.",
    solution:
      "Built an end-to-end n8n ETL pipeline that extracts raw CSV data, processes every record independently through an LLM step that cleans and standardizes names, emails, courses, dates, and fees, applies deterministic city/email-validity routing, and loads four clean, purpose-routed CSV outputs.",
    architecture:
      "n8n extracts raw CSV rows from a Google Forms export and iterates each record through an LLM node that normalizes names, emails, course names, fees, and date formats. Conditional IF nodes then route each cleaned record deterministically by city and email validity into one of four output branches, each writing to its own clean CSV file.",
    diagramLabel: "AI-Powered ETL Pipeline",
    flow: [
      { icon: "FileSpreadsheet", label: "Raw Enrollment CSV", sublabel: "Google Forms" },
      { icon: "Sparkles", label: "LLM Field Cleaning" },
      { icon: "Filter", label: "City / Email Routing" },
      { icon: "Files", label: "4 Clean CSV Outputs" },
    ],
    tech: ["n8n", "OpenAI Chat Model", "JavaScript", "CSV", "Google Forms"],
    keyFeatures: [
      "Fully automated Extract → Transform → Filter → Load pattern replacing manual spreadsheet cleanup",
      "LLM-based field normalization applied consistently across every record (names, emails, courses, dates, fees)",
      "Deterministic conditional routing by city and email validity",
      "Processes 50+ enrollment records per run with zero manual intervention",
    ],
    challenges: [
      "Getting consistent, structured LLM output for free-form field cleaning without brittle regex fallbacks",
      "Keeping the pipeline deterministic where it matters (routing logic) while using the LLM only where judgment is genuinely needed (cleaning)",
      "Handling edge cases in messy source data (missing phone numbers, inconsistent course names) without silently dropping records",
    ],
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
    summary:
      "A zero-touch n8n workflow that watches a spreadsheet for new rows and sends a formatted progress email automatically — no manual sending required.",
    problem:
      "Manually emailing progress updates to students and stakeholders every time a spreadsheet is updated is slow, easy to forget, and doesn't scale past a handful of recipients.",
    solution:
      "Built an event-driven n8n workflow that watches a Google Sheet for new rows via a trigger node, formats a personalized progress email, and sends it automatically through Gmail — a clean trigger → transform → action pattern with no manual intervention.",
    architecture:
      "A Google Sheets trigger node polls for newly added rows. An Edit Fields node maps spreadsheet columns into a personalized email template, and a Gmail node sends the formatted message through the Gmail API — the entire pipeline runs unattended whenever the sheet changes.",
    diagramLabel: "Event-Driven Notification Pipeline",
    flow: [
      { icon: "FileSpreadsheet", label: "New Row Trigger", sublabel: "Google Sheets" },
      { icon: "Sparkles", label: "Format Message" },
      { icon: "Mail", label: "Gmail Send" },
      { icon: "CheckCircle2", label: "Student Notified" },
    ],
    tech: ["n8n", "Google Sheets API", "Gmail API", "n8n Expressions"],
    keyFeatures: [
      "Zero-touch notification pipeline triggered directly by spreadsheet updates",
      "Personalized email formatting driven by sheet column data",
      "Reusable trigger → transform → action pattern",
    ],
    challenges: [
      "Avoiding duplicate sends when a trigger polls the same range more than once",
      "Keeping the email template flexible enough for personalization without turning it into a maintenance burden",
    ],
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
