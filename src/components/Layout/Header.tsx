import { useState } from 'react';
import { css } from 'goober';

import { Button } from '@/flair/components/Button/Button';
import { useTheme } from '@/flair/context/theme';
import { defaultTransition } from '@/flair/theme/transition';
import { H3 } from '@/flair/components/Typography/Typography';
import { shadows } from '@/flair/theme/shadow';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from '@heroicons/react/solid';
import { RenderOnMobile } from '../MediaQuery/RenderOnMobile';
import { MobileNav } from './MobileNav';

export const Header = () => {
  const { toggleColorScheme, colorScheme, space, colors } = useTheme();
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <header
      className={css`
        position: sticky;
        top: 0;
        box-shadow: ${shadows.subtle};
        margin-bottom: ${space.md};
        width: 100%;
        background: ${colors.background[700].color};
        transition: ${defaultTransition};
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
        <H3>FlairKit</H3>
        <div>
          <Button
            icon={
              colorScheme === 'light' ? (
                <SunIcon width={24} height={24} />
              ) : (
                <MoonIcon width={24} height={24} />
              )
            }
            size="sm"
            onClick={toggleColorScheme}
            variant="background"
          />
          <RenderOnMobile display="inline-block">
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

            {showMobileNav && (
              <MobileNav onNavClick={() => setShowMobileNav(false)} />
            )}
          </RenderOnMobile>
        </div>
      </div>
    </header>
  );
};
