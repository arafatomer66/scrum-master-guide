# Metrics and Forecasting

*Velocity, burndown/burnup charts, and cycle time explained as planning tools rather than performance scores, plus a practical, honest way to forecast delivery using historical data instead of guesswork.*

Every Scrum Master eventually gets asked "when will this be done" by someone who wants a single date. The honest answer is almost always a range with a confidence level attached, and getting there requires understanding what these metrics actually measure — and, just as importantly, what they were never designed to measure.

## Velocity

Velocity is the amount of work — usually measured in story points, sometimes in item counts — a team completes in a sprint, averaged over recent sprints. It exists for exactly one purpose: to help a team plan its own next sprint using its own recent history instead of guessing. If a team has averaged 32 points over the last four sprints, that's a reasonable basis for sizing the next Sprint Backlog. That's the whole legitimate use case.

Velocity is not a productivity score, and the moment it's treated as one, it stops being useful and starts being actively harmful. The mechanism is simple and predictable: story points are relative and team-specific — a "5" on one team means nothing next to a "5" on another team, because each team calibrated its own scale against its own reference stories. The instant velocity gets used to compare Team A against Team B, or gets tied to a manager's performance review of the team, every incentive flips. Teams learn, correctly, that inflating estimates makes them look faster, and velocity stops reflecting reality within a sprint or two. You get a number that goes up and a team that ships the same or less — the metric is now actively lying to whoever's watching it. See [Velocity Used to Compare Teams](../06-real-life-scenarios/15-velocity-used-to-compare-teams.md) for exactly how this plays out and how a Scrum Master should respond when it's already happening in their organization, and [Anti-Patterns and Scrum Smells](anti-patterns-and-scrum-smells.md) for "velocity as a productivity weapon" as a named dysfunction.

A Scrum Master's job here is mostly defensive: keep velocity inside the team as a planning input, and push back hard — with the Product Owner, with management, in whatever forum it surfaces — the moment it's used to compare teams or evaluate individuals.

## Burndown vs. burnup charts

A **burndown chart** plots remaining work against time, trending toward zero by the end of the sprint (or release). It's simple and intuitive, but it has a specific blind spot: if scope changes mid-sprint — work added or removed — a burndown chart just shows the line moving up or flattening, with no visual explanation of why. Someone looking only at the chart can't tell "we're behind because we're slow" from "we're behind because scope grew."

A **burnup chart** fixes that by plotting two lines: completed work trending up, and total scope (which can itself move) as a separate line. If the scope line jumps up mid-sprint, that's visible on the chart itself — the team's progress line didn't necessarily change, the goalposts did. For any context where scope is unstable — which, honestly, describes most real teams more than the idealized "sprint scope is locked" version of Scrum — a burnup chart tells a more honest story and heads off the "why aren't you done yet" conversation that burndown-only teams have constantly.

## Cycle time and throughput

Where velocity and burndown are sprint-shaped tools, **cycle time** (how long an individual item takes from start to finish) and **throughput** (how many items complete in a given period, regardless of size) are flow-shaped tools — they don't require items to be the same size or a fixed-length sprint to be meaningful, which makes them more robust and, for forecasting specifically, more useful than velocity. See [Optimizing Flow](../03-professional-scrum-competencies/06-optimizing-flow.md) for the full treatment of these concepts and why they connect to Kanban-style flow thinking even inside a Scrum cadence.

The practical payoff for a Scrum Master: throughput (items per sprint or per week) gives you a distribution, not a single number, and that distribution is the raw material for honest forecasting.

## Forecasting with ranges, not single dates

The instinct when asked "when will this be done" is to do the math on remaining points divided by average velocity and hand over a date. That single-point estimate is nearly always wrong, and worse, it's wrong in a way that hides exactly how wrong it might be — a stakeholder hears "October 14th" as a promise, not a midpoint of a wide distribution.

A more honest approach uses the team's actual historical throughput as a range, not an average, and simulates forward. Conceptually, this is what a **Monte Carlo forecast** does: instead of using one number (average throughput), it repeatedly samples from the team's real historical throughput — including the slow weeks and the fast weeks — running the simulation hundreds or thousands of times to see how many sprints it typically takes to clear the remaining backlog under that real variability. The output isn't a date, it's a probability curve: "based on the last twelve sprints, there's an 85% chance we finish this scope by sprint 14, and a 50% chance we finish by sprint 12." A Scrum Master doesn't need to build custom simulation software to use this thinking — several free tools exist that take a CSV of historical throughput and produce this kind of forecast — but the conceptual shift, from single-point estimate to a range with a stated confidence level, is the thing that actually matters and can be communicated even without dedicated tooling, just by quoting the team's best and worst throughput weeks from the last few months as the bounds of a range.

## Communicating uncertainty honestly

The forecast is only half the job — the other half is how it's said in the room. A few habits that keep this honest without sounding evasive:

- **Always give a range and a confidence level together**, never a bare date: "we're 85% confident this ships by the 14th, and 50% confident by the 8th" is a complete sentence a stakeholder can actually plan around, in a way "the 14th" alone can't be.
- **Show the historical data behind the number**, not just the conclusion — a quick view of the last several sprints' actual throughput makes the range feel like evidence, not hedging.
- **Revisit the forecast as new data arrives.** A forecast made in sprint 2 of a 10-sprint effort should get narrower and more confident by sprint 6, using more real throughput data instead of clinging to the original estimate out of a fear of looking inconsistent.
- **Separate "when will this be done" from "when will we know more."** For a genuinely uncertain or complex item, it's often more honest to say "we don't have enough data to forecast this responsibly yet — give us two sprints and we'll have a real range" than to manufacture false precision on request.

This same honesty is what separates a Scrum Master from someone just managing stakeholder feelings — see [Working with Difficult Stakeholders](working-with-difficult-stakeholders.md) for exactly how to hold this line when an executive is pushing hard for a single hard date on something genuinely uncertain, and [Team Missing Every Sprint Goal](../06-real-life-scenarios/01-team-missing-every-sprint-goal.md) for what happens when a team's forecasting and its actual delivery have drifted apart for long enough that trust itself is the thing that needs repairing.
