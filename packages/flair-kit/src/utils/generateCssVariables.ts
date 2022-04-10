// This file is meant to be run on the server-side
// Usually during build-time to generate all the CSS Variables
// Based on the theme

import { extractCss, glob } from 'goober';
import { colors as defaultColors, HUES } from '../theme/colors';
import type { Colors } from '../theme/colors';
import { COLOR_SCALE_STEPS, REVERSED_COLOR_STEPS } from './reverseColorStep';

export const generateLightThemeCssVariables = (colors: Colors) => {
  const declarations: string[] = [
    `--color-foreground: ${colors.dark[70]};`,
    `--color-background: ${colors.light[20]};`,
  ];

  HUES.forEach((colorName) => {
    COLOR_SCALE_STEPS.forEach((scaleStep) => {
      declarations.push(
        `--color-${colorName}-${scaleStep}: ${colors[colorName][scaleStep]};`
      );

      if (colorName === 'light') {
        declarations.push(
          `--color-background-${scaleStep}: ${colors[colorName][scaleStep]};`
        );
      }

      if (colorName === 'dark') {
        declarations.push(
          `--color-foreground-${scaleStep}: ${colors[colorName][scaleStep]};`
        );
      }
    });
  });

  return declarations.join('');
};

export const generateDarkThemeCssVariables = (colors: Colors) => {
  const declarations: string[] = [
    `--color-background: ${colors.dark[70]};`,
    `--color-foreground: ${colors.light[20]};`,
  ];

  HUES.forEach((colorName) => {
    COLOR_SCALE_STEPS.forEach((scaleStep, index) => {
      const oppositeScaleStep = REVERSED_COLOR_STEPS[index];

      declarations.push(
        `--color-${colorName}-${scaleStep}: ${colors[colorName][oppositeScaleStep]};`
      );

      if (colorName === 'light') {
        declarations.push(
          `--color-foreground-${scaleStep}: ${colors[colorName][oppositeScaleStep]};`
        );
      }

      if (colorName === 'dark') {
        declarations.push(
          `--color-background-${scaleStep}: ${colors[colorName][oppositeScaleStep]};`
        );
      }
    });
  });

  return declarations.join('');
};

export const generateCssVariables = (colors = defaultColors) => {
  glob`:root {
  ${generateLightThemeCssVariables(colors)}
}
[data-flair-theme='dark'] {
  ${generateDarkThemeCssVariables(colors)}
}
`;

  return extractCss();
};
