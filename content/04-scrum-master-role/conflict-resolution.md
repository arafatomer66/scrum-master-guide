# Conflict Resolution

*A working model for team conflict — the Thomas-Kilmann modes, how to facilitate a conflict conversation without taking sides, telling healthy disagreement from destructive conflict, and knowing when to escalate beyond the team.*

Conflict on a Scrum Team isn't automatically a problem to be eliminated — some of it is the sound of a team actually engaging with hard tradeoffs instead of avoiding them. The Scrum Master's job isn't to make conflict disappear; it's to keep it productive, keep it about the work rather than the person, and recognize the rare cases that are genuinely beyond what a facilitator should try to solve alone.

## The Thomas-Kilmann conflict modes

The Thomas-Kilmann Conflict Mode Instrument maps conflict behavior along two axes — how *assertive* you are about your own concerns, and how *cooperative* you are about the other person's — producing five modes. None of them is universally right; each fits a different situation.

**Competing** (high assertiveness, low cooperation). One party pushes their position and doesn't yield. Appropriate when there's a real deadline and no time for consensus, or a non-negotiable like a security requirement. Overused, it reads as one person or role (often the loudest developer, or a Product Owner pulling rank) steamrolling the rest of the team — a pattern worth naming directly if it's happening every sprint.

**Collaborating** (high assertiveness, high cooperation). Both parties push their real interests and work together to find a solution that satisfies both, rather than splitting the difference. This is the mode a Scrum Master should be actively facilitating toward for conflicts about how to build something, architecture disagreements, or priority disputes — it takes the most time and skill but produces the best long-term outcome and the least residue.

**Compromising** (moderate on both). Both sides give something up to reach a workable middle ground quickly. Legitimate when the issue isn't worth the time collaborating would take, or as a fallback when collaboration stalls — but a team that only ever compromises, never collaborates, is leaving better solutions on the table out of time pressure or conflict-avoidance.

**Avoiding** (low assertiveness, low cooperation). Nobody raises the issue; it gets sidestepped. Sometimes correct — a genuinely trivial disagreement isn't worth a meeting — but avoidance is the default failure mode of teams with weak psychological safety, and a Scrum Master should be alert to it showing up repeatedly around the same topic. Chronic avoidance is often what a lifeless retrospective is quietly hiding; see [Anti-Patterns and Scrum Smells](anti-patterns-and-scrum-smells.md).

**Accommodating** (low assertiveness, high cooperation). One party yields to keep the peace, sacrificing their own position. Fine occasionally, especially on low-stakes issues where relationship matters more than being right. Chronic accommodating by the same person, sprint after sprint, is a warning sign of an imbalance the Scrum Master should surface privately — that person's real technical concerns may be getting silently dropped.

A Scrum Master's role isn't to pick a "correct" mode for the team, but to help the team notice which mode it's defaulting to by habit, and ask whether that's actually the right fit for what's at stake this time.

## Facilitating without taking sides

The moment a Scrum Master visibly sides with one developer's technical position over another's, they stop being a neutral facilitator and become a participant — and often lose the standing to facilitate the next conflict. A few concrete techniques for staying neutral on content while actively managing the process:

- **Set a ground rule out loud before the conversation starts**: "We're going to talk about the disagreement on the caching approach. I'm not going to weigh in on which approach is right — that's not my call — but I am going to make sure both sides get heard fully before anyone responds."
- **Separate the person from the position.** Restate disagreements in terms of the idea, not the person: "so the concern with approach A is latency under load, and the concern with approach B is that it doubles the maintenance surface" — not "Sam thinks A, Priya thinks B."
- **Reflect impact, not intent.** When someone reacts strongly, ask what happened, not why: "when that comment was made in the PR thread, what was the effect on you?" rather than assuming or arguing about what the other person "meant."
- **Slow the exchange down.** In a heated back-and-forth, insert yourself only to paraphrase: "let me check I've got this — you're saying X, and you're saying Y. Is that accurate?" This alone de-escalates most conflicts because it forces both sides to hear their position reflected back plainly.

## Healthy vs. destructive conflict

Task conflict — disagreement about ideas, approaches, or priorities — is a sign of a team that cares enough to argue about how to do the work well. A team with zero visible disagreement in Backlog Refinement or design discussions is more likely conflict-avoidant than perfectly aligned. The Scrum Master's job with healthy conflict is to keep it structured (see [Facilitation Techniques](facilitation-techniques.md) for divergent/convergent discussion) and make sure it actually resolves in a decision, not an unfinished argument that resurfaces every sprint.

Relationship conflict — personal friction, tone, feeling disrespected or dismissed — is different and more dangerous, because it corrodes psychological safety and tends to bleed into unrelated decisions ("of course he disagrees with my estimate, he never agrees with anything I say"). The tell is when the disagreement stops being about the specific technical question and starts being about the person — sarcasm, eye-rolling, talking over one another, or conflict that resurfaces in contexts that have nothing to do with the original issue. That needs a direct, private conversation, not a public facilitation technique. See [Team Conflict Between Two Senior Developers](../06-real-life-scenarios/10-team-conflict-between-two-senior-devs.md) for a full worked example of exactly this pattern.

## When to involve someone outside the team

Most team conflict is squarely within a Scrum Master's remit to facilitate. A few signals mean it's time to loop in a manager, HR, or someone with formal authority the Scrum Master doesn't have:

- The conflict involves harassment, discrimination, or anything touching physical or psychological safety — this is never a facilitation problem, escalate immediately.
- The same conflict has recurred across multiple facilitated conversations without resolving — a pattern, not an incident, usually means there's a structural or personal issue underneath that coaching-style facilitation alone won't fix.
- There's a real power imbalance (e.g., a tech lead vs. a junior developer) where the Scrum Master's neutral facilitation isn't enough to protect the less powerful party from being steamrolled again after the meeting ends.
- The conflict is actually a performance issue in disguise — one person consistently missing commitments, and the "conflict" is everyone else's frustration boiling over. That's a management conversation, not a team facilitation exercise.

A Scrum Master who escalates too readily undermines the team's own conflict-handling capability; one who never escalates leaves people exposed in situations facilitation genuinely can't fix. See [Shielding vs. Enabling](shielding-vs-enabling.md) for the same judgment call applied more broadly, and the [One-on-One Question Bank](../08-templates-and-toolkit/one-on-one-question-bank.md) for questions to use in a private follow-up conversation with someone involved in a conflict.
