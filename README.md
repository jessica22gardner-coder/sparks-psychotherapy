# Sparks Psychotherapy Service

The website for Sparks Psychotherapy Service — in-person and virtual
psychotherapy for adults, plus speaking and workshops.

Live site: https://sparkspsychotherapy.ca/

## Stack

- Plain Vite + [TanStack Router](https://tanstack.com/router) (SPA) + React 19
- Tailwind CSS 4
- No backend, no database, no environment variables. The site is a set of
  static files, hosted on Hostinger.

## Pages

Home, About, Services (13 service pages), Therapists, Blog, FAQ, Contact,
Careers, and Speaking & Workshops.

## Development

You need Node.js 20+ and [Bun](https://bun.sh) (or npm — see below).

```sh
git clone https://github.com/jessica22gardner-coder/sparks-psychotherapy.git
cd sparks-psychotherapy
bun install
bun run dev
```

With npm instead:

```sh
npm install
npm run dev
```

## Scripts

| Command           | What it does                                 |
| ----------------- | -------------------------------------------- |
| `bun run dev`     | Start the dev server (http://localhost:8080) |
| `bun run build`   | Production build — static files in `dist/`   |
| `bun run preview` | Preview the production build locally         |
| `bun run lint`    | ESLint + Prettier check                      |
| `bun run format`  | Format the whole codebase with Prettier      |

## Deployment (Hostinger)

The build output is plain static files — no server to run.

```sh
bun run build
```

Upload the **contents of `dist/`** (not the `dist` folder itself) to
`public_html` on Hostinger, replacing what is there. That includes
`.htaccess`, which is copied from `public/` into `dist/` by the build —
it makes deep links such as `/about` or `/services/anxiety-stress` load
the app instead of a 404. If `.htaccess` is missing from the upload,
the home page will still work but direct links to other pages will 404.

To update the live site later, rebuild and re-upload `dist/` the same way.

## Contact form

The contact form has no backend yet. Submitting it opens the visitor's
own email app with a message to info@sparkspsychotherapy.ca already
addressed and filled in, and the page says so plainly.

TODO: form email delivery to be added later via Hostinger (a server-side
handler on the hosting account). When that exists, point the form at it
and show success/failure from its real response. Never put email
passwords, SMTP credentials or API keys in this repo — they must live
server-side only.

Speaking inquiries work the same way: the Speaking page links to the
contact page and to a `mailto:` link for info@sparkspsychotherapy.ca.
There is no speaking-inquiry form or database.
