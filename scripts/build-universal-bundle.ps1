$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$outputRoot = Join-Path $repoRoot "dist\\universal"

$skillNames = @(
  "python-engineering",
  "java-engineering",
  "rust-engineering",
  "cpp-engineering",
  "typescript-engineering",
  "react-engineering",
  "r-engineering",
  "php-engineering",
  "ruby-engineering"
)

$agentTargets = @(
  ".codex\\skills",
  ".claude\\skills",
  ".cursor\\skills",
  ".gemini\\skills",
  ".cline\\skills",
  ".windsurf\\skills",
  ".opencode\\skills",
  ".kiro\\skills",
  ".agents\\skills",
  ".github\\copilot\\skills"
)

if (Test-Path $outputRoot) {
  Remove-Item -Recurse -Force $outputRoot
}

New-Item -ItemType Directory -Path $outputRoot | Out-Null

foreach ($agentTarget in $agentTargets) {
  $agentRoot = Join-Path $outputRoot $agentTarget
  New-Item -ItemType Directory -Path $agentRoot -Force | Out-Null

  foreach ($skillName in $skillNames) {
    $source = Join-Path $repoRoot $skillName
    if (-not (Test-Path $source)) {
      throw "Skill directory not found: $source"
    }

    $destination = Join-Path $agentRoot $skillName
    Copy-Item -Recurse -Force $source $destination
  }
}

Write-Host "Universal bundle created at $outputRoot"
