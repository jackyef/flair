import { css } from 'goober';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';

import { Anchor, H5, H6, useTheme } from 'flair-kit';

import { docsSections } from './SideNav';

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
    <nav
      className={css`
        position: fixed;
        z-index: 10;
        top: 60px;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        padding: ${space.lg};
        transition: ${transition.default};
        background: ${colors.background[800].color};
        overflow-y: auto;

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
      {docsSections.map((section) => {
        return (
          <>
            <H6>{section.sectionTitle}</H6>
            <ul>
              {section.pages.map(({ label, href }) => {
                const isActive = router.pathname === href;

                return (
                  <li key={href} className={cx({ [activeLink]: isActive })}>
                    <Link href={href} passHref>
                      <Anchor onClick={onNavClick}>{label}</Anchor>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        );
      })}
    </nav>
  );
};
