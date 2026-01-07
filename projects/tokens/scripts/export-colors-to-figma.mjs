import fs from 'fs';

/**
 * Read token source
 */
const css = fs.readFileSync(
  'projects/tokens/src/tokens.css',
  'utf8'
);

/**
 * STEP 1: Extract primitive colors
 * --dw-primitive-blue-900: #19305c;
 */
const primitiveRegex =
  /--dw-primitive-([a-z]+-\d+):\s*(#[0-9a-fA-F]{6});/g;

const Primitive = {};
let match;

while ((match = primitiveRegex.exec(css))) {
  const [, name, value] = match;

  Primitive[`dw-primitive-${name}`] = {
    $type: 'color',
    $value: value.toUpperCase()
  };
}

/**
 * STEP 2: Extract semantic aliases
 * --dw-color-primary: var(--dw-primitive-blue-900);
 */
const semanticRegex =
  /--dw-color-([a-z-]+):\s*var\(--dw-primitive-([a-z]+-\d+)\);/g;

const Semantic = {};

while ((match = semanticRegex.exec(css))) {
  const [, semanticName, primitiveRef] = match;

  Semantic[`dw-color-${semanticName}`] = {
    $type: 'color',
    $value: `{Primitive.dw-primitive-${primitiveRef}}`
  };
}

/**
 * STEP 3: Build DTCG JSON
 */
const output = {
  Primitive,
  Semantic
};

fs.writeFileSync(
  'projects/tokens/export/tokens.colors.json',
  JSON.stringify(output, null, 2)
);

console.log('✅ Exported DTCG color tokens');
