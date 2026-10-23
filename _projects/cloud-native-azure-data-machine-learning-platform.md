---
title: Cloud-Native Azure Data & Machine Learning Platform
summary: Productionized a modular wholesaler baseline capability within an Azure data and machine-learning platform supporting commercial analytics and recommendation workflows.
role: Senior ML Platform Engineer / Data Engineer
client: Large beverage and consumer goods enterprise
industry: Consumer Packaged Goods
domain: Data and machine learning platform
maturity: production
engagement: Hands-on Engineering
technologies: [Python, PySpark, Databricks, Azure Data Factory, Azure DevOps, Microsoft Azure]
order: 5
accent: "#2f7f78"
---
## Business challenge and strategy

The organization needed shared data and machine-learning capabilities to turn commercial and outlet data into consistent analytics and field recommendations. The broader platform supported a unified data model, micro-segmentation, outlet potential modeling, sales-visit optimization, and automated product-order recommendations.

Within that platform, wholesaler baseline logic was captured in client notebooks and a proof of concept. Productionizing it required a clearer processing structure, validation of data assumptions, and effort estimates for adapting the module to additional countries. The approach was to separate the baseline workflow into explicit stages that could be reviewed and tested without treating proof-of-concept behavior as a production contract.

## Technical approach

- **Platform:** Microsoft Azure hosted data-processing, analytics, and machine-learning workloads.
- **Distributed processing:** Python and PySpark workloads ran on Databricks; Azure Data Factory supported data workflows.
- **Commercial capabilities:** Shared platform components supported a unified data model, micro-segmentation, outlet potential modeling, sales-visit optimization, and product-order recommendations.
- **Wholesaler baseline:** PySpark operations separated sales preprocessing, target processing, imputation, and target promotion into distinct steps.
- **Quality and delivery:** Azure DevOps pipelines ran unit tests, dependency checks, formatting and static-analysis tools, type checks, and SonarCloud analysis.

## My Role & Core Contributions

### AI Strategy & Advisory

- Formulated the productionization approach for the wholesaler baseline, translating client notebooks and proof-of-concept behavior into a staged processing design.

### System Architecture & Technical Leadership

- Architected and implemented the baseline workflow as distinct PySpark stages for sales preprocessing, target processing, imputation, and promotion.
- Diagnosed customer-data join mismatches caused by missing input restrictions, using test-run discrepancies to identify assumptions requiring review.

### Cross-Functional Governance & Delivery

- Orchestrated reviews with the technical lead, business director, business specialist, and subject-matter experts, presenting test-run evidence, proof-of-concept gaps, and logic discrepancies.
- Formulated person-day estimates for the team's rollout of the module to additional countries, supporting delivery planning.

> This public summary omits the client organization, internal system names, and confidential implementation details.