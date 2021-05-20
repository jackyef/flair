import React from 'react';
import { css } from 'goober';

import { useTheme } from 'flair-kit/context/theme';

export const Main: React.FC = ({ children }) => {
  const { space } = useTheme();

  return (
    <main
      className={css`
        width: 100%;

        & h1:first-child {
          margin-top: ${space.lg};
        }
      `}
    >
      {children}
    </main>
  );
};
