# Definition of Done Checklist

*A worked example Definition of Done for a typical web/mobile team — a starting template to adapt with your own team and Product Owner, not a universal standard to adopt as-is.*

This is a checklist, not the checklist. The [Definition of Done](../02-scrum-framework/definition-of-done.md) is supposed to reflect the specific quality standards, tooling, and organizational constraints of one team — a fintech team under compliance audit and a two-person indie mobile team have no business sharing an identical DoD, even though both are legitimately "doing Scrum." Use this as a workshop starting point with your team and Product Owner, delete what doesn't apply, and add what your organization actually requires. A DoD nobody agreed to as a team is not a Definition of Done, it's a policy handed down, and it won't hold under pressure the way a co-owned one does.

## How this differs from acceptance criteria

These get confused constantly, and the confusion causes real damage to the integrity of "Done":

- **Acceptance criteria** are specific to one Product Backlog Item, written or approved by the Product Owner, and describe what "correct" means for that particular piece of functionality. "Password reset email arrives within 60 seconds and expires after 24 hours" is an acceptance criterion.
- **Definition of Done** is a single, team-wide, cumulative bar that applies to *every* Product Backlog Item regardless of what it is. It doesn't say whether the password reset feature is correct — it says whether the increment it produced is trustworthy enough to call Done at all: was it reviewed, tested, documented, deployed to the environment the team agreed on.

An item can pass every acceptance criterion the PO wrote and still not be Done if it skipped code review or has no tests. Both bars have to clear, separately, for an item to count.

## Example checklist (web/mobile team)

### Code

- [ ] Code is written, merged to the trunk/main branch (or the team's agreed branching strategy is followed and merge is imminent).
- [ ] Code has been reviewed and approved by at least one other engineer, with review comments resolved, not just acknowledged.
- [ ] No commented-out dead code, debug logging, or temporary hacks left in the merged change.
- [ ] Coding standards / style guide / linter rules pass with no critical or high-severity warnings.

### Testing

- [ ] Unit tests written for new logic and passing in CI.
- [ ] Test coverage on touched files does not regress below the team's agreed threshold.
- [ ] Integration tests covering the changed behavior are passing in the CI pipeline.
- [ ] Manual exploratory or smoke test performed on the built artifact, not just on a local dev environment.
- [ ] No existing automated test suite is left red or skipped to get this item across the line.

### Quality and security

- [ ] No critical or high-severity findings from the static security scanner (e.g., dependency vulnerability scan, SAST) left untriaged.
- [ ] New third-party dependencies reviewed for license compatibility and known vulnerabilities before merge.
- [ ] Sensitive data (tokens, PII, credentials) is not logged or hardcoded.
- [ ] Feature flag added and defaulted to off, if the change ships incomplete or needs a controlled rollout.

### Documentation

- [ ] User-facing changes reflected in relevant docs, help center, or changelog.
- [ ] API contract changes reflected in API documentation (OpenAPI spec, internal wiki, whatever the team uses as source of truth).
- [ ] Runbook or on-call documentation updated if the change affects operational behavior (new alert, new failure mode, new dependency).
- [ ] Inline code comments explain *why*, not *what*, for any non-obvious decision.

### Deployment and release

- [ ] Change is deployed to and verified in a staging (or equivalent pre-production) environment, not just passing in CI.
- [ ] Database migrations, if any, are backward-compatible or a rollback plan is documented.
- [ ] Monitoring, logging, or alerting exists for new functionality that could fail silently in production.
- [ ] No known regression introduced in adjacent, previously-working functionality.

### Accessibility (user-facing changes)

- [ ] Interactive elements are reachable and operable via keyboard alone.
- [ ] Images and icons conveying meaning have appropriate alt text or ARIA labels.
- [ ] Color contrast meets WCAG 2.1 AA for text and meaningful UI elements.
- [ ] Screen reader announces dynamic content changes (form errors, loading states, toasts) correctly.

### Mobile-specific (if applicable)

- [ ] Verified on both a current and one older supported OS version per platform (iOS/Android).
- [ ] No new crashes introduced, checked against crash reporting on a test build.
- [ ] Respects platform-specific guidelines relevant to the change (safe areas, gesture conflicts, store review guidelines if the change touches anything store policies scrutinize).

### Product acceptance

- [ ] Product Owner has reviewed the working increment against the item's acceptance criteria and confirmed it meets them.
- [ ] Any deviation from the original acceptance criteria discovered during implementation has been explicitly discussed and re-agreed with the PO, not silently shipped.

## How to use this template

**Workshop it, don't inherit it.** Bring this list to a team session that includes the Product Owner — the DoD is a Scrum Team commitment, and a PO who wasn't part of setting it has no reason to trust that "Done" means what it claims to mean when it shows up at Sprint Review. Delete anything that doesn't apply to your product (accessibility rows for an internal admin tool used by three people may reasonably be lighter-weight than for a public consumer app; mobile rows obviously don't apply to a backend-only team).

**Every line has to be objectively checkable.** "Code looks good" is not a Definition of Done item; "approved by at least one other engineer in the PR" is. If a line can't be verified by looking at something concrete — a passing CI check, an approval, a deployed URL — it doesn't belong in the DoD, because the whole point of the artifact is that anyone can inspect whether it was actually met.

**It's a floor, not a ceiling, and it ratchets up over time.** A brand-new team with no CI pipeline yet shouldn't paste in the security-scan row from a five-year-old team with a mature pipeline — start with what the team can realistically and honestly meet today, and add stricter rows as capability improves. A common, healthy pattern: a Retrospective surfaces that a bug reached production because there was no integration test requirement, and the team adds that row to the DoD as a direct action item. The DoD should visibly get stricter over a team's life, never looser.

**Keep it visible, not buried.** Pin it to the board, the team wiki's most-visited page, or wherever the Sprint Backlog lives — it should be something anyone glances at during the Sprint, not something that only gets read once at onboarding.

**Anything not meeting it is not part of the increment presented at Sprint Review.** An item that's 90% done against the DoD is not Done — it goes back into the Product Backlog, refined with whatever's left, and reprioritized like anything else. Softening this in a crunch Sprint is exactly the kind of quiet theory violation covered in [Understanding and Applying the Scrum Framework](../03-professional-scrum-competencies/01-understanding-and-applying-scrum-framework.md) — the shape of "Done" survives, but its meaning doesn't.
