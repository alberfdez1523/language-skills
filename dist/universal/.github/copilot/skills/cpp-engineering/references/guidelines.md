# C++ Engineering Guidelines

## Language And Tooling

- Prefer the highest standard already supported by the project, ideally C++20 or newer.
- Respect the existing build system, usually CMake.
- Keep warnings high and treat sanitizer findings as real defects.

## Memory And Ownership

- Prefer stack allocation and value semantics where practical.
- Use `std::unique_ptr` for exclusive ownership and `std::shared_ptr` only when shared lifetime is necessary.
- Use `std::span`, `std::string_view`, and references for non-owning views when lifetimes are clear.

## Interfaces

- Make ownership and mutability visible in signatures.
- Use `const` consistently.
- Prefer simple class APIs over inheritance when composition works.

## Error Handling

- Follow project conventions for exceptions vs status types.
- Do not silently swallow failures.
- Add assertions for internal invariants and user-facing errors for boundary failures.

## Testing

- Prefer GoogleTest or Catch2 if the project already uses them.
- Add focused tests around ownership-sensitive code, parsing, and edge conditions.

## Performance

- Avoid unnecessary dynamic allocation, copies, and virtual dispatch in hot paths.
- Keep data contiguous when it matters.
- Optimize only after identifying the hot path.
