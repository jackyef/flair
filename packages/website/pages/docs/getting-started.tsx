import { Box, Code, H1, H2, H3, P, Pre } from 'flair-kit';

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
        <Pre>npm install flair-kit classnames goober</Pre>
      </Box>

      <Box margin={['lg', '0']}>
        <Pre>yarn add flair-kit classnames goober</Pre>
      </Box>

      <Box margin={['lg', '0']}>
        <Pre>pnpm add flair-kit classnames goober</Pre>
      </Box>

      <section>
        <H2>Setting up</H2>

        <H3>
          <Code>ThemeProvider</Code>
        </H3>

        <P>
          Flair uses React context to provides values to components. These
          values are colors, space tokens, radii tokens, etc.{' '}
          <Code>ThemeProvider</Code> also injects some global CSS using{' '}
          <Code>goober</Code>
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
          Flair is powered by <Code>goober</Code> under the hood. Critical CSS
          can be extracted via <Code>extractCss()</Code> function provided by{' '}
          <Code>goober</Code>. <Code>&lt;NoFlashScript /&gt;</Code> should be
          used to prevent flickering. Consider the following example for
          Next.js.
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
      </section>
    </Main>
  );
}
