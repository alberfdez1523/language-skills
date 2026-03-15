# Examples

## Example 1: Clean Script

User request:

`Create a Python script that reads a CSV, removes duplicates, and saves a parquet file.`

Preferred response style:

```python
from pathlib import Path

import pandas as pd


def clean_csv_to_parquet(input_path: str, output_path: str) -> None:
    """
    Read a CSV file, remove duplicate rows, and save the result as parquet.

    Args:
        input_path: Path to the source CSV file.
        output_path: Path where the parquet file will be written.
    """
    csv_path = Path(input_path)
    parquet_path = Path(output_path)

    if not csv_path.exists():
        raise FileNotFoundError(f"Input CSV not found: {csv_path}")

    df = pd.read_csv(csv_path)
    df = df.drop_duplicates()
    parquet_path.parent.mkdir(parents=True, exist_ok=True)
    df.to_parquet(parquet_path, index=False)


if __name__ == "__main__":
    clean_csv_to_parquet("data/raw/data.csv", "data/processed/data.parquet")
```

Why this is good:

- clear function name
- validation
- docstring
- no hidden side effects
- ready to run

## Example 2: Debugging

User request:

`Why does this code fail with KeyError?`

Preferred response pattern:

1. explain the probable cause
2. show the minimal fix
3. show a safer improved version

Example:

```python
required_columns = {"user_id", "email"}
missing_columns = required_columns - set(df.columns)

if missing_columns:
    raise ValueError(
        f"Missing required columns: {sorted(missing_columns)}"
    )

emails = df["email"].str.lower()
```

## Example 3: Refactoring

Bad:

```python
def process(data):
    result = []
    for x in data:
        if x["active"] == True:
            if x["score"] > 10:
                result.append(x["name"].strip().lower())
    return result
```

Better:

```python
from collections.abc import Iterable


def extract_active_high_score_names(records: Iterable[dict]) -> list[str]:
    """Return normalized names for active records with score greater than 10."""
    normalized_names: list[str] = []

    for record in records:
        is_active = record.get("active") is True
        score = record.get("score", 0)

        if is_active and score > 10:
            name = str(record.get("name", "")).strip().lower()
            if name:
                normalized_names.append(name)

    return normalized_names
```

## Example 4: Pytest

```python
from my_module import extract_active_high_score_names


def test_extract_active_high_score_names_basic_case() -> None:
    records = [
        {"active": True, "score": 20, "name": " Alice "},
        {"active": False, "score": 20, "name": "Bob"},
        {"active": True, "score": 5, "name": "Carol"},
    ]

    result = extract_active_high_score_names(records)

    assert result == ["alice"]


def test_extract_active_high_score_names_ignores_empty_names() -> None:
    records = [
        {"active": True, "score": 20, "name": "   "},
    ]

    result = extract_active_high_score_names(records)

    assert result == []
```

## Example 5: FastAPI Structure

Prefer:

- thin routes
- service layer
- schemas separated

Example:

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()


class SumRequest(BaseModel):
    a: float
    b: float


class SumResponse(BaseModel):
    result: float


def compute_sum(a: float, b: float) -> float:
    return a + b


@app.post("/sum", response_model=SumResponse)
def sum_values(payload: SumRequest) -> SumResponse:
    try:
        result = compute_sum(payload.a, payload.b)
        return SumResponse(result=result)
    except Exception as exc:
        raise HTTPException(status_code=500, detail="Unexpected server error.") from exc
```
