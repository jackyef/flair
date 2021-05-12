import { css } from 'goober';

import { useTheme } from '@/flair/context/theme';
import { Header } from './Header';
import { SideNav } from './SideNav';

export const Layout: React.FC = ({ children }) => {
  const { space } = useTheme();

  return (
    <>
      <Header />

      <div
        className={css`
          display: flex;
          max-width: 1440px;
          width: 100%;
          margin: 0 auto;
        `}
      >
        <SideNav />
        {children}
      </div>
      <footer
        className={css`
          height: ${space['4xl']};
        `}
      />
    </>
  );
};
