import { css } from 'goober';

import { useTheme } from 'flair-kit';
import { Header } from './Header';
import { SideNav } from './SideNav';
import { RenderOnMobileUp } from '../MediaQuery/RenderOnMobileUp';

export const Layout: React.FC = ({ children }) => {
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
          display: flex;
          max-width: 1440px;
          width: 100%;
          margin: 0 auto;
        `}
      >
        <RenderOnMobileUp>
          <SideNav />
        </RenderOnMobileUp>
        <div
          className={css`
            padding: 0 ${space.lg};
            flex: 1;
            max-width: 100%;

            ${mediaQuery.onMobileUp} {
              max-width: calc(100% - 280px - ${space.lg});
            }
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
