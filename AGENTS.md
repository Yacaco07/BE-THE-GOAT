# BE THE GOAT — Development Rules

## Project vision
BE THE GOAT is an original browser-based football player career simulator. The user creates and develops one player, starting in youth football, and experiences a dynamic career through training, selection, matches, contracts, transfers, competitions, relationships, media, achievements, and retirement.

The player does not directly control matches. Matches are simulated automatically and presented through concise highlights, statistics, ratings, and results.

## Product principles
- Build a polished, premium, minimalist interface using black, white, and neutral gray.
- Support Brazilian Portuguese first, with English and Spanish planned.
- Prioritize a deep, coherent career simulation and fast calendar progression.
- Use local browser saves initially, with IndexedDB as the planned persistence layer.
- Distinguish verified real-world data from fictional/demo data. Never present invented data as real.
- Respect licensing and attribution requirements for player data, photos, club badges, and competition marks.

## Engineering rules
1. Work in small, reviewable stages. Do not implement multiple major systems in one change.
2. Before editing, inspect the existing code and understand the current structure.
3. Do not delete, overwrite, or replace working files without a clear reason.
4. Prefer simple, maintainable, typed, testable code over premature complexity.
5. Keep game simulation logic separate from UI components.
6. Validate inputs and important game-state transitions.
7. Add or update tests for simulation rules and critical behavior.
8. Run available lint, type-check, test, and build commands after changes. Report commands that could not be run.
9. Do not add dependencies unless they are needed; explain why they are introduced.
10. Never commit secrets, API keys, credentials, or private personal data.

## Workflow
For each stage:
1. Explain the goal and scope.
2. Inspect relevant files.
3. Propose the smallest safe implementation.
4. Implement only the approved scope.
5. Run checks and report results honestly.
6. Summarize changed files and any limitations.
7. Wait for approval before starting the next stage.

## Simulation integrity
- A match score must equal the sum of its recorded goals.
- Suspended or unavailable players must not be selected.
- Injured players must follow their recovery status.
- A fixture must not be processed more than once.
- League tables and player statistics must update consistently.
- Fast simulation must not silently discard career-critical records.
- Use reproducible random seeds where practical for match simulation and debugging.

## Current delivery strategy
Build the foundation first. Do not begin the full match engine, transfer AI, complete world database, or other advanced systems until the app foundation and core data model are reviewed and approved.
