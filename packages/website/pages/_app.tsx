import Head from 'next/head';
import { AppProps } from 'next/app';
import { createGlobalStyles } from 'goober/global';
import { useRouter } from 'next/router';

import { DocsLayout } from '@/components/Layout/DocsLayout';

import { ThemeProvider } from 'flair-kit';
import { NProgressLoader } from '@/components/NProgressLoader/NProgressLoader';
import { HomeLayout } from '@/components/Layout/HomeLayout';
import { CommonMetaTags } from '@/components/Seo/CommonMetaTags';

const GlobalStyles = createGlobalStyles`
  body {
    transition: background 0.15s ease-out, color 0.15s ease-out;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const isDocsPage = router.pathname.startsWith('/docs');

  const Layout = isDocsPage ? DocsLayout : HomeLayout;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `CSS.paintWorklet.addModule('worklet/circles.js');`,
          }}
        />
      </Head>
      <GlobalStyles />
      <ThemeProvider>
        <CommonMetaTags />
        <NProgressLoader />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
