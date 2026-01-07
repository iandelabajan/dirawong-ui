import fs from 'fs';

/**
 * Read token source
 */
const css = fs.readFileSync(
  'projects/tokens/src/tokens.css',
  'utf8'
);

/**
 * STEP 1: extract primitive colors
 * --dw-primitive-*-*
 */
const primitiveRegex = /--dw-primitive-([a-z]+-\d+):\s*(#[0-9a-fA-F]{6});/g;

const primitives = [];
let match;

while ((match = primitiveRegex.exec(css))) {
  const [, name, value] = match;
  primitives.push({
    name: `dw-primitive-${name}`,
    type: 'color',
    isAlias: false,
    value: value.toUpperCase()
  });
}

/**
 * STEP 2: extract semantic aliases
 * --dw-color-primary / --dw-color-accent
 */
const semanticRegex =
  /--dw-color-(primary|accent):\s*var\(--dw-primitive-([a-z]+-\d+)\);/g;

const semantics = [];

while ((match = semanticRegex.exec(css))) {
  const [, semanticName, primitiveRef] = match;

  semantics.push({
    name: `dw-color-${semanticName}`,
    type: 'color',
    isAlias: true,
    value: {
      collection: 'Primitive',
      name: `dw-primitive-${primitiveRef}`
    }
  });
}

/**
 * STEP 3: build Figma-compatible JSON
 */
const output = {
  version: '1.0.0',
  metadata: {},
  collections: [
    {
      name: 'Primitive',
      modes: [
        {
          name: 'Mode 1',
          variables: primitives
        }
      ]
    },
    {
      name: 'Semantic',
      modes: [
        {
          name: 'Mode 1',
          variables: semantics
        }
      ]
    }
  ]
};

fs.writeFileSync(
  'projects/tokens/export/figma.colors.json',
  JSON.stringify(output, null, 2)
);

console.log('✅ Exported Figma color tokens');
