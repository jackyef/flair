import { css } from 'goober';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';

import { Anchor, H5, useTheme } from 'flair-kit';

import { Portal } from '../Portal/Portal';

const topLevelPages = ['/', '/spacing', '/typography', '/colors', '/buttons'];

interface Props {
  onNavClick: () => void;
}

export const MobileNav = ({ onNavClick }: Props) => {
  const router = useRouter();
  const { space, colors, transition } = useTheme();

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
          transition: ${transition.default};
          background: ${colors.background[800].color};

          & li {
            padding: ${space.md} ${space.lg};
            border-radius: 0 8px 8px 0;
            margin-bottom: ${space.md};
            transition: ${transition.default};
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
            transition: ${transition.default};
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
