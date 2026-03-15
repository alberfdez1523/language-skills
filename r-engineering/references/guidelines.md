# R Engineering Guidelines

## Reproducibility

- Keep package versions explicit when the project uses `renv`.
- Set seeds for stochastic workflows.
- Avoid hidden dependencies on the working directory or manually created global variables.

## Data Work

- Separate loading, cleaning, transformation, modeling, and plotting.
- Name intermediate objects clearly.
- Handle `NA` intentionally rather than implicitly dropping or coercing values.

## Packages And Structure

- Reuse the project's preferred ecosystem: tidyverse, data.table, or base R.
- Convert repeated notebook logic into functions or package modules.
- Use Quarto or R Markdown for reports, but keep heavy business logic outside the document body.

## Testing

- Use `testthat` for reusable functions and packages.
- Test edge cases around factor levels, missing columns, and grouped summaries.

## Performance

- Prefer vectorized operations over row-wise loops when clarity stays reasonable.
- Watch large copies, repeated joins, and unnecessary conversions between tibble, data.table, and base frames.
