import { Fragment } from 'react';
import { css } from 'goober';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';

import { Anchor, Drawer, H6, useTheme } from 'flair-kit';

import { docsSections } from './SideNav';

interface Props {
  onClose: () => void;
  isOpen?: boolean;
}

export const MobileNav = ({ onClose, isOpen = false }: Props) => {
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
    <Drawer isOpen={isOpen} onClose={onClose} title="Directory">
      <nav
        className={css`
          transition: ${transition.default};

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
        {docsSections.map((section) => {
          return (
            <Fragment key={section.sectionTitle}>
              <H6>{section.sectionTitle}</H6>
              <ul>
                {section.pages.map(({ label, href }) => {
                  const isActive = router.pathname === href;

                  return (
                    <li key={href} className={cx({ [activeLink]: isActive })}>
                      <Link href={href} passHref>
                        <Anchor onClick={onClose}>{label}</Anchor>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Fragment>
          );
        })}
      </nav>
    </Drawer>
  );
};
