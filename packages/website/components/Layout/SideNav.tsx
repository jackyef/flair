import { Fragment, useState } from 'react';
import { css } from 'goober';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

import { Button, Anchor, H5, H6, useTheme } from 'flair-kit';

import { RenderOnMobile } from '../MediaQuery/RenderOnMobile';
import { RenderOnMobileUp } from '../MediaQuery/RenderOnMobileUp';
import { MobileNav } from './MobileNav';

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
    pages: [
      { label: 'Tooltip', href: '/docs/tooltip' },
      { label: 'Toast', href: '/docs/toast' },
    ],
  },
  {
    sectionTitle: 'Overlay',
    pages: [
      { label: 'Dialog', href: '/docs/dialog' },
      { label: 'Drawer', href: '/docs/drawer' },
    ],
  },
];

const MobileNavWrapper = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { space } = useTheme();

  return (
    <RenderOnMobile>
      <MobileNav
        onClose={() => setShowMobileNav(false)}
        isOpen={showMobileNav}
      />
      {!showMobileNav && (
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
      )}
    </RenderOnMobile>
  );
};

export const SideNav = () => {
  const router = useRouter();
  const { space, colors, transition, fontSizes, lineHeights } = useTheme();

  const activeLink = css`
    background: ${colors.background[500].color};
    color: ${colors.background[500].contrastingColor} !important;
  `;

  // Navbar height isn't fixed. This is so that when user change their browser font settings,
  // the Navbar container can adjust accordingly.
  // Because of this, we need to calculate the navbarHeight as follows
  const navbarHeight = `4px + ${space.lg} + ${space.lg} + ${fontSizes.h3} * ${lineHeights.h3}`;

  return (
    <>
      <RenderOnMobileUp>
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
          <H5>Directory</H5>
          {docsSections.map((section) => {
            return (
              <Fragment key={section.sectionTitle}>
                <H6>{section.sectionTitle}</H6>
                <ul>
                  {section.pages.map(({ label, href }) => {
                    const isActive = router.pathname === href;

                    return (
                      <li key={href}>
                        <Link href={href} passHref>
                          <Anchor className={cx({ [activeLink]: isActive })}>
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
      </RenderOnMobileUp>

      <MobileNavWrapper />
    </>
  );
};
