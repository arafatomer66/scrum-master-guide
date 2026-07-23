# Scrum@Scale

*Jeff Sutherland's scaling framework: a minimal, "scale-free" set of principles built on the Scrum of Scrums pattern, deliberately looser than a prescriptive process.*

Scrum@Scale (S@S) was developed by Jeff Sutherland, one of Scrum's original co-creators, through his own consultancy (Scrum Inc.) rather than through Scrum.org. Where Nexus is Scrum.org's tightly scoped answer to cross-team integration, Scrum@Scale is a broader — and looser — attempt to answer a bigger question: how do you scale not just delivery teams, but the whole organization around them, including the parts that set strategy and allocate budget, using the same underlying pattern at every level.

## The core mechanism: Scrum of Scrums

The foundational unit of Scrum@Scale is the **Scrum of Scrums (SoS)**: a team of teams, formed the same way a Scrum Team is formed — small enough to coordinate effectively, typically 4-5 team representatives. Each participating Scrum Team sends one representative (often, but not always, a Developer with cross-team visibility) to a **Scrum of Scrums Daily Scrum**, which mirrors an ordinary Daily Scrum's purpose: surface impediments, dependencies, and progress, but at the team-of-teams level rather than the individual-team level.

Critically, this isn't just a bigger meeting bolted onto the top of an org chart — it's a **repeating fractal**. If 25 teams is too many for one Scrum of Scrums to coordinate effectively, you form a Scrum of Scrum of Scrums (SoSoS): representatives from each Scrum of Scrums send a representative up to the next layer, and the same Daily Scrum pattern, the same lightweight retrospective pattern, repeats one level higher. Scrum@Scale doesn't cap the number of teams the way Nexus does (roughly 9) precisely because this recursive structure is designed to keep working at 5 teams or 500.

## Scale-free architecture: the same pattern at every level

"Scale-free" is Scrum@Scale's central design principle, borrowed loosely from network theory: the coordination pattern that works for 5 people (a Daily Scrum) is structurally the same pattern used for 5 teams (a Scrum of Scrums), which is the same pattern used for 5 groups of teams (a Scrum of Scrum of Scrums). Nothing new has to be invented as the organization grows — you're not switching frameworks or vocabularies at each layer, you're applying the identical Scrum pattern recursively.

This extends past delivery into the parts of an organization that decide *what* to build and *how much money to spend on it* — something Nexus and LeSS are largely silent on, and something SAFe addresses through a much more elaborate structure (Portfolio, Value Streams, Lean Budgets). Scrum@Scale addresses it with two lightweight, paired bodies:

- **Executive MetaScrum (EMS).** The strategic counterpart to a Product Owner team-of-teams: a forum where Product Owners (or their representatives) meet with executive stakeholders to align on a single, prioritized, organization-wide strategic backlog, resolve cross-team prioritization conflicts, and secure resourcing decisions — essentially a Scrum of Scrums for the "what and why," run with the authority to make budget and priority calls stick.
- **Executive Action Team (EAT).** The organizational counterpart to the Scrum Master accountability, scaled up: a small, senior leadership group accountable for removing impediments that exist above what any single Scrum Master or Scrum of Scrums can resolve — policy blockers, cross-department resourcing conflicts, structural obstacles to agility that require actual organizational authority to fix. The EAT is explicitly accountable for continuously improving the Scrum@Scale implementation itself across the whole organization, the same way a Scrum Master is accountable for a single team's process health.

Put together, the EMS handles the "what should we build" axis (strategy, prioritization, backlog) and the EAT handles the "what's stopping us from building it well" axis (impediments, process health, organizational design) — and both are built from the same Scrum of Scrums shape as the delivery teams beneath them.

## How it differs philosophically from Nexus and SAFe

The clearest way to place Scrum@Scale is on a spectrum of prescriptiveness:

- **Nexus** is tightly scoped: a fixed cap on team count (roughly 3-9), a named new role (the Nexus Integration Team), and a specific set of extended events with defined purposes. It tells you almost exactly what to do.
- **SAFe** is the most prescriptive of the three: defined configurations, a fixed Program Increment cadence, named roles (Release Train Engineer, Product Management, System Architect) and named events (PI Planning, System Demo, Inspect & Adapt) that apply regardless of your organization's specific shape. It tells you what to do in the most detail, which is exactly why it draws the sharpest critique from the Scrum.org and LeSS communities — see [SAFe Overview](safe-overview.md) for that critique in full.
- **Scrum@Scale** sits deliberately at the other end: Sutherland's own materials describe it as "a minimal viable set of interlocking components," not a prescriptive process. It doesn't mandate a fixed team-count ceiling, doesn't mandate a synchronized release cadence across the whole organization the way SAFe's Program Increment does, and largely leaves *how* the Scrum of Scrums coordinates (what its Daily Scrum actually covers, how often the EMS meets, how big the EAT is) to the organization implementing it. What it does mandate is the *pattern* — small autonomous teams, transparent backlogs, regular inspection and adaptation, repeated recursively — and trusts the organization to fill in the specifics using ordinary Scrum values.

This makes Scrum@Scale simultaneously more flexible and more demanding than the other two: flexible because it doesn't force a specific cadence or org chart onto a company, demanding because "figure out how to apply the pattern at your specific scale" requires real Scrum fluency to execute well. An organization that isn't already good at ordinary team-level Scrum will struggle to make Scrum@Scale work, because there's comparatively little scaffolding to lean on — the framework is trusting you to already understand *why* a Daily Scrum works before asking you to recreate its spirit at the level of 40 teams.

## When it fits

Scrum@Scale suits organizations that already have strong Scrum fluency at the team level, want to scale the coordination pattern rather than adopt a new prescriptive layer, and need the strategic/budget-alignment machinery (EMS, EAT) that Nexus doesn't address at all. It's a weaker fit for organizations still building basic Scrum competence — the lack of prescription becomes a liability rather than a strength when teams don't yet know what "good" looks like at the single-team level. For that foundational competence, see [Professional Scrum Competencies](../03-professional-scrum-competencies/00-overview.md); for the org-design question that has to be answered before any of these frameworks is chosen, see [Why and When to Scale](why-and-when-to-scale.md).
