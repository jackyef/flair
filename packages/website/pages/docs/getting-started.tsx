import { Anchor, Box, Code, H1, H2, H3, P } from 'flair-kit';

import { Main } from '@/components/Main/Main';
import { HighlightedCode } from '@/components/HighlightedCode/HighlightedCode';
import { PageMetaTags } from '@/components/Seo/PageMetaTags';

export default function GettingStartedPage() {
  return (
    <Main>
      <PageMetaTags
        title="Getting started"
        description="Installing and setting up Flair in your React app"
      />

      <H1>Getting started</H1>

      <H2>Installation</H2>
      <P>
        To get started building with Flair, install <Code>flair-kit</Code> along
        with its peer dependencies with your package manager of choice.
      </P>

      <Box margin={['lg', '0']}>
        <HighlightedCode
          language="bash"
          code={`npm install flair-kit classnames@2 goober@2\nnpm install --save-dev csstype@2`}
        />
      </Box>

      <Box margin={['lg', '0']}>
        <HighlightedCode
          language="bash"
          code={`yarn add flair-kit classnames@2 goober@2\nyarn add -D csstype@2`}
        />
      </Box>

      <Box margin={['lg', '0']}>
        <HighlightedCode
          language="bash"
          code={`pnpm add flair-kit classnames@2 goober@2\npnpm add -D csstype@2`}
        />
      </Box>

      <H2>Setting up</H2>

      <H3>
        <Code>ThemeProvider</Code>
      </H3>

      <P>
        Flair uses React context to provides values to components. These values
        are colors, space tokens, radii tokens, etc. <Code>ThemeProvider</Code>{' '}
        also injects some global CSS using <Code>goober</Code>
      </P>

      <HighlightedCode
        code={`
              import { ThemeProvider } from 'flair-kit';

              function App({ Component }) {
                return (
                  <ThemeProvider>
                    <Component />
                  </ThemeProvider>
                )
            }`}
      />
      <H3>Server rendering</H3>
      <P>
        Flair is powered by <Code>goober</Code> under the hood. Critical CSS can
        be extracted via <Code>extractCss()</Code> function provided by{' '}
        <Code>goober</Code>. <Code>&lt;NoFlashScript /&gt;</Code> should be used
        to prevent flickering. Consider the following example for Next.js.
      </P>

      <HighlightedCode
        code={`
            import Document, {
              Html,
              Head,
              Main,
              NextScript,
              DocumentContext,
            } from 'next/document';
            import { extractCss } from 'goober';
            import { NoFlashScript } from 'flair-kit';

            export default class MyDocument extends Document {
              static async getInitialProps({ renderPage }: DocumentContext) {
                const page = await renderPage();

                // Extract the css for each page render
                const css = extractCss();

                return {
                  ...page,
                  styles: (
                    <style
                      id="_goober"
                      // And inject it in here
                      dangerouslySetInnerHTML={{ __html: css }}
                    />
                  ),
                };
              }

              render() {
                return (
                  <Html>
                    <Head />
                    <NoFlashScript />
                    <body>
                      <Main />
                      <NextScript />
                    </body>
                  </Html>
                );
              }
            }
          `}
      />

      <H3>Fonts</H3>
      <P>
        Flair uses{' '}
        <Anchor href="https://fonts.google.com/specimen/Work+Sans">
          the free <Code>Work Sans</Code> font
        </Anchor>
        . The easiest way to load these fonts is by adding the following tags to
        your HTML document head.
      </P>

      <HighlightedCode
        language="markup"
        code={`
        <link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
  rel="stylesheet"
/>
      `}
      />

      <P>
        <Anchor href="https://github.com/jackyef/flair/tree/main/examples/nextjs">
          An example of a Next.js project
        </Anchor>{' '}
        is also available in the repository.
      </P>
    </Main>
  );
}
