---
title: Enterprise Knowledge Assistant
summary: An enterprise conversational assistant giving persona-based access to curated organizational knowledge through retrieval-augmented generation.
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
## The challenge

Users needed reliable answers from a large and changing document corpus. A generic chatbot could not consistently identify relevant evidence, handle multi-part questions, or show meaningful progress while researching.

## Strategic rationale

The key decision was how much autonomy the assistant should have. Simple questions get a direct lookup; complex ones are decomposed into a multi-step research flow. That flow is bounded by step limits, typed outputs, and clarification interrupts, which keeps it observable and auditable. Conversation history is stored separately from agent execution state so each can change independently.

## Technical approach

- **Ingestion:** pipelines for document parsing, chunking, filtering, metadata enrichment, and indexing into Azure AI Search for vector and metadata retrieval.
- **Retrieval workflows:** a direct path for simple questions and a decomposed, multi-step path for complex ones.
- **Research agent:** a bounded multi-step researcher built with LangGraph, using search tools, virtual working files, optional research delegation, and structured output.
- **Streaming backend:** an asynchronous FastAPI service with typed request, event, and answer contracts, delivering progress to the client through server-sent events.
- **State management:** durable, thread-based execution checkpoints kept separate from user-facing chat history in PostgreSQL.
- **Quality and operations:** evaluation of retrieval and answer quality, OpenTelemetry observability, and automated testing, linting, and type checking, with reproducible local environments in Docker and deployment on Kubernetes.

## My contribution

- Led the implementation of backend services for AI-powered knowledge retrieval and conversational experiences.
- Designed and developed scalable APIs with FastAPI, SQLAlchemy, and AsyncIO.
- Worked with business stakeholders and AI engineers to translate requirements into technical solutions.
- Established testing practices with pytest and Locust to improve reliability, maintainability, and performance confidence.
- Contributed to Azure Machine Learning workflow enhancements and the integration of AI platform components.
- Took part in architecture discussions on scalability, performance, and operational readiness.
- Contributed to ingestion pipelines, retrieval workflows, the bounded research agent, and evaluation and observability.

## Future direction

The same pattern, grounded retrieval combined with a bounded and observable agent, can serve as a reusable capability for other business functions. Systematic evaluation makes it possible to improve quality continuously, extend the assistant to new corpora and workflows, and widen its autonomy step by step as trust in its behavior is established.

> This public summary omits organization, product, cloud-provider, search-service, model-provider, and internal package names.
