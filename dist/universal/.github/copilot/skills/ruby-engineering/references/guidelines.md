# Ruby Engineering Guidelines

## Ruby And Rails

- Prefer modern Ruby syntax supported by the project.
- Respect Rails conventions when inside Rails, but do not hide core business rules inside callbacks unless necessary.
- Keep Gemfile additions justified and small.

## Design

- Prefer clear objects with one responsibility.
- Pass explicit collaborators instead of reaching into global state.
- Use modules for shared behavior only when the cohesion is real.

## Errors And Validation

- Validate inputs at the boundary.
- Raise clear exceptions for exceptional flows.
- Avoid silent nil-based failure chains when the caller needs certainty.

## Testing

- Use RSpec or Minitest according to the project.
- Cover validations, service flows, and user-visible request outcomes.
- Keep factories and fixtures minimal and intentional.

## Performance

- Eliminate N+1 queries and repeated allocations before micro-optimizing.
- Be cautious with broad callbacks, eager loading everything, or expensive serializer chains.
