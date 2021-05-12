import { createElement } from 'react';
import { setup } from 'goober';
import { createGlobalStyles } from 'goober/global';
import { colors } from '@/flair/theme/colors';
import {
  generateDarkThemeCssVariables,
  generateLightThemeCssVariables,
} from '@/flair/utils/generateCssVariables';

setup(createElement);

export const GlobalStyles = createGlobalStyles`
:root {
  ${generateLightThemeCssVariables()}
}

[data-flair-theme='dark'] {
  ${generateDarkThemeCssVariables()}
}
  body {
    font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    background: ${colors.light[800].color};
    background: var(--color-background-800);
    color: ${colors.dark[400].color};
    color: var(--color-foreground-400);
  }

  button {
    font: inherit;
  }

  @media (prefers-reduced-motion: no-preference) {
    :focus {
      transition: outline-offset .25s ease;
      outline-offset: 4px;
    }
  }
`;
