# React Engineering Guidelines

## Components

- Prefer function components.
- Keep props explicit and well typed.
- Build accessible markup first, then layer behavior and styling.

## State

- Keep state local unless multiple branches truly need it.
- Prefer reducers for complex transitions.
- Avoid copying props into state unless there is a clear synchronization need.

## Effects

- Use effects only for synchronization with external systems.
- Keep dependency lists honest.
- Cancel or ignore stale async work when components unmount or inputs change.

## Data And Forms

- Separate fetch orchestration from display logic.
- Validate form input at boundaries and surface actionable errors.
- Avoid monolithic components that mix fetching, state machines, rendering, and business rules.

## Testing

- Prefer React Testing Library for user-visible behavior.
- Test accessibility-critical states, loading, error, and success flows.

## Performance

- Reduce broad context updates and expensive derived work.
- Use transitions, deferred values, or framework-native streaming tools where they fit the existing stack.
