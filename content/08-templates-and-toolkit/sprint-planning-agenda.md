# Sprint Planning Agenda (Copy-Paste Template)

*A ready-to-run, timeboxed Sprint Planning agenda for a two-week Sprint, a Sprint Goal-writing formula, and facilitator notes for keeping each segment moving.*

This is a starting template, not a script to read verbatim. The structure below follows the three topics the [2020 Scrum Guide](../02-scrum-framework/sprint-planning.md) actually specifies — Why is this Sprint valuable, What can be Done, How will the chosen work get done — mapped onto real minutes for a two-week Sprint. If your Sprint length differs, use the scaling table near the bottom; the Scrum Guide caps Sprint Planning at eight hours for a one-month Sprint, and the convention is to scale that down proportionally.

## Before you open the invite

A Sprint Planning that starts cold runs long and produces a weak Sprint Goal. Confirm these the day before, not the morning of:

- [ ] Top of the Product Backlog is refined enough to plan against — no item the team expects to pull has an open question that will eat 20 minutes to resolve live.
- [ ] Product Owner has a proposed Sprint objective in mind (not finalized — a starting proposal) and can articulate *why* it matters, not just *what* it is.
- [ ] Team capacity for the Sprint is known: PTO, holidays, on-call rotation, partial allocation to other work.
- [ ] Definition of Done is visible and unchanged since last Sprint (or the change has been flagged).
- [ ] Velocity or throughput from the last 2-3 Sprints is available as a forecasting reference — not a target, a reference.
- [ ] Whiteboard/board tool and video room are booked for the full timebox with no back-to-back meeting immediately after.

## The agenda: 2-week Sprint, 4-hour timebox

| Time | Segment | Topic |
|---|---|---|
| 0:00 – 0:45 | **Part 1 — Why** | Topic One: Why is this Sprint valuable? |
| 0:45 – 2:15 | **Part 2 — What** | Topic Two: What can be Done this Sprint? |
| 2:15 – 3:45 | **Part 3 — How** | Topic Three: How will the chosen work get done? |
| 3:45 – 4:00 | **Close** | Confirm, commit, adjourn |

### Part 1 — Why (45 min)

| Min | Activity |
|---|---|
| 0-15 | Product Owner presents Product Goal progress, business context, and a proposed direction for this Sprint. |
| 15-35 | Open discussion: does the team understand the *why*, does it conflict with anything they know that the PO doesn't (technical risk, dependency, capacity). |
| 35-45 | Draft a working Sprint Goal statement out loud — it will get refined in Part 2, but the room should leave this segment with a sentence, not a vibe. |

**Facilitator notes.** Your job in this segment is to stop it from becoming a backlog walkthrough. If the PO starts reading item titles one by one, interrupt gently: "Let's hold the item-by-item for Part 2 — right now, what's the one outcome that would make this Sprint a win?" If the room stays silent after the PO's pitch, don't fill it yourself — ask a specific person a specific question: "[Name], does that direction match what you were expecting given what we learned last Sprint?" Watch the clock out loud — "we've got 10 minutes left in this part" — so the team self-polices pace instead of you cutting people off.

### Part 2 — What (90 min)

| Min | Activity |
|---|---|
| 0-20 | Walk the top of the Product Backlog against the draft goal — which items actually serve it, which don't and should be deferred. |
| 20-30 | Capacity check: confirmed availability for the Sprint vs. the last 2-3 Sprints' actual throughput. |
| 30-75 | Developers select and forecast the items they believe they can complete — this is a Developers decision, not a PO or Scrum Master decision. |
| 75-90 | Finalize the Sprint Goal wording using the formula below; write it where it will stay visible all Sprint. |

