import { css } from 'goober';
import { useTheme, Box, H1, H3, Text, Button, Small } from 'flair-kit';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/solid';

import { HeroBackground } from '@/components/Hero/Hero';

export default function Home() {
  const { space, mediaQuery } = useTheme();

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
          isolation: isolate;

          ${mediaQuery.onTabletUp} {
            flex-direction: row;
          }
        `}
      >
        <HeroBackground />
        <div
          className={css`
            padding: ${space['3xl']} ${space['xl']};
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
      </div>
    </div>
  );
}
