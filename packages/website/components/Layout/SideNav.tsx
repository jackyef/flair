import { Fragment, useEffect, useState } from 'react';
import { css } from 'goober';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

import { Button, Anchor, H5, H6, useTheme } from 'flair-kit';

import { RenderOnMobile } from '../MediaQuery/RenderOnMobile';
import { MobileNav } from './MobileNav';
import { Portal } from '../Portal/Portal';

export const docsSections = [
  {
    sectionTitle: 'Foundation',
    pages: [
      { label: 'Space', href: '/docs/space' },
      { label: 'Typography', href: '/docs/typography' },
      { label: 'Colors', href: '/docs/colors' },
    ],
  },
  {
    sectionTitle: 'Primitives',
    pages: [
      { label: 'Box', href: '/docs/box' },
      { label: 'Text', href: '/docs/text' },
    ],
  },
  {
    sectionTitle: 'Form',
    pages: [
      { label: 'Button', href: '/docs/button' },
      { label: 'Switch', href: '/docs/switch' },
    ],
  },
  {
    sectionTitle: 'Feedback',
    pages: [{ label: 'Tooltip', href: '/docs/tooltip' }],
  },
];

const MobileNavWrapper = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { space } = useTheme();

  /* Scroll-locking */
  useEffect(() => {
    if (!showMobileNav) return;

    const overflow = document.documentElement.style.overflow;
    const paddingRight = document.documentElement.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.documentElement.style.overflow = overflow;
      document.documentElement.style.paddingRight = paddingRight;
    };
  }, [showMobileNav]);

  return (
    <Portal>
      <RenderOnMobile>
        {showMobileNav && (
          <MobileNav onNavClick={() => setShowMobileNav(false)} />
        )}
        <div
          className={css`
            position: fixed;
            z-index: 15;
            bottom: ${space.lg};
            right: ${space.lg};
          `}
        >
          <Button
            className={css`
              margin-left: ${space.md};
            `}
            icon={
              showMobileNav ? (
                <XIcon width={24} height={24} />
              ) : (
                <MenuIcon width={24} height={24} />
              )
            }
            size="sm"
            onClick={() => {
              setShowMobileNav((prev) => !prev);
            }}
            variant="background"
          />
        </div>
      </RenderOnMobile>
    </Portal>
  );
};

export const SideNav = () => {
  const router = useRouter();
  const { space, colors, transition, fontSizes, lineHeights } = useTheme();

  const activeLink = css`
    background: ${colors.background[500].color};

    & > a,
    & > a:hover {
      color: ${colors.background[500].contrastingColor};
    }
  `;

  // Navbar height isn't fixed. This is so that when user change their browser font settings,
  // the Navbar container can adjust accordingly.
  // Because of this, we need to calculate the navbarHeight as follows
  const navbarHeight = `4px + ${space.lg} + ${space.lg} + ${fontSizes.h3} * ${lineHeights.h3}`;

  return (
    <>
      <nav
        className={css`
          position: sticky;
          top: calc(${navbarHeight});
          display: flex;
          flex-direction: column;
          width: 280px;
          flex-shrink: 0;

          /* Some manual stuffs required to achieve alignment */
          padding: calc(${space.xl} + 4px) ${space.xl};

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
            <Fragment key={section.sectionTitle}>
              <H6>{section.sectionTitle}</H6>
              <ul>
                {section.pages.map(({ label, href }) => {
                  const isActive = router.pathname === href;

                  return (
                    <li key={href} className={cx({ [activeLink]: isActive })}>
                      <Link href={href} passHref>
                        <Anchor>{label}</Anchor>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Fragment>
          );
        })}
      </nav>

      <MobileNavWrapper />
    </>
  );
};
