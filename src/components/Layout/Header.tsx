import { css } from 'goober';

import { Button } from '@/flair/components/Button/Button';
import { useTheme } from '@/flair/context/theme';
import { defaultTransition } from '@/flair/theme/transition';
import { H3 } from '@/flair/components/Typography/Typography';
import { shadows } from '@/flair/theme/shadow';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

export const Header = () => {
  const { toggleColorScheme, colorScheme, space, colors } = useTheme();

  return (
    <header
      className={css`
        position: sticky;
        top: 0;
        box-shadow: ${shadows.subtle};
        margin-bottom: ${space.xl};
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
        `}
      >
        <H3
          className={css`
            margin-bottom: 0;
          `}
        >
          FlairUI
        </H3>
        <Button
          icon={colorScheme === 'light' ? <SunIcon /> : <MoonIcon />}
          size="sm"
          onClick={toggleColorScheme}
        />
      </div>
    </header>
  );
};
