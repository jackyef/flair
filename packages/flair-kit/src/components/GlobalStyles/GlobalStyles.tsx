import { createElement } from 'react';
import { setup } from 'goober';
import { createGlobalStyles } from 'goober/global';
import { colors } from '../../theme/colors';
import {
  generateLightThemeCssVariables,
  generateDarkThemeCssVariables,
} from '../../utils/generateCssVariables';

setup(createElement);

export const GlobalStyles = createGlobalStyles`
  :root {
    ${generateLightThemeCssVariables(colors)}
  }

  [data-flair-theme='dark'] {
    ${generateDarkThemeCssVariables(colors)}
  }

  body {
    font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    background: ${colors.light[20]};
    background: var(--color-background-20);
    color: ${colors.dark[80]};
    color: var(--color-foreground-80);
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

    html {
    box-sizing: border-box;
    font-size: 16px;
  }


  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  *:focus {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6) !important;
    outline: none !important;
  }

  /* make scrollbar consistent across different platform */
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    background-color: var(--color-background-80);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: var(--color-background-30);
  }

  ::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: transparent;
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
