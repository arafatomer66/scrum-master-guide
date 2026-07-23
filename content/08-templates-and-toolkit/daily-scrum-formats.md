# Daily Scrum Formats Beyond the Three Questions

*Six real alternatives to the old "what did you do yesterday, what will you do today, any blockers" script, plus guidance on when to use each.*

The [Daily Scrum](../02-scrum-framework/daily-scrum.md) has exactly one hard requirement in the 2020 Scrum Guide: it's a 15-minute, timeboxed event for the Developers to inspect progress toward the Sprint Goal and adapt the Sprint Backlog. That's it. The Guide explicitly does not prescribe a structure — Developers can select whatever structure and techniques they want, as long as the event focuses on progress toward the Sprint Goal. If your team is still running the "three questions" because that's just what a Daily Scrum is, it's worth knowing that format was only ever an *example* in earlier versions of the Guide, and the 2020 revision deliberately dropped it as the default illustration. It isn't banned — but if it's the only format your team has ever tried, you haven't actually tested whether a Daily Scrum works for you, you've tested whether that one format does.

## Why the three questions format falls out of favor

Worth naming plainly before the alternatives, because a team that doesn't understand *why* it's discouraged will just drift back to it under time pressure:

- It's phrased around individual activity ("what did *you* do"), which pulls attention toward personal status and away from the shared Sprint Goal. Fifteen individually-fine updates can add up to a Sprint that's clearly off track, and the three-questions format has no natural moment where anyone says so.
- It's trivially easy to turn into a report-out *to* the Scrum Master or a manager standing in the room, which is the exact anti-pattern covered in [Daily Scrum Becomes a Status Report to a Manager](../06-real-life-scenarios/) — the questions get answered at the person running the meeting instead of among the team.
- "Any blockers?" asked as a closing question to a tired room gets a reflexive "nope" even when something real is stuck, because naming a blocker out loud, one at a time, in front of everyone, takes more social energy than a rushed 15-minute meeting leaves people with.

None of that means yesterday/today/blockers is always wrong — a very new team sometimes needs that scaffolding for the first few Sprints before graduating to something else. It means it shouldn't be the permanent default just because it's the one everyone's seen before.

## 1. Walk the board, right to left

Instead of going person by person, the team walks the Sprint Board starting from the column closest to Done and moving backward toward To Do. For each item near completion, the team asks what's needed to finish it *today*; only once the "almost done" items are addressed does the conversation move to newer work.

**Why it works:** it structurally biases the team toward finishing over starting, which directly serves the Sprint Goal — a Sprint with five items 80% done and two items 100% done delivers less than a Sprint with one item 80% done and four items 100% done. It also surfaces aging work-in-progress before it becomes an end-of-Sprint scramble.

**Facilitator note:** if the board updates are stale (items not moved since yesterday), that's information — ask "does the board match reality, or did something change that hasn't been reflected yet?" rather than assuming the walk itself is broken.

## 2. Walk the Sprint Goal

The event opens with someone reading the Sprint Goal out loud, then the conversation is organized entirely around one question: "what could stop us from hitting this by Sprint end, and what are we doing about it?" Individual task updates only come up if they're relevant to that question.

**Why it works:** it's the most direct implementation of what the Scrum Guide actually asks for — inspecting progress toward the Sprint Goal — and it filters out updates that are technically true but not actually useful ("I finished ticket #412" matters far less than "the thing blocking the goal is still blocked").

**Facilitator note:** this format struggles if the Sprint Goal is vague or was never really adopted by the team (see the Sprint Goal formula and smell test in [Sprint Planning Agenda](sprint-planning-agenda.md)) — if the room can't connect their work to the goal, that's a planning problem showing up in the Daily Scrum, not a Daily Scrum problem.

## 3. Async written standup + short live sync

Each Developer posts a short written update in a shared channel (Slack, Teams, a pinned thread) by a fixed time each morning — what moved, what's next, what's stuck. A much shorter live call (5-10 minutes, not the full 15) happens afterward, focused exclusively on anything flagged as stuck or anything that needs a real-time decision. Nothing that was already clear from the written updates gets repeated live.

