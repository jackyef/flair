import { useState } from 'react';
import { css } from 'goober';
import Link from 'next/link';

import { Button, Switch, useTheme, H3 } from 'flair-kit';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from '@heroicons/react/solid';
import { RenderOnMobile } from '../MediaQuery/RenderOnMobile';
import { MobileNav } from './MobileNav';
import { Portal } from '../Portal/Portal';

export const Header = () => {
  const { toggleColorScheme, colorScheme, space, colors, shadow, transition } =
    useTheme();
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <header
      className={css`
        position: sticky;
        top: 0;
        box-shadow: ${shadow.subtle};
        margin-bottom: ${space.md};
        width: 100%;
        background: ${colors.background[700].color};
        transition: ${transition.default};
        z-index: 3;
      `}
    >
      <div
        className={css`
          display: flex;
          padding: ${space.lg};
          margin: 0 auto;
          max-width: 1440px;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          & > h3 {
            margin: 0;
          }
        `}
      >
        <H3>
          <Link href="/" passHref>
            <a>FlairKit</a>
          </Link>
        </H3>
        <div>
          <Switch
            size="md"
            enabled={colorScheme === 'light'}
            icon={
              colorScheme === 'light' ? (
                <SunIcon fill={colors.secondary[400].color} />
              ) : (
                <MoonIcon fill={colors.primary[700].color} />
              )
            }
            onChange={toggleColorScheme}
            label="Toggle color scheme"
          />
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
        </div>
      </div>
    </header>
  );
};
