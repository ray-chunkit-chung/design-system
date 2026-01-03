import type { Config } from 'tailwindcss';

const colorVar = (name: string) => `var(--color-${name})`;
const spaceVar = (name: string) => `var(--spacing-${name})`;
const radiusVar = (name: string) => `var(--radius-${name})`;
const fontVar = (name: string) => `var(--font-${name})`;

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
          onBrand: colorVar('text-on-brand'),
        },
        brand: {
          solid: colorVar('brand-solid'),
          strong: colorVar('brand-solid-strong'),
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
        field: spaceVar('gap-sm'),
        section: spaceVar('gap-lg'),
      },
      borderRadius: {
        input: radiusVar('input'),
        card: radiusVar('card'),
      },
      fontFamily: {
        body: fontVar('body-family'),
        heading: fontVar('heading-h1-family'),
      },
      fontSize: {
        body: fontVar('body-size'),
        h1: fontVar('heading-h1-size'),
        h2: fontVar('heading-h2-size'),
        h3: fontVar('heading-h3-size'),
      },
      lineHeight: {
        body: fontVar('body-line-height'),
        heading: fontVar('heading-h1-line-height'),
      },
      fontWeight: {
        body: fontVar('body-weight'),
        bodyStrong: fontVar('body-strong-weight'),
        heading: fontVar('heading-h1-weight'),
      },
    },
  },
  plugins: [],
};
export default config;