**Facilitator notes.** This is where over-commitment happens, usually because a stakeholder is in the room applying pressure or the team feels bad saying no. Name it directly if you see it: "Based on our last three Sprints we've closed about 34 points — this forecast is 46. What's different this time, or are we saying yes because it's uncomfortable to say no right now?" Do not select the items yourself and do not let the PO select them — if the PO starts assigning work item-by-item to specific Developers, redirect: "Let's let the team figure out who does what in Part 3." Protect the Developers' right to say "that's enough" even if the backlog has more to offer.

### Part 3 — How (90 min)

| Min | Activity |
|---|---|
| 0-60 | Decompose selected Product Backlog items into a plan — tasks, technical approach, or however the team plans work internally. This produces the Sprint Backlog. |
| 60-80 | Surface dependencies, sequencing, and risks across items — what has to happen first, what's blocked on another team. |
| 80-90 | Confirm the board/tool reflects the plan; assign nothing that isn't already self-selected. |

**Facilitator notes.** Stay out of the technical conversation unless asked. Your value here is process, not solutions: if the room fragments into three side conversations, decide out loud whether to split into breakouts or bring it back to one thread — "Do we need all ten of us for this next piece, or can two of you take it offline and report back?" If a dependency on another team surfaces that nobody has a plan for, that's an impediment — capture it and own chasing it after the event, don't let it consume the remaining timebox.

### Close (15 min)

Read the finalized Sprint Goal back to the room. Confirm out loud that everyone believes the forecast is realistic — not "sounds fine" nods, an actual "yes." Log anything left unresolved (a dependency, an open question for the PO) as a tracked follow-up, not as a Sprint Backlog item. End on time even if it feels unfinished — an imperfect plan the team owns beats a polished plan that ran the meeting 40 minutes over and burned goodwill.

## The Sprint Goal formula

Use this as a fill-in-the-blank starting point, then edit until it reads like something a person would actually say out loud, not a template:

```
By the end of this Sprint, we will [specific, observable outcome]
so that [who benefits and why it matters to them],
and we'll know it worked if [how the team or PO will verify it at Sprint Review].
```

Examples:

- *"By the end of this Sprint, we will let existing users reset a forgotten password without contacting support, so that support ticket volume for account access drops and users aren't blocked from logging in. We'll know it worked if the reset flow is live in production and at least one real user completes it."*
- *"By the end of this Sprint, we will validate whether the new search ranking reduces zero-result queries, so that we know whether to invest further in it next quarter. We'll know it worked if we can show before/after zero-result rates from a controlled rollout to 10% of traffic."*

**The Sprint Goal smell test.** Before you accept a draft as final, run it through:

- [ ] It's one or two sentences, not a bundled list of every item in the Sprint Backlog.
- [ ] It survives a scope swap — if a lower-priority item gets dropped for a higher-priority one mid-Sprint, the goal is still true.
- [ ] A stakeholder outside the team would understand *why it matters* from reading it alone, without needing the backlog.
- [ ] It's falsifiable — at Sprint Review, the room can agree whether it was met or not, not argue about it.
- [ ] It's something a Developer could say out loud in the Daily Scrum as the thing they're checking progress against — see [Daily Scrum Formats](daily-scrum-formats.md) for formats built around exactly that.

## Scaling the timebox to other Sprint lengths

| Sprint length | Sprint Planning timebox (max) | Suggested split (Why / What / How) |
|---|---|---|
| 1 week | 2 hours | 20 / 50 / 40 min, +10 min close |
| 2 weeks | 4 hours | 45 / 90 / 90 min, +15 min close |
| 3 weeks | 6 hours | 65 / 135 / 135 min, +25 min close |
| 4 weeks | 8 hours (Scrum Guide max) | 85 / 180 / 180 min, +35 min close |

A team that consistently finishes early shouldn't feel obligated to fill the box — ending Sprint Planning in 2 hours instead of 4 because the backlog was well-refined and the goal was obvious is a sign of a healthy team, not a shortcut taken. A team that consistently runs over is telling you something about backlog readiness that's worth raising in the next [Retrospective](retrospective-formats.md).
