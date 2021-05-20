import { css } from 'goober';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';

import { Anchor } from 'flair-kit/components/Anchor/Anchor';
import { H5 } from 'flair-kit/components/Typography/Typography';
import { useTheme } from 'flair-kit/context/theme';
import { defaultTransition } from 'flair-kit/theme/transition';

const topLevelPages = ['/', '/spacing', '/typography', '/colors', '/buttons'];

export const SideNav = () => {
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
    <nav
      className={css`
        position: sticky;
        top: 80px;
        display: flex;
        flex-direction: column;
        width: 280px;
        height: calc(100vh - 80px);
        flex-shrink: 0;
        padding: ${space.lg};

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
                <Anchor>{page}</Anchor>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
