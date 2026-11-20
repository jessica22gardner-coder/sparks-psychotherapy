# Roadmap

## Done

- [x] Add standalone speaking page and desktop/mobile navigation.
- [x] Remove requested speaking sections and enlarge speaking topics.
- [x] Research speaking keywords and audience search intent.
- [x] Keep SEO improvements on /speaking only; remove new pages and integrate four audience sections.
- [x] Verify page metadata, navigation and mobile presentation; report completed SEO work.
- [x] Remove Lovable: delete `.lovable/`, the Lovable Vite wrapper, preview-auth
      broker and cron-auth helpers, and all `.asset.json` remote-asset metadata;
      replace the remote logo with the real brand logo image
      (`src/assets/logo.png`, taken from the live site) and service images
      with the gradient + icon treatment.
- [x] Remove unused UI components (kept: accordion, button)
      and unused dependencies; remove the committed `.env` from git tracking
      and add `.env.example`.
- [x] Overnight cleanup sweep: removed dead code (unused `use-mobile` hook,
      `Input`/`Textarea` components, `components.json`, unused imports,
      React Query wiring, ~98 lines of dead CSS), removed the
      `@tanstack/react-query` dependency, fixed the `button.tsx` lint
      warning (variants moved to `button-variants.ts`), and compressed
      `jess-portrait-2.jpg` from 1.58 MB to ~177 KB. Lint is 0 errors,
      0 warnings; build passes.
- [x] Convert to a plain static site for Hostinger: remove TanStack Start /
      Nitro / Cloudflare (`wrangler.jsonc`, server entry, Cloudflare preset)
      and Supabase (speaking-inquiry server function, client helpers,
      Drizzle migrations, `.env` / `.env.example`). The site is now a Vite +
      TanStack Router single-page app; `vite build` outputs static files in
      `dist/`, with a `.htaccess` SPA fallback so deep links work.
- [x] Make the contact form honest: it no longer pretends to send a message.
      It opens the visitor's email app addressed to
      info@sparkspsychotherapy.ca, and the page says so. Email delivery
      directly from the form is a later step (via Hostinger).

## Next

- [ ] Confirm therapist and service content is accurate (the site currently
      lists three therapists and 13 services; the live site is Jess solo, adults
      only) before publishing.
- [ ] Upload `dist/` to Hostinger `public_html` (including `.htaccess`) and
      check every page live.
- [ ] Add form email delivery via Hostinger (server-side handler); never put
      email credentials in the repo.
- [ ] Work on traffic and visibility (SEO, local listings, social).
