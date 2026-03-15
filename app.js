const skills = [
  {
    id: "python-engineering",
    name: "Python",
    slug: "python-engineering",
    tagline: "production-ready scripts, APIs, notebooks, and data pipelines",
    highlights: ["Typing and maintainability", "Debugging and tests", "FastAPI and automation"],
  },
  {
    id: "java-engineering",
    name: "Java",
    slug: "java-engineering",
    tagline: "modern JVM services, layered apps, and clear enterprise code",
    highlights: ["JDK 17+ patterns", "Spring-friendly boundaries", "JUnit-ready structure"],
  },
  {
    id: "rust-engineering",
    name: "Rust",
    slug: "rust-engineering",
    tagline: "safe systems work, async services, and crate-quality APIs",
    highlights: ["Ownership-aware design", "Result-based error flows", "Cargo test and clippy"],
  },
  {
    id: "cpp-engineering",
    name: "C++",
    slug: "cpp-engineering",
    tagline: "modern native code with RAII, ownership, and performance discipline",
    highlights: ["C++20-friendly defaults", "Safer lifetime handling", "CMake and tests"],
  },
  {
    id: "typescript-engineering",
    name: "TypeScript",
    slug: "typescript-engineering",
    tagline: "strict typing, validated boundaries, and maintainable full-stack code",
    highlights: ["Runtime validation", "Strong module boundaries", "Vitest and strict configs"],
  },
  {
    id: "react-engineering",
    name: "React",
    slug: "react-engineering",
    tagline: "state, accessibility, hooks, and resilient UI architecture",
    highlights: ["Effect discipline", "Component boundaries", "Testing Library patterns"],
  },
  {
    id: "r-engineering",
    name: "R",
    slug: "r-engineering",
    tagline: "reproducible analysis, reporting, packages, and statistical workflows",
    highlights: ["Reproducibility first", "Data workflow clarity", "testthat-friendly functions"],
  },
  {
    id: "php-engineering",
    name: "PHP",
    slug: "php-engineering",
    tagline: "modern PHP services, APIs, and framework-friendly architecture",
    highlights: ["PHP 8.x types", "Laravel and Symfony discipline", "Security-conscious defaults"],
  },
  {
    id: "ruby-engineering",
    name: "Ruby",
    slug: "ruby-engineering",
    tagline: "Rails and Ruby delivery with clear objects and pragmatic conventions",
    highlights: ["Readable Ruby objects", "Thin controllers", "RSpec or Minitest support"],
  },
];

const agents = [
  { id: "codex", name: "OpenAI Codex", path: "~/.codex/skills", scope: "global", tags: ["native", "CLI"] },
  { id: "claude", name: "Claude Code", path: "~/.claude/skills", scope: "global", tags: ["native", "CLI"] },
  { id: "cursor", name: "Cursor", path: "~/.cursor/skills", scope: "global", tags: ["native", "IDE"] },
  { id: "gemini", name: "Gemini CLI", path: "~/.gemini/skills", scope: "global", tags: ["native", "CLI"] },
  { id: "cline", name: "Cline", path: "~/.cline/skills", scope: "global", tags: ["compatible"] },
  { id: "windsurf", name: "Windsurf", path: "~/.windsurf/skills", scope: "global", tags: ["compatible"] },
  { id: "opencode", name: "OpenCode", path: "~/.opencode/skills", scope: "global", tags: ["compatible"] },
  { id: "kiro", name: "Kiro", path: "~/.kiro/skills", scope: "global", tags: ["compatible"] },
  { id: "copilot", name: "GitHub Copilot", path: ".github/copilot/skills", scope: "repo-local", tags: ["compatible", "workspace"] },
  { id: "agents", name: "Agents-compatible", path: ".agents/skills", scope: "repo-local", tags: ["compatible", "workspace"] },
];

const repoSlugInput = document.querySelector("#repoSlug");
const skillSelect = document.querySelector("#skillSelect");
const agentSelect = document.querySelector("#agentSelect");
const skillsGrid = document.querySelector("#skillsGrid");
const agentMatrix = document.querySelector("#agentMatrix");
const agentTags = document.querySelector("#agentTags");
const heroCommand = document.querySelector("#heroCommand");

function renderSkillCards() {
  skillsGrid.innerHTML = skills
    .map(
      (skill) => `
        <article class="card skill-card">
          <div class="skill-card-header">
            <h3>${skill.name}</h3>
            <span class="language-pill">${skill.slug}</span>
          </div>
          <p>${skill.tagline}</p>
          <ul>
            ${skill.highlights.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function renderAgentMatrix() {
  agentMatrix.innerHTML = agents
    .map(
      (agent) => `
        <div class="matrix-row">
          <span>${agent.name}</span>
          <span><code>${agent.path}</code></span>
          <span>${agent.scope}</span>
        </div>
      `,
    )
    .join("");
}

function fillSelect(select, data, labelKey) {
  select.innerHTML = data
    .map((item) => `<option value="${item.id}">${item[labelKey]}</option>`)
    .join("");
}

function getSelectedSkill() {
  return skills.find((skill) => skill.id === skillSelect.value) ?? skills[0];
}

function getSelectedAgent() {
  return agents.find((agent) => agent.id === agentSelect.value) ?? agents[0];
}

function updateConfigurator() {
  const repoSlug = repoSlugInput.value.trim() || "albertofernandezpalomo/language-skills";
  const skill = getSelectedSkill();
  const agent = getSelectedAgent();

  document.querySelector("#npxCommand").textContent = `npx skills add ${repoSlug}`;
  document.querySelector("#bundleCommand").textContent =
    "powershell -ExecutionPolicy Bypass -File .\\scripts\\build-universal-bundle.ps1";
  document.querySelector("#manualPath").textContent = `${agent.path}/${skill.slug}`;
  heroCommand.textContent = `npx skills add ${repoSlug}`;

  agentTags.innerHTML = agent.tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");

  localStorage.setItem("language-skills-repo-slug", repoSlug);
}

function attachCopyButtons() {
  document.querySelectorAll(".copy-button").forEach((button) => {
    button.addEventListener("click", async () => {
      const target = document.getElementById(button.dataset.copyTarget);
      if (!target) return;

      await navigator.clipboard.writeText(target.textContent);
      const original = button.textContent;
      button.textContent = "Copied";
      setTimeout(() => {
        button.textContent = original;
      }, 1200);
    });
  });
}

function restoreRepoSlug() {
  const saved = localStorage.getItem("language-skills-repo-slug");
  if (saved) {
    repoSlugInput.value = saved;
  }
}

renderSkillCards();
renderAgentMatrix();
fillSelect(skillSelect, skills, "name");
fillSelect(agentSelect, agents, "name");
restoreRepoSlug();
skillSelect.value = skills[0].id;
agentSelect.value = agents[0].id;
updateConfigurator();
attachCopyButtons();

repoSlugInput.addEventListener("input", updateConfigurator);
skillSelect.addEventListener("change", updateConfigurator);
agentSelect.addEventListener("change", updateConfigurator);
