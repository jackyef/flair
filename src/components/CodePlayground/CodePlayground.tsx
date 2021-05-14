import { useMemo, useState } from 'react';
import cx from 'classnames';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { css } from 'goober';
import nightOwlTheme from 'prism-react-renderer/themes/nightOwl';
import vsLightTheme from 'prism-react-renderer/themes/vsLight';
import prettier from 'prettier/standalone';
// @ts-expect-error
import babylon from 'prettier/parser-babylon';

import { Button } from '@/flair/components/Button/Button';
import { useTheme } from '@/flair/context/theme';
import { defaultTransition } from '@/flair/theme/transition';
import { AnnouncementIcon } from '@iconicicons/react';

const scope = {
  Button: Button,

  // icons
  AnnouncementIcon: AnnouncementIcon
};

interface Props {
  initialCode?: string;
}

const Wrapper: React.FC = ({ children }) => {
  const { colors, space } = useTheme();

  return (
    <div
      className={css`
        padding: ${space.xl} ${space.lg};
        border: 2px solid;
        border-radius: 8px 8px 0 0;
        border-color: ${colors.primary[500].color};
        border-bottom: none;
      `}
    >
      {children}
    </div>
  );
};

export const CodePlayground = ({ initialCode = '' }: Props) => {
  const [isShowingCode, setIsShowingCode] = useState(false);
  const { space, colors, colorScheme } = useTheme();

  const formattedCode = useMemo(() => {
    return prettier.format(initialCode, {
      parser: 'babel',
      plugins: [babylon],
    });
  }, [initialCode]);

  const baseClass = css`
    border: 2px solid;
    border-radius: 0 0 8px 8px;
    border-color: ${colors.primary[500].color};
  `;

  return (
    <LiveProvider
      code={formattedCode}
      scope={scope}
      theme={colorScheme === 'dark' ? nightOwlTheme : vsLightTheme}
    >
      {/* @ts-expect-error */}
      <LivePreview Component={Wrapper} />

      <div
        className={cx(
          baseClass,
          css`
            padding: ${space.md} ${space.lg};
            border-top: none;
            border-bottom: none;
            border-radius: 0;
          `,
        )}
      >
        <LiveError />
      </div>

      <div
        className={cx(
          baseClass,
          css`
            padding: ${space.md} ${space.lg};
            border-top: none;
            ${isShowingCode ? 'border-bottom: none;' : ''}
            border-radius: 0;
            background: ${colors.background[600].color};
          `,
        )}
      >
        <span
          tabIndex={0}
          className={css`
            cursor: pointer;
            color: ${colors.secondary[400].color};
          `}
          onClick={() => {
            setIsShowingCode((prev) => !prev);
          }}
        >
          View code
        </span>
      </div>
      {isShowingCode && (
        <>
          <div
            className={cx(
              baseClass,
              css`
                padding: ${space.xl} ${space.lg};
                background: ${colorScheme === 'dark'
                  ? 'rgb(1, 22, 39)'
                  : 'white'};
                border-top: none;
                transition: ${defaultTransition};
              `,
            )}
          >
            <LiveEditor />
          </div>
        </>
      )}
    </LiveProvider>
  );
};
