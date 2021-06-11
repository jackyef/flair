import { css } from 'goober';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';
import { MenuIcon } from '@heroicons/react/solid';

import { Button, Anchor, H5, H6, useTheme } from 'flair-kit';

import { RenderOnMobile } from '../MediaQuery/RenderOnMobile';
import { RenderOnMobileUp } from '../MediaQuery/RenderOnMobileUp';
import { MobileNav } from './MobileNav';
import { docsSections, isSection } from './helpers';

const MobileNavWrapper = () => {
  const router = useRouter();
  const { space } = useTheme();

  const handleShowMobileNav = () => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        showMobileNav: true,
      },
    });
  };

  const handleHideMobileNav = () => {
    router.back();
  };

  const showMobileNav = Boolean(router.query.showMobileNav);

  return (
    <RenderOnMobile>
      <MobileNav onClose={handleHideMobileNav} isOpen={showMobileNav} />
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
          icon={<MenuIcon width={24} height={24} />}
          size="sm"
          onClick={handleShowMobileNav}
          variant="background"
        />
      </div>
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
              transition: ${transition.default};
            }

            & a:hover {
              background: ${colors.background[600].color};
              color: ${colors.background[600].contrastingColor};
            }
          `}
        >
          <H5>Directory</H5>
          {docsSections.map((sectionOrPage) => {
            return isSection(sectionOrPage) ? (
              <div
                key={sectionOrPage.sectionTitle}
                className={css`
                  padding: ${space.md} ${space.lg};

                  & > h6:first-child {
                    margin-top: ${space.md};
                    margin-bottom: ${space.sm};
                  }
                `}
              >
                <H6 className={css``}>{sectionOrPage.sectionTitle}</H6>
                <ul>
                  {sectionOrPage.pages.map(({ label, href }) => {
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
              </div>
            ) : (
              <Link key={sectionOrPage.href} href={sectionOrPage.href} passHref>
                <Anchor
                  className={cx({
                    [activeLink]: router.pathname === sectionOrPage.href,
                  })}
                >
                  {sectionOrPage.label}
                </Anchor>
              </Link>
            );
          })}
        </nav>
      </RenderOnMobileUp>

      <MobileNavWrapper />
    </>
  );
};
