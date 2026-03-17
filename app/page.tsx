"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";

import { InstallLab } from "@/components/install-lab";
import { agents, repoUrl, skills } from "@/lib/site-data";

type Locale = "es" | "en";

const copy = {
  es: {
    brand: "Language Skills",
    brandAlt: "Logo de Language Skills",
    navSkills: "Lenguajes",
    navProof: "Antes y después",
    navInstall: "Instalación",
    navAgents: "Agentes",
    heroKicker: "Skills, prompts y reglas por lenguaje",
    titleTop: "Mejora el código",
    titleAccent: "que generan tus agentes de IA",
    subtitle:
      "Catálogo de skills, prompts y reglas específicas para 9 lenguajes y 10 agentes diferentes, desde Cursor y Claude hasta Copilot, Cline o Windsurf.",
    ctaPrimary: "Instalar ahora",
    ctaSecondary: "Ver catálogo",
    heroSignalTitle: "Lo que cambian estas skills",
    statLanguages: "Lenguajes",
    statAgents: "Agentes",
    statInstall: "Instalación",
    statInstallValue: "npx",
    sectionProof: "Qué cambian en la práctica",
    sectionProofKicker: "El qué y el porqué",
    sectionProofText:
      "Sin contexto, un agente suele escribir código útil pero inconsistente. Con una skill por lenguaje, el agente recibe mejores defaults de arquitectura, testing, tipos, debugging y criterios de calidad.",
    sectionSkills: "Catálogo de skills",
    sectionSkillsKicker: "Elige una disciplina",
    sectionSkillsText:
      "Cada skill define cómo debería pensar y ejecutar un agente en ese lenguaje: estructura, pruebas, errores, rendimiento y decisiones de diseño.",
    sectionInstall: "Instalación",
    sectionInstallKicker: "Configúralo en minutos",
    sectionInstallText:
      "Elige lenguaje y agente, copia el comando y deja preparada una instalación global o local sin pelearte con rutas manuales.",
    sectionAgents: "Compatible con",
    sectionAgentsKicker: "Sin casarte con una sola herramienta",
    sectionAgentsText:
      "Preparado para agentes globales y para configuraciones dentro del repositorio, con rutas claras y assets integrados que funcionan bien en modo oscuro.",
    footerPrefix: "Repositorio:",
    localeButton: "English",
    scopeGlobal: "global",
    scopeLocal: "local",
  },
  en: {
    brand: "Language Skills",
    brandAlt: "Language Skills logo",
    navSkills: "Languages",
    navProof: "Before and after",
    navInstall: "Install",
    navAgents: "Agents",
    heroKicker: "Skills, prompts, and language-specific rules",
    titleTop: "Improve the code",
    titleAccent: "your AI agents generate",
    subtitle:
      "A catalog of skills, prompts, and language-specific rules for 9 languages and 10 different agents, from Cursor and Claude to Copilot, Cline, and Windsurf.",
    ctaPrimary: "Install now",
    ctaSecondary: "Browse catalog",
    heroSignalTitle: "What these skills improve",
    statLanguages: "Languages",
    statAgents: "Agents",
    statInstall: "Install",
    statInstallValue: "npx",
    sectionProof: "What changes in practice",
    sectionProofKicker: "The what and the why",
    sectionProofText:
      "Without context, an agent usually writes code that works but drifts fast. With a language skill, the agent gets stronger defaults for architecture, testing, typing, debugging, and quality criteria.",
    sectionSkills: "Skill catalog",
    sectionSkillsKicker: "Pick a discipline",
    sectionSkillsText:
      "Each skill defines how an agent should think and execute in that language: structure, testing, errors, performance, and design decisions.",
    sectionInstall: "Install",
    sectionInstallKicker: "Set it up in minutes",
    sectionInstallText:
      "Choose a language and an agent, copy the command, and get a global or repo-local install ready without manual path hunting.",
    sectionAgents: "Works with",
    sectionAgentsKicker: "No single-tool lock in",
    sectionAgentsText:
      "Prepared for global agents and repository-local setups, with clear paths and assets that hold up in a dark UI.",
    footerPrefix: "Repository:",
    localeButton: "Español",
    scopeGlobal: "global",
    scopeLocal: "local",
  },
};

