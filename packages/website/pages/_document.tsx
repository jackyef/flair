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
          // And defined it in here
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
          <div id="__portal-root" />
        </body>
      </Html>
    );
  }
}
