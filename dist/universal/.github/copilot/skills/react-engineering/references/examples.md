# React Examples

## Focused Component

```tsx
type UserCardProps = {
  name: string;
  email: string;
};

export function UserCard({ name, email }: UserCardProps) {
  return (
    <article aria-label={`User ${name}`}>
      <h2>{name}</h2>
      <p>{email}</p>
    </article>
  );
}
```

## Test Shape

```tsx
import { render, screen } from "@testing-library/react";

it("renders user details", () => {
  render(<UserCard name="Alberto" email="alberto@example.com" />);
  expect(screen.getByRole("heading", { name: "Alberto" })).toBeInTheDocument();
});
```
