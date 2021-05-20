import { useMemo, useState } from 'react';
import cx from 'classnames';
import { LiveProvider, LiveError, LivePreview } from 'react-live';
import { css } from 'goober';
import nightOwlTheme from 'prism-react-renderer/themes/nightOwl';
import vsLightTheme from 'prism-react-renderer/themes/vsLight';
import { AnnouncementIcon } from '@iconicicons/react';
import prettier from 'prettier/standalone';
// @ts-expect-error
import babylon from 'prettier/parser-babylon';

import { Button, useTheme } from 'flair-kit';
import { CustomEditor } from './CustomEditor';

const scope = {
  Button: Button,

  // icons
  AnnouncementIcon: AnnouncementIcon,
};

interface Props {
  initialCode?: string;
}

const Wrapper: React.FC = ({ children }) => {
  const { colors, space, transition } = useTheme();

  return (
    <div
      className={css`
        padding: ${space.xl} ${space.lg};
        border: 2px solid;
        border-radius: 8px 8px 0 0;
        border-color: ${colors.background[500].color};
        border-bottom: none;
        transition: ${transition.default};
      `}
    >
      {children}
    </div>
  );
};

export const CodePlayground = ({ initialCode = '' }: Props) => {
  const [isShowingCode, setIsShowingCode] = useState(false);
  const { space, colors, colorScheme, transition } = useTheme();

  const formattedCode = useMemo(() => {
    return prettier.format(initialCode, {
      parser: 'babel',
      plugins: [babylon],
    });
  }, [initialCode]);

  const baseClass = css`
    border: 2px solid;
    border-radius: 0 0 8px 8px;
    border-color: ${colors.background[500].color};
    transition: ${transition.default};
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
        className={css`
          padding: ${space.md} ${space.lg};
          border-radius: 0;
          background: ${colors.background[500].color};
          transition: ${transition.default};
        `}
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
                background: ${colorScheme === 'dark'
                  ? 'rgb(1, 22, 39)'
                  : 'white'};
                border-top: none;
                transition: ${transition.default};

                & > div {
                  transition: ${transition.default};
                }
              `,
            )}
          >
            <div
              className={cx(
                baseClass,
                css`
                  border-top: none;
                  border-left: none;
                  border-right: none;
                  border-radius: 0;
                  padding: 0 ${space.xl};
                  overflow-x: scroll;
                  color: ${colors.error[500].color};
                `,
              )}
            >
              <LiveError />
            </div>
            <CustomEditor />
          </div>
        </>
      )}
    </LiveProvider>
  );
};
