# Gopinathan Krishnasamy — Portfolio

Personal portfolio for **Gopinathan Krishnasamy**, Senior Cloud DevOps & AI Infrastructure Engineer — showcasing 9+ years of enterprise cloud, DevOps, and production Generative AI work.

**Live site:** _add your deployed URL here after publishing_
**LinkedIn:** https://www.linkedin.com/in/gopinathan-krishnasamy/
**GitHub:** https://github.com/gopinathan-1806

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, static export-friendly)
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/) for scroll-reveal and micro-interactions
- [next-themes](https://github.com/pacocoursey/next-themes) for the dark/light toggle
- [lucide-react](https://lucide.dev/) for icons (GitHub/LinkedIn marks are hand-rolled SVGs — see `src/components/icons.tsx`)
- Self-hosted [Geist](https://vercel.com/font) font via the `geist` npm package (no external font requests at build or runtime)
- File-based SEO: `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`, `app/icon.tsx`, and a `Person` JSON-LD block in `app/layout.tsx`

The whole site is statically pre-rendered (`next build` emits static HTML for every route), so it deploys cleanly to Vercel, Netlify, Cloudflare Pages, or any static host.

## Project structure

```
src/
  app/
    layout.tsx          Root layout: fonts, metadata, JSON-LD, theme provider
    page.tsx             Composes all sections onto the single-page layout
    globals.css           Design tokens (light/dark) + Tailwind v4 theme
    sitemap.ts / robots.ts       SEO file conventions
    opengraph-image.tsx / icon.tsx   Generated social preview image & favicon
  components/            One component per section, plus shared UI (Navbar, ThemeToggle, Reveal, ProjectCard, icons, ...)
  data/                  ALL editable content lives here — see "Updating content" below
  lib/                   Small shared utilities (className helper)
public/
  Gopinathan_Krishnasamy_Resume.pdf   Powers the "Download Resume" button
```

## Updating content

Everything you'll want to change day-to-day lives in `src/data/` as plain, typed TypeScript objects — no CMS, no database, no build config to touch.

| File | Controls |
| --- | --- |
| `src/data/profile.ts` | Name, title, summary, About Me paragraphs, links, nav items, resume file path |
| `src/data/experience.ts` | Career timeline — add a new role object at the **top** of the array |
| `src/data/skills.ts` | Skill groups and the three "expertise pillar" cards |
| `src/data/projects.ts` | Featured GitHub projects, in Problem → Solution → Technology → Impact format |
| `src/data/achievements.ts` | The quantified stat cards in "Key Engineering Achievements" |
| `src/data/credentials.ts` | Certifications, awards, and education |

### Adding a new project

Open `src/data/projects.ts` and copy an existing object in the `projects` array:

```ts
{
  slug: "my-new-project",
  title: "Project Name",
  tagline: "One-line description",
  problem: "What problem were you solving?",
  solution: "What did you build, and how?",
  tech: ["Python", "Kubernetes", "..."],
  impact: ["Outcome 1", "Outcome 2"],
  githubUrl: "https://github.com/gopinathan-1806/my-new-project",
  category: ["AI Agents"],      // must match / extend projectCategories below
  featured: true,                 // optional — pins it near the top and badges it
},
```

If you use a new category tag, add it to the `projectCategories` array in the same file so the filter pills pick it up automatically.

### Replacing the resume

Drop a new PDF into `public/`, then update `resumeUrl` in `src/data/profile.ts` to match the filename. The download button and every "Resume" link on the site read from that single value.

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

`npm run build` type-checks, lints via the Next.js build pipeline, and statically prerenders every route. `npm run start` serves that build locally on port 3000 (use `-- -p <port>` to change it).

## Linting & type-checking

```bash
npm run lint
npx tsc --noEmit
```

## Deployment

### Vercel (recommended)

1. Push this repository to GitHub (already done if you're reading this from the repo).
2. Go to [vercel.com/new](https://vercel.com/new) and import the `portfolio` repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
4. Click **Deploy**. Vercel builds and hosts the site on a free `*.vercel.app` domain, with an HTTPS certificate and a global CDN out of the box.
5. Optional: attach a custom domain under **Project → Settings → Domains**.

Every subsequent push to the main branch redeploys automatically.

### Any other static/Node host

The site is a standard Next.js app — it deploys to Netlify, Cloudflare Pages, Render, Railway, or a self-hosted Node server the same way any Next.js 16 App Router project does. No special configuration, environment variables, or backend services are required.

## SEO & social previews

- `app/layout.tsx` sets full Open Graph and Twitter Card metadata, plus a `Person` JSON-LD block for rich search results.
- `app/opengraph-image.tsx` generates the 1200×630 social preview image at build time — no external image host needed.
- `app/sitemap.ts` and `app/robots.ts` are generated automatically at `/sitemap.xml` and `/robots.txt`.
- Before deploying, update `siteUrl` in `src/data/profile.ts` to your final production domain — it feeds `metadataBase`, the sitemap, canonical URLs, and JSON-LD.

## License

Personal portfolio source — feel free to fork the structure for your own portfolio, but please swap in your own content, resume, and branding.
