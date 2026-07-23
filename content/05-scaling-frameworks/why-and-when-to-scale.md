# Why and When to Scale

*How to tell a genuine scaling problem from a team-design problem wearing a scaling framework as a costume.*

Every scaling framework — Nexus, Scrum@Scale, LeSS, SAFe — solves the same underlying problem: more than one Scrum Team needs to deliver a single product, and their work is entangled enough that coordinating them by accident (Slack messages, hallway conversations, hope) stops working. That's a real problem. It's also one that gets invoked far more often than it actually exists. Before picking a framework, a Scrum Master's first job is figuring out whether scaling is the right answer to the question the organization is actually asking.

## The real trigger: work that doesn't fit in one team

A single Scrum Team, per the Scrum Guide, is meant to be small enough to stay nimble (typically 10 or fewer people) and cross-functional enough to deliver a done Increment every Sprint without depending on people outside the team. Scaling becomes a legitimate conversation when:

- **The product is genuinely too large for one team's throughput.** A single team building a banking core system, a multi-sided marketplace, or an ERP platform physically cannot cover the code surface, the domain knowledge, and the stakeholder relationships alone — not because they're slow, but because the scope exceeds what 10 focused people can hold in their heads in a Sprint.
- **Dependencies are structural, not accidental.** If Team A's Increment cannot be considered "done" without Team B's API, and that's true every Sprint because of how the system is architected, you have a real integration problem that a framework's events and roles are built to surface and manage.
- **One Product Backlog needs multiple teams pulling from it in parallel** to hit a market window — a genuine capacity problem, not an org-chart problem.

If any of these are true, a framework like Nexus, LeSS, or Scrum@Scale gives you vocabulary and events for something you'd otherwise have to invent ad hoc: a shared Definition of Done, a mechanism for surfacing cross-team dependencies before they become integration disasters, and a cadence for reconciling plans across teams.

## The fake trigger: "scaling" as organizational theater

The far more common pattern, especially in larger companies, is scaling used to solve a problem that has nothing to do with product size:

- **Headcount needs a home.** A department has 40 engineers and someone decided "5 Scrum Teams" looks better on an org chart than "let's figure out if we need 40 engineers on this." The teams get invented first; the work gets sliced to fit them afterward, usually along component lines (a "frontend team," a "backend team," a "database team") rather than along value.
- **Career ladders need more manager slots.** Splitting one cohesive team into three smaller ones creates three Scrum Master roles and three reporting lines where one team lead sufficed. The scaling framework is the paperwork that makes this look like an agile transformation instead of a reorg.
- **Visible busyness substitutes for coordination.** A leadership team that doesn't trust one team to just build the thing invents four teams and a Scrum of Scrums so that "scaling" activity is visible, even though nothing about the actual work required more than one team.

The tell is almost always in how the backlog gets split. If a single, cohesive piece of customer value — say, "checkout" — has been sliced into a frontend team, a payments-service team, an inventory team, and a notifications team, each with its own backlog and its own definition of "done," you haven't scaled Scrum. You've built four component teams that now require constant handoffs and a synchronization meeting to reconstruct the feature one team could have owned. This is component-team dependency debt manufactured for its own sake, and no scaling framework fixes it — Nexus, LeSS, and Scrum@Scale all explicitly push toward feature teams (cross-functional, cross-component teams that each can independently deliver customer value) precisely because component teams are the disease scaling frameworks are trying to manage the symptoms of.

The diagnostic question a Scrum Master should ask before ever raising "we need a scaling framework" is: **if headcount were the only constraint, would this still require more than one team?** If the honest answer is "no, but we have 40 people and one team can't be 40 people," the real conversation is about org design and team boundaries, not about which framework's ceremonies to adopt.

## Conway's Law: why team topology comes before framework choice

Conway's Law states that any organization that designs a system will produce a design whose structure mirrors the organization's own communication structure. In practice, this means the team boundaries you draw *become* the architecture, whether anyone intends that or not. A frontend team and a backend team, communicating primarily through ticket handoffs and API contracts, will produce a system with a hard seam between frontend and backend — regardless of whether that seam belongs there technically. Four teams organized around database, service, UI, and QA will produce an architecture with four synchronization points baked into every feature, forever.

This is why team topology has to be decided *before* a scaling framework is chosen, not after. A scaling framework tells you how to coordinate the teams you have; it does not tell you where to draw the team boundaries in the first place, and a bad boundary — components instead of value streams — will make every framework feel bureaucratic and slow, because the framework is now spending its ceremonies compensating for a structural mismatch between how the teams are organized and how the product actually needs to flow. Matthew Skelton and Manuel Pais's "Team Topologies" work (stream-aligned teams, platform teams, enabling teams, complicated-subsystem teams) is the most useful modern vocabulary for this and pairs naturally with any of the frameworks in this section — LeSS and Nexus in particular assume feature/stream-aligned teams as a prerequisite, not an outcome.

The practical sequence, then, is: confirm the scaling trigger is real (product size or genuine cross-team dependency, not headcount or optics), draw team boundaries around independently valuable slices of the product using Conway's Law deliberately rather than accidentally, and only then choose a framework — [Nexus](nexus.md), [Scrum@Scale](scrum-at-scale.md), [LeSS](less.md), or [SAFe](safe-overview.md) — to coordinate the teams that boundary work produces. Doing it in the other order is how organizations end up with a framework that adds ceremony without ever solving the coordination problem it was bought to fix.

For grounding in what a single, well-formed Scrum Team looks like before you decide it needs to become five, see [The Scrum Team](../02-scrum-framework/scrum-team.md).
