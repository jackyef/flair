import fs from 'fs';
import path from 'path';
import { colorPallete } from './colorPallete';

const generatedColors = {};

Object.keys(colorPallete).forEach((colorScale) => {
  const variantName = colorScale.toLowerCase();
  generatedColors[variantName] = {};
  const steps = Object.keys(colorPallete[colorScale]);

  steps.forEach((step) => {
    generatedColors[variantName][step] = colorPallete[colorScale][step].value;
  });
});

fs.writeFileSync(
  path.join(__dirname, '../src/utils/generatedColors.ts'),
  [
    `// This file is generated automatically by generateColors.ts`,
    `export const generatedColors = ${JSON.stringify(
      generatedColors,
      null,
      2
    )}`,
  ].join('\n')
);
