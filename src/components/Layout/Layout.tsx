import Link from 'next/link';
import { css } from 'goober';

import { Anchor } from '@/flair/components/Anchor/Anchor';
import { H5 } from '@/flair/components/Typography/Typography';
import { useTheme } from '@/flair/context/theme';
import { Header } from './Header';

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
        <nav
          className={css`
            display: flex;
            flex-direction: column;
            width: 280px;
            flex-shrink: 0;
            padding: ${space.lg};

            & li {
              margin-bottom: ${space.md};
            }
          `}
        >
          <H5>Directory</H5>
          <ul>
            <li>
              <Link href="/" passHref>
                <Anchor>/</Anchor>
              </Link>
            </li>
            <li>
              <Link href="/spacing" passHref>
                <Anchor>/spacing</Anchor>
              </Link>
            </li>
            <li>
              <Link href="/typography" passHref>
                <Anchor>/typography</Anchor>
              </Link>
            </li>
            <li>
              <Link href="/colors" passHref>
                <Anchor>/colors</Anchor>
              </Link>
            </li>
            <li>
              <Link href="/buttons" passHref>
                <Anchor>/buttons</Anchor>
              </Link>
            </li>
          </ul>
        </nav>
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
