import React, { useState, useEffect, useRef } from 'react';
import { css } from 'goober';
import Link from 'next/link';

import { Switch, useTheme, H3 } from 'flair-kit';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
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
        width: 100%;
        background: ${colors.background[800].color};
        transition: ${transition.default};
        z-index: 3;
        backdrop-filter: blur(3px);
        opacity: 0.9;

        &::after {
          content: ' ';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          box-shadow: ${shadow.subtle};
          opacity: ${!isHomepage || showingShadow ? '1' : '0'};
          transition: ${transition.default};
          pointer-events: none;
        }
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
              {isHomepage ? '' : 'Flair'}
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
        </div>
      </div>
    </header>
  );
};
