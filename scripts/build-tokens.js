#!/usr/bin/env node
// Converts design-tokens/tokens.jsonc → styles/tokens.css
const fs = require('fs');
const path = require('path');
const stripJsonCommentsModule = require('strip-json-comments');
const stripJsonComments =
  typeof stripJsonCommentsModule === 'function'
    ? stripJsonCommentsModule
    : stripJsonCommentsModule.default;

const SRC = path.join(__dirname, '..', 'design-tokens', 'tokens.jsonc');
const OUT = path.join(__dirname, '..', 'styles', 'tokens.css');

const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/[\s._]/g, '-').toLowerCase();
const flatten = (obj, prefix = []) =>
  Object.entries(obj).flatMap(([k, v]) =>
    typeof v === 'object' && !Array.isArray(v)
      ? flatten(v, [...prefix, kebab(k)])
      : [[ [...prefix, kebab(k)].join('-'), v ]]
  );

// Resolve {path.to.token} placeholders recursively against the source JSON tree.
const resolveRefs = (value, root) => {
  if (typeof value === 'string') {
    const ref = value.match(/^\{(.+)\}$/);
    if (!ref) return value;
    const target = ref[1].split('.').reduce((acc, key) => (acc ? acc[key] : undefined), root);
    return resolveRefs(target, root);
  }
  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, resolveRefs(v, root)]));
  }
  return value;
};

const main = () => {
  const raw = fs.readFileSync(SRC, 'utf8');
  const json = JSON.parse(stripJsonComments(raw));

  // Resolve references into concrete values/objects before flattening.
  const resolvedAliases = resolveRefs(json.aliases, json);
  const resolvedThemes = Object.fromEntries(
    Object.entries(json.themes).map(([themeName, themeObj]) => [themeName, resolveRefs(themeObj, json)])
  );

  // Collect primitives and resolved aliases
  const primitives = flatten(json.primitives);
  const aliases = flatten(resolvedAliases);

  // Theme vars (resolved through aliases/primitives)
  const themes = Object.entries(resolvedThemes).map(([themeName, themeObj]) => {
    const entries = flatten(themeObj);
    return [themeName, entries];
  });

  const lines = [];
  lines.push(':root {');
  primitives.forEach(([k, v]) => lines.push(`  --${k}: ${v};`));
  aliases.forEach(([k, v]) => lines.push(`  --${k}: ${v};`));
  lines.push('}');
  themes.forEach(([themeName, entries]) => {
    lines.push(`[data-theme="${themeName}"] {`);
    entries.forEach(([k, v]) => lines.push(`  --${k}: ${v};`));
    lines.push('}');
  });

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, lines.join('\n') + '\n', 'utf8');
  console.log(`Wrote ${OUT}`);
};

main();