import { css } from 'goober';
import { useTheme, Box, H1, H3, H4, Text, Button, Switch } from 'flair-kit';

import Link from 'next/link';
import { ArrowRightIcon, SunIcon, MoonIcon } from '@heroicons/react/solid';

import { RenderOnMount } from '@/components/RenderOnMount/RenderOnMount';
import { HeroBackground } from '@/components/Hero/Hero';

export default function Home() {
  const {
    space,
    colors,
    mediaQuery,
    transition,
    colorScheme,
    toggleColorScheme,
  } = useTheme();

  return (
    <div>
      <div
        className={css`
          position: relative;
          display: flex;
          flex-direction: column;
          max-width: 1440px;
          width: 100%;
          margin: 0 auto;

          ${mediaQuery.onTabletUp} {
            flex-direction: row;
          }
        `}
      >
        <HeroBackground />
        <div
          className={css`
            flex: 4;
            backdrop-filter: blur(2px);
            padding: ${space['3xl']} ${space['xl']};
          `}
        >
          <H1>
            <Text gradient={['primary', 'secondary']}>FlairKit</Text> <br />
          </H1>
          <H3
            as="p"
            className={css`
              font-weight: regular;
            `}
          >
            Collections of accessible React components to add some design{' '}
            <Text
              className={css`
                font-weight: 700;
              `}
              gradient={['primary', 'secondary']}
            >
              flair
            </Text>{' '}
            ✨ to your websites.
          </H3>

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
        <div
          className={css`
            padding: ${space['3xl']} ${space['xl']};
            flex: 3;
            backdrop-filter: blur(2px);
          `}
        >
          <div
            className={css`
              padding: ${space['3xl']};
              margin: ${space['xl']};
              border-radius: ${space['3xl']};
              text-align: center;
              transition: ${transition.default};
              display: none;

              ${mediaQuery.onTabletUp} {
                margin: ${space['3xl']};
                display: block;
              }
            `}
          >
            <H4 as="p">Comes with dark mode!</H4>
            <div
              className={css`
                margin-top: ${space['2xl']};
                display: flex;
                justify-content: center;
              `}
            >
              <RenderOnMount>
                <Switch
                  size="lg"
                  enabled={colorScheme === 'dark'}
                  icon={
                    colorScheme === 'dark' ? (
                      <MoonIcon fill={colors.primary[500].color} />
                    ) : (
                      <SunIcon fill={colors.secondary[700].color} />
                    )
                  }
                  onChange={toggleColorScheme}
                  label="Dark color scheme"
                />
              </RenderOnMount>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
