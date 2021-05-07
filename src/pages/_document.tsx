import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { extractCss } from 'goober';

import { generateCssVariables } from '@/flair/utils/generateCssVariables';
import { NoFlashScript } from '@/flair/components/NoFlashScript/NoFlashScript';
// import { stickerMuleColors } from '@/flair/theme/custom/stickerMule';

// const cssVariables = generateCssVariables(stickerMuleColors);
const cssVariables = generateCssVariables();

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
          dangerouslySetInnerHTML={{ __html: `${cssVariables}${css}` }}
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
