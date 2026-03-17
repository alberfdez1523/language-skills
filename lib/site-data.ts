export type Skill = {
  id: string;
  name: string;
  slug: string;
  logo: string;
  tagline: {
    es: string;
    en: string;
  };
  focus: {
    es: string[];
    en: string[];
  };
  accent: string;
};

export type Agent = {
  id: string;
  name: string;
  logo: string;
  path: string;
  scope: string;
  tags: string[];
};

export const repoSlug = "alberfdez1523/language-skills";
export const repoUrl = `https://github.com/${repoSlug}`;
export const repoZipUrl = `${repoUrl}/archive/refs/heads/main.zip`;

function makeMonogramLogo(label: string, color: string) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"><text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-size="${label.length > 1 ? 24 : 30}" font-family="Arial, Helvetica, sans-serif" font-weight="700" letter-spacing="1" fill="${color}">${label}</text><path d="M16 50H48" stroke="${color}" stroke-width="3" stroke-linecap="round" opacity="0.7"/></svg>`,
  )}`;
}

export const skills: Skill[] = [
  {
    id: "python-engineering",
    name: "Python",
    slug: "python-engineering",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    tagline: {
      es: "Para APIs, notebooks, automatización y pipelines con código que sigue siendo legible meses después.",
      en: "For APIs, notebooks, automation, pipelines, and code that still reads well six months later.",
    },
    focus: {
      es: ["Type hints y mantenibilidad", "FastAPI y automatización", "Tests, debugging y review"],
      en: ["Type hints and maintainability", "FastAPI and automation", "Tests, debugging, and review"],
    },
    accent: "#ffd43b",
  },
  {
    id: "java-engineering",
    name: "Java",
    slug: "java-engineering",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    tagline: {
      es: "Para servicios JVM, sistemas por capas y Java pensado como ingeniería real, no como ceremonia.",
      en: "For JVM services, layered systems, and Java that behaves like deliberate engineering instead of ceremony.",
    },
    focus: {
      es: ["Patrones JDK 17+", "Estructura segura para Spring", "JUnit y límites de servicio"],
      en: ["JDK 17+ patterns", "Spring-safe structure", "JUnit and service boundaries"],
    },
    accent: "#fca5a5",
  },
  {
    id: "rust-engineering",
    name: "Rust",
    slug: "rust-engineering",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
    tagline: {
      es: "Para crates, CLIs, servicios async y trabajo sensible al rendimiento con ownership explícito.",
      en: "For crates, CLIs, async services, and performance-sensitive work with explicit ownership.",
    },
    focus: {
      es: ["Diseño consciente de ownership", "Errores guiados por Result", "Hábitos con Cargo test y clippy"],
      en: ["Ownership-aware design", "Result-driven error handling", "Cargo test and clippy habits"],
    },
    accent: "#f59e0b",
  },
  {
    id: "cpp-engineering",
    name: "C++",
    slug: "cpp-engineering",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    tagline: {
      es: "Para código nativo, toolchains y componentes de bajo nivel que necesitan disciplina moderna en C++.",
      en: "For native code, toolchains, and low-level components that need modern C++ discipline.",
    },
    focus: {
      es: ["RAII y ownership", "CMake y testabilidad", "Rendimiento sin caos"],
      en: ["RAII and ownership", "CMake and testability", "Performance without chaos"],
    },
    accent: "#c4b5fd",
  },
  {
    id: "typescript-engineering",
    name: "TypeScript",
    slug: "typescript-engineering",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    tagline: {
      es: "Para tipado estricto, validación en bordes y código full-stack que no se rompe en silencio.",
      en: "For strict typing, boundary validation, and full-stack code that resists silent breakage.",
    },
    focus: {
      es: ["Tipado estricto", "Validación en runtime", "Vitest y diseño modular"],
      en: ["Strict typing", "Runtime validation", "Vitest and module design"],
    },
    accent: "#3178c6",
  },
  {
    id: "react-engineering",
    name: "React",
    slug: "react-engineering",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    tagline: {
      es: "Para sistemas UI resilientes, componentes accesibles y estado predecible incluso bajo presión.",
      en: "For resilient UI systems, accessible components, and state that stays predictable under pressure.",
    },
    focus: {
      es: ["Disciplina con effects", "Componentes accesibles", "Patrones con Testing Library"],
      en: ["Effect discipline", "Accessible components", "Testing Library patterns"],
    },
    accent: "#67e8f9",
  },
  {
    id: "r-engineering",
    name: "R",
    slug: "r-engineering",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    tagline: {
      es: "Para análisis reproducible, reporting, paquetes y flujos estadísticos que sobreviven al handoff.",
      en: "For reproducible analysis, reporting, packages, and statistical workflows that survive handoff.",
    },
    focus: {
      es: ["Reproducibilidad", "Claridad en flujos de datos", "Cobertura con testthat"],
      en: ["Reproducibility", "Data workflow clarity", "testthat coverage"],
    },
    accent: "#f9a8d4",
  },
  {
    id: "php-engineering",
    name: "PHP",
    slug: "php-engineering",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    tagline: {
      es: "Para Laravel, Symfony y servicios modernos en PHP con bordes tipados y arquitectura sensata.",
      en: "For Laravel, Symfony, and modern PHP services with typed boundaries and sane architecture.",
    },
    focus: {
      es: ["Diseño en PHP 8.x", "Límites del framework", "Defaults conscientes de seguridad"],
      en: ["PHP 8.x design", "Framework boundaries", "Security-conscious defaults"],
    },
    accent: "#93c5fd",
  },
  {
    id: "ruby-engineering",
    name: "Ruby",
    slug: "ruby-engineering",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
    tagline: {
      es: "Para Rails, gems y sistemas Ruby que siguen siendo legibles cuando escalan en complejidad.",
      en: "For Rails, gems, and Ruby systems that stay readable while they scale in complexity.",
    },
    focus: {
      es: ["Objetos Ruby simples", "Controllers finos en Rails", "RSpec o Minitest"],
      en: ["Plain Ruby objects", "Thin Rails controllers", "RSpec or Minitest"],
    },
    accent: "#fda4af",
  },
];

export const agents: Agent[] = [
  { id: "codex", name: "OpenAI Codex", logo: "https://impeccable.style/openai-logo-6323x4zd.png", path: "~/.codex/skills", scope: "global", tags: ["native", "cli"] },
  { id: "claude", name: "Claude Code", logo: "https://impeccable.style/claude-logo-0p9b6824.png", path: "~/.claude/skills", scope: "global", tags: ["native", "cli"] },
  { id: "cursor", name: "Cursor", logo: "https://impeccable.style/cursor-logo-5jxhjn17.png", path: "~/.cursor/skills", scope: "global", tags: ["native", "ide"] },
  { id: "gemini", name: "Gemini CLI", logo: "https://impeccable.style/gemini-logo-1f6kvbwc.png", path: "~/.gemini/skills", scope: "global", tags: ["native", "cli"] },
  { id: "cline", name: "Cline", logo: makeMonogramLogo("CL", "#7dd3fc"), path: "~/.cline/skills", scope: "global", tags: ["compatible"] },
  { id: "windsurf", name: "Windsurf", logo: makeMonogramLogo("WS", "#5eead4"), path: "~/.windsurf/skills", scope: "global", tags: ["compatible"] },
  { id: "opencode", name: "OpenCode", logo: "https://impeccable.style/opencode-logo-svpy0wcb.png", path: "~/.opencode/skills", scope: "global", tags: ["compatible"] },
  { id: "kiro", name: "Kiro", logo: "https://impeccable.style/kiro-logo-wk3s9bcy.png", path: "~/.kiro/skills", scope: "global", tags: ["compatible"] },
  { id: "copilot", name: "GitHub Copilot", logo: "https://impeccable.style/github-logo-tr9d8349.png", path: ".github/copilot/skills", scope: "repo-local", tags: ["workspace", "compatible"] },
  { id: "agents", name: "Agents-Compatible", logo: makeMonogramLogo("AG", "#f8fafc"), path: ".agents/skills", scope: "repo-local", tags: ["workspace", "compatible"] },
];
