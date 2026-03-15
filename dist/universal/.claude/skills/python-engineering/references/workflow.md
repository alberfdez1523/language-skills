# Recommended Python Workflow

When given a Python task, follow this order.

## Understand The Task

Identify whether the user wants:

- new code
- debugging
- refactoring
- optimization
- tests
- architecture
- notebook cleanup

## Inspect Constraints

Check:

- Python version
- existing stack
- project structure
- performance constraints
- deployment environment
- user preference for libraries

## Choose Approach

- Prefer the simplest reliable implementation.
- Reuse the existing stack when reasonable.
- Avoid unnecessary dependencies.

## Implement

- Write complete imports.
- Add type hints.
- Add docstrings where helpful.
- Handle edge cases.
- Keep logic modular.

## Validate

Before finalizing, check:

- Will it run as written?
- Are imports complete?
- Are names consistent?
- Are there hidden assumptions?
- Are failure cases handled?

## Improve Quality

Where appropriate:

- add tests
- suggest refactor opportunities
- suggest performance improvements
- suggest better structure

## Present Result

Return:

1. a concise explanation
2. complete code
3. run instructions when needed
4. optional next improvements

## Debugging Workflow

1. Read the error carefully.
2. Locate the failing layer: import/setup, I/O, parsing, transformation, model/training, or API/runtime.
3. Explain the likely root cause.
4. Propose the minimal fix.
5. If useful, provide an improved version of the block.
6. Add a quick validation step.

## Optimization Workflow

1. Identify what is slow.
2. Confirm whether the limit is CPU, memory, disk, network, or algorithmic.
3. Remove unnecessary work.
4. Reduce copies and conversions.
5. Batch operations.
6. Vectorize where appropriate.
7. Measure impact.
