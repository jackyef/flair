import { Anchor, Code, H1, H3, P, useTheme } from 'flair-kit';

import { Main } from '@/components/Main/Main';
import { HighlightedCode } from '@/components/HighlightedCode/HighlightedCode';
import { Fragment } from 'react';
import Link from 'next/link';

export default function TokensPage() {
  const theme = useTheme();

  const tokenNames = [
    'space',
    'radii',
    'shadow',
    'mediaQuery',
    'transition',
    'fontSizes',
    'mobileFontSizes',
    'lineHeights',
    'colors',
  ] as const;

  return (
    <Main>
      <H1>Tokens</H1>
      <P>
        In this page you will find the values of all the tokens exposed via the{' '}
        <Code>useTheme()</Code> hook.
      </P>

      <H3>
        <Code>colorScheme</Code>
      </H3>

      <P>
        <Code>colorScheme</Code> can be either <Code>&quot;light&quot;</Code> or{' '}
        <Code>&quot;dark&quot;</Code>. It can be toggled by calling{' '}
        <Code>toggleColorScheme()</Code>.
      </P>

      <HighlightedCode
        code={`
        import { useTheme } from 'flair-kit';

        const Component = () => {
          const { colorScheme, toggleColorScheme } = useTheme();
          
          return <button onClick={toggleColorScheme}>Current theme: {colorScheme}</button>;
        }
      `}
      />

      {tokenNames.map((token) => (
        <Fragment key={token}>
          <H3>
            <Code>{token}</Code>
          </H3>
          {token === 'colors' && (
            <P>
              Color tokens are simple map to the correlated CSS variables.{' '}
              <Link href="/docs/colors" passHref>
                <Anchor>
                  Learn more about how colors work in Flair in the Colors page
                </Anchor>
              </Link>
              .
            </P>
          )}
          <HighlightedCode
            code={`
              ${token} = ${JSON.stringify(theme[token], null, 2)};
            `}
          />
        </Fragment>
      ))}
    </Main>
  );
}
