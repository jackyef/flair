import { css } from 'goober';

import { useTheme } from 'flair-kit';
import { Header } from './Header';
import { SideNav } from './SideNav';
import { DocsNavButtons } from '../DocsNavButtons/DocsNavButtons';

export const DocsLayout: React.FC = ({ children }) => {
  const { space, mediaQuery } = useTheme();

  return (
    <div
      className={css`
        isolation: isolate;
      `}
    >
      <Header />

      <div
        className={css`
          margin-top: ${space.md};
          display: flex;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
        `}
      >
        <SideNav />
        <div
          className={css`
            flex: 1;
            padding: 0 ${space.lg};
            width: 100%;

            ${mediaQuery.onMobileUp} {
              max-width: calc(100% - 280px - ${space.lg});
              padding: 0 ${space.lg} 0 ${space['2xl']};
            }
          `}
        >
          {children}

          <DocsNavButtons />
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
