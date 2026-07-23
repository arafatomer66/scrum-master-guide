# CLAUDE.md — Scrum Master Guide

A public, comprehensive "zero to master" curriculum for developers becoming Scrum Masters — covers the Scrum framework itself, Scrum.org's Professional Scrum Competencies model, the day-to-day realities of the role via real-life scenarios, and full study guides for every major Scrum Master certification (Scrum.org, Scrum Alliance, SAFe).

Two things ship from one source of content: the raw markdown (readable directly on GitHub) and a live GitHub Pages site (`index.html` at repo root) that renders the same files with a sidebar, search, and dark theme. **The markdown in `content/` is the single source of truth — the site reads it at runtime, nothing is duplicated by hand.**

## Structure

```
content/
  00-start-here/                          orientation + the zero-to-master roadmap
  01-agile-foundations/                   manifesto, empiricism, history — why Scrum exists
  02-scrum-framework/                     the 2020 Scrum Guide itself: roles, events, artifacts, values
  03-professional-scrum-competencies/     mapped 1:1 to Scrum.org's 6 competency areas
  04-scrum-master-role/                   the job in practice: facilitation, coaching, metrics, anti-patterns
  05-scaling-frameworks/                  Nexus, Scrum@Scale, LeSS, SAFe — when and why to scale
  06-real-life-scenarios/                 20 situation → approach → outcome → exam-angle case studies
  07-certifications/
    scrum-org/                            PSM I, II, III + practice questions
    scrum-alliance/                       CSM, A-CSM, CSP-SM
    safe/                                 SAFe SM, Advanced SM
  08-templates-and-toolkit/               ready-to-use ceremony agendas, retro formats, checklists
  09-interview-prep/                      Scrum Master job-interview question bank
index.html, css/, js/                     the GitHub Pages site (zero-build, vanilla JS)
tools/verify-links.py                     checks every relative markdown link resolves
```

## Writing conventions

- Every file opens with `# Title` and a one-sentence italic subhead describing what it covers — no other frontmatter.
- Body content is real depth (600–1500 words), not stub pages. Write from actual Scrum practice, not generic platitudes — name real tools, real numbers, real failure modes.
- Cross-link liberally with **relative markdown links** between files (e.g. `[Sprint Retrospective](../02-scrum-framework/sprint-retrospective.md)`) — the site turns these into in-app navigation automatically, so a broken relative path breaks both the repo and the site.
- No emojis. No lorem ipsum. No marketing fluff ("unlock your potential").
- **Real-life scenario files** (`06-real-life-scenarios/`) follow a fixed structure: `## The Situation` → `## Why This Happens` → `## The Scrum Master's Approach` (numbered, concrete steps) → `## Likely Outcome` → `## Certification Exam Angle` (how Scrum.org/Scrum Alliance would frame this as a scenario-based exam question, since PSM/CSM exams are situational, not recall-based).
- **Certification pages** follow a fixed structure: `## Who It's For` → `## Format & Logistics` (cost, length, passing score, retake policy) → `## What It Actually Tests` → `## Study Plan` → `## Common Failure Points` → link to relevant competency/scenario pages.
- The Professional Scrum Competencies section is an original synthesis mapped to Scrum.org's public competency model (scrum.org/professional-scrum-competencies) — it explains and teaches the same six areas in this repo's own words, not a verbatim reproduction of Scrum.org's copyrighted text.

## The site (`index.html` + `js/`)

- Zero build step — open `index.html` directly or serve with `python3 -m http.server`.
- `js/manifest.js` lists every content file with its title and section (regenerate with `tools/build_manifest.py` after adding/removing a file — do not hand-edit the ordering, only the source markdown).
- `js/app.js` fetches the raw `.md` from `content/` on navigation and renders it client-side (uses `marked.js` via CDN for parsing — the only external dependency, matches the pattern of other repos in this account using cdnjs for a single small library).
- Sidebar groups by top-level `content/` folder, ordered by the numeric prefix.

## Adding new content

1. Add the `.md` file under the right `content/NN-section/` folder.
2. Run `python3 tools/build_manifest.py` to regenerate `js/manifest.js`.
3. Run `python3 tools/verify-links.py` to confirm no relative link is broken.
4. Commit both the new markdown and the regenerated manifest together.
