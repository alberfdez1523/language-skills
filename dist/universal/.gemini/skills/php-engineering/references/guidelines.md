# PHP Engineering Guidelines

## Language And Tooling

- Prefer modern PHP 8.x syntax and types when the project supports it.
- Use Composer for dependency management.
- Respect the established formatter, linter, and static analysis setup.

## Design

- Prefer constructor injection and explicit dependencies.
- Use value objects or DTOs for structured input where it improves clarity.
- Keep domain rules outside controllers and framework facades when possible.

## Errors And Validation

- Validate requests at the boundary.
- Throw or map meaningful exceptions rather than returning ambiguous falsey values.
- Avoid leaking infrastructure failures directly to end users.

## Framework Work

- In Laravel or Symfony, keep controllers thin and services focused.
- Avoid embedding raw SQL or broad query logic in controllers.
- Be deliberate about caching and eager loading.

## Testing

- Use PHPUnit or Pest based on the existing project.
- Add feature tests for request flows and unit tests for isolated domain logic.

## Security

- Avoid unsafe deserialization, dynamic includes from user input, and direct string-built SQL.
- Keep secrets in environment configuration, not in code.
