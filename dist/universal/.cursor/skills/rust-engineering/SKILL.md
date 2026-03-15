---
name: rust-engineering
description: Improve Rust development for CLIs, services, systems code, tooling, and libraries. Use when the user wants idiomatic Rust with strong error handling, ownership-aware design, predictable performance, safe concurrency, and maintainable crate structure.
metadata:
  author: Alberto Fernández Palomo
  short-description: Build, debug, and ship production-ready Rust
---

This skill improves Rust work across crates, services, async applications, and performance-sensitive systems.

## Quick Start

1. Identify the crate type: binary, library, workspace member, service, or tool.
2. Inspect the edition, dependency set, feature flags, async runtime, and lint setup first.
3. Prefer straightforward ownership models, explicit error handling, and composable modules.
4. Validate with `cargo test`, `cargo clippy`, and formatting when available.

## Core Rules

- Correctness and safety first, then clarity, then performance.
- Prefer idiomatic ownership over fighting the borrow checker.
- Use `Result`-based error flows and encode invariants in types where it helps.
- Avoid `unwrap` and `expect` in library code unless the invariant is truly internal and documented.
- Keep unsafe code isolated, justified, and as small as possible.

## Focus Areas

### Debugging

- Isolate whether the defect comes from ownership, lifetimes, async state, parsing, or external I/O.
- Fix the minimal issue before widening the abstraction surface.

### Refactoring

- Reduce cloning before introducing lifetime-heavy APIs.
- Prefer small modules and explicit traits over over-generalized generic layers.

### Performance

- Measure with realistic data.
- Focus on allocations, copies, contention, and algorithmic shape before low-level tuning.

## References

- Read [references/guidelines.md](references/guidelines.md) for Rust-specific conventions.
- Read [references/examples.md](references/examples.md) for idiomatic implementation patterns.