**Why it works:** it's the standard adaptation for distributed teams spanning enough time zones that no 15-minute window works for everyone, or for teams where a chatty live call genuinely eats more time than the value it returns. Writing the update also forces more precision than saying it out loud does.

**Facilitator note:** this only works if people actually read the written updates before the live sync — if the live call turns into everyone reading their own post out loud again, the format has failed and you've just added a meeting on top of the async version instead of replacing it. Some teams drop the live sync most days and only convene it when someone flags a blocker in the written thread — a fully async Daily Scrum is legitimate under the Guide as long as it happens daily and still produces a plan.

## 4. Rotating facilitator

A different Developer runs the Daily Scrum each day (or each week), choosing which of these formats to use and keeping time. The Scrum Master attends but says nothing unless asked, or doesn't attend at all once the rotation is established.

**Why it works:** it's a direct, structural way to build the self-management the Scrum Master is supposed to be growing rather than owning — see [Servant Leadership](../04-scrum-master-role/servant-leadership.md) on the diagnostic of whether a team needs its Scrum Master less over time. It also surfaces facilitation skill across the whole team instead of concentrating it in one person.

**Facilitator note:** introduce this gradually, not by announcing "I'm stepping back starting Monday" to a team that's never run one without you. Co-facilitate with the first rotating person once or twice, debrief with them privately afterward, then step fully back.

## 5. Parking lot variant

Same structure as whatever base format the team uses (board walk, goal walk, or three questions), with one addition: any topic that starts turning into a design discussion, a debugging session, or a two-person back-and-forth gets named out loud and written on a visible "parking lot" list instead of continuing in the moment. The parking lot gets addressed immediately after the Daily Scrum ends, with only the people who actually need to be there.

**Why it works:** this is the direct fix for a Daily Scrum that reliably runs to 25-30 minutes because it keeps sliding into problem-solving. It protects the timebox for everyone while still making sure the tangent gets a home instead of getting dropped.

**Facilitator note:** the move is naming it fast and neutrally — "that sounds important, let's park it and pick it up right after with whoever needs to be in the room" — not letting it run two more minutes because it feels rude to interrupt. Keep the parking lot physically visible (board, shared doc) so items don't quietly get forgotten.

## 6. Flow/metrics walk (Kanban-flavored teams)

For teams running Scrum with a strong Kanban lean — visible WIP limits, cycle time tracked per item — the Daily Scrum opens with the board's flow metrics: items that have aged past the team's expected cycle time, any WIP limit currently being violated, and anything blocked long enough to be a statistical outlier rather than normal variation.

**Why it works:** it makes flow problems visible in the same fifteen minutes as everything else instead of only surfacing at a separate flow review, and it gives the conversation an objective, non-personal starting point ("this item has been in progress for 6 days against a 2-day average" lands very differently than "why isn't this done yet").

**Facilitator note:** this format needs the metrics to actually be visible and current — a stale or hidden cumulative flow diagram makes this worse than no format at all, because the team starts distrusting the numbers instead of using them.

## Choosing and rotating formats

Match the format to the actual problem, not to novelty for its own sake:

| Symptom | Try |
|---|---|
| Meeting turns into status reports to the Scrum Master or a manager | Walk the Sprint Goal, or rotating facilitator |
| Items sit "almost done" for days | Walk the board, right to left |
| Team spans more than about 4-5 hours of timezone overlap | Async written + short live sync |
| Scrum Master is the only one who's ever run it | Rotating facilitator |
| Meeting reliably runs long on tangents | Parking lot variant |
| Aging work-in-progress isn't visible until it's a crisis | Flow/metrics walk |

Don't rotate formats every week just to keep things fresh — that has its own cost, since a team needs a few repetitions to get fluent with a format before you can tell if it's actually solving the problem. Pick one deliberately in a Retrospective (see [Retrospective Formats](retrospective-formats.md) for structures that surface this kind of process feedback), commit to it for at least two or three Sprints, and inspect whether it's working before changing again.
