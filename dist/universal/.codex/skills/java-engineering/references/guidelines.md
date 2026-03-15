# Java Engineering Guidelines

## Language And Build

- Prefer Java 17 or newer when the project allows it.
- Respect the existing build tool: Maven or Gradle.
- Keep dependency graphs tight. Add libraries only when they replace significant custom code.

## Design

- Prefer records for immutable DTOs and request or response carriers.
- Keep services focused on business rules, not transport or persistence details.
- Favor constructor injection over field injection.
- Keep domain rules independent from Spring annotations when practical.

## Code Style

- Use expressive class and method names.
- Keep methods short and return early when clarity improves.
- Prefer `List`, `Map`, and interfaces in signatures unless a concrete type matters.
- Use `Optional` for return values when absence is meaningful, not for fields or parameters.

## Errors And Validation

- Throw specific exceptions with actionable messages.
- Validate input at boundaries.
- Map infrastructure exceptions to domain or API-level failures deliberately.

## Persistence And APIs

- Avoid putting query logic in controllers.
- Keep JPA entities simple and avoid leaking them directly as API contracts.
- For Spring Boot, keep controllers thin and push orchestration into services.

## Testing

- Use JUnit 5 by default.
- Add Mockito only when doubles are truly needed.
- Prefer integration tests around critical repository or controller flows.

## Performance

- Watch for N+1 queries, repeated mapping, unnecessary stream chains, and excessive object creation.
- Consider virtual threads or structured concurrency only when they fit the runtime and deployment model.
