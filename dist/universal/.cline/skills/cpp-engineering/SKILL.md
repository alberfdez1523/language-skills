---
name: cpp-engineering
description: Improve C++ development for libraries, native applications, systems code, performance-sensitive components, and cross-platform tooling. Use when the user wants modern C++ with RAII, safer memory management, clear ownership, strong build discipline, and maintainable tests.
metadata:
  author: Alberto Fernández Palomo
  short-description: Build, debug, and ship production-ready C++
---

This skill improves modern C++ work across applications, libraries, tools, and low-level components.

## Quick Start

1. Identify the standard level, compiler, build system, and target platform.
2. Inspect warning settings, sanitizers, tests, and ownership patterns before changing code.
3. Prefer modern C++ with clear lifetime management and explicit interfaces.
4. Validate with the project build, tests, and static analysis where available.

## Core Rules

- Correctness and safety first, then maintainability, then performance.
- Prefer C++20 or the project standard when supported.
- Use RAII, value semantics, and standard library facilities before custom machinery.
- Avoid raw `new` or `delete`, hidden ownership, and macro-heavy abstractions when better options exist.
- Keep template complexity justified by real reuse or performance needs.

## Focus Areas

### Debugging

- Start with ownership, object lifetime, undefined behavior, concurrency, or ABI boundaries.
- Use the smallest safe fix first.

### Refactoring

- Clarify ownership and interface contracts before changing algorithms.
- Reduce manual memory management and shared mutable state.

### Performance

- Measure first.
- Focus on data layout, allocations, copies, contention, and algorithmic cost before micro-tuning.

## References

- Read [references/guidelines.md](references/guidelines.md) for modern C++ conventions.
- Read [references/examples.md](references/examples.md) for preferred implementation patterns.
