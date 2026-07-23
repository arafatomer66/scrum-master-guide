# Anti-Patterns and Scrum Smells

*A field guide to the most common Scrum dysfunctions — named, diagnosed, and paired with a first concrete step to address each — because recognizing the pattern is most of the battle.*

Most Scrum dysfunction isn't exotic. It's a small set of recurring patterns that show up, in slightly different costumes, in almost every organization that adopts Scrum without fully adopting the thinking behind it. Naming them precisely is useful on its own — a Scrum Master who can say "this is watermelon reporting" instead of just "something feels off" has already made the problem easier to act on.

## ScrumBut

**The smell:** "We do Scrum, but we skip retrospectives because we don't have time," or "we do Scrum, but the manager assigns the tasks," or any sentence of the shape "we do Scrum, but [core element], because [local excuse]." Individually, any single ScrumBut might be defensible. In aggregate, they hollow out the framework until what's left is a set of renamed status meetings wearing Scrum's vocabulary.

**How to spot it:** Ask "what would happen if we stopped doing [X]?" about each ceremony and artifact. If the honest answer is "nothing would really change," that element has already been ScrumBut'd into meaninglessness even if it's still on the calendar.

**First step:** Pick the single ScrumBut causing the most damage — usually the skipped or theater-only retrospective — and fix that one thing concretely before trying to fix all of them at once. See [Fake-Agile "ScrumBut" Organization](../06-real-life-scenarios/11-fake-agile-scrumbut-organization.md) for a full worked example of what accumulated ScrumBut looks like and how to unwind it.

## Scrum Master as project manager / task-assigner

**The smell:** The Scrum Master maintains the task list, assigns work to individuals in the Daily Scrum, chases people for status updates outside the ceremonies, and effectively runs a traditional project management function with a Scrum vocabulary layered on top.

**How to spot it:** Watch who decides who does what. If it's consistently the Scrum Master rather than the Developers themselves, self-management has been quietly replaced by a benevolent dictator — see [Servant Leadership](servant-leadership.md) for why this fails Greenleaf's own test regardless of how well-intentioned it is.

**First step:** In the next Daily Scrum, say nothing and let the Developers run it themselves — literally step back physically if it's an in-person stand-up. The discomfort of the first silent Daily Scrum is diagnostic on its own: a team that's never self-organized this conversation will visibly not know what to do, which tells you exactly how much coaching work is ahead.

## Daily Scrum as status report

**The smell:** Each Developer reports "yesterday I did X, today I'll do Y, no blockers" directly to the Scrum Master or a manager in the room, one after another, with no actual coordination happening between Developers — it's a status meeting wearing the Daily Scrum's clothes.

**How to spot it:** Notice the direction people are facing and talking to. In a healthy Daily Scrum, Developers talk to each other, replanning the day's work toward the Sprint Goal. In this anti-pattern, everyone talks to the Scrum Master or whoever's perceived as "in charge," one at a time, in a fixed order.

**First step:** Reframe the question out loud — replace "what did you do yesterday" with "what do we need to do today to hit the Sprint Goal" — and physically remove any manager's expectation of receiving a report from that meeting, redirecting them to ask the team directly or wait for the Sprint Review. See [Daily Scrum Becomes a Status Report to a Manager](../06-real-life-scenarios/03-daily-scrum-becomes-status-report-to-manager.md) for exactly this scenario worked end to end, and [Daily Scrum](../02-scrum-framework/daily-scrum.md) for what the event is actually for.

## Sprint Retrospective that never produces action

**The smell:** The team meets, talks about what went well and what didn't, everyone nods, and the same three complaints resurface sprint after sprint with no visible change in between.

**How to spot it:** Look at last sprint's retrospective notes. If you can't find a concrete, checkable action item from it — not "communicate better," but something like "we will add a 15-minute buffer before any demo" — the retrospective produced conversation, not improvement.

**First step:** Limit the next retrospective to exactly one action item, owned by a named person, small enough to complete within the next sprint, and open the following retrospective by checking whether it actually happened before discussing anything new. See [Sprint Retrospective](../02-scrum-framework/sprint-retrospective.md) and [Facilitation Techniques](facilitation-techniques.md) for dot-voting as a way to force the group to pick one thing instead of listing ten.

