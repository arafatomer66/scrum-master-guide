# PSK — Professional Scrum with Kanban

*Scrum.org's specialty credential for applying Kanban's flow discipline — WIP limits, flow metrics, classes of service, cumulative flow diagrams — inside a working Scrum Team, not as a replacement for Scrum.*

Professional Scrum with Kanban tests a specific, narrow claim: that you can visualize and manage the flow of work *inside* Scrum's existing structure, using Kanban practices as an overlay rather than a competing framework. This is a real distinction, not a marketing one. Plenty of teams that say "we do Kanban" have actually replaced Scrum's cadence with an undisciplined backlog and a board with three columns, and plenty of teams that say "we do Scrum" have a Sprint Backlog that sits invisible until the burndown chart turns red on day nine. PSK certifies that you know how to avoid both failure modes — keeping Scrum's events and accountabilities intact while adding real flow visibility and WIP discipline underneath them, following the specifics in Scrum.org's own Kanban Guide for Scrum Teams, which is the actual source document the exam is built from.

## Who It's For

PSK is for anyone on a Scrum Team — Scrum Master, Developer, or Product Owner — whose team's work doesn't arrive in tidy, evenly-sized chunks that finish steadily across the Sprint. That's most teams carrying production support alongside planned feature work, teams embedded in a continuous release pipeline, or any team where Sprint Planning quietly turns into a guess because nobody can see how work is actually moving day to day. It's also a natural next step for a Scrum Master who's noticed the classic pattern — the board looks fine on day three and catastrophic on day nine — and wants a systematic diagnostic instead of a gut feeling.

It assumes real Scrum fluency going in. PSK doesn't reteach the Scrum Guide; it layers flow concepts on top of accountabilities, events, and artifacts you're expected to already know cold. If you haven't sat [PSM I](psm-i.md) or don't have equivalent working knowledge, get that foundation solid first — PSK questions will casually reference Sprint Backlog ownership or Daily Scrum purpose as settled background, not something worth re-explaining.

## Format & Logistics

PSK follows the same structural family as Scrum.org's other single-tier specialist assessments: open-book, timed, taken on your own computer through Scrum.org's own platform, no proctor, no mandatory training course as a prerequisite. Multiple choice, multiple answer, and true/false questions. Historically in the ballpark of 30 questions and 60 minutes, with a passing bar around 85% — consistent with Scrum.org's other exams, which are built to certify precision rather than general familiarity. Pricing sits in a lower tier than PSM II, closer to PSM I's cost. **Treat all of these numbers as approximate and verify the current question count, time limit, passing score, and price on scrum.org before registering** — Scrum.org adjusts these periodically and this guide won't always catch a change the day it happens. Like every Scrum.org credential, PSK does not expire and carries no renewal fee once earned.

## What It Actually Tests

The exam checks whether you understand Kanban as flow discipline, not just Kanban as a board. Expect questions on:

- **Visualizing the actual workflow**, not a generic To Do/Doing/Done board — mapping the real stages work passes through (refinement, in progress, in review, ready for test, done) so bottlenecks have somewhere specific to show up.
- **Explicit WIP limits** at each workflow stage, and the reasoning behind them: a lower WIP limit almost always increases throughput, because less context-switching and fewer half-finished items in flight means started work actually finishes faster. Questions often test whether you understand *why* this counterintuitive relationship holds, not just that limits exist.
- **Classes of service** — standard, expedite, fixed-date, and intangible work each moving through the same WIP-limited system differently, and how a team decides which class an item belongs to without letting "everything is urgent" quietly break the whole system.
- **Reading flow metrics correctly**: cycle time versus lead time as genuinely different clocks, throughput as a forecasting input, and cumulative flow diagrams — specifically, recognizing a widening band as the visual signature of an emerging bottleneck before it shows up as a missed Sprint Goal.
- **How flow data feeds Scrum's existing events** rather than replacing them: the Daily Scrum inspecting flow, not just a burndown; the Sprint Retrospective using flow metrics to turn a vague "things feel slow" into a specific, actionable diagnosis; the Sprint Review using cycle time and throughput history to ground forecasting conversations with stakeholders in something more honest than a gut estimate.

## Study Plan

1. **Read Scrum.org's free Kanban Guide for Scrum Teams cover to cover**, more than once. It's short, and PSK is written directly against its specific terminology — which occasionally differs in subtle ways from generic Kanban Method vocabulary you'll find in broader Kanban books and blogs.
2. **Work through this repo's [Optimizing Flow](../../03-professional-scrum-competencies/06-optimizing-flow.md) competency page.** It's the core prep material for this certification in this guide — it covers flow metrics, the Kanban-Scrum integration model, WIP limit discipline, waste identification, and how to read a cumulative flow diagram, all mapped to how Scrum.org actually frames the combination.
3. **Take Scrum.org's free Kanban-related open assessment** if one is currently published, and treat any wrong answer as a pointer back to the Guide's exact wording rather than something to just memorize past.
4. **Practice reading a real CFD**, not just a diagram in a slide deck. Pull actual ticket-history data from a real board if you have access to one, plot it, and identify where a band is widening — the pattern reads very differently on real, noisy data than on a textbook-clean example.
5. **Review [Metrics and Forecasting](../../04-scrum-master-role/metrics-and-forecasting.md)** for how flow metrics translate into forecasting conversations with stakeholders — a recurring theme in how PSK frames "why any of this matters" questions.
6. If PSM I feels shaky, close that gap first — spend a pass through [section 02, The Scrum Framework](../../02-scrum-framework/) so the Scrum fundamentals PSK assumes aren't the thing costing you points.

## Common Failure Points

- **Thinking "just add a Kanban board" is the whole answer.** The exam doesn't reward knowing that boards and columns exist — it tests whether you understand WIP limit discipline specifically, including the counterintuitive fact that lowering a limit usually raises throughput. An answer that treats the board as decoration rather than an active constraint is wrong.
- **Studying generic Kanban Method material instead of Scrum.org's own Kanban Guide for Scrum Teams.** The two traditions share a lot of vocabulary but aren't identical, and PSK is written against the latter specifically. Subtle wording differences trip up people who only read outside sources.
- **Treating flow metrics as a replacement for Scrum's empirical events instead of an input to them.** Any answer implying the team should drop the Daily Scrum, Sprint Review, or Sprint Retrospective in favor of "just watching the board" is always wrong — Kanban integration adds measurement to Scrum's cadence, it doesn't substitute for it.
- **Misreading flow diagnostics** — confusing cycle time with lead time, or not recognizing a widening CFD band as a bottleneck signal rather than just noise.
- **Assuming "Scrum with Kanban" means abandoning the Sprint container.** That's a different, non-Scrum use of Kanban entirely. PSK is explicit that the Sprint stays fixed-length and intact; flow discipline lives inside it, the same way [The Sprint](../../02-scrum-framework/sprint.md) describes what stays protected during a Sprint regardless of what else is layered on top.

For how PSK fits among Scrum.org's other specialty credentials and whether it's the right one to add to your existing certifications, see [which certification should I get](../00-which-certification-should-i-get.md) and the [comparison table](../comparison-table.md).
