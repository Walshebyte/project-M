# ManiLua Ops Hub

ManiLua Ops Hub is a premium landing experience for automation teams who maintain alternate Steam depots. It reframes the original `maniluamaker` CLI into a guidance-first platform that explains the workflow, highlights trust & security practices, and showcases a future roadmap.

## Tech Stack

- Next.js 14 with TypeScript and the App Router disabled for simplicity (`src/pages`)
- React 18 functional components with a lightweight custom design system
- CSS Modules via `globals.css` for quick branding tweaks

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to explore the hub.

## Available Scripts

- `npm run dev` - start the development server with hot reload.
- `npm run build` - generate an optimized production bundle.
- `npm run start` - serve the production build.
- `npm run lint` - run Next.js & ESLint checks.

## Deployment

This project is optimized for Vercel. After running `npm run build`, connect the repository to Vercel and deploy from the `main` branch. Environment variables (if any) should be added through the Vercel dashboard.

## Customization Notes

- Update mission copy inside `src/components/Hero.tsx`.
- Adjust feature cards in `src/pages/features.tsx`.
- Tailor the color system inside `src/styles/globals.css`.

## License

All source code in this starter is MIT licensed. Replace the license section if you adopt a different policy.
