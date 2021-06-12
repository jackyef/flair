import { useMemo, useState } from 'react';
import cx from 'classnames';
import { LiveProvider, LiveError, LivePreview } from 'react-live';
import { css, styled } from 'goober';
import paleNightTheme from 'prism-react-renderer/themes/palenight';
import vsLightTheme from 'prism-react-renderer/themes/vsLight';
import prettier from 'prettier/standalone';
import babylon from 'prettier/parser-babel';
import * as HeroIconsSolid from '@heroicons/react/solid';

import * as FlairKit from 'flair-kit';
// import { CustomEditor } from './CustomEditor';
import { MonacoEditor } from './MonacoEditor';

const { useTheme } = FlairKit;

const scope = {
  // flair-kit exported modules
  ...FlairKit,

  // goober functions
  css,
  styled,

  // 3rd party icons
  HeroIconsSolid,
};

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

interface Props {
  initialCode?: string;
}

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
      noInline
      code={formattedCode}
      scope={scope}
      theme={colorScheme === 'dark' ? paleNightTheme : vsLightTheme}
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
        <button
          tabIndex={0}
          className={css`
            cursor: pointer;
            color: ${colors.secondary[700].color};
            background: transparent;
          `}
          onClick={() => {
            setIsShowingCode((prev) => !prev);
          }}
        >
          View code
        </button>
      </div>
      {isShowingCode && (
        <>
          <div
            className={cx(
              baseClass,
              css`
                background: ${colorScheme === 'dark'
                  ? 'rgb(41, 45, 62)'
                  : 'white'};
                border-top: none;
                transition: ${transition.default};
                height: 40vh;

                & *:focus {
                  box-shadow: none !important;
                }

                & > div {
                  transition: ${transition.default};
                }
              `
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
                  overflow-x: auto;
                  color: ${colors.error[500].color};
                `
              )}
            >
              <LiveError />
            </div>

            <MonacoEditor />
            {/* <CustomEditor /> */}
          </div>
        </>
      )}
    </LiveProvider>
  );
};
