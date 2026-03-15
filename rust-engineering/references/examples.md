# Rust Examples

## Error-Aware File Loading

```rust
use std::fs;
use std::path::Path;

pub fn load_config(path: &Path) -> Result<String, std::io::Error> {
    fs::read_to_string(path)
}
```

## Domain Error With Context

```rust
use thiserror::Error;

#[derive(Debug, Error)]
pub enum ParseUserError {
    #[error("missing email field")]
    MissingEmail,
}

pub fn parse_email(input: &serde_json::Value) -> Result<&str, ParseUserError> {
    input
        .get("email")
        .and_then(|value| value.as_str())
        .ok_or(ParseUserError::MissingEmail)
}
```

## Test

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn parse_email_rejects_missing_field() {
        let payload = serde_json::json!({});
        let result = parse_email(&payload);
        assert!(matches!(result, Err(ParseUserError::MissingEmail)));
    }
}
```
