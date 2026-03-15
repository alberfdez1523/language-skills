# Ruby Examples

## Focused Service Object

```ruby
class CreateUser
  def initialize(repository:)
    @repository = repository
  end

  def call(email:, display_name:)
    raise ArgumentError, "email is required" if email.to_s.strip.empty?

    repository.create(email: email.strip, display_name: display_name.to_s.strip)
  end

  private

  attr_reader :repository
end
```

## RSpec Shape

```ruby
RSpec.describe CreateUser do
  it "rejects blank email" do
    service = described_class.new(repository: double(create: nil))

    expect {
      service.call(email: " ", display_name: "Alberto")
    }.to raise_error(ArgumentError, "email is required")
  end
end
```
