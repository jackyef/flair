import { Button, useTheme, useToast } from 'flair-kit';
import cx from 'classnames';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import nightOwlTheme from 'prism-react-renderer/themes/nightOwl';
import { css } from 'goober';
import prettier from 'prettier/standalone';
import babylon from 'prettier/parser-babel';

import { ClipboardIcon } from '@iconicicons/react';
import { useMemo } from 'react';

const copyToClipboard = (str: string) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

interface Props {
  code: string;
  language?: Language;
}

export const HighlightedCode = ({ code, language = 'jsx' }: Props) => {
  const { addToast } = useToast();
  const { space, transition, radii } = useTheme();
  const formattedCode = useMemo(() => {
    if (language === 'jsx') {
      return prettier.format(code, {
        parser: 'babel',
        plugins: [babylon],
      });
    }

    return code.trim();
  }, [code, language]);

  return (
    <Highlight
      {...defaultProps}
      code={formattedCode}
      language={language}
      theme={nightOwlTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div
          className={css`
            position: relative;
            isolation: isolate;
          `}
        >
          <Button
            className={css`
              position: absolute;
              bottom: ${space.lg};
              right: ${space.lg};
              z-index: 3;
              opacity: 0.5;

              &:hover,
              &:focus {
                opacity: 1;
              }
            `}
            onClick={() => {
              copyToClipboard(formattedCode);
              addToast({
                title: 'Copied!',
                description: 'The code snippet has been copied to clipboard.',
                variant: 'success',
              });
            }}
            size="sm"
            variant="dark"
            icon={<ClipboardIcon />}
          />
          <pre
            className={cx(
              className,
              css`
                margin: 0;
                overflow-x: auto;
                overflow-y: hidden;
                -ms-overflow-style: none;
                scrollbar-width: none;
                transition: ${transition.default};
                padding: ${space.xl};
                border-radius: ${radii['lg']};

                &::--webkit-scrollbar {
                  height: 0;
                  width: 0;
                }
              `
            )}
            style={style}
          >
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });

              return (
                <div
                  key={line.join(',')}
                  {...lineProps}
                  className={cx(
                    lineProps.className,
                    css`
                      display: table-row;
                    `
                  )}
                >
                  <span
                    className={css`
                      display: table-cell;
                    `}
                  >
                    {line.map((token, key) => (
                      <span
                        key={token.content}
                        {...getTokenProps({ token, key })}
                      />
                    ))}
                  </span>
                </div>
              );
            })}
          </pre>
        </div>
      )}
    </Highlight>
  );
};
