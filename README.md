# TaxGeeks website

Public marketing site for TaxGeeks, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).
Clients log in and upload documents through the firm's separate secure client portal. This site only links to it
and never collects tax documents or sensitive data itself.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built site
```

## Where to edit

- `src/site.ts`: firm name, phone, email, address, hours, client portal URL, booking URL and the services list.
  **Replace all placeholders before going live.**
- `src/pages/`: one file per page (`index`, `services`, `about`, `contact`, `404`).
- `src/components/`: header, footer and the "use the secure portal" notice.
- `src/styles/global.css`: brand colors.

## Deploying

`npm run build` produces a static site in `dist/`, which can be hosted on Netlify, Vercel, Cloudflare Pages or any
static host. Set `site` in `astro.config.mjs` to the live domain.
