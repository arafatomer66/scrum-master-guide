# The Agile Manifesto

*The four values and twelve principles from Snowbird, 2001 — quoted in full and explained for what each one actually means for a Scrum team today, not just recited.*

In February 2001, seventeen software practitioners met at a ski resort in Snowbird, Utah, to see if they had anything in common across the lightweight methods they'd each been developing independently — Extreme Programming, Scrum, DSDM, Crystal, and others. What came out of that meeting was a single page: the Manifesto for Agile Software Development. It's short by design, and it's worth reading closely rather than skimming, because every value and principle in it exists to resolve a specific tension the signatories had actually lived through — not as motivational language. This page walks through all four values and all twelve principles and explains the tension behind each.

## The four values

The Manifesto's core statement is: *"We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come to value:"*

**Individuals and interactions over processes and tools.** This is the most misquoted value in Agile, usually shortened to "no process" by people who want an excuse to skip planning. That's not what it says. Read the full sentence: *"That is, while there is value in the items on the right, we value the items on the left more."* Processes and tools still have value — Scrum itself is a process. The tension this resolves is what happens when a team follows the process even after it's stopped producing good outcomes, or when a tool (a rigid Jira workflow, a mandatory template) becomes the thing being optimized instead of the people using it. A Scrum Master who insists on running retrospectives exactly as documented even when the team clearly needs something different that week has inverted this value.

**Working software over comprehensive documentation.** The tension here is that documentation was, in the era this was written, often treated as the deliverable and the proof of progress, rather than a means to an end. A 200-page requirements document that nobody can validate against reality isn't progress; a working increment a stakeholder can actually use is. This doesn't mean no documentation — architecture decisions, APIs, and onboarding material still need to exist. It means documentation earns its place by helping the team deliver working software, not by existing as a compliance artifact.

**Customer collaboration over contract negotiation.** This resolves the tension between a relationship where scope is fixed at the start and any change becomes an adversarial renegotiation, versus a relationship where the customer and the team continuously adjust together as understanding improves. Contracts aren't eliminated — they still matter, especially in vendor relationships — but the value states that a rigid contract shouldn't be the primary mechanism governing what gets built when the customer's understanding of what they need is evolving in real time, which it almost always is.

**Responding to change over following a plan.** The tension is between a plan treated as a fixed commitment regardless of what's been learned since it was made, and a plan treated as the current best guess, updated as new information arrives. Planning still matters — Sprint Planning is a planning event — but the plan is a tool for the next increment of work, not a contract the team is bound to defend against reality.

## The twelve principles

The twelve principles that follow the values turn them into something closer to operating guidance. Each is quoted, then unpacked for what it demands from a Scrum team specifically.

**1. "Our highest priority is to satisfy the customer through early and continuous delivery of valuable software."** In Scrum this is the entire justification for the Sprint as a fixed, short timebox — it forces "early and continuous" rather than one release at the end of a long project.

**2. "Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage."** This is why the Product Backlog is explicitly a living artifact, reordered every Sprint, rather than a fixed scope document. A Scrum Master's job includes protecting the *current Sprint* from this kind of change (see the Sprint Goal) while making sure the *Product Backlog* stays genuinely open to it.

**3. "Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale."** This principle is the direct ancestor of Scrum's guidance that a Sprint should rarely exceed a month, and shorter is generally better when uncertainty is high.

**4. "Business people and developers must work together daily throughout the project."** This is the principle behind the Product Owner being an embedded, continuously available accountability rather than a stakeholder who hands over requirements once and disappears.

**5. "Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done."** This is the foundation for self-managing teams — Scrum doesn't assign work to individuals from outside the team; the team decides who does what.

**6. "The most efficient and effective method of conveying information to and within a development team is face-to-face conversation."** Written in 2001, before distributed teams were the norm this is now — the modern reading is "the highest-bandwidth synchronous channel available," which is why the Daily Scrum and Sprint Review exist as live conversations rather than async status reports, even on remote teams.

**7. "Working software is the primary measure of progress."** Not story points completed, not hours logged, not documentation shipped — an Increment that meets the Definition of Done is the only progress that counts.

**8. "Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely."** This is the principle a Scrum Master should point to explicitly when a team is being pushed to sprint-after-sprint of unsustainable overtime — "sustainable pace" isn't a nice-to-have, it's a founding principle, and burning a team out is a violation of it, not just a management failure.

**9. "Continuous attention to technical excellence and good design enhances agility."** Agility isn't just about process speed; a codebase that's accumulating unaddressed technical debt gets slower to change over time, which directly erodes the team's ability to respond to change (value four).

**10. "Simplicity — the art of maximizing the amount of work not done — is essential."** This is a direct challenge to gold-plating and speculative feature-building. A Scrum Master watching a team over-engineer a solution to a problem nobody has yet should recognize this principle by name.

**11. "The best architectures, requirements, and designs emerge from self-organizing teams."** This is the argument against handing a fully specified design down to the team from an architect or manager outside it — the people closest to the problem, given room to self-organize, tend to produce better solutions than a plan imposed from above.

**12. "At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly."** This is, almost word for word, the Sprint Retrospective. It's arguably the most directly operationalized principle in the entire Manifesto — Scrum didn't just take inspiration from it, it built an event specifically to satisfy it every single Sprint.

## Reading the Manifesto as a Scrum Master

None of this is decoration. The [three pillars of Scrum theory](../02-scrum-framework/scrum-theory-pillars.md) — transparency, inspection, and adaptation — are Scrum's specific mechanism for satisfying principles 1, 2, 3, and 12. The [Scrum Team's](../02-scrum-framework/scrum-team.md) self-managing structure is the direct implementation of principles 5 and 11. When you're facilitating a Sprint Review and a stakeholder pushes back on showing an incomplete feature, or a manager asks why the team can't just "add documentation later," the Manifesto isn't background trivia — it's the argument you're making, whether you cite it explicitly or not. For the historical context of how these values became Scrum specifically rather than staying an abstract manifesto, see [The History of Scrum](history-of-scrum.md); for why teams adopted this over sequential delivery in the first place, see [Agile vs. Waterfall](agile-vs-waterfall.md).
