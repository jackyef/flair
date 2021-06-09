import { createElement } from 'react';
import { setup } from 'goober';
import { createGlobalStyles } from 'goober/global';
import { colors } from '../../theme/colors';

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
    border: none;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  *:focus {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6) !important;
    outline: none !important;
  }

  /* ReachUI related styles */
  :root {
    --reach-tooltip: 1;
  }

  [data-reach-tooltip] {
    z-index: 1;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
  }
`;
