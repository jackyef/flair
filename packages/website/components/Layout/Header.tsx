import React, { useState, useEffect, useRef } from 'react';
import { css } from 'goober';
import Link from 'next/link';

import { Button, Switch, useTheme, H3 } from 'flair-kit';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from '@heroicons/react/solid';
import { RenderOnMobile } from '../MediaQuery/RenderOnMobile';
import { MobileNav } from './MobileNav';
import { Portal } from '../Portal/Portal';
import { RenderOnMount } from '../RenderOnMount/RenderOnMount';
import { Logo } from '../Logo/Logo';

interface Props {
  isHomepage?: boolean;
}

export const Header = ({ isHomepage = false }: Props) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [showingShadow, setShowingShadow] = useState(false);
  const { toggleColorScheme, colorScheme, space, colors, shadow, transition } =
    useTheme();
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (headerRef.current.offsetTop >= 20) {
          if (!showingShadow) {
            setShowingShadow(true);
          }
        } else {
          if (showingShadow) {
            setShowingShadow(false);
          }
        }
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [showingShadow]);

  return (
    <header
      ref={headerRef}
      className={css`
        position: sticky;
        top: ${isHomepage ? '-20px' : '0'};
        box-shadow: ${!isHomepage || showingShadow
          ? `${shadow.subtle}`
          : 'none'};
        width: 100%;
        background: ${colors.background[800].color};
        transition: ${transition.default};
        z-index: 3;
        backdrop-filter: blur(3px);
        opacity: 0.8;
      `}
    >
      <div
        className={css`
          display: flex;
          padding: ${isHomepage
            ? `calc(${space.lg} + 20px) ${space.xl} ${space.lg}`
            : `${space.lg} ${space.xl}`};
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
            <a
              className={css`
                display: inline-flex;
                align-items: center;
              `}
            >
              <Logo
                size={20}
                className={css`
                  margin-right: ${space.lg};
                `}
              />{' '}
              {isHomepage ? '' : 'FlairKit'}
            </a>
          </Link>
        </H3>
        <div>
          <RenderOnMount>
            <Switch
              size="md"
              enabled={colorScheme === 'dark'}
              icon={
                colorScheme === 'dark' ? (
                  <MoonIcon fill={colors.primary[500].color} />
                ) : (
                  <SunIcon fill={colors.secondary[700].color} />
                )
              }
              onChange={toggleColorScheme}
              label="Dark color scheme"
            />
          </RenderOnMount>
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
