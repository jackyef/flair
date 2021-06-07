import { css } from 'goober';
import {
  useTheme,
  Box,
  H1,
  H2,
  H3,
  H4,
  P,
  Text,
  Button,
  Small,
  Anchor,
} from 'flair-kit';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/solid';

import { HeroBackground } from '@/components/Hero/Hero';
import { PageMetaTags } from '@/components/Seo/PageMetaTags';

export default function Home() {
  const { space, mediaQuery } = useTheme();
  const sectionCss = css`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    isolation: isolate;
    margin: clamp(${space['xl']}, 5vw, ${space['3xl']}) auto;

    ${mediaQuery.onTabletUp} {
      flex-direction: row;
    }
  `;

  const featureGridCss = css`
    display: grid;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: ${space['lg']};
    grid-gap: ${space['lg']};
    grid-template-columns: repeat(
      auto-fit,
      minmax(calc(420px - 2 * ${space['3xl']}), 1fr)
    );

    ${mediaQuery.onMobileUp} {
      padding: ${space['3xl']};
      grid-gap: ${space['3xl']};
    }
  `;

  const featureCss = css`
    text-align: center;
  `;

  return (
    <div>
      <PageMetaTags />
      <section className={sectionCss}>
        <HeroBackground />
        <div
          className={css`
            padding: 0 ${space['xl']};
            margin: 0 auto;
            width: 100%;
            max-width: 70ch;
            text-align: center;
            z-index: 1;
          `}
        >
          <H1>
            Build React apps with some{' '}
            <Text gradient={['primary', 'secondary']}>flair</Text> ✨<br />
          </H1>
          <H3
            as="p"
            className={css`
              font-weight: 500;
            `}
          >
            Collections of <Text gradient={['secondary']}>ready-to-use</Text>,{' '}
            <Text gradient={['success']}>accessible</Text> React components.
          </H3>

          <Small as="p">
            (Initially written as exercise. Well, you could use it too, I guess)
          </Small>

          <Box margin={['2xl', '0']}>
            <Link href="/docs/space" passHref>
              <Button
                variant="primary"
                icon={<ArrowRightIcon />}
                iconPosition="right"
                size="md"
                isAnchorButton
                isCTA
              >
                Get started
              </Button>
            </Link>
          </Box>
        </div>
      </section>

      <section className={featureGridCss}>
        <div className={featureCss}>
          <H3>Accessible</H3>
          <P>
            Flair components are built with accessibility in mind. All
            components are written to be accessible, leveraging some popular
            third-party libraries like{' '}
            <Anchor href="https://reach.tech/">Reach UI</Anchor> and{' '}
            <Anchor href="https://headlessui.dev/">Headless UI</Anchor>.{' '}
          </P>
        </div>

        <div className={featureCss}>
          <H3>Lightweight</H3>
          <P>
            Under the hood, Flair is powered by{' '}
            <Anchor href="https://goober.rocks/">goober</Anchor>, a 1 KB
            CSS-in-JS library with easy-to-use APIs.
          </P>
        </div>

        <div className={featureCss}>
          <H3>Dark mode</H3>
          <P>Who doesn&apos;t love some dark mode?</P>
        </div>

        <div className={featureCss}>
          <H3>SSR ready</H3>
          <P>
            Flair is compatible with server-rendering. It works well with static
            rendering framework like{' '}
            <Anchor href="https://nextjs.org/">Next.js</Anchor>.
          </P>
        </div>
      </section>
    </div>
  );
}
