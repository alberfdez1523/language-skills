"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

import { agents, repoSlug as defaultRepoSlug, repoZipUrl, skills } from "@/lib/site-data";

type Locale = "es" | "en";
const legacyRepoSlug = "albertofernandezpalomo/language-skills";

const copyLabelByLocale = {
  es: { copy: "Copiar", copied: "Copiado" },
  en: { copy: "Copy", copied: "Copied" },
};

const zipActionByLocale = {
  es: "Descargar ZIP",
  en: "Download ZIP",
};

const tagLabels: Record<string, Record<Locale, string>> = {
  native: { es: "nativo", en: "native" },
  cli: { es: "CLI", en: "CLI" },
  ide: { es: "IDE", en: "IDE" },
  compatible: { es: "compatible", en: "compatible" },
  workspace: { es: "workspace", en: "workspace" },
};

export function InstallLab({ locale }: { locale: Locale }) {
  const [repoSlug, setRepoSlug] = useState(defaultRepoSlug);
  const [skillId, setSkillId] = useState(skills[0]?.id ?? "");
  const [agentId, setAgentId] = useState(agents[0]?.id ?? "");
  const [copiedTarget, setCopiedTarget] = useState<string | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("language-skills-repo-slug");
    if (saved && saved !== legacyRepoSlug) {
      setRepoSlug(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("language-skills-repo-slug", repoSlug);
  }, [repoSlug]);

  const selectedSkill = skills.find((skill) => skill.id === skillId) ?? skills[0];
  const selectedAgent = agents.find((agent) => agent.id === agentId) ?? agents[0];

  const npxCommand = `npx skills add ${repoSlug || defaultRepoSlug}`;
  const bundleCommand = "powershell -ExecutionPolicy Bypass -File .\\scripts\\build-universal-bundle.ps1";
  const manualPath = `${selectedAgent.path}/${selectedSkill.slug}`;
  const zipCommand = repoZipUrl;

  const ui = {
    es: {
      repo: "Repositorio",
      skill: "Skill de lenguaje",
      agent: "Agente objetivo",
      selection: "Selección activa",
      manualNote: selectedSkill.tagline.es,
      installTitle: "Instalador universal",
      bundleTitle: "Comando para bundle",
      manualTitle: "Ruta manual",
      zipTitle: "ZIP manual",
      terminalTitle: "Terminal de instalación",
      terminalSubtitle: "Comandos listos para copiar",
    },
    en: {
      repo: "Repository",
      skill: "Language skill",
      agent: "Target agent",
      selection: "Active selection",
      manualNote: selectedSkill.tagline.en,
      installTitle: "Universal installer",
      bundleTitle: "Bundle command",
      manualTitle: "Manual path",
      zipTitle: "Manual ZIP",
      terminalTitle: "Install terminal",
      terminalSubtitle: "Commands ready to copy",
    },
  }[locale];

  async function copyText(label: string, value: string) {
    await navigator.clipboard.writeText(value);
    setCopiedTarget(label);
    window.setTimeout(() => setCopiedTarget(null), 1200);
  }

  return (
    <div
      className="install-lab"
      data-reveal
      style={{ ["--delay" as string]: "0.06s" } as CSSProperties}
    >
      <div className="install-controls">
        <label className="field">
          <span>{ui.repo}</span>
          <input
            type="text"
            value={repoSlug}
            spellCheck={false}
            onChange={(event) => setRepoSlug(event.target.value)}
          />
        </label>

        <div className="field-grid">
          <label className="field">
            <span>{ui.skill}</span>
            <select value={skillId} onChange={(event) => setSkillId(event.target.value)}>
              {skills.map((skill) => (
                <option key={skill.id} value={skill.id}>
                  {skill.name}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>{ui.agent}</span>
            <select value={agentId} onChange={(event) => setAgentId(event.target.value)}>
              {agents.map((agent) => (
                <option key={agent.id} value={agent.id}>
                  {agent.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="tag-row">
          {selectedAgent.tags.map((tag) => (
            <span key={tag} className="tag">
              {tagLabels[tag]?.[locale] ?? tag}
            </span>
          ))}
        </div>

        <div className="selection-preview">
          <span>{ui.selection}</span>
          <div className="selection-preview-row">
            <div className="selection-chip">
              <img src={selectedSkill.logo} alt={selectedSkill.name} loading="lazy" />
              <strong>{selectedSkill.name}</strong>
            </div>
            <div className="selection-chip">
              <img src={selectedAgent.logo} alt={selectedAgent.name} loading="lazy" />
              <strong>{selectedAgent.name}</strong>
            </div>
          </div>
        </div>

        <div className="install-note">
          <p>{ui.manualNote}</p>
        </div>
      </div>

      <div className="install-output-wrap">
        <div className="terminal-window-head">
          <div className="terminal-lights" aria-hidden="true">
            <span className="terminal-light light-close" />
            <span className="terminal-light light-min" />
            <span className="terminal-light light-max" />
          </div>
          <div className="terminal-window-meta">
            <strong>{ui.terminalTitle}</strong>
            <span>
              {selectedSkill.name} x {selectedAgent.name} · {ui.terminalSubtitle}
            </span>
          </div>
        </div>

        <Snippet
          title={ui.installTitle}
          value={npxCommand}
          copied={copiedTarget === "npx"}
          locale={locale}
          onCopy={() => copyText("npx", npxCommand)}
        />
        <Snippet
          title={ui.bundleTitle}
          value={bundleCommand}
          copied={copiedTarget === "bundle"}
          locale={locale}
          onCopy={() => copyText("bundle", bundleCommand)}
        />
        <Snippet
          title={ui.manualTitle}
          value={manualPath}
          copied={copiedTarget === "manual"}
          locale={locale}
          onCopy={() => copyText("manual", manualPath)}
        />
        <Snippet
          title={ui.zipTitle}
          value={zipCommand}
          copied={copiedTarget === "zip"}
          locale={locale}
          onCopy={() => copyText("zip", zipCommand)}
          href={repoZipUrl}
        />
      </div>
    </div>
  );
}

function Snippet({
  title,
  value,
  copied,
  locale,
  onCopy,
  href,
}: {
  title: string;
  value: string;
  copied: boolean;
  locale: Locale;
  onCopy: () => void;
  href?: string;
}) {
  const labels = copyLabelByLocale[locale];

  return (
    <div className="snippet">
      <div className="snippet-head">
        <span className="snippet-title">{title}</span>
        <div className="snippet-actions">
          {href ? (
            <a className="copy-btn" href={href} target="_blank" rel="noopener noreferrer">
              {zipActionByLocale[locale]}
            </a>
          ) : null}
          <button
            type="button"
            className={`copy-btn${copied ? " is-copied" : ""}`}
            onClick={onCopy}
          >
            <span className="copy-icon" aria-hidden="true">
              {copied ? <CheckIcon /> : <CopyIcon />}
            </span>
            <span>{copied ? labels.copied : labels.copy}</span>
          </button>
        </div>
      </div>
      <pre>
        <code>{value}</code>
      </pre>
    </div>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 3.5H3.5C2.95 3.5 2.5 3.95 2.5 4.5V12.5C2.5 13.05 2.95 13.5 3.5 13.5H9.5C10.05 13.5 10.5 13.05 10.5 12.5V10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6.5 8.5V3.5C6.5 2.95 6.95 2.5 7.5 2.5H12.5C13.05 2.5 13.5 2.95 13.5 3.5V8.5C13.5 9.05 13.05 9.5 12.5 9.5H7.5C6.95 9.5 6.5 9.05 6.5 8.5Z" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 8.2L6.5 11.1L12.5 4.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
