---
title: Retail Assortment and Order Recommendation Platform
summary: Built and improved batch machine-learning workflows that generate outlet-level product assortment and order-quantity recommendations for a field-sales workflow.
role: Senior ML/AI Engineer
client: Consumer goods company
industry: Consumer Packaged Goods
domain: Retail analytics and recommendations
maturity: mvp
engagement: Hands-on Engineering
technologies: [Python, PySpark, Apache Spark, Databricks, Google Cloud, Delta Lake, MLflow, SynapseML LightGBM, BigQuery]
order: 6
accent: "#cc8b2f"
---
## Business challenge and strategy

The project needed to turn sales, outlet, and product data into consistent recommendations about which products each outlet should carry and how much to order. The workflow had to accommodate market-specific data mappings and business rules while keeping training and inference behavior consistent and producing scheduled monthly assortment and weekly quantity outputs for a downstream field-sales workflow.

The platform uses shared batch-processing patterns with market-specific configuration rather than separate hard-coded workflows. Models estimate outlet groupings, assortment capacity, product propensity, and order quantities; deterministic post-processing applies business constraints before publishing governed tables and delivery files. This enables a repeatable pilot workflow. No measured sales uplift, recommendation acceptance, adoption, or savings has been established.

## Technical approach

- **Architecture:** Source views are harmonized into layered analytical data on Databricks in Google Cloud. Configuration-driven, dependency-aware batch jobs coordinate training and scoring and publish governed tables and delivery files; the documented integration is batch-oriented rather than a REST service.
- **Data and AI:** Spark ML K-means supports outlet grouping, while SynapseML LightGBM classification and regression support propensity and monthly/weekly quantity estimates. Post-processing applies assortment capacity and selection rules. Temporal holdouts support offline evaluation.
- **Quality and operations:** MLflow and evaluation tables capture run results and provenance. I added diagnostics aligned to inference thresholds, quantity error-direction and fitted-iteration details, training metadata, a train/inference period-parity test, and group-aware model/evaluation behavior. A guarded model-promotion workflow is a specification proposal, not an implemented capability.

## My Role & Core Contributions

### AI Strategy & Advisory

- Specified a guarded champion/challenger promotion design using comparable validation data, metric and guardrail criteria, and a proposal-only production default; the design remains in progress and is not implemented.

### System Architecture & Technical Leadership

- Improved propensity and quantity model evaluation with threshold-aware, error-direction, and fitted-iteration diagnostics, plus training hyperparameter and input-provenance logging.
- Added a regression test for training/inference period-offset parity and implemented group-aware model and evaluation behavior for the intended outlet split.

### Cross-Functional Governance & Delivery

- Collaborated with the project architect, project manager, and data scientists on delivery of the retail recommendation pilot.

> This public summary omits organization, product, market, dataset, and internal-system names. It describes a pilot and generalized technical design; no measured commercial impact is claimed.
