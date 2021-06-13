import { Anchor, Code, H1, H2, H3, P, useTheme } from 'flair-kit';
import { css } from 'goober';

import { Main } from '@/components/Main/Main';
import { HighlightedCode } from '@/components/HighlightedCode/HighlightedCode';
import Link from 'next/link';
import { GooberAnchor } from '@/components/CommonAnchors/Goober';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';
import { PageMetaTags } from '@/components/Seo/PageMetaTags';

export default function PrinciplesPage() {
  const { space, lineHeights } = useTheme();

  return (
    <Main>
      <PageMetaTags
        title="Principles"
        description="Learn about the principles that Flair works with."
      />

      <H1>Principles</H1>

      <P>
        This page talks about the design thinking of Flair. Understanding these
        principles will help you work with Flair easier. The Tl;dr version is as
        follows:
      </P>

      <ol
        className={css`
          list-style-type: decimal;
          line-height: ${lineHeights.body};

          & li {
            margin-left: ${space['2xl']};
            margin-bottom: ${space['md']};
          }
        `}
      >
        <li>
          Flair exposes{' '}
          <Link href="/docs/tokens" passHref>
            <Anchor>tokens</Anchor>
          </Link>{' '}
          via the <Code>useTheme()</Code> hook
        </li>
        <li>
          Flair uses <GooberAnchor /> to write CSS in JS{' '}
        </li>
        <li>
          Flair understands that customization is envitable and allow its
          components to be modifiable using the tokens and goober APIs.
        </li>
      </ol>

      <H2>Tokens</H2>
      <P>
        Flair exposes various tokens to use via the <Code>ThemeProvider</Code>.
        The tokens can be accessed using the <Code>useTheme()</Code> hook.
      </P>

      <HighlightedCode
        code={`
        import { useTheme } from 'flair-kit';

        const Component = () => {
          const {
            colorScheme,

            space,
            radii,

            shadow,
            mediaQuery,
            transition,

            fontSizes,
            mobileFontSizes,
            lineHeights,

            colors,
          } = useTheme()    
          
          return <div>Foo bar baz</div>
        }
      `}
      />

      <P>
        The values of these tokens are available in the{' '}
        <Link href="/docs/tokens" passHref>
          <Anchor>Tokens page</Anchor>
        </Link>
        .
      </P>

      <P>
        Following is an example of how the tokens could be used to build your
        own components. This is how most components in Flair are written.
      </P>

      <HighlightedCode
        code={`
        import { useTheme } from 'flair-kit';
 
        const FancyContainer = ({ children }) => {
          const { space, colors, mediaQuery, radii } = useTheme();

          const containerClass = css\`
            background: \${colors['primary'][500].color};
            color: \${colors['primary'][500].contrastingColor};
            padding: \${space.xl} \${space.lg};
            margin: \${space.md};
            max-width: 100%;
            border-radius: \${radii.lg};

            \${mediaQuery.onMobileUp} {
              max-width: 400px;
            }
          \`;

          return <div className={containerClass}>{children}</div>;
        }
      `}
      />

      <H2>CSS in JS</H2>

      <P>
        Flair uses <GooberAnchor /> under the hood. It uses the <Code>css</Code>{' '}
        function to inject styles into the stylesheet. In the code editors you
        will find on this site, the <Code>css</Code> function is made available
        in the global scope so it is ready to be used. Try modifying{' '}
        <Code>containerClass</Code> below!
      </P>

      <CodePlayground
        initialCode={`
        const Example = () => {
          const { space, colors, radii, transition } = useTheme();

          const containerClass = css({
            background: colors['primary'][500].color,
            color: colors['primary'][500].contrastingColor,
            padding: \`\${space.xl} \${space.lg}\`,
            margin: space.md,
            maxWidth: '100%',
            borderRadius: radii.lg,
            transition: transition.default,
          })

          return (
            <div className={containerClass}>
              This container uses the <Code>primary</Code> color as the background color.
            </div>
          );
        }

        render(<Example />)
      `}
      />
      <P>
        Note: it is actually possible to pass{' '}
        <Anchor href="https://goober.js.org/api/css#passing-props-to-css-tagged-templates">
          template literals to the <Code>css</Code> function
        </Anchor>
        , but it does not work well in the editor in this documentation site.
      </P>

      <H2>Customizing style</H2>

      <P>
        While most components in Flair can be used as-is, it is inevitable that
        at some point, customizations will be needed. Using goober, there are 2
        main approaches to customizing Flair components.
      </P>

      <H3>
        Passing <Code>className</Code>
      </H3>

      <P>
        Most components can be passed <Code>className</Code> prop to define or
        override styles. The <Code>css</Code> function can be used to generate a
        new CSS class to be used.
      </P>

      <CodePlayground
        initialCode={`
        const Example = () => {
          const customClass = css({
            background: 'green !important',
            color: 'white !important',
            height: '100px',
          });

          return <Button className={customClass}>I am a button with different colors and 100px height</Button>
        }

        render(<Example />);
      `}
      />
      <P>
        Note that in some cases, <Code>!important</Code> would need to be used
        to override the existing values. This is because the built-in classes
        are actually inserted later than the <Code>customClass</Code>, due to
        the order of how the components are rendered. Currently,{' '}
        <Anchor href="https://github.com/cristianbote/goober/pull/236">
          a PR has been created on goober
        </Anchor>{' '}
        to solve this specific issue.
      </P>

      <H3>
        Using <Code>styled</Code>
      </H3>

      <P>
        Another approach is to use goober
        <Code>styled()</Code> function to create new components based on
        existing ones.
      </P>

      <CodePlayground
        initialCode={`
        const CustomButton = styled(Button)(() => ({
          background: 'green !important',
          color: 'white !important',
          height: '100px',
        }))
        
        const Example = () => {
          return <CustomButton>I am a button with different colors and 100px height</CustomButton>
        }

        render(<Example />);
      `}
      />

      <P>
        You can{' '}
        <Anchor href="https://goober.js.org/api/styled">
          learn more about the <Code>styled</Code> function on goober
          documentation
        </Anchor>
        .
      </P>

      <P>
        Overriding or adding styles can be useful for more generic components
        like{' '}
        <Link href="/docs/button" passHref>
          <Anchor>
            <Code>Button</Code>
          </Anchor>
        </Link>{' '}
        ,{' '}
        <Link href="/docs/text" passHref>
          <Anchor>
            <Code>Text</Code>
          </Anchor>
        </Link>{' '}
        and{' '}
        <Link href="/docs/box" passHref>
          <Anchor>
            <Code>Box</Code>
          </Anchor>
        </Link>
        . But Flair does not recommend adding styles for more complex components
        such as{' '}
        <Link href="/docs/switch" passHref>
          <Anchor>
            <Code>Switch</Code>
          </Anchor>
        </Link>{' '}
        and{' '}
        <Link href="/docs/dialog" passHref>
          <Anchor>
            <Code>Dialog</Code>
          </Anchor>
        </Link>
        . In cases where you are considering doing so, it might be more sensible
        to write your own components using the tokens provided by Flair instead.
      </P>
    </Main>
  );
}
