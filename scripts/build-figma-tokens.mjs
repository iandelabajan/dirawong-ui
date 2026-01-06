import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();

const outputPath = path.join(
  ROOT,
  'projects',
  'tokens',
  'build',
  'figma.tokens.json'
);

const figmaTokens = {
  color: {
    brand: {
      primary: { value: '#1d1429', type: 'color' },
      accent: { value: '#08a86f', type: 'color' }
    }
  },
  spacing: {
    xs: { value: 4, type: 'spacing' },
    sm: { value: 8, type: 'spacing' },
    md: { value: 16, type: 'spacing' }
  }
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(figmaTokens, null, 2));

console.log('✅ Figma tokens written to:');
console.log(outputPath);
