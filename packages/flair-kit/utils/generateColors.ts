import fs from 'fs';
import path from 'path';
import { generate } from '@k-vyn/coloralgorithm';
import {
  defaultBackgroundColor,
  defaultForegroundColor,
} from '../src/theme/colors';

// Exported from https://colorbox.io
// We make it so all colors[0] to colors[5] are accessible with our defaultBackgroundColor (white) (1:4.5)
// and all colors[6] to colors[10] are accessible with our defaultForegroundColor (hsl(233, 22%, 10%)) (1:4.5)
// This follow Lyft's approach: https://design.lyft.com/re-approaching-color-9e604ba22c88
// After that, we take map the colors accordingly to Flair:
// colors[1] -> 400
// colors[2] -> 500
// colors[4] -> 600
// colors[6] -> 700
// colors[7] -> 800

const json = [
  {
    properties: {
      steps: 11,
      hue: {
        start: 230,
        end: 230,
        curve: 'easeOutQuad',
      },
      saturation: {
        start: 0.31,
        end: 1,
        rate: 0.8,
        curve: 'easeOutQuad',
      },
      brightness: {
        start: 1,
        end: 0.2,
        curve: 'easeInQuart',
      },
    },
    options: {
      minorSteps: [],
      name: 'Primary',
      provideInverted: false,
      rotation: 'clockwise',
    },
  },
  {
    properties: {
      steps: 11,
      hue: {
        start: 330,
        end: 330,
        curve: 'easeOutQuad',
      },
      saturation: {
        start: 0.25,
        end: 0.99,
        rate: 0.9,
        curve: 'easeOutQuad',
      },
      brightness: {
        start: 1,
        end: 0.7,
        curve: 'linear',
      },
    },
    options: {
      minorSteps: [],
      name: 'Secondary',
      provideInverted: false,
      rotation: 'clockwise',
    },
  },
  {
    properties: {
      steps: 11,
      hue: {
        start: 160,
        end: 160,
        curve: 'easeOutQuad',
      },
      saturation: {
        start: 0.5,
        end: 1,
        rate: 1.3,
        curve: 'easeOutQuad',
      },
      brightness: {
        start: 1,
        end: 0.19,
        curve: 'linear',
      },
    },
    options: {
      minorSteps: [],
      name: 'Success',
      provideInverted: false,
      rotation: 'clockwise',
    },
  },
  {
    properties: {
      steps: 11,
      hue: {
        start: 51,
        end: 51,
        curve: 'easeOutQuad',
      },
      saturation: {
        start: 0.5,
        end: 1,
        rate: 0.8,
        curve: 'easeOutQuad',
      },
      brightness: {
        start: 0.94,
        end: 0.19,
        curve: 'linear',
      },
    },
    options: {
      minorSteps: [],
      name: 'Warning',
      provideInverted: false,
      rotation: 'clockwise',
    },
  },
  {
    properties: {
      steps: 11,
      hue: {
        start: 353,
        end: 353,
        curve: 'easeOutQuad',
      },
      saturation: {
        start: 0.52,
        end: 1,
        rate: 0.8,
        curve: 'easeOutQuad',
      },
      brightness: {
        start: 1,
        end: 0.69,
        curve: 'linear',
      },
    },
    options: {
      minorSteps: [],
      name: 'Error',
      provideInverted: false,
      rotation: 'clockwise',
    },
  },
];

const variants = json.map((c) => generate(c.properties, c.options));

const generatedColors = {};

variants.forEach((v) => {
  const variantName = v[0].name.toLowerCase();
  generatedColors[variantName] = {};

  v[0].colors.forEach((c, index) => {
    if (index === 2) {
      generatedColors[variantName][400] = {
        color: `hsl(${c.hsl[0]}, ${Math.round(c.hsl[1] * 100)}%, ${Math.round(
          c.hsl[2] * 100
        )}%)`,
        contrastingColor: defaultForegroundColor,
      };
    } else if (index === 3) {
      generatedColors[variantName][500] = {
        color: `hsl(${c.hsl[0]}, ${Math.round(c.hsl[1] * 100)}%, ${Math.round(
          c.hsl[2] * 100
        )}%)`,
        contrastingColor: defaultForegroundColor,
      };
    } else if (index === 4) {
      generatedColors[variantName][600] = {
        color: `hsl(${c.hsl[0]}, ${Math.round(c.hsl[1] * 100)}%, ${Math.round(
          c.hsl[2] * 100
        )}%)`,
        contrastingColor: defaultBackgroundColor,
      };
    } else if (index === 6) {
      generatedColors[variantName][700] = {
        color: `hsl(${c.hsl[0]}, ${Math.round(c.hsl[1] * 100)}%, ${Math.round(
          c.hsl[2] * 100
        )}%)`,
        contrastingColor: defaultBackgroundColor,
      };
    } else if (index === 7) {
      generatedColors[variantName][800] = {
        color: `hsl(${c.hsl[0]}, ${Math.round(c.hsl[1] * 100)}%, ${Math.round(
          c.hsl[2] * 100
        )}%)`,
        contrastingColor: defaultBackgroundColor,
      };
    }
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
