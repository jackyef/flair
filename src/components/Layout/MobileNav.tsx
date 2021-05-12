import { css } from 'goober';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';

import { Anchor } from '@/flair/components/Anchor/Anchor';
import { H5 } from '@/flair/components/Typography/Typography';
import { useTheme } from '@/flair/context/theme';
import { defaultTransition } from '@/flair/theme/transition';

import { Portal } from '../Portal/Portal';

const topLevelPages = ['/', '/spacing', '/typography', '/colors', '/buttons'];

interface Props {
  onNavClick: () => void;
}

export const MobileNav = ({ onNavClick }: Props) => {
  const router = useRouter();
  const { space, colors } = useTheme();

  const activeLink = css`
    background: ${colors.background[500].color};

    & > a,
    & > a:hover {
      color: ${colors.background[500].contrastingColor};
    }
  `;

  return (
    <Portal>
      <nav
        className={css`
          position: fixed;
          z-index: 10;
          top: 72px;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          padding: ${space.lg};
          transition: ${defaultTransition};
          background: ${colors.background[800].color};

          & li {
            padding: ${space.md} ${space.lg};
            border-radius: 0 8px 8px 0;
            margin-bottom: ${space.md};
            transition: ${defaultTransition};
          }

          & li:hover {
            background: ${colors.background[600].color};

            & > a,
            & > a:hover {
              color: ${colors.background[600].contrastingColor};
            }
          }

          & a {
            display: block;
            transition: ${defaultTransition};
          }
        `}
      >
        <H5>Directory</H5>
        <ul>
          {topLevelPages.map((page) => {
            const isActive = router.pathname === page;

            return (
              <li key={page} className={cx({ [activeLink]: isActive })}>
                <Link href={page} passHref>
                  <Anchor onClick={onNavClick}>{page}</Anchor>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Portal>
  );
};
