// This file is meant to be run on the server-side
// Usually during build-time to generate all the CSS properties
// Based on the theme

import { extractCss, glob } from 'goober';
import { colors, COLORS_VARIANTS, COLOR_SHADE_VARIANTS } from '../theme/colors';

const generateLightThemeCssProperties = () => {
  const declarations: string[] = [
    `--color-foreground: ${colors.dark[400].color};`,
    `--color-background: ${colors.dark[400].contrastingColor};`,
  ];

  COLORS_VARIANTS.forEach((colorName) => {
    COLOR_SHADE_VARIANTS.forEach((shadeStep) => {
      declarations.push(
        `--color-${colorName}-${shadeStep}: ${colors[colorName][shadeStep].color};`,
      );
      declarations.push(
        `--contrasting-color-${colorName}-${shadeStep}: ${colors[colorName][shadeStep].contrastingColor};`,
      );
    });
  });

  return declarations.join('');
};

const REVERSED_SHADE_VARIANTS = [...COLOR_SHADE_VARIANTS].reverse();

const generateDarkThemeCssProperties = () => {
  const declarations: string[] = [
    `--color-foreground: ${colors.light[800].color};`,
    `--color-background: ${colors.light[800].contrastingColor};`,
  ];

  COLORS_VARIANTS.forEach((colorName) => {
    COLOR_SHADE_VARIANTS.forEach((shadeStep, index) => {
      const oppositeShadeStep = REVERSED_SHADE_VARIANTS[index];
      let usedColorName = colorName;

      if (usedColorName === 'dark') usedColorName = 'light';
      else if (usedColorName === 'light') usedColorName = 'dark';

      declarations.push(
        `--color-${colorName}-${shadeStep}: ${colors[usedColorName][oppositeShadeStep].color};`,
      );
      declarations.push(
        `--contrasting-color-${colorName}-${shadeStep}: ${colors[usedColorName][oppositeShadeStep].contrastingColor};`,
      );
    });
  });

  return declarations.join('');
};

export const generateCssProperties = () => {
  glob`
  :root {
    ${generateLightThemeCssProperties()}
  }

  body[data-theme='dark'] {
    ${generateDarkThemeCssProperties()}
  }
`;

  return extractCss();
};
