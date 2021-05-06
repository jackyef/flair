import { createElement } from 'react';
import { setup } from 'goober';
import { createGlobalStyles } from 'goober/global';
import { colors } from '@/flair/theme/colors';

setup(createElement);

export const GlobalStyles = createGlobalStyles`
  body {
    background: ${colors.light[800].color};
    background: var(--color-background);
    color: ${colors.dark[400].color};
    color: var(--color-foreground);
  }
`;
