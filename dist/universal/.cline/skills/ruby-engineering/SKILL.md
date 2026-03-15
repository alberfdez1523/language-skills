---
name: ruby-engineering
description: Improve Ruby development for Rails applications, gems, scripts, and services. Use when the user wants idiomatic Ruby with clear objects, maintainable Rails structure, reliable tests, pragmatic metaprogramming, and production-ready application design.
metadata:
  author: Alberto Fernández Palomo
  short-description: Build, debug, and ship production-ready Ruby
---

This skill improves Ruby and Rails work across applications, services, scripts, and reusable gems.

## Quick Start

1. Identify the context: Ruby script, gem, Rails app, job worker, or service.
2. Inspect the Ruby version, Gemfile, framework patterns, and tests before editing.
3. Prefer small objects, explicit dependencies, and readable control flow.
4. Validate with the project's test runner and lint tools where available.

## Core Rules

- Correctness and clarity first.
- Prefer plain Ruby objects and focused modules over magic-heavy abstractions.
- Keep Rails controllers thin and models free from unrelated orchestration.
- Use metaprogramming sparingly and only when it makes behavior clearer, not more opaque.
- Preserve the framework conventions already established in the codebase.

## Focus Areas

### Debugging

- Isolate whether the failure is routing, params, model validation, callbacks, background jobs, or serialization.
- Apply the minimal reliable fix first.

### Refactoring

- Reduce callback chains and implicit behavior.
- Extract service objects only when they genuinely clarify a business flow.

### Performance

- Watch query counts, eager loading, object churn, and N+1 patterns before tuning Ruby internals.

## References

- Read [references/guidelines.md](references/guidelines.md) for Ruby conventions.
- Read [references/examples.md](references/examples.md) for code and test patterns.
