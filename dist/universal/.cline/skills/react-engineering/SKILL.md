---
name: react-engineering
description: Improve React development for applications, design systems, dashboards, and product UIs. Use when the user wants production-ready React with accessible components, predictable state, resilient data flows, maintainable hooks, and strong frontend engineering discipline.
metadata:
  author: Alberto Fernández Palomo
  short-description: Build, debug, and ship production-ready React
---

This skill improves React code quality across components, apps, and UI systems. It focuses on engineering quality rather than purely visual styling.

## Quick Start

1. Identify the runtime: React SPA, Next.js, Remix, Electron, or embedded component library.
2. Inspect the existing state model, routing, data fetching, styling system, and test setup first.
3. Prefer accessible components, local state by default, and clear effect boundaries.
4. Validate with the current test runner, type checker, and lint rules.

## Core Rules

- Correctness, accessibility, and maintainability come before clever component patterns.
- Keep state close to where it is used.
- Prefer derived values over duplicated state.
- Effects should synchronize with external systems, not replace regular rendering logic.
- Follow existing compiler or framework guidance before adding `useMemo` or `useCallback`.

## Focus Areas

### Debugging

- Separate rendering bugs, stale state, effect loops, and async race conditions.
- Apply the smallest reliable fix before broad rewrites.

### Refactoring

- Split oversized components by responsibility, not by arbitrary file size.
- Extract reusable hooks only when behavior is genuinely shared.

### Performance

- Remove unnecessary renders, broad context churn, and duplicate fetching before adding memoization.

## References

- Read [references/guidelines.md](references/guidelines.md) for React-specific conventions.
- Read [references/examples.md](references/examples.md) for component and test patterns.
