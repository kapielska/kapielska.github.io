---
title: Governance Knowledge Graph
summary: Built a Java service that loads business data into an RDF graph and exposes SPARQL and ontology-constrained natural-language queries.
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
## Business challenge and strategy

Governance data was difficult to query across relationships among applications, suppliers, purchases, risks, and controls. Users needed both direct access for specialists and a simpler natural-language interface. We modeled the data as a graph and constrained generated queries to the ontology. This supports both user groups while limiting queries to the defined governance model; the proof of concept tests this approach before a larger platform investment.

## Technical approach

- **Graph model:** RDF and OWL classes and properties are defined in Apache Jena. Predefined reference facts are loaded with ingested records.
- **Ingestion:** a configuration-driven pipeline reads delimited and spreadsheet data. Mapping templates map source columns to graph classes and properties; a shared data-source abstraction supports multiple input formats.
- **Query API:** typed REST endpoints execute SPARQL queries and return text, CSV, JSON, or XML through content negotiation. OpenAPI documents the endpoints.
- **Natural-language queries:** Azure OpenAI translates questions into queries constrained by the ontology.
- **Service architecture:** Java 21 and Spring Boot use dependency injection and interfaces to separate REST, graph querying, ingestion, and translation.
- **Quality and local development:** unit tests cover ingestion, parsing, mapping, and translation. Health checks and configuration profiles support operations; Docker Compose runs local service dependencies.

## My Role & Core Contributions

### AI Strategy & Advisory

- Evaluated graph modeling for governance questions that depend on relationships among applications, suppliers, purchases, risks, and controls.
- Tested ontology-constrained natural-language queries in a proof of concept before broader platform investment.

### System Architecture & Technical Leadership

- Designed the ontology-driven ingestion pipeline and reusable mappings from source columns to graph classes and properties.
- Grounded natural-language query translation in the ontology and exposed typed query endpoints with multiple export formats.
- Added API documentation, health checks, configuration profiles, and automated tests.

### Cross-Functional Governance & Delivery

- Translated governance query needs into service capabilities in coordination with the project manager and technical lead.

> This public summary removes company, business-unit, vendor, cloud-provider, identity-provider, and internal service names.
