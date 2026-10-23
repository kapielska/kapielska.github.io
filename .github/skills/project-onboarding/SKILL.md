---
name: project-onboarding
description: "Use when adding or onboarding a portfolio project, creating a project Markdown file, or turning project notes into a new entry in _projects. Build from the current conversation and repository examples without inventing claims."
argument-hint: "Project title or source context"
---

# Project Onboarding

Create one public-facing project page in `_projects/` from facts provided in the current conversation, using `project-template.md` and existing project pages as the repository contract.

## Workflow

1. Identify the project from the current conversation. Treat user-provided project facts as the source of truth. If the user supplies a CV or project title, use it as the canonical public title; do not substitute a client, repository, product, or internal codename. Existing `_projects/` files are references for structure and writing style, not evidence that their claims apply to the new project.
2. Read `project-template.md` and one or two relevant `_projects/*.md` examples. If the user points to related notes elsewhere in the workspace, read only the clearly relevant files and use them to corroborate details, not to infer unconfirmed ownership or outcomes. Treat CV statements and direct user-provided facts as authoritative for the user's role and contributions. Treat exploratory or generated notes, inferred summaries, tentative language, architecture proposals, success criteria, and requirements as unverified unless corroborated by the user, reliable project documentation, or implementation evidence. Do not merge adjacent projects or repositories merely because they share a client or workspace.
3. Gather enough facts to write the page: project purpose, user's role and ownership, client profile safe for public disclosure, business constraints, technical design, collaborators, maturity, and verified results. Ask concise, targeted questions for missing or conflicting facts that would otherwise require guessing. In particular, do not infer production maturity from deployment configuration, project scale, success criteria, or exploratory notes. Do not ask again for information already present in the conversation or reliable project notes.
4. Check `_projects/` for an existing page with the same project, title, or filename. If one exists, do not overwrite it; clarify whether the user wants an update or a separate entry. Otherwise, create a kebab-case filename based on the project title.
5. Fill the YAML front matter using the project's conventions:
   - `title`, `summary`, `role`, `client`, `industry`, `domain`, `maturity`, `engagement`, `technologies`, `order`, and `accent`.
   - Keep `summary` to one specific, factual sentence.
   - Use an anonymous client profile. Use `poc`, `mvp`, or `production` for `maturity` only when supported by reliable evidence; otherwise ask rather than guess. Use an existing engagement category where it fits.
   - Set `order` to one greater than the highest order among actual project files in `_projects/`; do not count the template.
   - Choose a valid, distinct hex accent consistent with existing entries.
6. Write the body using the current project template's sections:
   - `## Business challenge and strategy`: state the business or user need and constraints, the strategic choice and reason, and the value or capability delivered or enabled. Distinguish measured results from intended benefits.
   - `## Technical approach`: describe the architecture, data and AI flow, operational constraints, and quality practices. Connect decisions to their business purpose where the source supports that connection.
   - `## My Role & Core Contributions`: group concise, first-person-owned contribution bullets under `### AI Strategy & Advisory`, `### System Architecture & Technical Leadership`, and `### Cross-Functional Governance & Delivery`. For a project that is not AI-focused, use `### Strategy & Advisory` for the first group rather than implying it was an AI project.
   - End with a brief confidentiality note consistent with the existing public project pages.
7. Use direct engineering language. Start each contribution bullet with a strong, precise verb that reflects the user's actual ownership. Use verbs such as `Architected`, `Led`, `Designed`, `Defined`, `Evaluated`, `Championed`, or `Delivered` only when supported. Avoid vague claims and low-ownership phrasing; do not inflate participation into leadership.
8. Tie technical decisions to business needs, delivery constraints, or risk controls when supported by the source. Include cross-functional collaboration only for stakeholder groups the user confirms. Describe friction neutrally and include the user's action and outcome only when provided.
9. Protect confidentiality across every generated artifact, including filenames, front matter, body text, links, and embedded examples. Never include a client name in a public-facing project entry unless the user explicitly approves publication of that name. Do not add product, dataset, internal platform, or personal names that are not approved for publication. Do not include sensitive operational details. When disclosure boundaries are unclear, ask before writing them.
10. Do not invent budgets, ROI, TCO, savings, reliability targets, adoption, legal/compliance sign-off, team size, mentoring, benchmarks, or percentage improvements. Include metrics only when the user provides a defensible value and context. Label intended value as intended, not achieved.
11. Create or edit only the requested project Markdown file. Do not change indexes, templates, generated `_site/` output, or unrelated projects unless asked.
12. Validate the new entry: parse its YAML front matter, check required keys and allowed maturity, check that title/order are unique, confirm all expected sections are present, scan the complete generated file for client identifiers, and verify that claims are traceable to reliable source context. Run the Jekyll build to a temporary destination outside the repository if dependencies are available, so `_site/` is not modified; otherwise report that limitation and perform the available syntax checks.
