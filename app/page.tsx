import { Button } from "../components/Button";

type ColorToken = { name: string; label: string };

const colorSwatches: ColorToken[] = [
  { name: "background-page", label: "Background / Page" },
  { name: "background-panel", label: "Background / Panel" },
  { name: "background-sunken", label: "Background / Sunken" },
  { name: "text-primary", label: "Text / Primary" },
  { name: "text-secondary", label: "Text / Secondary" },
  { name: "text-muted", label: "Text / Muted" },
  { name: "brand-solid", label: "Brand / Solid" },
  { name: "brand-solid-strong", label: "Brand / Strong" },
  { name: "brand-muted", label: "Brand / Muted" },
  { name: "border-default", label: "Border / Default" },
  { name: "border-strong", label: "Border / Strong" },
  { name: "status-success", label: "Status / Success" },
  { name: "status-warning", label: "Status / Warning" },
  { name: "status-critical", label: "Status / Critical" },
  { name: "status-info", label: "Status / Info" },
];

const spacingVars = [
  { name: "gap-sm", label: "gap-sm" },
  { name: "gap-lg", label: "gap-lg" },
];

const radiusVars = [
  { name: "input", label: "input" },
  { name: "card", label: "card" },
];

const headings = [
  { level: "h1", size: "text-[var(--font-heading-h1-size)]", label: "Heading 1" },
  { level: "h2", size: "text-[var(--font-heading-h2-size)]", label: "Heading 2" },
  { level: "h3", size: "text-[var(--font-heading-h3-size)]", label: "Heading 3" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background-page)] text-[var(--color-text-primary)] px-8 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-text-muted)]">Design System</p>
            <h1 className="text-[var(--font-heading-h1-size)] font-[var(--font-heading-h1-weight)] leading-[var(--font-heading-h1-line-height)]">
              Token Gallery
            </h1>
            <p className="max-w-2xl text-[var(--font-body-size)] text-[var(--color-text-secondary)]">
              Live view of the generated CSS variables from design-tokens/tokens.jsonc, styled to echo Figma’s token palettes.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[var(--radius-card)] border border-[var(--color-border-default)] bg-[var(--color-background-panel)] p-6 shadow-sm shadow-black/10">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-[var(--font-heading-h2-size)] font-[var(--font-heading-h2-weight)] leading-[var(--font-heading-h2-line-height)]">
                Colors
              </h2>
              <span className="text-sm text-[var(--color-text-muted)]">Semantic & status</span>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {colorSwatches.map(({ name, label }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 rounded-[var(--radius-card)] border border-[var(--color-border-default)] bg-[var(--color-background-sunken)] p-3"
                >
                  <div
                    className="h-12 w-14 rounded-[var(--radius-card)] border border-[var(--color-border-strong)]"
                    style={{ backgroundColor: `var(--color-${name})` }}
                  />
                  <div className="space-y-1">
                    <div className="text-[var(--font-body-size)] font-[var(--font-body-strong-weight)]">{label}</div>
                    <div className="text-xs text-[var(--color-text-muted)]">--color-{name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-[var(--radius-card)] border border-[var(--color-border-default)] bg-[var(--color-background-panel)] p-6 shadow-sm shadow-black/10">
            <div className="space-y-1">
              <h2 className="text-[var(--font-heading-h2-size)] font-[var(--font-heading-h2-weight)] leading-[var(--font-heading-h2-line-height)]">
                Components
              </h2>
              <p className="text-[var(--font-body-size)] text-[var(--color-text-secondary)]">
                Tokens applied to interactive controls.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
              <div className="flex gap-3">
                <Button variant="primary" size="lg">
                  Large Primary
                </Button>
                <Button variant="ghost" size="lg">
                  Large Ghost
                </Button>
              </div>
            </div>
            <div className="rounded-[var(--radius-card)] border border-[var(--color-border-default)] bg-[var(--color-background-sunken)] p-4 text-[var(--font-body-size)] text-[var(--color-text-secondary)]">
              Buttons use brand, text, border, spacing, and radius tokens. Hover and focus states lift the accent steps.
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[var(--radius-card)] border border-[var(--color-border-default)] bg-[var(--color-background-panel)] p-6 shadow-sm shadow-black/10">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-[var(--font-heading-h3-size)] font-[var(--font-heading-h3-weight)] leading-[var(--font-heading-h3-line-height)]">Spacing</h3>
              <span className="text-xs text-[var(--color-text-muted)]">aliases</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {spacingVars.map(({ name, label }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 rounded-[var(--radius-card)] border border-[var(--color-border-default)] bg-[var(--color-background-sunken)] px-3 py-2"
                >
                  <div className="h-2 rounded-full bg-[var(--color-brand-muted)]" style={{ width: `var(--spacing-${name})` }} />
                  <span className="text-sm font-[var(--font-body-strong-weight)]">{label}</span>
                  <span className="text-xs text-[var(--color-text-muted)]">var(--spacing-{name})</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[var(--radius-card)] border border-[var(--color-border-default)] bg-[var(--color-background-panel)] p-6 shadow-sm shadow-black/10">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-[var(--font-heading-h3-size)] font-[var(--font-heading-h3-weight)] leading-[var(--font-heading-h3-line-height)]">Radius</h3>
              <span className="text-xs text-[var(--color-text-muted)]">aliases</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {radiusVars.map(({ name, label }) => (
                <div
                  key={name}
                  className="flex flex-col items-start gap-2 rounded-[var(--radius-card)] border border-[var(--color-border-default)] bg-[var(--color-background-sunken)] p-3"
                >
                  <div className="h-16 w-24 border border-[var(--color-border-strong)] bg-[var(--color-background-panel)]" style={{ borderRadius: `var(--radius-${name})` }} />
                  <div className="text-sm font-[var(--font-body-strong-weight)]">{label}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">var(--radius-{name})</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[var(--radius-card)] border border-[var(--color-border-default)] bg-[var(--color-background-panel)] p-6 shadow-sm shadow-black/10">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-[var(--font-heading-h3-size)] font-[var(--font-heading-h3-weight)] leading-[var(--font-heading-h3-line-height)]">Typography</h3>
              <span className="text-xs text-[var(--color-text-muted)]">theme</span>
            </div>
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="text-[var(--font-body-size)] font-[var(--font-body-weight)]">Body / Regular</div>
                <p className="text-[var(--font-body-size)] text-[var(--color-text-secondary)]">
                  The quick brown fox jumps over the lazy dog.
                </p>
              </div>
              <div className="space-y-1">
                <div className="text-[var(--font-body-size)] font-[var(--font-body-strong-weight)]">Body / Strong</div>
                <p className="text-[var(--font-body-size)] font-[var(--font-body-strong-weight)] text-[var(--color-text-primary)]">
                  The quick brown fox jumps over the lazy dog.
                </p>
              </div>
              <div className="space-y-2">
                {headings.map(({ level, size, label }) => (
                  <div key={level} className="space-y-1">
                    <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">{label}</div>
                    <div
                      className={`${size} font-[var(--font-heading-h1-weight)] leading-[var(--font-heading-h1-line-height)]`}
                      style={{ fontFamily: 'var(--font-heading-h1-family)' }}
                    >
                      The quick brown fox jumps over the lazy dog.
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
