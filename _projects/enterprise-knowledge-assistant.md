---
title: Enterprise Knowledge Assistant
summary: Built a conversational knowledge assistant with Azure AI Search, bounded LangGraph research workflows, and a streaming FastAPI backend.
role: Lead AI Engineer / Backend Engineer
client: Fortune 500 consumer goods enterprise
industry: Consumer Packaged Goods
domain: Knowledge management
maturity: production
engagement: Hands-on Engineering
technologies: [Python, AI Agents, FastAPI, LangGraph, Azure AI Search, PostgreSQL, Azure Machine Learning, Docker, Kubernetes]
order: 2
accent: "#7c9f2e"
---
## Business challenge and strategy

Users needed reliable answers from a changing document corpus, including answers that require evidence from multiple searches. We use direct retrieval for simple questions and bounded, multi-step research for complex ones. This directs research effort to questions that need it, while step limits and clarification gates keep the workflow controlled and make progress visible to users.

## Technical approach

- **Ingestion:** pipelines parse, chunk, filter, and enrich documents before indexing them in Azure AI Search for vector and metadata retrieval.
- **Retrieval:** simple questions use direct retrieval; complex questions enter a multi-step research workflow.
- **Research agent:** a LangGraph agent performs bounded, multi-step research with search tools, virtual working files, optional delegation, and structured outputs.
- **Backend:** an asynchronous FastAPI service uses typed request, event, and answer contracts. It streams progress to clients through server-sent events.
- **State:** PostgreSQL stores durable, thread-based execution checkpoints separately from user-facing chat history.
- **Quality and operations:** retrieval and answer quality are evaluated; OpenTelemetry provides observability. Automated tests, linting, and type checking run alongside Docker-based local environments and Kubernetes deployment.

## My Role & Core Contributions

### AI Strategy & Advisory

- Translated changing business requirements into retrieval and research workflows with client executives, data scientists, and engineering stakeholders.
- Used direct retrieval for simple questions and bounded multi-step research for complex questions, matching workflow depth to the request while constraining agent execution.

### System Architecture & Technical Leadership

- Led backend service delivery for the knowledge assistant and designed asynchronous FastAPI APIs with typed request, event, and answer contracts.
- Contributed to document ingestion, retrieval, bounded agent workflows, persistent state, evaluation, and observability.
- Established testing practices with pytest and Locust; contributed to Azure Machine Learning workflows and AI platform integrations.

### Cross-Functional Governance & Delivery

- Bridged client, data science, frontend, technical leadership, and project management stakeholders to translate requirements into backend services and API contracts.
- Participated in architecture decisions on scalability, performance, and operational readiness as requirements evolved.

> This public summary omits organization, product, cloud-provider, search-service, model-provider, and internal package names.
