# Removing Impediments

*The difference between a team-level impediment the Scrum Master helps the team solve directly and an organizational impediment that has to be escalated, plus a practical way to track them so they don't just quietly recur.*

"Removing impediments" is one of the most misunderstood lines in the Scrum Master's job description, mostly because "impediment" gets collapsed into "blocker" — something a developer is stuck on right now. That's part of it, but it's the smaller part. The bigger, more valuable part of the job is spotting the slow, systemic friction that never shows up as a dramatic blocker but quietly taxes the team every single sprint.

## Blocker vs. impediment

A blocker is acute and specific: a developer can't proceed today because a staging environment is down, or they're waiting on an access request that's been sitting for two days. It has a clear owner-shaped hole and usually a clear fix.

An impediment is broader. It includes blockers, but also includes things like:

- Requirements consistently arriving unclear or late from the Product Owner, so every sprint starts with ambiguity that eats the first two days.
- A CI pipeline that's flaky enough that "red" no longer means anything, so the team has quietly stopped trusting it and started merging around failures.
- A meeting culture that fragments the day into thirty-minute chunks, so no Developer gets more than an hour of uninterrupted focus time.
- An architecture with so much hidden coupling that a "small" change in one service routinely breaks two others, inflating every estimate with defensive padding.
- A hiring or onboarding process so slow that the team has been down a person for four months and everyone has quietly absorbed the extra load as "normal."

None of these stop work today the way a broken staging environment does. All of them are impediments, because all of them are systematically reducing the team's ability to deliver value — and because they're slow-burning rather than acute, they're the ones a Scrum Master is most likely to miss if they're only listening for "I'm blocked."

## Team-level vs. organizational impediments

The practical distinction that matters for what a Scrum Master actually does next:

**Team-level impediments** are within the team's own authority to fix, even if it takes a Scrum Master's coaching to get there. A flaky test suite the team owns, a habit of starting the Daily Scrum late, an unclear Definition of Done the team hasn't agreed on, a teammate who's a single point of knowledge on one part of the codebase — these are all things the team can change itself. The Scrum Master's role here is closer to coaching than to fixing: surface the pattern, ask the team what they want to do about it, help them commit to a concrete experiment (this is exactly the kind of item that should come out of a [Sprint Retrospective](../02-scrum-framework/sprint-retrospective.md)).

**Organizational impediments** are outside the team's authority by definition — no amount of team discipline fixes a company-wide approval process, a shared environment controlled by another department, a budgeting cycle that punishes mid-year scope changes, or a hiring freeze. Here, the team can name the problem, but only the Scrum Master (or the Scrum Master working through the organization) can actually push on it, because it requires authority or relationships the team doesn't have. This is explicitly called out in the Scrum Guide's description of service to the organization — "removing barriers between stakeholders and Scrum Teams" is an organizational-impediment responsibility, not a team one. See [The Scrum Master's Service Areas](the-4-sm-service-areas.md).

The judgment call in between — "can the team actually fix this themselves, or does it just feel that way because I haven't tried yet" — is the same one covered in more depth in [Shielding vs. Enabling](shielding-vs-enabling.md). Escalating something the team could've solved on its own trains the team to stop trying; sitting on something genuinely organizational because "the team should be able to handle it" just lets it fester.

## Making impediments visible: the impediment log

An impediment that lives only in someone's head, or gets mentioned once in a Daily Scrum and never again, effectively doesn't exist for planning purposes. The fix is a visible, persistent log — a physical whiteboard column, a Trello board, a Jira component, or even a shared spreadsheet, it doesn't matter which tool, only that it's visible to the whole team and reviewed regularly. A workable structure:

| Field | Purpose |
|---|---|
| Description | What's actually happening, specifically — not "CI is bad," but "CI fails intermittently on the payments-service test suite about 1 in 5 runs, unrelated to the code change." |
| Raised by / date | Who noticed it and when — this is what makes the log's own data useful later. |
| Type | Team-level or organizational — forces the classification decision explicitly instead of leaving it implicit. |
| Owner | Who's actively working the impediment — the Scrum Master, a Developer, or someone outside the team. |
| Status | Open, in progress, escalated, resolved. |
| Age | How many days or sprints it's been open. |

That last field — age — is the one most logs skip and the one that matters most. An impediment log where every item resolves in under a week looks healthy. An impediment log where three items have been sitting untouched for two months is a much more honest picture of the team's actual health than the sprint burndown is, and it's exactly the kind of data worth bringing into a retrospective explicitly: "these two impediments have been open for six weeks — what does that tell us?"

## Why this connects to flow

Impediments that never get named or tracked show up indirectly as inconsistent cycle time and unpredictable throughput — the team looks like it's underperforming when the actual cause is accumulated, unaddressed friction. See [Optimizing Flow](../03-professional-scrum-competencies/06-optimizing-flow.md) for how cycle time and throughput make this kind of drag visible in the data, and [Metrics and Forecasting](metrics-and-forecasting.md) for how a Scrum Master uses that same data to forecast honestly instead of guessing.
