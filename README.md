# E Point Lab — Réplica Next.js

Réplica de [epointlab.com/en/](https://www.epointlab.com/en/) construida con **Next.js 15**, **TypeScript** y **Tailwind CSS**.

## QA — Hallazgos del sitio original

| ID | Severidad | Descripción |
|----|-----------|-------------|
| QA-001 | Alta | Nav "E-Blog" (`/en/e-blog`) mostraba Home |
| QA-002 | Alta | `/en/blog` vacío |
| QA-003 | Media | Teléfono footer (+786) ≠ Contact (+407) |
| QA-004 | Media | `/es/` sin traducción real |
| QA-005 | Baja | Typos en copy original |

Esta réplica **corrige** QA-001 y QA-002 (blog funcional). Mantiene textos y typos del original donde aplica.

## Rutas

| Ruta | Página |
|------|--------|
| `/` | Redirige a `/en` |
| `/en` | Home |
| `/en/about` | About |
| `/en/contact` | Contact |
| `/en/blog` | E-Blog |
| `/en/schedule-a-call` | Schedule a Call |
| `/en/privacy-policy` | Privacy Policy |
| `/en/term-of-services` | Terms of Service |
| `/es/*` | Misma estructura (contenido EN por ahora) |

## Desarrollo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) → redirige a `/en`.

## Build

```bash
npm run build
npm start
```

## Estructura

- `src/data/site.ts` — Contenido y navegación
- `src/data/legal.ts` — Textos legales
- `src/components/` — UI por sección
- `src/app/[locale]/` — App Router con i18n por segmento

## Próximos pasos

- Sustituir imágenes Unsplash por assets originales (DevTools del sitio vivo)
- Integrar Calendly en `/schedule-a-call`
- Añadir `next-intl` para español real
- Tests E2E con Playwright (ver informe QA en conversación)
