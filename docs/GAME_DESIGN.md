# BE THE GOAT — Initial Game Design

## High concept
A deep football player career simulator for the browser. The player lives the career of a single footballer, starting around age 16–17 in a youth academy.

## Player experience
The user makes career decisions and follows the consequences. The user does not control the team or manually play matches.

## Match presentation
Matches are automatically simulated and shown as a timeline of important highlights, final score, player rating, and individual statistics. The match engine should generate events from the underlying simulation rather than scripted drama.

## Career pillars
- Player creation and identity.
- Youth academy and first-team progression.
- Training, attributes, potential, and form.
- Coach trust, squad status, and teammate relationships.
- Contracts, salary, agent, loans, and transfers.
- Domestic and international competitions.
- National-team opportunities.
- Press, reputation, awards, records, and career legacy.
- Dynamic world with AI clubs and player movement.
- Retirement and career history.

## Simulation integrity
Game systems must agree with each other. Goals determine the score; player availability affects selection; fixtures are processed once; results update standings and statistics; and advancing a full season must preserve career-critical records.

## Data integrity and licensing
Real-world player and club information must come from appropriately licensed or permitted sources. Any placeholder or generated data must be clearly labeled as fictional.

## Initial technical direction
- Browser application built with Next.js, React, and TypeScript.
- Tailwind CSS for styling.
- Zustand for client state where appropriate.
- Zod for runtime validation.
- Vitest for unit tests.
- IndexedDB for local career saves.
- Portuguese (Brazil) as the first language, with English and Spanish planned.

These are initial design decisions and may be refined through explicit, reviewed stages.
