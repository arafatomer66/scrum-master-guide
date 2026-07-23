# The Product Owner Won't Prioritize

*Every item is "critical." The backlog has forty top-priority tickets and no actual order, and the ordering decision keeps landing back on the Developers.*

## The Situation

Vantage Retail's storefront team has a Product Backlog of 61 items. Priya, the Product Owner, has marked 40 of them "P1 — Critical" in the tracker. When the team asks which of two P1 items to build first for Sprint 9 — a checkout-latency fix or a new loyalty-points redemption flow — Priya's answer is "both are critical, you two figure out what makes sense from an engineering angle."

This is the fourth time in six weeks a lead developer, Osei, has effectively made a prioritization call that should have been Priya's. Sprint Planning for Sprint 9 stalls for forty minutes while the team debates order among themselves, with Priya in the room but not weighing in beyond "whatever you think is best, just get both done eventually." The Scrum Master, Delphine, watches Osei quietly become the de facto Product Owner and knows this is the moment to intervene, because next Sprint it'll just be normal.

## Why This Happens

A Product Owner who won't order the backlog is rarely lazy — it's almost always fear, cover, or a structural problem one layer up:

- **Every stakeholder Priya answers to believes their request is the most important thing in the company**, and she doesn't feel she has the authority — or the political cover — to tell a VP their feature is number 14, not number 1. Marking everything P1 avoids ever having that conversation.
- **Ordering a backlog means admitting some things won't get done this quarter**, and Priya hasn't done the harder upstream work of aligning stakeholders on trade-offs, so every prioritization decision she'd make feels like it will blow up in a stakeholder meeting later.
- **Pushing the decision to the Developers feels safe to her and feels helpful ("I trust your judgment") but is actually an abdication** — the Developers can sequence *how* to build things, but they don't have visibility into customer value, revenue impact, or strategic bets, and they know it, which is why Sprint Planning turns into a forty-minute stall instead of a five-minute confirmation.
- **Nobody has made the cost of this visible to Priya.** From her seat, "the team sorted it out" looks like a low-cost outcome. She doesn't see the Planning time lost, the rework when the team guesses wrong about what she actually valued, or the fact that Osei is quietly accumulating a role he didn't sign up for and isn't accountable for the way a Product Owner is.

## The Scrum Master's Approach

1. **Make the cost visible to Priya directly, with a specific number.** Delphine tells her, plainly: "Planning took 40 extra minutes this Sprint because the team had to guess your priority. That's happened four times in six weeks — that's about two and a half hours of six developers' time spent on a decision that's yours to make in five minutes." Vague coaching ("you should prioritize more") rarely moves a PO; a concrete cost usually does.
2. **Separate "everything matters" from "everything is equally next."** Delphine facilitates a short backlog-ordering session with Priya alone, before the next Planning, using a simple forced-ranking technique: "If you could only ship one of these two items this quarter, which one, and why?" Forced pairwise choices break the "it's all critical" reflex because they don't require declaring anything worthless — only sequenced.
3. **Surface the real blocker — stakeholder pressure — and coach her on it directly**, since this is often a [working with difficult stakeholders](../04-scrum-master-role/working-with-difficult-stakeholders.md) problem wearing a prioritization costume. Delphine asks: "Is there a specific stakeholder conversation you're avoiding by not ordering this?" If Priya names the VP behind the loyalty-points push, Delphine can coach her on how to have that trade-off conversation, or even sit in on it, rather than let the avoidance leak into every Planning session instead.
4. **Draw a hard line with the Developers about whose call this is** — not punitively, but structurally. Delphine tells Osei, kindly but directly, that sequencing engineering approach is his call, but *which business problem we solve first* is not, and that continuing to make that call quietly is worse for the team long-term than a slightly uncomfortable Sprint Planning where the PO gets asked directly. This is a [shielding vs. enabling](../04-scrum-master-role/shielding-vs-enabling.md) judgment: protecting Priya from ever having to decide is not shielding her, it's enabling the avoidance.
5. **Bring an actual ordering to the very next Planning as a precondition to starting it.** Delphine sets a norm going forward: Sprint Planning does not start a scope discussion until the top items in the Product Backlog are already ordered by the PO. If Priya shows up without an order, Planning pauses for ten minutes right there, in front of the team, for her to make the call — visible cost, applied consistently, rather than a private nudge that's easy to forget by next Sprint.
6. **Escalate only if the pattern persists after direct coaching**, and only to the accountability structure, not around it — e.g., raising with whoever Priya reports to that the Product Owner role isn't being resourced with the authority it needs, which is an organizational impediment, not a personal failing to be handled quietly forever.

## Likely Outcome

The first ordering session is uncomfortable — Priya initially resists ranking two items she's told two different VPs are "the priority" — but with Delphine's forced-choice framing she lands on checkout latency first, citing a churn metric she'd been sitting on but hadn't connected to the decision. Sprint 9 Planning takes twelve minutes instead of forty. Osei is visibly relieved to hand the sequencing call back. The pattern doesn't disappear overnight — Priya reverts under stakeholder pressure in Sprint 11 — but now there's a named norm to point back to, and the second correction takes far less energy than the first.

## Certification Exam Angle

A classic PSM I framing: *"The Product Owner tells the Development Team to decide which Product Backlog items to work on first. What should the Scrum Master do?"* The trap answer is often "the Scrum Master should make the prioritization decision to unblock the team" — tempting because it feels helpful and decisive, but it's flatly wrong: ordering the Product Backlog is the Product Owner's sole accountability per the Scrum Guide, and the Scrum Master stepping in to do it themselves just relocates the abdication instead of fixing it.

Another trap answer is "let the Development Team keep deciding since they're closest to the work" — this sounds pragmatic but ignores that ordering by business value requires context the Developers structurally don't have, and normalizes an accountability gap. The correct-mindset answer is that the Scrum Master coaches and, where necessary, challenges the Product Owner to own ordering the backlog themselves — surfacing why they're avoiding it and removing whatever organizational impediment (stakeholder pressure, lack of authority) is causing the avoidance — because the Scrum Master's job is to make the existing accountabilities work, not to absorb them.
