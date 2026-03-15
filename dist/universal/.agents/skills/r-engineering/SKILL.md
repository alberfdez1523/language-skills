---
name: r-engineering
description: Improve R development for data analysis, statistical modeling, automation, reproducible reports, and package work. Use when the user wants maintainable R with reproducible workflows, explicit data transformations, solid testing, and clear analysis structure.
metadata:
  author: Alberto Fernández Palomo
  short-description: Build, debug, and ship production-ready R
---

This skill improves R code for analysis, pipelines, reporting, and package-oriented work.

## Quick Start

1. Identify the context: script, notebook, Quarto or R Markdown report, package, or pipeline.
2. Inspect dependencies, project layout, style conventions, and reproducibility tools before editing.
3. Prefer explicit transformations, deterministic outputs, and reusable functions over long interactive-only flows.
4. Validate with the existing runner, checks, and sample data when possible.

## Core Rules

- Correctness and reproducibility first, then readability, then performance.
- Keep data import, cleaning, modeling, and visualization as separate concerns.
- Prefer named functions over copy-pasted notebook cells.
- Use packages consistently: tidyverse, data.table, base R, or mixed, but not chaotic switching.
- Make seeds, file paths, and environment dependencies explicit.

## Focus Areas

### Debugging

- Isolate whether failures come from data shape, factor handling, missing values, package versions, or non-deterministic state.

### Refactoring

- Extract repeated transformations into functions.
- Move report logic into modules when reuse matters.

### Performance

- Measure before rewriting.
- Improve joins, grouping, vectorization, and memory use before low-level tuning.

## References

- Read [references/guidelines.md](references/guidelines.md) for R-specific conventions.
- Read [references/examples.md](references/examples.md) for analysis and testing patterns.