## Product Owner as intake form

**The smell:** The Product Owner's actual function has collapsed into passively relaying whatever the last person who emailed them wants, in whatever order they asked, with no visible prioritization logic or product vision behind the backlog.

**How to spot it:** Ask the Product Owner what the Product Goal is and why item #3 in the backlog ranks above item #7. If there's no answer beyond "that's who asked most recently" or "that's what the loudest stakeholder wanted," the PO role has been reduced to clerical intake.

**First step:** Work with the PO — coaching mode, not telling them what to do — to write down an explicit prioritization rationale for the top five backlog items before the next refinement session, even a rough one. The act of having to justify order out loud usually surfaces the gap immediately. See [The Scrum Master's Service Areas](the-4-sm-service-areas.md) for the specific ways a Scrum Master is meant to support Product Goal and backlog technique, not just team facilitation.

## Watermelon status reporting

**The smell:** Every status report going upward says green — on track, healthy, no concerns — while the reality inside the team is red: missed goals, mounting technical debt, burnout. Green outside, red inside, like a watermelon.

**How to spot it:** Compare what's said in the Sprint Review or a stakeholder update against what's said in the retrospective or a private one-on-one. A consistent, large gap between the two is the tell — not the existence of any single rosy report, but the pattern of the public story never matching the private one.

**First step:** In the next retrospective, ask directly: "if we reported our real status to leadership with total honesty, what would we say that's different from what we've been saying?" Then have a private conversation with whoever owns the external reporting — often the Product Owner or a manager — about closing that specific gap on the next report, rather than trying to fix organizational honesty culture all at once.

## Zombie Scrum

**The smell:** Every ceremony happens, on time, with the right people in the room, following the right format — and none of it actually changes anything. The team goes through the motions of inspect-and-adapt without ever adapting. It looks completely healthy from the outside and is hollow on the inside.

**How to spot it:** This is the hardest anti-pattern to catch precisely because it doesn't look broken — nothing is skipped, nothing is obviously wrong. The tell is in outcomes over time: has anything about how this team works actually changed in the last six months as a result of a retrospective, a Sprint Review conversation, or a Daily Scrum? If the honest answer is no, it's zombie Scrum regardless of how well-run each individual meeting looks.

**First step:** Pick one ceremony and deliberately change its format for one cycle — a differently structured retrospective, a Sprint Review with a different audience or format — specifically to break the autopilot and see whether the team has opinions about it. A team that reacts with genuine engagement to the change still has life in it; a team that shrugs through the change too is telling you something important about how disengaged the ceremonies have become.

## Velocity as a productivity weapon

**The smell:** Velocity numbers get pulled into performance reviews, compared across teams in a leadership dashboard, or used to pressure a team into "going faster" as if it were a dial that could simply be turned up.

**How to spot it:** Notice who's looking at the velocity chart and why. If it's someone outside the team using it to compare, rank, or pressure, rather than the team itself using it to plan its own next sprint, the metric has left its intended use. See [Metrics and Forecasting](metrics-and-forecasting.md) for what velocity is actually for, and [Velocity Used to Compare Teams](../06-real-life-scenarios/15-velocity-used-to-compare-teams.md) for the full scenario and how to push back on it in the room where it's happening.

**First step:** Raise it directly with whoever is using velocity this way, and offer the alternative immediately rather than just objecting — bring throughput-based forecasting with honest ranges (also covered in [Metrics and Forecasting](metrics-and-forecasting.md)) as the thing that actually answers the underlying question they're trying to answer, which is usually "when will this be done," not "how hard is this team working."

## The common thread across all of these

Every anti-pattern on this list survives because it's easier to keep doing the visible motion — hold the meeting, publish the chart, keep the backlog moving — than to do the harder work the motion was supposed to represent. A Scrum Master's most valuable habit isn't knowing every dysfunction by name; it's periodically asking, about anything the team does routinely, "if we stopped doing this exact version of it, what would actually change?" — and being willing to hear "nothing" as a real, actionable answer.
