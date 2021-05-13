import { createElement } from 'react';
import { setup } from 'goober';
import { createGlobalStyles } from 'goober/global';
import { colors } from '@/flair/theme/colors';

setup(createElement);

export const GlobalStyles = createGlobalStyles`
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

  a {
    color: inherit;
    text-decoration: inherit;
  }

  @media (prefers-reduced-motion: no-preference) {
    :focus, a:focus {
      transition: outline-offset .25s ease;
      outline-offset: 4px;
    }
  }
`;
