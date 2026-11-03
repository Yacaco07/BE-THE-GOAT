# BE THE GOAT — Initial Architecture

## Architectural principles
- Keep presentation, application state, domain rules, and persistence separated.
- Keep match and career simulation logic independent from React components.
- Prefer explicit domain types and validated state transitions.
- Add complexity only when a real feature requires it.

## Planned layers
1. **App/UI:** Next.js routes, layouts, reusable visual components.
2. **Application:** career workflows and commands such as starting a career or advancing a date.
3. **Domain/game:** player, club, competition, career, and match rules.
4. **Persistence:** repositories and IndexedDB implementation for local saves.
5. **Data:** clearly sourced real-world datasets and clearly labeled fictional test fixtures.

## Planned technology
- Next.js + React
- TypeScript
- Tailwind CSS
- Zustand (only where shared client state is useful)
- Zod
- Vitest
- IndexedDB

## Proposed high-level structure
The exact folders should be introduced as the relevant modules are implemented. Avoid creating large numbers of empty directories in advance.

```text
src/
  app/
  components/
  game/
    career/
    match-engine/
    competition-engine/
    transfer-engine/
  database/
  data/
  i18n/
  store/
  types/
  utils/
tests/
docs/
```

## First implementation boundary
The first implementation should establish the runnable application, global layout, visual tokens, and a simple home screen. It should not include player simulation, match logic, transfers, or fabricated real-world datasets.
