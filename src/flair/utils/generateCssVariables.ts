// This file is meant to be run on the server-side
// Usually during build-time to generate all the CSS Variables
// Based on the theme

import { extractCss, glob } from 'goober';
import { colors as defaultColors, COLORS_VARIANTS, COLOR_SHADE_VARIANTS } from '../theme/colors';
import type { Colors } from '../theme/colors';

const generateLightThemeCssVariables = (colors: Colors) => {
  const declarations: string[] = [];

  COLORS_VARIANTS.forEach((colorName) => {
    COLOR_SHADE_VARIANTS.forEach((shadeStep) => {
      declarations.push(
        `--color-${colorName}-${shadeStep}: ${colors[colorName][shadeStep].color};`,
      );
      declarations.push(
        `--contrasting-color-${colorName}-${shadeStep}: ${colors[colorName][shadeStep].contrastingColor};`,
      );

      if (colorName === 'light') {
        declarations.push(
          `--color-background-${shadeStep}: ${colors[colorName][shadeStep].color};`,
        );
        declarations.push(
          `--contrasting-color-background-${shadeStep}: ${colors[colorName][shadeStep].contrastingColor};`,
        );
      }

      if (colorName === 'dark') {
        declarations.push(
          `--color-foreground-${shadeStep}: ${colors[colorName][shadeStep].color};`,
        );
        declarations.push(
          `--contrasting-color-foreground-${shadeStep}: ${colors[colorName][shadeStep].contrastingColor};`,
        );
      }
    });
  });

  return declarations.join('');
};

const REVERSED_SHADE_VARIANTS = [...COLOR_SHADE_VARIANTS].reverse();

const generateDarkThemeCssVariables = (colors: Colors) => {
  const declarations: string[] = [
    `--color-foreground: ${colors.light[800].color};`,
    `--color-background: ${colors.light[800].contrastingColor};`,
  ];

  COLORS_VARIANTS.forEach((colorName) => {
    COLOR_SHADE_VARIANTS.forEach((shadeStep, index) => {
      const oppositeShadeStep = REVERSED_SHADE_VARIANTS[index];

      declarations.push(
        `--color-${colorName}-${shadeStep}: ${colors[colorName][oppositeShadeStep].color};`,
      );
      declarations.push(
        `--contrasting-color-${colorName}-${shadeStep}: ${colors[colorName][oppositeShadeStep].contrastingColor};`,
      );

      if (colorName === 'dark') {
        declarations.push(
          `--color-background-${shadeStep}: ${colors[colorName][oppositeShadeStep].color};`,
        );
        declarations.push(
          `--contrasting-color-background-${shadeStep}: ${colors[colorName][oppositeShadeStep].contrastingColor};`,
        );
      }

      if (colorName === 'light') {
        declarations.push(
          `--color-foreground-${shadeStep}: ${colors[colorName][oppositeShadeStep].color};`,
        );
        declarations.push(
          `--contrasting-color-foreground-${shadeStep}: ${colors[colorName][oppositeShadeStep].contrastingColor};`,
        );
      }
    });
  });

  return declarations.join('');
};

export const generateCssVariables = (colors = defaultColors) => {
  glob`
  :root {
    ${generateLightThemeCssVariables(colors)}
  }

  [data-flair-theme='dark'] {
    ${generateDarkThemeCssVariables(colors)}
  }
`;

  return extractCss();
};
