import { Fragment, useRef, useEffect } from 'react';
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
  const activeAnchorRef = useRef<HTMLAnchorElement>(null);
  const router = useRouter();
  const { space, colors, transition } = useTheme();

  const activeLink = css`
    background: ${colors.background[500].color};
    color: ${colors.background[500].contrastingColor} !important;
  `;

  // Make sure the active link is visible in viewport
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        if (activeAnchorRef.current) {
          activeAnchorRef.current.scrollIntoView(false);
        }
      });
    }
  }, [isOpen]);

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      title="Directory"
      initialFocus={activeAnchorRef}
    >
      <nav
        className={css`
          transition: ${transition.default};

          & a {
            display: block;
            transition: ${transition.default};
            padding: ${space.md} ${space.lg};
            border-radius: 0 8px 8px 0;
            margin-bottom: ${space.md};
            transition: ${transition.default};
          }

          & a:hover {
            background: ${colors.background[600].color};
            color: ${colors.background[600].contrastingColor};
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
                    <li key={href}>
                      <Link href={href} passHref replace>
                        <Anchor
                          ref={isActive ? activeAnchorRef : undefined}
                          className={cx({ [activeLink]: isActive })}
                        >
                          {label}
                        </Anchor>
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
