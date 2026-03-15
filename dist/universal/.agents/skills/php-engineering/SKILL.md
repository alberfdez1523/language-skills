---
name: php-engineering
description: Improve PHP development for web applications, APIs, packages, and business systems. Use when the user wants modern PHP with typed design, clear application boundaries, strong tests, secure defaults, and maintainable code for frameworks like Laravel or Symfony.
metadata:
  author: Alberto Fernández Palomo
  short-description: Build, debug, and ship production-ready PHP
---

This skill improves modern PHP work across frameworks, APIs, packages, and long-lived applications.

## Quick Start

1. Identify the stack: plain PHP, Laravel, Symfony, package, or legacy application.
2. Inspect the PHP version, Composer setup, coding standards, and tests before editing.
3. Prefer typed interfaces, explicit services, and clear framework boundaries.
4. Validate with the test suite and static analysis when present.

## Core Rules

- Correctness, clarity, and security first.
- Prefer modern PHP 8.x features that improve readability and type safety.
- Keep controllers thin and move business logic into services or domain objects.
- Avoid array-shaped data when DTOs, value objects, or typed collections communicate intent better.
- Respect the existing framework rather than rebuilding it in userland abstractions.

## Focus Areas

### Debugging

- Separate request validation, service logic, persistence, and serialization defects.
- Start with the narrowest reliable fix.

### Refactoring

- Improve naming and boundaries before introducing new containers or patterns.
- Reduce static helpers and hidden side effects.

### Performance

- Watch database queries, eager loading, repeated transformations, and unnecessary service resolution.

## References

- Read [references/guidelines.md](references/guidelines.md) for PHP conventions.
- Read [references/examples.md](references/examples.md) for implementation and test patterns.
