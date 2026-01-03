This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



## CSS

 where CSS and UI tokens are defined and managed.

CSS and UI tokens are defined and managed in a three-tier system:

1. Source Definition: tokens.jsonc

Primitives - Base values (colors, spacing, radius, fonts)
Aliases - Semantic tokens that reference primitives (brand, surface, text)
Themes - Theme-specific overrides (dark theme)
2. Build Script: build-tokens.js

Converts JSONC to CSS variables
Resolves token references (e.g., {primitives.color.accent.600})
Flattens to kebab-case (e.g., --color-brand-strong)
Generates :root and [data-theme="dark"] selectors
3. Output: tokens.css

Auto-generated CSS custom properties
Imported in layout.tsx
Consumed by Tailwind via tailwind.config.ts
Used directly in components
Workflow: Edit tokens.jsonc → Run pnpm run tokens → CSS variables update → Components use via Tailwind or var(--*) syntax