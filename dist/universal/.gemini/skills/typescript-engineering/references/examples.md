# TypeScript Examples

## Boundary Validation

```ts
type User = {
  id: string;
  email: string;
};

export function parseUser(input: unknown): User {
  if (
    typeof input !== "object" ||
    input === null ||
    typeof (input as { id?: unknown }).id !== "string" ||
    typeof (input as { email?: unknown }).email !== "string"
  ) {
    throw new Error("Invalid user payload");
  }

  return {
    id: (input as { id: string }).id,
    email: (input as { email: string }).email,
  };
}
```

## Test Shape

```ts
import { describe, expect, it } from "vitest";

describe("parseUser", () => {
  it("rejects invalid payloads", () => {
    expect(() => parseUser({})).toThrow("Invalid user payload");
  });
});
```
