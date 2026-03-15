---
name: typescript-engineering
description: Improve TypeScript development for frontend apps, backend services, libraries, and tooling. Use when the user wants strict typing, safer boundaries, maintainable modules, reliable runtime validation, and production-ready TypeScript for Node, browser, or full-stack projects.
metadata:
  author: Alberto Fernández Palomo
  short-description: Build, debug, and ship production-ready TypeScript
---

This skill improves TypeScript quality across applications, packages, APIs, and tooling.

## Quick Start

1. Identify runtime context: Node, browser, React, Next.js, CLI, or library.
2. Inspect `tsconfig`, package manager, lint rules, tests, and build tooling before editing.
3. Prefer strict typing, small modules, and explicit boundary validation.
4. Validate with the type checker and the existing test runner.

## Core Rules

- Correctness first, then maintainability, then performance.
- Keep `strict` mode assumptions intact.
- Use types to model domain rules, but validate unknown data at runtime.
- Prefer explicit return types on exported APIs and reusable utilities.
- Avoid broad `any`, assertion-heavy flows, and over-abstracted generic helpers.

## Focus Areas

### Debugging

- Separate type-level issues from runtime issues.
- Fix unsafe boundary assumptions before redesigning internals.

### Refactoring

- Improve naming and module boundaries before introducing advanced type machinery.
- Replace repeated object-shape assumptions with shared types or schemas.

### Performance

- Prefer simpler data flow, fewer re-renders or transformations, and controlled async concurrency before micro-optimizing.

## References

- Read [references/guidelines.md](references/guidelines.md) for TypeScript conventions.
- Read [references/examples.md](references/examples.md) for coding and test patterns.
