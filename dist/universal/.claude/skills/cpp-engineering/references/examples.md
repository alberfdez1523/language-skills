# C++ Examples

## RAII Ownership

```cpp
#include <memory>
#include <string>

class FileProcessor {
public:
    explicit FileProcessor(std::string path) : path_(std::move(path)) {}

    [[nodiscard]] const std::string& path() const noexcept {
        return path_;
    }

private:
    std::string path_;
};
```

## Focused Function

```cpp
#include <string_view>

bool is_valid_username(std::string_view username) {
    return !username.empty() && username.size() <= 32;
}
```

## Test Shape

```cpp
TEST(ValidationTest, RejectsEmptyUsername) {
    EXPECT_FALSE(is_valid_username(""));
}
```
