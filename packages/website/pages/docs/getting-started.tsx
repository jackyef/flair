import { Box, Code, H1, H2, H3, P, Pre } from 'flair-kit';

import { Main } from '@/components/Main/Main';
import { HighlightedCode } from '@/components/HighlightedCode/HighlightedCode';

export default function GettingStartedPage() {
  // const { space, transition, colors } = useTheme();

  return (
    <Main>
      <H1>Getting started</H1>

      <H2>Installation</H2>
      <P>
        To get started building with Flair, install <Code>flair-kit</Code> along
        with its peer dependencies with your package manager of choice.
      </P>

      <Box margin={['lg', '0']}>
        <Pre>npm install flair-kit classnames framer-motion goober</Pre>
      </Box>

      <Box margin={['lg', '0']}>
        <Pre>yarn add flair-kit classnames framer-motion goober</Pre>
      </Box>

      <Box margin={['lg', '0']}>
        <Pre>pnpm add flair-kit classnames framer-motion goober</Pre>
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
        <H3>Static CSS</H3>
        <P>
          Flair utilizes CSS custom properties (commonly known as CSS variables)
          to manage colors. Colors are entirely static and are not generated on
          runtime, because of this, it can be injected to your document on build
          or server-render time.
        </P>

        <P>
          You can use <Code>generateCssVariables()</Code> to get all the CSS
          declarations as a string.
        </P>

        <HighlightedCode
          code={`
            import { generateCssVariables } from 'flair-kit';

            const cssRules = generateCssVariables();
            // ->
            // :root { /* CSS variables declaration here */}
          `}
        />

        <P>
          This string should be injected to the document{' '}
          <Code>&lt;head /&gt;</Code>. Consider the following example for
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
          import { generateCssVariables } from 'flair-kit';
          
          const cssRules = generateCssVariables();

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
                    // And defined it in here
                    dangerouslySetInnerHTML={{ __html: \`\${cssVariables}\${css}\` }}
                  />
                ),
              };
            }
          }
        `}
        />
      </section>
    </Main>
  );
}
