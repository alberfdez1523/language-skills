# R Examples

## Focused Transformation

```r
summarise_sales <- function(df) {
  dplyr::summarise(
    dplyr::group_by(df, region),
    total_sales = sum(sales, na.rm = TRUE),
    .groups = "drop"
  )
}
```

## Testthat Shape

```r
test_that("summarise_sales aggregates by region", {
  input <- tibble::tibble(
    region = c("ES", "ES", "US"),
    sales = c(10, 15, 8)
  )

  result <- summarise_sales(input)

  expect_equal(result$total_sales[result$region == "ES"], 25)
})
```
