# TypeScript Engineering Guidelines

## Type Safety

- Prefer `strict` TypeScript.
- Use `unknown` at untrusted boundaries and narrow it deliberately.
- Avoid `any` unless there is no practical alternative and the reason is documented.

## Design

- Keep modules small and purpose-driven.
- Prefer discriminated unions for branching domain states.
- Separate transport types from domain types when they diverge.

## Runtime Validation

- Types disappear at runtime. Validate API input, environment variables, and external payloads.
- Use the existing validation library if the project already has one.

## Async And Errors

- Return rejected promises with clear error types or messages.
- Avoid mixing callback and promise styles.
- Handle cancellation and stale requests explicitly in UI-heavy flows.

## Tooling And Tests

- Keep `tsconfig` strict unless the project intentionally relaxes it.
- Use Vitest, Jest, or the existing runner.
- Add tests around parsing, edge cases, and business rules.

## Performance

- Watch repeated object cloning, oversized dependency graphs, and accidental sequential async work.
- For frontend code, reduce unnecessary renders before adding memoization.
