<p align="center">
  <img src="./public/logo.png" alt="Language Skills" width="110">
</p>

<h1 align="center">Language Skills</h1>

<p align="center">
  Skills de ingenieria por lenguaje para que tus agentes trabajen con mejores criterios de arquitectura,
  testing, tipado, errores y mantenimiento desde el primer prompt.
</p>

<p align="center">
  https://language-skills-alber.vercel.app/
</p>

<p align="center">
  Python &middot; Java &middot; Rust &middot; C++ &middot; TypeScript &middot; React &middot; R &middot; PHP &middot; Ruby
</p>

## Que es este repositorio

`language-skills` reune un catalogo de skills listas para usar en distintos agentes y asistentes de codigo.
Cada carpeta define una disciplina concreta de trabajo para un lenguaje: como abordar cambios, que validar,
que evitar y que referencias consultar antes de dar una tarea por buena.

La idea es sencilla: que el agente no improvise cada vez que toca un stack distinto.

## Que incluye cada skill

Cada skill sigue una estructura parecida:

- `SKILL.md`: instrucciones principales, enfoque y reglas de trabajo.
- `references/`: guias, ejemplos y criterios mas concretos para ese lenguaje.
- `agents/openai.yaml`: metadatos auxiliares para integracion donde aplique.

No son snippets sueltos ni prompts genericos. Estan pensadas para empujar al agente hacia decisiones mas consistentes cuando genera, revisa o refactoriza codigo.

## Catalogo

| Lenguaje | Enfoque |
| --- | --- |
| Python | APIs, automatizacion, notebooks, debugging y codigo mantenible con type hints utiles. |
| Java | Servicios sobre la JVM, arquitectura por capas, JDK moderno, Spring y testing con criterio. |
| Rust | Ownership claro, errores con `Result`, crates, CLIs y trabajo sensible al rendimiento. |
| C++ | RAII, toolchains, componentes nativos, CMake y control de complejidad en codigo de bajo nivel. |
| TypeScript | Tipado estricto, validacion en bordes, modulos mantenibles y seguridad frente a roturas silenciosas. |
| React | Componentes accesibles, estado predecible, hooks limpios y disciplina real con effects. |
| R | Analisis reproducible, reporting, paquetes y flujos estadisticos faciles de mantener. |
| PHP | Laravel, Symfony y servicios modernos en PHP con limites claros y defaults sensatos. |
| Ruby | Rails, gems y diseno orientado a objetos sin perder legibilidad al escalar. |

## Agentes compatibles

El repositorio esta preparado para instalaciones globales y locales en agentes como:

- OpenAI Codex
- Claude Code
- Cursor
- Gemini CLI
- Cline
- Windsurf
- OpenCode
- Kiro
- GitHub Copilot
- entornos compatibles con `.agents/skills`

## Instalacion

### Opcion rapida

```bash
npx skills add alberfdez1523/language-skills
```

### Bundle universal

Genera una copia preparada para varias rutas de instalacion:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\build-universal-bundle.ps1
```

El resultado se guarda en `dist/universal`.

### Instalacion manual

Copia la carpeta de la skill que quieras al directorio de skills de tu agente.

Ejemplos habituales:

- `~/.codex/skills/python-engineering`
- `~/.claude/skills/react-engineering`
- `~/.cursor/skills/typescript-engineering`
- `.github/copilot/skills/rust-engineering`

## Estructura del proyecto

```text
.
|- app/                      # web del catalogo
|- components/               # piezas de interfaz
|- lib/                      # datos del sitio y helpers
|- public/                   # assets estaticos
|- scripts/                  # utilidades de build e instalacion
|- python-engineering/
|- java-engineering/
|- rust-engineering/
|- cpp-engineering/
|- typescript-engineering/
|- react-engineering/
|- r-engineering/
|- php-engineering/
`- ruby-engineering/
```

## Desarrollo local

```bash
npm install
npm run dev
```

Comandos utiles:

- `npm run build`
- `npm run start`
- `npm run typecheck`

## Criterio editorial

Estas skills estan escritas con una idea muy concreta: menos humo, menos recetas universales y mas decisiones practicas segun el lenguaje y el contexto del proyecto.

Si una skill obliga al agente a escribir codigo mas claro, probar mejor y romper menos cosas, esta cumpliendo su trabajo.
