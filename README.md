# Marta Kapielska — portfolio

Public GitHub Pages portfolio of transformation, applied AI, and data initiatives.

## Add a project

1. Copy `project-template.md` into `_projects/`.
2. Give the file a kebab-case name, for example `_projects/customer-search.md`.
3. Complete the YAML front matter, including `client` (an anonymous client profile, shown on the project page). Filter options are generated from `engagement`, `role`, `domain`, `technologies`, `industry`, and `maturity`.
4. Use `poc`, `mvp`, or `production` for `maturity`. For `engagement`, use `Strategy & Architecture`, `Transformation & Modernization`, `Applied Research & Innovation`, `Process & Knowledge Design`, `Hands-on Engineering`, or another short phrase describing the kind of engagement you brought to the work.
5. Keep the template sections: challenge, strategic rationale, technical approach, contribution, and future direction.
6. Set the next numeric `order` and choose an accent color.
7. Preview locally with `bundle exec jekyll serve` or `jekyll serve`, then commit and push.

No index page or filter code needs to change when onboarding a project: the collection and filter options are generated automatically from project metadata.

## Add a credential

Add an entry to `_data/credentials.yml` (name, issuer, badge image, verification `url`, `issued`, `expires` (or `retired` for retired ones), and `status`: `active`, `expired`, or `retired`). Save the badge image under `assets/badges/`. If `status` is omitted it is derived from `expires`. The section is hidden when the file is empty.

## Contact links

Email, LinkedIn, and GitHub links shown in the header and footer are set under `social` in `_config.yml`. Update them there if they ever change.

## Other endeavors

The page at `/other-endeavors/` is linked from the main navigation. Each entry is a Markdown file:

1. Copy `endeavor-template.md` into `_endeavors/` with a descriptive name, such as `_endeavors/my-paper.md`.
2. Set `title`, `category`, and `date` (`YYYY-MM-DD`) in its YAML front matter. Use `scientific-papers`, `activism`, or `other-work` for `category`.
3. Optionally fill in `authors`, `source`, and `external_url`. Remove fields that do not apply. Use `external_url` for the paper, recording, or event link, not `url` (which Jekyll reserves).
4. Write the entry's content below the closing `---` using Markdown, including paragraphs, links, emphasis, or lists.
5. Commit and push. After GitHub Pages rebuilds, the entry appears automatically in its category, newest first. No index page changes are needed.

Entries are displayed in full on the Other endeavors page, without separate detail pages. The root template is excluded from the built site. To add or rename a section, edit `_data/endeavors.yml`; each section has an `id` matching the entries' `category`, a `title`, and an `empty_message`.
