import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { extractCss } from 'goober';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const page = await renderPage();

    // Extract the css for each page render
    const css = extractCss();

    return {
      ...page,
      styles: (
        <style
          id={'_goober'}
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
