import { css } from 'goober';

import { useTheme } from 'flair-kit';
import { Header } from './Header';

export const HomeLayout: React.FC = ({ children }) => {
  const { space } = useTheme();

  return (
    <div
      className={css`
        isolation: isolate;
      `}
    >
      <Header isHomepage />

      <div
        className={css`
          margin-top: ${space.md};
          display: flex;
        `}
      >
        <div
          className={css`
            flex: 1;
            width: 100%;
          `}
        >
          {children}
          <footer
            className={css`
              height: ${space['4xl']};
            `}
          />
        </div>
      </div>
    </div>
  );
};
