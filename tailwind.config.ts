import type { Config } from 'tailwindcss';

const colorVar = (name: string) => `var(--color-${name})`;
const spaceVar = (name: string) => `var(--spacing-${name})`;
const radiusVar = (name: string) => `var(--radius-${name})`;
const fontSizeVar = (name: string) => `var(--font-${name})`;

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          page: colorVar('background-page'),
          panel: colorVar('background-panel'),
          sunken: colorVar('background-sunken'),
        },
        text: {
          primary: colorVar('text-primary'),
          secondary: colorVar('text-secondary'),
          muted: colorVar('text-muted'),
          onBrand: colorVar('text-onBrand'),
        },
        brand: {
          solid: colorVar('brand-solid'),
          strong: colorVar('brand-solidStrong'),
          muted: colorVar('brand-muted'),
        },
        border: {
          default: colorVar('border-default'),
          strong: colorVar('border-strong'),
        },
        status: {
          success: colorVar('status-success'),
          warning: colorVar('status-warning'),
          critical: colorVar('status-critical'),
          info: colorVar('status-info'),
        },
      },
      spacing: {
        field: spaceVar('gapSm'),
        section: spaceVar('gapLg'),
      },
      borderRadius: {
        input: radiusVar('input'),
        card: radiusVar('card'),
      },
      fontFamily: {
        body: `var(--font-body-family)`,
        heading: `var(--font-heading-family)`,
      },
      fontSize: {
        body: `var(--font-body-size)`,
        h1: `var(--font-heading-h1-size)`,
        h2: `var(--font-heading-h2-size)`,
        h3: `var(--font-heading-h3-size)`,
      },
      lineHeight: {
        body: `var(--font-body-lineHeight)`,
        heading: `var(--font-heading-h1-lineHeight)`,
      },
      fontWeight: {
        body: `var(--font-body-weight)`,
        bodyStrong: `var(--font-bodyStrong-weight)`,
        heading: `var(--font-heading-h1-weight)`,
      },
    },
  },
  plugins: [],
};
export default config;