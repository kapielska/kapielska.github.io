---
title: Governance Knowledge Graph
summary: An ontology-driven service that transforms business data into an explorable RDF graph with safe natural-language querying.
role: AI / Backend Engineer
client: Fortune 500 consumer goods enterprise
industry: Consumer Packaged Goods
domain: Governance and risk
maturity: poc
engagement: Applied Research & Innovation
technologies: [Java, Spring Boot, Apache Jena, SPARQL, Azure OpenAI]
order: 3
accent: "#5e86a4"
---
## The challenge

Governance information was spread across structured files and difficult to query across business relationships, such as the links between applications, suppliers, purchases, risks, and controls. Users needed both an expert query interface and a simpler natural-language entry point.

## Strategic rationale

Governance questions are about relationships, so a graph fits better than separate tables. Users get both direct graph queries and a natural-language layer, with translation grounded strictly in the ontology. That trades some flexibility for trust and safety. The proof of concept was built to test this trade-off before committing to a full platform.

## Technical approach

- **Ontology and graph model:** RDF and OWL modeling in Apache Jena, with predefined reference facts loaded alongside ingested records.
- **Ingestion:** a configuration-driven pipeline for delimited and spreadsheet data, with reusable mapping templates from source columns to graph classes and properties, and a shared data-source abstraction for multiple input formats.
- **Query interface:** typed REST endpoints over SPARQL, with content negotiation for text, CSV, JSON, and XML results, documented through OpenAPI.
- **Natural-language access:** question-to-query translation using Azure OpenAI, constrained by the ontology rather than free-form generation.
- **Architecture:** Java 21 and Spring Boot with dependency injection and interface-based separation of REST, graph querying, ingestion, and translation.
- **Quality:** focused unit tests for ingestion, parsing, mapping, and translation, plus health checks, configuration profiles, and local service emulation with Docker Compose.

## My contribution

- Designed the ontology-driven ingestion pipeline and the reusable mapping approach.
- Exposed typed query endpoints with multiple export formats.
- Grounded natural-language-to-query translation in the ontology.
- Added API documentation, health checks, configuration profiles, and automated tests.

## Future direction

The prototype provides a clear path to production: durable graph snapshots, incremental ingestion, read-only validation of generated queries, authorization, query limits, provenance, and audit logging. Beyond that, a governed knowledge graph can become a shared, relationship-aware view of risk and control information that supports earlier and better-informed decisions.

> This public summary removes company, business-unit, vendor, cloud-provider, identity-provider, and internal service names.
