# RACI Matrix and Stakeholder Map for a Scrum Context

*A practical RACI template applied to Scrum activities, and a power/interest stakeholder-mapping technique for deciding who needs what level of engagement.*

Neither of these tools comes from the Scrum Guide, and that's worth saying up front rather than pretending otherwise. Scrum deliberately minimizes formal authority matrices in favor of a self-managing Developers group and a small set of clear accountabilities — introduced carelessly, a RACI chart can quietly reintroduce the command-and-control thinking Scrum is trying to get away from. Used well, though, both tools solve a real problem: a Scrum Team doesn't exist in a vacuum, and the people around it — line managers, compliance, other teams, executives, customers — often expect and need this kind of clarity even when the team itself runs on self-management internally. The Scrum Master is usually the one who ends up building both.

## RACI applied to Scrum

**R**esponsible does the work. **A**ccountable owns the outcome and answers for it (exactly one A per row — more than one accountable person is how decisions stall). **C**onsulted gives input before a decision, two-way conversation. **I**nformed is told after, one-way notification.

| Activity / Decision | Product Owner | Scrum Master | Developers | Stakeholders | Line/People Manager |
|---|---|---|---|---|---|
| Product Backlog ordering | A/R | C | C | C | I |
| Writing/refining a Sprint Goal | A | C | R | I | I |
| Selecting items into the Sprint Backlog | I | C | A/R | - | I |
| Deciding *how* work gets done (technical approach) | I | I | A/R | - | I |
| Facilitating Scrum events | I | A/R | C | - | I |
| Definition of Done — setting/changing it | C | C | A/R | I | C |
| Declaring a Product Backlog Item "Done" | C | I | A/R | I | I |
| Sprint Review — presenting the increment | A | C | R | I | I |
| Release / go-live decision | A | C | R | C | I |
| Removing team-level impediments | I | A/R | C | - | C |
| Removing organizational impediments | I | A/R | I | C | A/R (jointly) |
| Coaching the team's process and practices | I | A/R | C | - | I |
| Hiring, compensation, performance reviews of Developers | I | I | I | - | A/R |
| Stakeholder communication cadence/plan | A | R | I | C | I |

The last row that matters most to get right: **hiring and performance reviews are explicitly not a Scrum Master or Product Owner accountability.** Scrum has no built-in "resource manager" role, and in most real organizations someone still owns people-management duties outside the Scrum Team's accountabilities — usually a line/functional/engineering manager. Naming that boundary explicitly in your own RACI prevents two common failure modes: a Scrum Master who gets treated as a proxy manager and starts writing performance reviews (which destroys the trust needed for [servant leadership](../04-scrum-master-role/servant-leadership.md)), and a line manager who assumes they can direct Developers' day-to-day task selection because they hold the "A" on performance.

### Building your own

1. List the actual recurring decisions and activities in your context down the left column — steal from the table above, then add anything specific to your organization (budget approval, vendor selection, incident commander during an outage, architecture decisions that cross team boundaries).
2. List every role that touches your Scrum Team across the top — not just the three Scrum accountabilities. Include whoever actually shows up: a delivery/program manager, a QA lead if that's a separate function, a security or compliance reviewer, an executive sponsor.
3. Assign exactly one **A** per row. If you can't decide who that is, that's not a RACI-filling problem — it's an organizational design problem worth raising up, because it means nobody actually owns that decision today, RACI chart or not.
4. Walk it with the people in the columns, not just inside the Scrum Team — a RACI nobody outside the team has seen doesn't resolve the ambiguity it's meant to resolve.
5. Revisit it when the org changes — a reorg, a new stakeholder role, or a team taking on new scope (e.g., starting to own its own deploys) usually moves several rows.

## Stakeholder mapping: the power/interest grid

A simple 2x2 for deciding how much engagement effort a given stakeholder actually warrants, so you're not spending equal energy on the VP who signs off on budget and the adjacent team lead who's mildly curious.

```
                    High interest              Low interest
High power    ┌─────────────────────────┬─────────────────────────┐
              │   MANAGE CLOSELY         │   KEEP SATISFIED         │
              │   Engage often, involve  │   Enough info to stay    │
              │   in real decisions      │   comfortable, don't     │
              │                          │   over-invite            │
              ├─────────────────────────┼─────────────────────────┤
Low power     │   KEEP INFORMED          │   MONITOR                │
              │   Regular updates, low   │   Light touch, check in  │
              │   effort to involve      │   occasionally           │
              └─────────────────────────┴─────────────────────────┘
```

**High power / high interest — manage closely.** The people who can materially change the team's priorities or funding, and who are actively paying attention. A product sponsor who reviews progress monthly, a key enterprise customer whose renewal depends on a specific feature. These get real engagement — a seat at Sprint Review, direct access to the Product Owner, not just a status email.

**High power / low interest — keep satisfied.** Can shut the project down or redirect it, but isn't watching closely day to day. An executive sponsor two levels up, a compliance officer who only cares if something goes wrong. Give them enough visibility that they stay comfortable — a concise periodic summary — without pulling them into every ceremony, which tends to annoy this group rather than reassure them.

**Low power / high interest — keep informed.** Genuinely engaged but can't unilaterally change direction. An adjacent team lead whose roadmap depends on your API, a support/customer-success lead who hears the complaints first. Regular, honest updates cost little and build goodwill that pays off when you need something from them later — they often become informal allies.

**Low power / low interest — monitor.** Peripheral departments, teams several hops removed. Don't over-invest here; a standing invite to every ceremony for a stakeholder in this quadrant is effort spent for no benefit and dilutes the events for people who actually need to be there.

### Stakeholder map template

| Stakeholder | Power (H/L) | Interest (H/L) | Quadrant | Engagement approach | Cadence |
|---|---|---|---|---|---|
| VP of Product | H | H | Manage closely | Attends Sprint Review, monthly 1:1 with PO | Every Sprint |
| Enterprise customer (renewal Q3) | H | H | Manage closely | Direct line to PO for roadmap questions | Bi-weekly |
| CFO / budget owner | H | L | Keep satisfied | Quarterly written summary, no standing meeting | Quarterly |
| Adjacent team lead (API consumer) | L | H | Keep informed | Invited to relevant Sprint Reviews, Slack channel | As relevant |
| Customer support lead | L | H | Keep informed | Shares ticket trends into Refinement | Every Sprint |
| Facilities / IT department | L | L | Monitor | No standing engagement | As needed |

### How a Scrum Master actually uses this

- **Before Sprint Review**, use the map to decide the invite list — "manage closely" and relevant "keep informed" stakeholders belong in the room; inviting the whole "monitor" quadrant dilutes the event into a broadcast nobody engages with.
- **When a stakeholder is applying pressure the team shouldn't absorb directly** — pushing scope into the Sprint mid-cycle, demanding a status update that bypasses the Product Owner — knowing their quadrant tells you how to respond. A "keep satisfied" executive usually just needs a better-timed summary to back off; a "manage closely" stakeholder pushing on scope needs an actual conversation with the PO about trade-offs. See [Working with Difficult Stakeholders](../04-scrum-master-role/working-with-difficult-stakeholders.md) for the harder cases where the pressure doesn't resolve that easily.
- **Revisit the map at least quarterly**, or after any reorg, new customer, or major release — stakeholders migrate quadrants constantly. A customer who was "keep informed" during initial rollout can become "manage closely" the moment their contract renewal is on the line, and treating them at their old engagement level right when it matters most is a common, avoidable miss.
