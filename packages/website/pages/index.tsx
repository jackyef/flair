import { css } from 'goober';
import { useTheme, Box, H1, H3, P, Text, Button, Small, Code } from 'flair-kit';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/solid';

import { HeroBackground } from '@/components/Hero/Hero';
import { PageMetaTags } from '@/components/Seo/PageMetaTags';
import { GooberAnchor } from '@/components/CommonAnchors/Goober';
import { ReachUIAnchor } from '@/components/CommonAnchors/ReachUI';
import { HeadlessUIAnchor } from '@/components/CommonAnchors/HeadlessUI';
import { NextJSAnchor } from '@/components/CommonAnchors/NextJS';
import { RepoAnchor } from '@/components/CommonAnchors/RepoAnchor';

export default function Home() {
  const { space, mediaQuery } = useTheme();
  const heroSectionCss = css`
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

  const sectionCss = css`
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: ${space['lg']};

    & h2:first-child {
      text-align: center;
    }

    ${mediaQuery.onMobileUp} {
      padding: ${space['3xl']};
    }
  `;

  const featureGridCss = css`
    display: grid;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
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
    text-align: left;

    ${mediaQuery.onMobileUp} {
      text-align: center;
    }
  `;

  return (
    <div>
      <PageMetaTags />
      <section className={heroSectionCss}>
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
            <Text gradient={['cyan', 'magenta']}>flair</Text>
            <br />
          </H1>
          <H3
            as="p"
            className={css`
              font-weight: 500;
            `}
          >
            Collections of <Text gradient={['magenta']}>ready-to-use</Text>,{' '}
            <Text gradient={['mint']}>accessible</Text> React components.
          </H3>

          <Box margin={['2xl', '0']}>
            <Link href="/docs/getting-started" passHref>
              <Button
                variant="cyan"
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

      <section className={sectionCss}>
        <div
          className={css`
            text-align: center;
          `}
        >
          <H1 as="h2">Features</H1>
        </div>
        <div className={featureGridCss}>
          <div className={featureCss}>
            <H3>Accessible</H3>
            <P>
              Flair components are built with accessibility in mind. All
              components are written to be accessible, leveraging some popular
              third-party libraries like <ReachUIAnchor /> and{' '}
              <HeadlessUIAnchor />.{' '}
            </P>
          </div>

          <div className={featureCss}>
            <H3>Lightweight</H3>
            <P>
              Under the hood, Flair is powered by <GooberAnchor />, a 1 KB
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
              Flair is compatible with server-rendering. It works well with
              static rendering framework like <NextJSAnchor />.
            </P>
          </div>
        </div>
      </section>

      <section className={sectionCss}>
        <H1 as="h2">Should you use this?</H1>
        <div>
          <H3 as="p">
            Absolutely! <Small>(not)</Small>
          </H3>
          <P>
            Flair was initially written as a personal practice. It is an attempt
            to learn more about design, UX and accessibility sides of the web.
            The existing components works, but it is by no means, complete. Some
            components that are quite commonly used such as <Code>Input</Code>,{' '}
            <Code>CheckBox</Code>, <Code>RadioButton</Code>, etc. are not
            implemented yet.
          </P>

          <P>
            With that being said though, you are free to use this on
            non-critical projects. Feel free to open issues on the{' '}
            <RepoAnchor>GitHub repository</RepoAnchor> to report bugs or request
            new components!
          </P>
        </div>
      </section>
    </div>
  );
}
