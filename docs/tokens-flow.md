# Token-to-UI Flow

This doc shows how `tokens.jsonc` becomes the CSS variables and Tailwind values used in the app.

## Diagram

```mermaid
flowchart TD
    A[tokens.jsonc<br/>design-tokens/] --> B[build-tokens.js<br/>scripts/]
    B --> C[tokens.css<br/>styles/]
    C --> D[layout.tsx<br/>imports tokens.css]
    D --> E[globals.css<br/>uses CSS vars]
    C --> F[tailwind.config.ts<br/>maps CSS vars]
    F --> G[UI components<br/>Button, page]
    E --> G
    D --> H[data-theme="dark" on body]
    H --> C
```

## Steps

- Source: Author tokens in [design-tokens/tokens.jsonc](../design-tokens/tokens.jsonc) using primitives, aliases, and themes.
- Build: `pnpm run tokens` calls [scripts/build-tokens.js](../scripts/build-tokens.js), resolving refs and flattening to kebab-case CSS variables, writing [styles/tokens.css](../styles/tokens.css).
- Theme scope: The CSS includes `:root` plus `[data-theme="dark"]` blocks; the body sets `data-theme="dark"` in [app/layout.tsx](../app/layout.tsx).
- Globals: [app/globals.css](../app/globals.css) consumes the variables for base background, text, and typography.
- Tailwind bridge: [tailwind.config.ts](../tailwind.config.ts) maps Tailwind theme keys (colors, spacing, radius, typography) to `var(--*)` values emitted in tokens.css.
- Components/UI: Components like [components/Button.tsx](../components/Button.tsx) and the gallery in [app/page.tsx](../app/page.tsx) use Tailwind classes and inline `var(--color-...)` utilities; these resolve to the generated CSS variables at runtime.

## Commands

- Generate tokens: `pnpm run tokens`
- Dev (auto-runs tokens): `pnpm run dev`
- Build (auto-runs tokens): `pnpm run build`
