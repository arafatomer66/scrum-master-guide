# The Team Keeps Missing Its Sprint Goal

*Three Sprints in a row, the Sprint Goal has not been met — and the retro keeps blaming "too much work," which isn't actually the problem.*

## The Situation

Team Kestrel builds the claims-processing service for a mid-size insurance platform. Six developers, two-week Sprints, a velocity that's hovered around 38 points for the last two quarters. For the third Sprint running, they've missed the Sprint Goal.

Sprint 14's goal was "Adjusters can submit a claim dispute end-to-end without calling support." They shipped four of the six backlog items tied to that goal. The dispute-submission API landed. The email notification landed. But the two items that actually let an adjuster complete the flow in the UI — the ones that make the goal *true* — carried over, again, because a "quick" auth-token bug from Sprint 12 resurfaced in QA and ate four days.

At the Sprint Review, the Product Owner, Farhana, tells the stakeholders "we're close, just a bit more polish needed" — the same sentence she said after Sprint 13. In the retro, the team's diagnosis is "we keep taking on too much." The Scrum Master, Tomasz, writes that on the board for the third time and knows, watching everyone nod, that writing it a third time isn't going to change a fourth Sprint.

## Why This Happens

Three consecutive misses is never really a capacity problem, even though "we took on too much" is the answer a team reaches for first — it's the least uncomfortable diagnosis, because it doesn't implicate any one decision. Usually two or three of these are true at once:

- **The Sprint Goal isn't a goal.** "Ship items X, Y, and Z" is a checklist wearing a goal's clothing. A real Sprint Goal is a single coherent objective the Developers can flex the *how* around — if it's really six unrelated tickets stapled together under one label, there's no shared objective to rally around when day 7 gets rough, and no way to tell mid-Sprint whether the *goal* is at risk versus just one ticket.
- **Impediments from previous Sprints don't die, they carry forward as debt.** The Sprint 12 auth-token bug wasn't fixed, it was patched enough to demo. It reappeared because nobody tracked it as an open impediment after the Sprint closed — it just vanished from visibility until it resurfaced in someone else's lap.
- **A loose Definition of Done upstream causes rework downstream.** If "done" for an API item doesn't include "verified against the actual auth flow it depends on," items get marked complete that aren't, and the debt shows up as unplanned work in the *next* Sprint, quietly eating capacity that was never accounted for in planning.
- **Nobody is tracking whether the Sprint Goal itself is trending off-track mid-Sprint.** If the first signal of trouble is the Sprint Review, it's already too late to adapt — inspection has to happen daily, at the [Daily Scrum](../02-scrum-framework/daily-scrum.md), against the goal specifically, not just against ticket status.

## The Scrum Master's Approach

1. **Name the pattern explicitly, with data, before the next Planning.** Tomasz pulls the last three Sprint Goals and shows the team, plainly: three goals stated, zero met, and in all three cases the miss traced to either scope that was never really one goal, or an old impediment resurfacing. This isn't a blame exercise — it's making an invisible trend visible, which is the first job of empiricism.
2. **Fix the Sprint Goal itself before touching anything else.** At the next Planning, Tomasz pushes back when Farhana proposes six loosely related items again: "What's the one sentence that's true if we succeed and false if we don't?" The team rewrites Sprint 15's goal as "Adjusters can complete a dispute without calling support" — singular, testable, and it forces an honest conversation about which items are actually load-bearing for that sentence versus which are nice-to-haves that can be cut if time runs short.
3. **Put unresolved impediments on a visible, owned list — not just the Sprint Backlog.** Tomasz starts an impediment log next to the Sprint Board. The auth-token issue goes on it with a name attached (a senior developer, Rian, owns investigating it properly, not patching it) and a date. It doesn't get to quietly disappear again. This is core [impediment removal](../04-scrum-master-role/removing-impediments.md) work — the Scrum Master's job isn't to fix the bug, it's to make sure it can't go dark.
4. **Tighten the Definition of Done at the point where the rework is entering.** Tomasz facilitates a short session with the Developers specifically about the auth dependency: "done" for any API item now explicitly includes "verified against current auth middleware in a shared test environment," closing the exact gap that caused the carry-over. See [Definition of Done](../02-scrum-framework/definition-of-done.md) for how a loosely scoped DoD becomes hidden debt.
5. **Make goal-risk a standing Daily Scrum question, not a Sprint Review surprise.** Tomasz asks the team to end each Daily Scrum with one question: "Based on today, is the Sprint Goal still achievable?" The first time the answer is "not sure," that's the trigger to re-plan scope with Farhana immediately rather than wait five more days and hope.
6. **Bring it back to the retro with a different lens.** Instead of "we took on too much" for a fourth time, Tomasz reframes the retro question as "what would have told us by day 4 that we were off track?" — see [Sprint Retrospective](../02-scrum-framework/sprint-retrospective.md). If this retro also produces no different action than the last two, that's its own problem — see [when the retro never changes anything](07-retro-that-never-changes-anything.md).

## Likely Outcome

Sprint 15's goal is met — narrowly, because the team cut two nice-to-have items mid-Sprint the moment the Daily Scrum flagged risk on day 6, instead of discovering it at the Review. The auth-token root cause takes another full Sprint to actually resolve properly, but it's now visible and owned rather than a recurring surprise. Farhana is initially resistant to the tighter Sprint Goal discipline — it means she can't quietly add "just one more thing" mid-Planning — but after two Sprints of goals that actually land, stakeholder trust in the team's forecasts visibly improves, which is the thing she actually wanted all along.

## Certification Exam Angle

A PSM I or PSM II question built on this scenario typically reads: *"A Scrum Team has missed its Sprint Goal for three consecutive Sprints. What should the Scrum Master do?"* The tempting-but-wrong answers usually include: escalate to the Developers' manager to reduce their other obligations (this treats the team as passive and bypasses self-management), instruct the Product Owner to add fewer items to the Sprint Backlog (this treats it as purely a scope problem and ignores that the *goal* itself may be structurally broken), or cancel the Sprint Review until the team can "show something worth demoing" (this destroys the actual empirical checkpoint that would surface the problem).

The correct-mindset answer centers on making the pattern transparent to the whole Scrum Team and facilitating the team's own inspection of *why* — is the Sprint Goal coherent, is Done rigorous enough, are impediments being tracked to resolution — rather than the Scrum Master diagnosing and fixing it unilaterally. The exam is testing whether you understand that a repeated Sprint Goal miss is a signal for inspect-and-adapt at the team level, facilitated by the Scrum Master, not a performance problem to manage from outside the team.