const heroSignals: Record<
  Locale,
  Array<{ title: string; detail: string }>
> = {
  es: [
    { title: "Python", detail: "Más tipos útiles, menos scripts frágiles" },
    { title: "Rust", detail: "Ownership, errores y pruebas mejor guiados" },
    { title: "React", detail: "Componentes más accesibles y estado más predecible" },
  ],
  en: [
    { title: "Python", detail: "Better type discipline, fewer fragile scripts" },
    { title: "Rust", detail: "Clearer ownership, error handling, and testing" },
    { title: "React", detail: "More accessible components and steadier state" },
  ],
};

const proofCases: Record<
  Locale,
  Array<{
    id: string;
    language: string;
    accent: string;
    beforeLabel: string;
    afterLabel: string;
    beforeTitle: string;
    afterTitle: string;
    beforePoints: string[];
    afterPoints: string[];
    beforeCode: string;
    afterCode: string;
    result: string;
  }>
> = {
  es: [
    {
      id: "python",
      language: "Python",
      accent: "#ffd43b",
      beforeLabel: "Sin skill",
      afterLabel: "Con python-engineering",
      beforeTitle: "Funciona hoy, pero se degrada rápido",
      afterTitle: "Mejores defaults para mantenerlo vivo",
      beforePoints: [
        "helpers gigantes y responsabilidades mezcladas",
        "errores ad hoc y casi nada de tipado",
        "tests opcionales o inexistentes",
      ],
      afterPoints: [
        "módulos pequeños y límites claros",
        "type hints útiles y errores más previsibles",
        "debugging y pruebas planteados desde el inicio",
      ],
      beforeCode: `def process(data):\n    result = []\n    for item in data:\n        if item.get("active"):\n            result.append(item["email"].lower())\n    return result`,
      afterCode: `from collections.abc import Iterable\n\ndef collect_active_emails(users: Iterable[dict[str, object]]) -> list[str]:\n    emails: list[str] = []\n    for user in users:\n        if user.get("active") is True and isinstance(user.get("email"), str):\n            emails.append(user["email"].lower())\n    return emails`,
      result: "Resultado: menos deuda accidental cuando el agente toca APIs, automatización o notebooks.",
    },
    {
      id: "rust",
      language: "Rust",
      accent: "#f59e0b",
      beforeLabel: "Sin skill",
      afterLabel: "Con rust-engineering",
      beforeTitle: "Código que compila con fricción innecesaria",
      afterTitle: "Ownership y errores mejor encajados",
      beforePoints: [
        "clones innecesarios y ownership poco pensado",
        "panic! donde debería vivir Result",
        "cero disciplina con cargo test o clippy",
      ],
      afterPoints: [
        "flujos de ownership más claros",
        "errores modelados con Result y contexto",
        "hábitos de validación antes de darlo por bueno",
      ],
      beforeCode: `fn load_name(input: &str) -> String {\n    let data = std::fs::read_to_string(input).unwrap();\n    data.trim().to_string()\n}`,
      afterCode: `fn load_name(path: &str) -> Result<String, std::io::Error> {\n    let data = std::fs::read_to_string(path)?;\n    Ok(data.trim().to_owned())\n}`,
      result: "Resultado: menos iteraciones absurdas para conseguir código idiomático, seguro y mantenible.",
    },
    {
      id: "typescript",
      language: "TypeScript",
      accent: "#3178c6",
      beforeLabel: "Sin skill",
      afterLabel: "Con typescript-engineering",
      beforeTitle: "Tipos flojos y validación tarde",
      afterTitle: "Contratos más fuertes en los bordes",
      beforePoints: [
        "uso de any para salir del paso",
        "errores de API descubiertos demasiado tarde",
        "módulos acoplados a respuestas sin validar",
      ],
      afterPoints: [
        "tipado estricto desde la entrada",
        "runtime checks donde realmente importan",
        "módulos más fáciles de testear y refactorizar",
      ],
      beforeCode: `export async function getUser(id: string) {\n  const res = await fetch('/api/users/' + id);\n  return res.json();\n}`,
      afterCode: `type User = { id: string; email: string; active: boolean };\n\nexport async function getUser(id: string): Promise<User> {\n  const res = await fetch('/api/users/' + id);\n  const data: unknown = await res.json();\n  if (!isUser(data)) throw new Error('Invalid user payload');\n  return data;\n}`,
      result: "Resultado: menos roturas silenciosas cuando el agente toca front, back o integraciones compartidas.",
    },
    {
      id: "react",
      language: "React",
      accent: "#61dafb",
      beforeLabel: "Sin skill",
      afterLabel: "Con react-engineering",
      beforeTitle: "Estado y efectos sin demasiada disciplina",
      afterTitle: "Componentes más previsibles y accesibles",
      beforePoints: [
        "effects que mezclan carga, eventos y render",
        "componentes difíciles de probar",
        "accesibilidad tratada como detalle final",
      ],
      afterPoints: [
        "responsabilidades separadas por hook y componente",
        "estado más estable en cambios rápidos",
        "mejores defaults de accesibilidad y testing",
      ],
      beforeCode: `useEffect(() => {\n  fetch('/api/items').then((r) => r.json()).then(setItems);\n}, [filter, page, sort]);`,
      afterCode: `const loadItems = useEffectEvent(async () => {\n  const nextItems = await fetchItems({ filter, page, sort });\n  startTransition(() => setItems(nextItems));\n});\n\nuseEffect(() => {\n  void loadItems();\n}, [loadItems]);`,
      result: "Resultado: menos componentes frágiles cuando el agente genera interfaces, dashboards o flows complejos.",
    },
  ],
  en: [
    {
      id: "python",
      language: "Python",
      accent: "#ffd43b",
      beforeLabel: "Without a skill",
      afterLabel: "With python-engineering",
      beforeTitle: "Works today, drifts tomorrow",
      afterTitle: "Better defaults for long-lived code",
      beforePoints: [
        "oversized helpers and mixed responsibilities",
        "ad hoc errors and almost no typing",
        "tests missing or treated as optional",
      ],
      afterPoints: [
        "smaller modules and clearer boundaries",
        "useful type hints and steadier error handling",
        "debugging and tests considered from the start",
      ],
      beforeCode: `def process(data):\n    result = []\n    for item in data:\n        if item.get("active"):\n            result.append(item["email"].lower())\n    return result`,
      afterCode: `from collections.abc import Iterable\n\ndef collect_active_emails(users: Iterable[dict[str, object]]) -> list[str]:\n    emails: list[str] = []\n    for user in users:\n        if user.get("active") is True and isinstance(user.get("email"), str):\n            emails.append(user["email"].lower())\n    return emails`,
      result: "Result: less accidental debt when the agent touches APIs, automation, or notebooks.",
    },
    {
      id: "rust",
      language: "Rust",
      accent: "#f59e0b",
      beforeLabel: "Without a skill",
      afterLabel: "With rust-engineering",
      beforeTitle: "Code that compiles with unnecessary friction",
      afterTitle: "Ownership and errors fit together better",
      beforePoints: [
        "unnecessary clones and weak ownership decisions",
        "panic! where Result should exist",
        "no habit around cargo test or clippy",
      ],
      afterPoints: [
        "clearer ownership flows",
        "Result-based errors with useful context",
        "validation habits before calling it done",
      ],
      beforeCode: `fn load_name(input: &str) -> String {\n    let data = std::fs::read_to_string(input).unwrap();\n    data.trim().to_string()\n}`,
      afterCode: `fn load_name(path: &str) -> Result<String, std::io::Error> {\n    let data = std::fs::read_to_string(path)?;\n    Ok(data.trim().to_owned())\n}`,
      result: "Result: fewer wasted iterations to get idiomatic, safe, maintainable Rust.",
    },
    {
      id: "typescript",
      language: "TypeScript",
      accent: "#3178c6",
      beforeLabel: "Without a skill",
      afterLabel: "With typescript-engineering",
      beforeTitle: "Loose types and late validation",
      afterTitle: "Stronger contracts at the edges",
      beforePoints: [
        "using any to move fast",
        "API mistakes discovered too late",
        "modules coupled to unvalidated responses",
      ],
      afterPoints: [
        "strict typing from input onward",
        "runtime checks where they matter",
        "modules that are easier to test and refactor",
      ],
      beforeCode: `export async function getUser(id: string) {\n  const res = await fetch('/api/users/' + id);\n  return res.json();\n}`,
      afterCode: `type User = { id: string; email: string; active: boolean };\n\nexport async function getUser(id: string): Promise<User> {\n  const res = await fetch('/api/users/' + id);\n  const data: unknown = await res.json();\n  if (!isUser(data)) throw new Error('Invalid user payload');\n  return data;\n}`,
      result: "Result: fewer silent breakages when the agent touches frontends, backends, or shared integrations.",
    },
    {
      id: "react",
      language: "React",
      accent: "#61dafb",
      beforeLabel: "Without a skill",
      afterLabel: "With react-engineering",
      beforeTitle: "State and effects with weak discipline",
      afterTitle: "More predictable, accessible components",
      beforePoints: [
        "effects mixing loading, events, and rendering",
        "components that are hard to test",
        "accessibility treated as a last-minute detail",
      ],
      afterPoints: [
        "clearer responsibilities across hooks and components",
        "steadier state under fast-changing inputs",
        "better defaults for accessibility and testing",
      ],
      beforeCode: `useEffect(() => {\n  fetch('/api/items').then((r) => r.json()).then(setItems);\n}, [filter, page, sort]);`,
      afterCode: `const loadItems = useEffectEvent(async () => {\n  const nextItems = await fetchItems({ filter, page, sort });\n  startTransition(() => setItems(nextItems));\n});\n\nuseEffect(() => {\n  void loadItems();\n}, [loadItems]);`,
      result: "Result: fewer fragile components when the agent generates interfaces, dashboards, or complex flows.",
    },
  ],
};

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("es");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const t = copy[locale];
  const totals = useMemo(
    () => ({
      skills: skills.length,
      agents: agents.length,
    }),
    [],
  );

  useEffect(() => {
    const saved = localStorage.getItem("ls-theme") as "dark" | "light" | null;
    if (saved === "light") {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("ls-theme", next);
  }

  return (
    <main className="site-shell">
      <div className="topbar" data-reveal>
        <div className="topbar-inner">
          <a className="topbar-brand" href="#top">
            <span className="topbar-brand-mark">
              <img src="/logo.png" alt={t.brandAlt} width="40" height="40" />
            </span>
            <span className="topbar-brand-text">
              <strong>{t.brand}</strong>
              <small>{t.heroKicker}</small>
            </span>
          </a>
          <nav className="topnav" aria-label="Primary">
            <a href="#proof">{t.navProof}</a>
            <a href="#skills">{t.navSkills}</a>
            <a href="#install">{t.navInstall}</a>
            <a href="#agents">{t.navAgents}</a>
          </nav>
          <div className="topbar-actions">
            <a className="topbar-cta" href="#install">
              {t.ctaPrimary}
            </a>
            <button type="button" className="locale-switch" onClick={() => setLocale(locale === "es" ? "en" : "es")}>
              {t.localeButton}
            </button>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </div>

      <section className="hero" data-reveal id="top">
        <span className="section-num">01</span>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="section-kicker hero-kicker">{t.heroKicker}</p>
            <h1>
              {t.titleTop} <span className="accent">{t.titleAccent}</span>
            </h1>
            <p className="hero-sub">{t.subtitle}</p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-hero" href="#install">
                {t.ctaPrimary}
              </a>
              <a className="btn btn-ghost" href="#skills">
                {t.ctaSecondary}
              </a>
            </div>
            <div className="hero-meta">
              <div className="hero-stat">
                <strong>{totals.skills}</strong>
                <span>{t.statLanguages}</span>
              </div>
              <div className="hero-stat">
                <strong>{totals.agents}</strong>
                <span>{t.statAgents}</span>
              </div>
              <div className="hero-stat">
                <strong>{t.statInstallValue}</strong>
                <span>{t.statInstall}</span>
              </div>
            </div>
          </div>
          <div className="hero-panel">
            <div className="hero-panel-header">
              <p className="hero-signals-title">{t.heroSignalTitle}</p>
            </div>
            <div className="hero-signals-grid">
              {heroSignals[locale].map((signal) => (
                <div key={signal.title} className="hero-signal">
                  <span>{signal.title}</span>
                  <strong>{signal.detail}</strong>
                </div>
              ))}
            </div>
            <div className="hero-panel-footer">
              <a className="hero-panel-link" href="#proof">
                {t.navProof}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="proof">
        <div className="section-header" data-reveal>
          <span className="section-num">02</span>
          <p className="section-kicker">{t.sectionProofKicker}</p>
          <h2>{t.sectionProof}</h2>
          <p>{t.sectionProofText}</p>
        </div>

        <div className="comparison-grid" data-reveal style={{ ["--delay" as string]: "0.06s" } as CSSProperties}>
          {proofCases[locale].map((example) => (
            <article
              key={example.id}
              className="comparison-card"
              style={{ ["--proof-accent" as string]: example.accent } as CSSProperties}
            >
              <div className="comparison-card-head">
                <span className="comparison-language">{example.language}</span>
              </div>
              <div className="comparison-columns">
                <div className="comparison-column is-before">
                  <span className="comparison-label">{example.beforeLabel}</span>
                  <h3>{example.beforeTitle}</h3>
                  <ul>
                    {example.beforePoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <pre className="comparison-code"><code>{example.beforeCode}</code></pre>
                </div>
                <div className="comparison-column is-after">
                  <span className="comparison-label">{example.afterLabel}</span>
                  <h3>{example.afterTitle}</h3>
                  <ul>
                    {example.afterPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <pre className="comparison-code"><code>{example.afterCode}</code></pre>
                </div>
              </div>
              <p className="comparison-result">{example.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-header" data-reveal>
          <span className="section-num">03</span>
          <p className="section-kicker">{t.sectionSkillsKicker}</p>
          <h2>{t.sectionSkills}</h2>
          <p>{t.sectionSkillsText}</p>
        </div>

        <div className="skills-grid" data-reveal style={{ ["--delay" as string]: "0.06s" } as CSSProperties}>
          {skills.map((skill) => (
            <article
              key={skill.id}
              className="skill-card"
              style={{ ["--skill-accent" as string]: skill.accent } as CSSProperties}
            >
              <div className="skill-card-label">
                <div className="skill-card-logo-wrap">
                  <img className="skill-card-logo" src={skill.logo} alt={skill.name} loading="lazy" />
                  <code>{skill.slug}</code>
                </div>
                <span className="dot" aria-hidden="true" />
              </div>
              <h3>{skill.name}</h3>
              <p className="tagline">{skill.tagline[locale]}</p>
              <ul>
                {skill.focus[locale].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="install">
        <div className="section-header" data-reveal>
          <span className="section-num">04</span>
          <p className="section-kicker">{t.sectionInstallKicker}</p>
          <h2>{t.sectionInstall}</h2>
          <p>{t.sectionInstallText}</p>
        </div>
        <InstallLab locale={locale} />
      </section>

      <section className="section" id="agents">
        <div className="section-header" data-reveal>
          <span className="section-num">05</span>
          <p className="section-kicker">{t.sectionAgentsKicker}</p>
          <h2>{t.sectionAgents}</h2>
          <p>{t.sectionAgentsText}</p>
        </div>

        <div className="agents-grid" data-reveal style={{ ["--delay" as string]: "0.06s" } as CSSProperties}>
          {agents.map((agent) => (
            <div key={agent.id} className="agent-card">
              <div className="agent-card-head">
                <img className="agent-card-logo" src={agent.logo} alt={agent.name} loading="lazy" />
                <p className="agent-card-name">{agent.name}</p>
              </div>
              <p className="agent-card-path">{agent.path}</p>
              <span
                className={`agent-card-scope ${agent.scope === "global" ? "scope-global" : "scope-local"}`}
              >
                {agent.scope === "global" ? t.scopeGlobal : t.scopeLocal}
              </span>
            </div>
          ))}
        </div>
      </section>

      <footer className="site-footer" data-reveal>
        <p>
          {t.footerPrefix}{" "}
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            alberfdez1523/language-skills
          </a>
        </p>
      </footer>
    </main>
  );
}
