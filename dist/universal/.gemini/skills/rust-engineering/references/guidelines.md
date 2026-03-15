# Rust Engineering Guidelines

## Language Defaults

- Prefer the current stable toolchain unless the project already relies on nightly.
- Keep public APIs explicit and unsurprising.
- Use modules and crates to enforce boundaries instead of comment-only discipline.

## Ownership And Types

- Prefer borrowing over cloning when it is simple and clear.
- Prefer owned values over complex lifetime signatures when the API would otherwise become fragile.
- Use `String`, `PathBuf`, or owned structs at boundaries when lifetime plumbing adds noise.

## Errors

- Return `Result<T, E>` from fallible functions.
- Use `thiserror` for reusable domain errors and `anyhow` only at application boundaries when appropriate.
- Add context to I/O and parsing failures.

## Async And Concurrency

- Keep async at the edges. Avoid making everything async by default.
- Be explicit about cancellation, backpressure, and shared mutable state.
- Prefer message passing or scoped ownership to broad locking.

## Testing And Tooling

- Use `cargo test` and table-driven test cases where possible.
- Keep `clippy` clean unless there is a documented exception.
- Prefer property tests only where they add real coverage value.

## Performance

- Watch allocations, repeated UTF-8 conversions, excessive `clone`, and oversized buffers.
- Reach for iterators when they stay readable. Prefer loops when they are clearer.
