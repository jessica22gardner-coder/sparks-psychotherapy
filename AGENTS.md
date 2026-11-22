# Project conventions

## Stack

- Plain Vite + TanStack Router (single-page app) + React 19, Tailwind CSS 4.
  No server, no Supabase, no Cloudflare, no Lovable tooling. `vite build`
  outputs plain static files in `dist/` for Hostinger.
- Install with Bun (`bun install`, `bun.lock` is the lockfile) or npm.
- Run `bun run lint` and `bun run build` before pushing; the lint step
  enforces Prettier formatting.

## Content

- Keep speaking biography and offering data separate from page layout so
  verified content can be updated without changing presentation.
- Preserve the existing pathless site layout and standalone content routes
  so all public destinations retain shared navigation.
- Speaking audience content is maintained separately from presentation and
  rendered within the speaking overview so audience-specific details can be
  updated without duplicating page layouts.
- Images live in `src/assets/` as real files, imported directly. There is
  no remote asset service: do not reintroduce `.asset.json` metadata files
  or `__l5e` URLs. Service pages use the per-service gradient and Lucide
  icon; the site logo is the real brand image `src/assets/logo.png` (taken
  from the current live site), used as the main logo in the header and footer
  in `src/components/site-layout.tsx` — no text wordmark. The footer renders
  it white (CSS `brightness-0 invert`) because the footer background is dark
  teal. `public/favicon.png` is only the browser-tab icon.
- Only keep UI components that are actually imported. The `ui/` folder is
  intentionally small (accordion, button) — do not re-add the full shadcn set unless a page needs it.

## Routing

- This is a client-side single-page app: `src/main.tsx` mounts the router
  from `src/router.tsx` into `index.html`. There is no server entry point.
- Deep links work on Hostinger only because of the `.htaccess` SPA fallback
  in `public/` (copied to `dist/` by the build). Do not remove it.
- Per-route titles/meta come from each route's `head()` and are rendered by
  `<HeadContent />` in `src/routes/__root.tsx`.

## Contact form

- The contact form POSTs JSON to `/contact.php` (see
  `src/routes/_site.contact.tsx`) and shows success or failure from its
  real response, with an email/call fallback when sending fails.
- `public/contact.php` is the server-side handler (copied to `dist/` by the
  build). It validates the message and sends it to
  info@sparkspsychotherapy.ca with PHP mail(), so no password lives
  anywhere: the hosting server sends the message itself, and Hushmail
  receives it through the domain's MX records. Deliverability note: the
  domain's SPF record authorises only Hushmail, so if test messages are
  rejected or land in spam, add Hostinger to it
  (`v=spf1 include:_spf.hushmail.com include:_spf.mail.hostinger.com
  -all`). The earlier Hushmail-login (SMTP) version of the handler is in
  git history if it is ever needed. Never put email passwords, SMTP
  credentials or API keys in this repo — they must live server-side
  only.

## Secrets

- There are no secrets in this project and no `.env` file: no backend, no
  database, nothing to configure. Do not add one.
