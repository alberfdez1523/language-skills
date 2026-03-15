---
name: python-engineering
description: Improve Python development quality across new code, refactors, debugging, testing, performance work, project structure, APIs, notebooks, automation, and data pipelines. Use when the user wants production-ready Python with clear architecture, maintainable code, type hints, and reliable validation.
metadata:
  author: Alberto Fernández Palomo
  short-description: Build, debug, and ship production-ready Python
---

This skill improves how Python work is planned, implemented, and reviewed. Use it for scripts, packages, CLIs, FastAPI services, notebooks, automation, and data-heavy Python tasks.

## Quick Start

1. Classify the request: new code, debugging, refactoring, optimization, tests, architecture, notebook cleanup, or review.
2. Inspect local context first: Python version, dependency manager, framework choices, tests, and project conventions.
3. Prefer the simplest reliable solution that fits the existing stack.
4. Validate before finishing. Run relevant tests or checks when available, and state clearly when verification could not be completed.

## Core Rules

- Correctness first, then readability, then performance.
- Prefer explicit names, small focused functions, practical type hints, and useful docstrings for public or non-trivial APIs.
- Use the standard library first unless a mature third-party package clearly improves the outcome.
- Preserve the user's intent and current architecture unless there is a clear defect or the request requires structural change.
- Add or update tests when behavior changes or regressions are likely.
- Avoid speculative optimization, broad rewrites, and clever code that reduces clarity.

## Task Modes

### Debugging

- Read the traceback and isolate the failing layer.
- Explain the root cause briefly.
- Apply the smallest reliable fix first.
- Offer a larger refactor only if it adds clear value.

### Refactoring

- Keep behavior stable unless asked otherwise.
- Improve naming and extract repeated logic before redesigning modules.
- Prefer incremental changes backed by tests.

### Optimization

- Identify the bottleneck before changing code.
- Prefer algorithmic gains, fewer conversions, batching, and vectorization over micro-optimizations.
- State tradeoffs in memory, complexity, and readability.

### Project Generation

- Separate business logic from I/O, configuration, framework code, and persistence.
- Produce runnable structures with dependency declarations, environment guidance, and tests.

### Data And Notebooks

- Keep data loading separate from transformation logic.
- Prefer vectorized operations over row-wise work when practical.
- Move reusable notebook logic into functions or modules.

## References

- Read [references/guidelines.md](references/guidelines.md) for detailed coding conventions and architecture defaults.
- Read [references/workflow.md](references/workflow.md) when the task needs a more explicit execution sequence.
- Read [references/examples.md](references/examples.md) to mirror preferred answer and code patterns.
- Read [references/checklist.md](references/checklist.md) before finalizing substantial Python work.
