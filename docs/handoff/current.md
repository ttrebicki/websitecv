# Handoff

## Goal and stack

Public portfolio for Tomasz Trębicki. Next.js, then Netlify. One page plus a text CV PDF.

## Phase and milestone

Code milestones have orchestrator-pair acceptance. This phase is repository and hosting: one GitHub remote for ttrebicki and one Netlify site. The user reviews the live site after deploy.

## Design source

Figma `websitecv`, page `0:1`. Frames `6:2`, `6:14`, `6:15`, `6:16`, `6:17`.

## Closed decisions

See `docs/agent/decisions.md`.

## File owners and forbidden paths

Foundation owns the shared app files, including `app/page.tsx`, `app/layout.tsx`, `app/registry.tsx`, and `tsconfig.json`. Frame, hero, work, profile, contact, and CV own the paths in `docs/agent/plan.md`. Orchestration docs stay orchestrator-only. `scripts/` is outside the Next typecheck.

## Accepted milestones

Design scope. Content map. Plan. Foundation, including the Open Graph title fix.

## Open blocking findings

none

## Next wave: owner, owned paths, acceptance criteria, content that owner must not invent

No implementer. The orchestrator skeptic challenges the sections-milestone acceptance in `docs/agent/verdicts.md`. Do not open GitHub or Netlify before that accept.

## User attention already requested

none. GitHub is `ttrebicki`. Netlify CLI is authorized.

## Do not redo

Do not redo the content map, the plan, or the plain-agent build. Do not reopen the Figma login on localhost:8787. The separate repo `/Users/tomasz/websitecv-plain` stays paused.

Do not reopen the frame list. Do not link the motivational letter. Do not loop the entrance motion.

## Next chat id

none
