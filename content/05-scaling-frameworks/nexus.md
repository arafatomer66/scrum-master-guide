# Nexus

*Scrum.org's own scaling framework: a minimal layer over 3-9 Scrum Teams sharing one Product Backlog, built specifically to expose and manage cross-team integration work.*

Nexus is Scrum.org's answer to "how do we scale Scrum without inventing a second framework." It was published in 2015 by Ken Schwaber (co-creator of Scrum itself), and its defining trait is restraint: Nexus adds exactly one new role, one new artifact, and a handful of extended events on top of standard Scrum — nothing else. If you already know the Scrum Guide, you can learn all of Nexus in under an hour, because it deliberately reuses the same event structure, the same artifacts, and the same accountabilities, just applied across multiple teams instead of one.

## The problem Nexus solves

Put 3 to 9 Scrum Teams on one product and the mechanics of Scrum still technically work — each team still Sprints, still has a Sprint Backlog, still holds a Retrospective. What breaks is integration. Team A finishes its slice of a feature; Team B finishes a dependent slice; nobody notices until Sprint Review that the two slices don't actually work together, because "done" was defined and verified independently by each team. Cross-team dependencies that go unmanaged during the Sprint surface as integration failures at the worst possible moment — after the Sprint Review, when trust in the release is already at stake.

Nexus exists to move that discovery earlier: to force cross-team dependencies onto the table during planning and to keep an integrated, done Increment visible every single day, not just at the end of the Sprint.

## The structure: up to 9 Scrum Teams, one Product Backlog

A Nexus is the group of Scrum Teams (Scrum.org caps the practical range at roughly 3–9 teams; below 3, plain Scrum coordination usually suffices, and above 9, a Nexus of Nexuses or a different framework is more appropriate) working from a **single Product Backlog**, with a **single Product Owner**, and delivering a **single, integrated Increment** at the end of every Sprint. Each team underneath the Nexus keeps its own Scrum Team structure — its own Developers, its own Sprint Backlog — but they share the Sprint cadence, the Product Backlog, and the Definition of Done. There is no "Nexus Product Owner" and no separate Nexus Product Backlog; it's the same PO, same backlog, same accountabilities from the core Scrum Guide, just consumed by more than one team at once.

## The one new role: the Nexus Integration Team

The Nexus Integration Team (NIT) is Nexus's single structural addition. It's accountable for ensuring a done, integrated Increment is produced every Sprint. Critically, the NIT is not a separate team of dedicated integration engineers sitting apart from the delivery teams — in most healthy Nexus implementations, the NIT is made up of the Product Owner, a Scrum Master (often a Scrum Master who also serves one of the component teams), and representative Developers pulled from across the teams, sometimes rotating. Their job is to coach the Nexus on integration practices, identify when cross-team dependencies are creating integration risk, and — when necessary — actually do integration work themselves (setting up shared CI pipelines, resolving merge conflicts between teams' branches, building the cross-team automated test suite) so that "integrated and done" isn't a Sprint Review surprise.

## The extended events

Nexus doesn't replace the Scrum events — it adds a coordination layer on top of each one, populated by representatives from every team.

- **Refinement (cross-team).** Before Sprint Planning, the Nexus does backlog refinement together (or via representatives) specifically to identify which Product Backlog items have cross-team dependencies, so those items can be planned with the dependency already visible rather than discovered mid-Sprint.
- **Nexus Sprint Planning.** Representatives from every team meet first to decide which Product Backlog items each team will work on, with explicit attention to dependencies between teams' selections. Each team then breaks out to run its own Sprint Planning, informed by what was surfaced in the joint session.
- **Nexus Daily Scrum.** A short, representative-based sync — not a status meeting for the whole Nexus, but a targeted checkpoint (Scrum.org's guidance is roughly 15 minutes) where representatives from each team surface integration issues, then take findings back to their own team's Daily Scrum.
- **Nexus Sprint Review.** A single, combined review of the integrated Increment across all teams, with real stakeholders, replacing N separate reviews that would otherwise show fragmented, unintegrated pieces.
- **Nexus Sprint Retrospective.** A structured, two-part retrospective: first representatives from each team meet to identify Nexus-wide issues (patterns that show up across multiple teams, not just one), then each team runs its own Retrospective informed by that cross-team view, and optionally a brief close-out confirms which improvements are being carried forward.

## A worked example

Picture a Nexus of four teams building a single e-commerce platform: a Checkout team, a Catalog team, a Fulfillment team, and a Notifications team, all pulling from one Product Backlog owned by a single PO.

During cross-team Refinement, the PO brings forward "Support buy-now-pay-later at checkout." Refinement surfaces that this item touches Checkout (new payment option in the UI and order flow), Catalog (BNPL eligibility flag per SKU), and Notifications (new payment-status messages) — three teams, one feature, real interdependency. This gets flagged before Planning, not discovered after.

At Nexus Sprint Planning, representatives agree Checkout will build the UI and orchestration, Catalog will expose the eligibility flag via an API by Wednesday of the Sprint, and Notifications will consume a payment-status event Checkout emits. Each team then plans its own Sprint Backlog against that shared picture.

Through the Sprint, the Nexus Daily Scrum representative sync catches that Catalog's API is running a day behind — the Checkout representative raises it on day 3, both teams adjust rather than discovering the gap at Sprint Review. The Nexus Integration Team, meanwhile, maintains a shared integration branch and a nightly cross-team automated test run, so "does BNPL actually work end to end" is answered continuously rather than assumed.

At the Nexus Sprint Review, stakeholders see one working Increment — BNPL actually functioning at checkout, with real eligibility data and a real confirmation notification — not three team demos stitched together with caveats about what "isn't wired up yet." That single integrated Increment, verified continuously rather than assembled at the last minute, is the entire reason Nexus exists.

## When Nexus fits

Nexus is the natural choice when an organization is already comfortable with standard Scrum and wants the smallest possible addition to scale it — no new hierarchy, no new management layer, just enough extra structure to manage integration risk across a handful of teams. It's a poor fit above roughly 9 teams (the cross-team events stop being lightweight) and it says relatively little about portfolio-level concerns like budgeting or program-level roadmapping — for that, see [SAFe](safe-overview.md) or [Scrum@Scale](scrum-at-scale.md). For an org-design philosophy that goes further in the opposite direction — actively removing structure rather than adding a minimal layer — see [LeSS](less.md).

The Nexus Integration Team's coaching responsibilities overlap heavily with the Scrum Master's core skill set — see [Professional Scrum Competencies](../03-professional-scrum-competencies/00-overview.md) for the underlying facilitation and coaching capabilities a Nexus Integration Team member draws on daily.
