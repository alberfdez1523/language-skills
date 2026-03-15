# PHP Examples

## Typed Service

```php
final class CreateUserService
{
    public function __construct(private UserRepository $users)
    {
    }

    public function handle(string $email, string $displayName): User
    {
        if ($email === '') {
            throw new InvalidArgumentException('Email is required.');
        }

        return $this->users->create($email, $displayName);
    }
}
```

## PHPUnit Shape

```php
public function test_it_rejects_blank_email(): void
{
    $repository = $this->createMock(UserRepository::class);
    $service = new CreateUserService($repository);

    $this->expectException(InvalidArgumentException::class);
    $service->handle('', 'Alberto');
}
```
