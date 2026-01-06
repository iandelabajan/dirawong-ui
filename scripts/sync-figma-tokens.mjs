import fs from 'fs';

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_ID = process.env.FIGMA_FILE_ID;

if (!FIGMA_TOKEN || !FIGMA_FILE_ID) {
  throw new Error('Missing FIGMA_TOKEN or FIGMA_FILE_ID');
}

const tokensPath = 'projects/tokens/build/figma.tokens.json';

if (!fs.existsSync(tokensPath)) {
  throw new Error(`Token file not found at ${tokensPath}`);
}

const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));

const response = await fetch(
  `https://api.figma.com/v1/files/${FIGMA_FILE_ID}/variables`,
  {
    method: 'POST',
    headers: {
      'X-Figma-Token': FIGMA_TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tokens),
  }
);

if (!response.ok) {
  const text = await response.text();
  throw new Error(`Figma API error: ${text}`);
}

console.log('✅ Tokens synced to Figma');
