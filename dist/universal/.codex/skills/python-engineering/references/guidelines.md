# Python Engineering Guidelines

## Code Style

- Follow PEP 8 by default.
- Prefer readability over compactness.
- Use meaningful names. Avoid placeholders like `df2`, `temp`, or `x1` when intent can be made explicit.
- Keep functions focused. Avoid mixing validation, I/O, transformation, and formatting in one block.
- Prefer early returns to deep nesting.
- Keep side effects explicit.

## Function Design

A good function should:

- do one thing
- have a clear name
- take a small number of parameters
- return predictable outputs
- be easy to test

Prefer:

```python
def load_transactions(path: str) -> pd.DataFrame:
    """Load transactions from a parquet file."""
    return pd.read_parquet(path)
```

Over:

```python
def do_data(path):
    return pd.read_parquet(path)
```

## Type Hints

Use type hints whenever practical.

Common forms:

- `list[str]`
- `dict[str, int]`
- `Path`
- `Iterable[str]`
- `Sequence[str]`
- `X | None`

Example:

```python
from pathlib import Path


def read_text_file(path: Path) -> str:
    return path.read_text(encoding="utf-8")
```

## Docstrings

Use docstrings for:

- public functions
- classes
- non-trivial internal helpers

Keep them concise. Explain purpose, inputs, outputs, and important constraints.

## Error Handling

- Fail loudly when failure is truly exceptional.
- Validate external inputs early.
- Raise clear exceptions with actionable messages.
- Avoid bare `except`.
- Catch only exceptions you can handle meaningfully.

Good:

```python
try:
    data = json.loads(raw_text)
except json.JSONDecodeError as exc:
    raise ValueError("Invalid JSON configuration file.") from exc
```

Bad:

```python
try:
    data = json.loads(raw_text)
except:
    data = {}
```

## Logging

Prefer logging over `print` in real applications.

Use:

- `logger.debug` for detailed debugging
- `logger.info` for major steps
- `logger.warning` for recoverable issues
- `logger.error` for failed operations
- `logger.exception` when preserving the stack trace matters

## Configuration

- Keep configuration outside business logic.
- Prefer environment variables or config files.
- Avoid hardcoding secrets, paths, or URLs.

## Project Structure

Small script project:

```text
project/
├── src/
│   └── app.py
├── tests/
├── requirements.txt
└── README.md
```

Larger app:

```text
project/
├── src/
│   ├── main.py
│   ├── config.py
│   ├── services/
│   ├── models/
│   ├── utils/
│   └── api/
├── tests/
├── pyproject.toml
├── .env.example
└── README.md
```

## Testing

Use `pytest` by default unless the project already uses `unittest`.

Test:

- expected inputs
- edge cases
- invalid inputs
- regression scenarios

Prefer deterministic tests. Avoid real external services unless they are central to the task.

## Performance

Before optimizing:

- identify what is slow
- measure if possible
- improve the biggest bottleneck first

Common priorities:

1. Better algorithm
2. Fewer conversions or copies
3. Better data structures
4. Vectorization or batching
5. Parallelism only when justified

## Data Work

For pandas and pipeline code:

- avoid chained assignments
- name intermediate steps clearly
- validate schema when useful
- prefer vectorized operations before `apply`
- be explicit about dtypes when it matters
- separate I/O from transformation logic

## APIs And Backends

For FastAPI, Flask, or backend services:

- separate routes from business logic
- validate request data
- return structured errors
- use dependency injection when useful
- avoid putting database logic directly in route handlers

## Refactoring

When refactoring:

- keep behavior unchanged unless asked otherwise
- improve naming first
- extract repeated logic
- reduce function complexity
- add tests before major structural changes when possible

## Security

Always avoid:

- executing untrusted input
- hardcoded secrets
- unsafe deserialization
- string-built SQL when parameterized queries exist
- leaking sensitive values in user-facing error messages
