import React, { useRef, useState } from 'react';
import cx from 'classnames';
import Highlight, {
  Language,
  PrismTheme,
  defaultProps,
} from 'prism-react-renderer';
import { withLive } from 'react-live';
import { css } from 'goober';
import { useTheme } from '@/flair/context/theme';

interface LiveProps {
  code: string;
  disabled: boolean;
  language: Language;
  onChange: (newCode: string) => void;
  style: PrismTheme['styles'][number]['style'];
  theme: PrismTheme;
}

const _CustomEditor = ({ code: _code, onChange, theme }: LiveProps) => {
  const { colors, space } = useTheme();
  const [code, setCode] = useState(_code);
  const preRef = useRef<HTMLPreElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const updateContent = (newCode: string) => {
    setCode(newCode);
    onChange(newCode);
  };

  const handleScroll: React.UIEventHandler<HTMLTextAreaElement> = (ev) => {
    if (preRef.current) {
      // @ts-expect-error
      preRef.current.scrollLeft = ev.target?.scrollLeft;
    }
  };

  return (
    // A quick workaround to get line numbers working.
    // Supports up to 999 lines of code
    <div
      className={css`
        overflow: auto;
        position: relative;
        padding-left: ${space.lg};
      `}
    >
      <Highlight {...defaultProps} code={code} language="jsx" theme={theme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <>
            <pre
              ref={preRef}
              className={cx(
                className,
                css`
                  margin: 0;
                  overflow-x: auto;
                  overflow-y: hidden;
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                  width: calc(100% - ${space.lg});

                  &::--webkit-scrollbar {
                    height: 0;
                    width: 0;
                  }
                `,
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
                      `,
                    )}
                  >
                    <span
                      className={css`
                        display: table-cell;
                        text-align: right;
                        padding-right: 1em;
                        user-select: none;
                        opacity: 0.5;
                      `}
                    >
                      {/* We want to have at least 3 characters, to support 999 lines */}
                      {String(i + 1).padStart(3, ' ')}
                    </span>
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
            <textarea
              ref={textAreaRef}
              className={css`
                padding-left: calc(3ch + 1em);
                background-color: transparent;
                caret-color: ${colors.background[400].contrastingColor};
                color: transparent;
                border: 0;
                display: block;
                font-family: monospace;
                font-size: inherit;
                height: 100%;
                line-height: inherit !important;
                margin: 0;
                outline: none;
                overflow-x: auto;
                overflow-y: hidden;
                position: absolute;
                resize: none;
                top: 0;
                left: ${space.lg};
                white-space: pre;
                width: calc(100% - ${space.lg});
              `}
              onChange={(e) => updateContent(e.target.value)}
              onScroll={handleScroll}
              spellCheck={false}
              value={code}
            />
          </>
        )}
      </Highlight>
    </div>
  );
};

export const CustomEditor = withLive(({ live }: { live?: LiveProps }) => {
  if (!live) return null;

  return <_CustomEditor {...live} />;
});
