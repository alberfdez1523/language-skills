# Java Examples

## Service Boundary

```java
public record CreateUserCommand(String email, String displayName) {}

public record UserDto(UUID id, String email, String displayName) {}

public final class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDto createUser(CreateUserCommand command) {
        if (command.email() == null || command.email().isBlank()) {
            throw new IllegalArgumentException("email is required");
        }

        User user = new User(command.email().trim(), command.displayName().trim());
        User savedUser = userRepository.save(user);
        return new UserDto(savedUser.id(), savedUser.email(), savedUser.displayName());
    }
}
```

## JUnit 5 Test

```java
class UserServiceTest {
    @Test
    void createUserRejectsBlankEmail() {
        UserRepository repository = command -> { throw new AssertionError("not called"); };
        UserService service = new UserService(repository);

        assertThrows(
            IllegalArgumentException.class,
            () -> service.createUser(new CreateUserCommand(" ", "Alberto"))
        );
    }
}
```
