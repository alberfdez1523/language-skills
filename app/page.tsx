"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";

import { InstallLab } from "@/components/install-lab";
import { agents, repoUrl, skills } from "@/lib/site-data";

type Locale = "es" | "en";

const copy = {
  es: {
    brand: "Language Skills",
    navSkills: "Lenguajes",
    navInstall: "Instalación",
    navAgents: "Agentes",
    titleTop: "skills de código",
    titleAccent: "para cualquier agente",
    subtitle:
      "Nueve disciplinas de ingeniería, diez destinos de agente y una instalación clara. Un catálogo más limpio, elegante y utilizable.",
    ctaPrimary: "Instalar",
    ctaSecondary: "Ver skills",
    statLanguages: "Lenguajes",
    statAgents: "Agentes",
    statInstall: "Método principal",
    sectionSkills: "Catálogo de skills",
    sectionSkillsText:
      "Cada lenguaje tiene su propia disciplina: enfoque, criterios de calidad y una forma concreta de trabajar con agentes.",
    sectionInstall: "Instalación",
    sectionInstallText:
      "Instala con un comando, genera el bundle local o descarga un ZIP con el repositorio completo para una instalación manual.",
    sectionAgents: "Compatible con",
    sectionAgentsText:
      "Rutas previstas para agentes globales y configuraciones dentro del repositorio, con logos visibles y menos fricción.",
    footerPrefix: "Repositorio:",
    localeButton: "English",
    scopeGlobal: "global",
    scopeLocal: "local",
  },
  en: {
    brand: "Language Skills",
    navSkills: "Languages",
    navInstall: "Install",
    navAgents: "Agents",
    titleTop: "code skills",
    titleAccent: "for any agent",
    subtitle:
      "Nine engineering disciplines, ten agent targets, and one clean install flow. A leaner, more elegant, more usable catalog.",
    ctaPrimary: "Install",
    ctaSecondary: "Browse skills",
    statLanguages: "Languages",
    statAgents: "Agents",
    statInstall: "Primary flow",
    sectionSkills: "Skill catalog",
    sectionSkillsText:
      "Each language gets its own discipline: focus, quality criteria, and a concrete way to work with coding agents.",
    sectionInstall: "Install",
    sectionInstallText:
      "Install with one command, generate the local bundle, or download a ZIP with the full repository for manual setup.",
    sectionAgents: "Works with",
    sectionAgentsText:
      "Prepared paths for global agents and repository-local setups, with visible logos and less friction.",
    footerPrefix: "Repository:",
    localeButton: "Español",
    scopeGlobal: "global",
    scopeLocal: "local",
  },
};

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("es");
  const t = copy[locale];
  const totals = useMemo(
    () => ({
      skills: skills.length,
      agents: agents.length,
    }),
    [],
  );

  return (
    <main className="site-shell">
      <div className="topbar" data-reveal>
        <span className="topbar-brand">{t.brand}</span>
        <nav className="topnav">
          <a href="#skills">{t.navSkills}</a>
          <a href="#install">{t.navInstall}</a>
          <a href="#agents">{t.navAgents}</a>
        </nav>
        <button type="button" className="locale-switch" onClick={() => setLocale(locale === "es" ? "en" : "es")}>
          {t.localeButton}
        </button>
      </div>

      <section className="hero" data-reveal>
        <span className="section-num">01</span>
        <h1>
          {t.titleTop}
          <br />
          <span className="accent">{t.titleAccent}</span>
        </h1>
        <p className="hero-sub">{t.subtitle}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#install">
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
            <strong>1</strong>
            <span>{t.statInstall}</span>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-header" data-reveal>
          <span className="section-num">02</span>
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
          <span className="section-num">03</span>
          <h2>{t.sectionInstall}</h2>
          <p>{t.sectionInstallText}</p>
        </div>
        <InstallLab locale={locale} />
      </section>

      <section className="section" id="agents">
        <div className="section-header" data-reveal>
          <span className="section-num">04</span>
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
