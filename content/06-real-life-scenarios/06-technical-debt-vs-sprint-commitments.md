# Technical Debt vs. Sprint Commitments

*The Developers want a Sprint to pay down debt. The Product Owner sees a roadmap deadline and no visible feature to show for it.*

## The Situation

Team Anchor maintains the order-management core for a mid-size e-commerce platform — six developers, three-week Sprints. Over the last four Sprints, three production incidents have traced back to the same root cause: a payment-reconciliation module last substantially rewritten two years ago, now held together with special-case branches nobody fully trusts, including its original author.

At Sprint Planning, the tech lead, Farah, proposes the team spend the entire upcoming Sprint on a targeted refactor of that module — no new customer-facing features, three weeks of debt work. The Product Owner, Desmond, pushes back hard: "We committed a Q3 roadmap to the executive team with four features in it. I can't walk into that review and say we spent three weeks refactoring something customers can't see. Can we just fix it in the cracks between feature work like we usually do?"

The Scrum Master, Oyelaran, has watched "fix it in the cracks" produce exactly one meaningfully-completed refactor task in the last year, while the incident count on that module keeps climbing.

## Why This Happens

This standoff recurs across nearly every team that ships a product for more than about eighteen months, because the two roles are optimizing for genuinely different, both-legitimate things:

- **Technical debt is invisible to the person who doesn't read code**, and Desmond isn't being obtuse — from his seat, the module works, tickets get closed, incidents get incident-reviewed and closed too. The compounding risk is real but has no line item on his roadmap slide.
- **"Fix it in the cracks" is a comforting phrase that almost never survives contact with actual Sprint pressure.** Debt work competing item-by-item against clearly-valued features in every single Planning session loses nearly every time, because each individual trade-off looks reasonable ("just this once, ship the feature first") even though the cumulative pattern is a module that never gets fixed.
- **The Product Owner has made external commitments — a roadmap communicated to executives — that create real reputational and business cost if broken**, which is not a fake concern to be waved away; Desmond's caution here is a legitimate accountability, not just risk-aversion.
- **Developers often frame debt-paydown as a purely technical necessity without translating it into the business terms the Product Owner actually needs to make the trade-off** — "the code is bad" doesn't move a roadmap conversation; "three incidents in four Sprints, each costing about six engineer-hours of firefighting plus a customer-facing outage" does.

## The Scrum Master's Approach

1. **Get the cost of the status quo into business terms before the prioritization fight, not during it.** Oyelaran asks Farah to pull the actual data: three incidents, total engineering hours spent firefighting them, any customer-facing impact (SLA breaches, support tickets). This isn't spin — it's translating a technical concern into the currency a roadmap conversation runs on, which is what makes it possible for Desmond to weigh it fairly.
2. **Reframe the debate away from "feature Sprint vs. debt Sprint" as a false binary.** Oyelaran facilitates a session where Farah proposes options short of a full dedicated Sprint: could the highest-risk 60% of the refactor be done in one Sprint with the remaining features re-sequenced rather than dropped, instead of an all-or-nothing three weeks? Presenting Desmond with a menu of trade-offs, rather than a single ultimatum, makes it a negotiation instead of a standoff.
3. **Make the Definition of Done partly responsible for stopping debt from accumulating further**, even while addressing the existing backlog of it. Oyelaran works with the team to check whether their current [Definition of Done](../02-scrum-framework/definition-of-done.md) requires any test coverage or complexity threshold on touched code — if new work keeps touching this module without improving it, the debt Sprint just resets a clock that starts running down again immediately.
4. **Help Desmond communicate the trade-off upward instead of absorbing it silently.** Oyelaran coaches Desmond on framing this to his own stakeholders: "We're proposing one Sprint focused on stability work that reduces incident risk on the payment module, which directly protects the Q3 roadmap by preventing future weeks lost to firefighting." This is [working with difficult stakeholders](../04-scrum-master-role/working-with-difficult-stakeholders.md) applied one level up — Desmond has his own stakeholders to manage, and the Scrum Master can help him do that rather than just relaying the Developers' position at him.
5. **If a full dedicated Sprint isn't approved, don't let "fix it in the cracks" mean "never explicitly planned."** Oyelaran pushes for a concrete compromise: a fixed percentage of every Sprint's capacity (say, 20%) is explicitly reserved and tracked for debt and stability work on the Product Backlog, visible on the board with its own item, rather than an informal aspiration that competes and loses against every feature ticket individually.
6. **Track whether the compromise is actually holding**, Sprint over Sprint, and bring the data back if it isn't. If the 20% reservation quietly erodes to 5% under deadline pressure within two Sprints, Oyelaran raises that explicitly at the next Retrospective as a broken working agreement, not a forgotten detail.

## Likely Outcome

Desmond doesn't approve a full dedicated Sprint but does approve the scoped 60% option once he sees the incident-hour data and can carry a clean explanation to his own stakeholders — "we're de-risking payments before Q3, not going dark for three weeks." The remaining refactor work and two lower-priority Q3 features get re-sequenced, which requires an uncomfortable but honest conversation with the executive team about the roadmap shifting by one Sprint, which Desmond handles better than he expected to. The 20% ongoing reservation holds for two Sprints, slips in the third under a real deadline crunch, and Oyelaran catches it at the retro before it becomes the new normal.

## Certification Exam Angle

A frequent framing: *"The Development Team wants to dedicate a Sprint to technical debt, but the Product Owner refuses because stakeholders expect visible feature progress. What should the Scrum Master do?"* The trap answer is often "since the Developers decide how to do the work, they should proceed with the refactor regardless of the Product Owner's preference" — this misreads Scrum's accountabilities; the Developers own *how* work gets done within a Sprint, but the Product Owner owns backlog ordering and, by extension, what the Sprint is aimed at, so unilaterally overriding that isn't self-management, it's a different kind of dysfunction.

A second trap answer: "the Scrum Master should decide how much of the Sprint goes to debt versus features" — also wrong, since that decision isn't the Scrum Master's to make either. The correct-mindset answer has the Scrum Master facilitate a conversation where the real cost of the debt (in terms the Product Owner can act on) and the real cost of the deadline commitment are both made transparent, so the Product Owner can make an informed ordering decision — possibly a compromise — with the Developers' input, rather than the Scrum Master or the Developers deciding for them. The exam is testing whether you know technical debt is fundamentally a backlog-ordering decision, which sits with the Product Owner, not a unilateral technical call.
