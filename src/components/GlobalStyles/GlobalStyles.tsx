import { createElement } from 'react';
import { setup } from 'goober';
import { createGlobalStyles } from 'goober/global';
import { colors } from '@/theme/colors';

setup(createElement);

export const GlobalStyles = createGlobalStyles`
  body {
    background: ${colors.light[800].color};
    color: ${colors.dark[800].color};
  }
`;
