---
name: java-engineering
description: Improve Java development for services, libraries, CLIs, and enterprise applications. Use when the user wants production-ready Java with modern JDK practices, strong typing, clear architecture, reliable tests, and maintainable builds with Maven, Gradle, or Spring.
metadata:
  author: Alberto Fernández Palomo
  short-description: Build, debug, and ship production-ready Java
---

This skill improves Java implementation quality across backend services, batch jobs, libraries, and large codebases.

## Quick Start

1. Identify the target stack: plain Java, Spring Boot, Jakarta, CLI, or library.
2. Inspect the build system, JDK version, tests, and dependency layout before changing code.
3. Prefer clear object boundaries, explicit contracts, and modern Java features that improve readability.
4. Validate with the existing test runner and build tool whenever possible.

## Core Rules

- Correctness first, then maintainability, then performance.
- Prefer Java 17 or newer idioms when the project supports them.
- Keep framework code thin and business logic testable outside controllers or adapters.
- Favor immutability, small classes, records for value carriers, and clear exception paths.
- Avoid static global state, reflection-heavy shortcuts, and overly clever generic abstractions.

## Focus Areas

### Debugging

- Start from the failing layer: controller, service, persistence, serialization, or concurrency.
- Fix the smallest defect first, then suggest a larger cleanup only when justified.

### Refactoring

- Preserve behavior.
- Separate orchestration from domain logic.
- Reduce class responsibility before introducing new patterns.

### Performance

- Measure before tuning.
- Prioritize query shape, allocation pressure, batching, and algorithmic changes over micro-optimizations.

## References

- Read [references/guidelines.md](references/guidelines.md) for Java conventions and architecture defaults.
- Read [references/examples.md](references/examples.md) for preferred coding and testing patterns.
