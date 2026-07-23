# Scrum Master: Zero to Master

A complete, free curriculum for developers becoming Scrum Masters — the framework itself, the competencies that separate a Scrum Master from someone who just runs meetings, twenty real-life scenarios worked end to end, and full study guides for every major certification.

**Read it here on GitHub, or browse it as a live site:** [arafatomer66.github.io/scrum-master-guide](https://arafatomer66.github.io/scrum-master-guide)

No sign-up, no paywall, no lead-gen form. If you're a developer who just got asked to "be the Scrum Master for a bit" and doesn't know where to start, or you're studying for PSM I next month, this is built for both.

## Why this exists

Most Scrum content is either the Scrum Guide itself (13 pages, deliberately minimal — it tells you *what*, not *how*) or a training vendor's marketing page. The gap in between — what a Scrum Master actually *does* on a Tuesday when the sprint is falling apart and the Product Owner is on leave — is where this guide lives.

## How it's organized

| # | Section | What's in it |
|---|---|---|
| 00 | [Start Here](content/00-start-here/) | How to use this guide + the zero-to-master roadmap |
| 01 | [Agile Foundations](content/01-agile-foundations/) | The Manifesto, empiricism, lean thinking, why Scrum exists |
| 02 | [The Scrum Framework](content/02-scrum-framework/) | Every role, event, and artifact in the 2020 Scrum Guide |
| 03 | [Professional Scrum Competencies](content/03-professional-scrum-competencies/) | Scrum.org's 6-area competency model, taught in depth |
| 04 | [The Scrum Master Role](content/04-scrum-master-role/) | Facilitation, coaching, metrics, conflict, anti-patterns |
| 05 | [Scaling Frameworks](content/05-scaling-frameworks/) | Nexus, Scrum@Scale, LeSS, SAFe — when and why |
| 06 | [Real-Life Scenarios](content/06-real-life-scenarios/) | 20 situations worked: approach, outcome, exam angle |
| 07 | [Certifications](content/07-certifications/) | PSM I/II/III, CSM/A-CSM/CSP-SM, SAFe SM/ASM |
| 08 | [Templates & Toolkit](content/08-templates-and-toolkit/) | Ready-to-use agendas, retro formats, checklists |
| 09 | [Interview Prep](content/09-interview-prep/) | Scrum Master job-interview question bank |

## Certifications covered

| Body | Certifications |
|---|---|
| Scrum.org | [PSM I](content/07-certifications/scrum-org/psm-i.md) · [PSM II](content/07-certifications/scrum-org/psm-ii.md) · [PSM III](content/07-certifications/scrum-org/psm-iii.md) |
| Scrum Alliance | [CSM](content/07-certifications/scrum-alliance/csm.md) · [A-CSM](content/07-certifications/scrum-alliance/a-csm.md) · [CSP-SM](content/07-certifications/scrum-alliance/csp-sm.md) |
| Scaled Agile | [SAFe Scrum Master](content/07-certifications/safe/safe-scrum-master.md) · [SAFe Advanced SM](content/07-certifications/safe/safe-advanced-scrum-master.md) |

Not sure which one to sit? Start with [which certification should I get](content/07-certifications/00-which-certification-should-i-get.md).

## Suggested path

1. **New to Agile?** Start at [00 · Start Here](content/00-start-here/) → [01 · Agile Foundations](content/01-agile-foundations/) → [02 · The Scrum Framework](content/02-scrum-framework/).
2. **Already know Scrum, now doing the SM job?** Jump to [04 · The Scrum Master Role](content/04-scrum-master-role/) and read every scenario in [06](content/06-real-life-scenarios/) — that's where the actual job lives.
3. **Studying for a certification?** Read [03 · Professional Scrum Competencies](content/03-professional-scrum-competencies/) first regardless of which body you're certifying with — it's the closest thing to a shared syllabus across all of them — then go straight to your [certification guide](content/07-certifications/).

## Running the site locally

```
python3 -m http.server 8743
```
Then open `http://localhost:8743`. Zero build step — vanilla HTML/CSS/JS, content fetched and rendered from `content/*.md` at runtime.

## Contributing

This is a personal knowledge base kept public because it's more useful that way. Corrections and real-scenario submissions are welcome via issue or PR — see [CLAUDE.md](CLAUDE.md) for the writing conventions this repo follows.

## License

[MIT](LICENSE) — use it, fork it, teach with it.
