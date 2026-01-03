#!/usr/bin/env node
// Converts design-tokens/tokens.jsonc → styles/tokens.css
const fs = require('fs');
const path = require('path');
const stripJsonComments = require('strip-json-comments');

const SRC = path.join(__dirname, '..', 'design-tokens', 'tokens.jsonc');
const OUT = path.join(__dirname, '..', 'styles', 'tokens.css');

const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/[\s._]/g, '-').toLowerCase();
const flatten = (obj, prefix = []) =>
  Object.entries(obj).flatMap(([k, v]) =>
    typeof v === 'object' && !Array.isArray(v)
      ? flatten(v, [...prefix, kebab(k)])
      : [[...prefix, kebab(k)].join('-'), v]
  );

const resolveRefs = (value, map) => {
  if (typeof value !== 'string') return value;
  const ref = value.match(/^\{(.+)\}$/);
  if (!ref) return value;
  const key = ref[1];
  return map[key];
};

const main = () => {
  const raw = fs.readFileSync(SRC, 'utf8');
  const json = JSON.parse(stripJsonComments(raw));

  // Collect primitives
  const primitives = flatten(json.primitives);
  const primitiveMap = Object.fromEntries(
    primitives.map(([k, v]) => [`primitives.${k.replace(/-/g, '.')}`, v])
  );

  // Collect aliases (resolved)
  const aliases = flatten(json.aliases).map(([k, v]) => {
    const resolved = resolveRefs(v, { ...primitiveMap });
    return [k, resolved];
  });
  const aliasMap = Object.fromEntries(
    aliases.map(([k, v]) => [`aliases.${k.replace(/-/g, '.')}`, v])
  );

  // Theme vars (resolved through aliases/primitives)
  const themes = Object.entries(json.themes).map(([themeName, themeObj]) => {
    const entries = flatten(themeObj).map(([k, v]) => {
      const resolved = resolveRefs(v, { ...primitiveMap, ...aliasMap });
      return [k, resolved];
    });
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