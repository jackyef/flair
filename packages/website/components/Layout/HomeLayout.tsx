import { css } from 'goober';

import { Anchor, useTheme } from 'flair-kit';
import { GlobeAltIcon } from '@heroicons/react/solid';

import { Header } from './Header';
import { GitHubIcon } from '../icons/GitHubIcon';
import { TwitterIcon } from '../icons/TwitterIcon';

export const HomeLayout: React.FC = ({ children }) => {
  const { space, colors, mediaQuery } = useTheme();

  return (
    <div
      className={css`
        isolation: isolate;
      `}
    >
      <Header isHomepage />

      <div
        className={css`
          margin-top: ${space.md};
          display: flex;
        `}
      >
        <div
          className={css`
            flex: 1;
            width: 100%;
          `}
        >
          {children}
          <footer
            className={css`
              text-align: center;
              padding: ${space['xl']} 0;

              > a:not(:last-child) {
                margin-right: ${space.xl};
              }

              ${mediaQuery.onTabletUp} {
                padding: ${space['xl']} 0 ${space['3xl']};
              }
            `}
          >
            <Anchor href="https://jackyef.com/">
              <GlobeAltIcon
                fill={colors.foreground[800].color}
                width={20}
                height={20}
              />
            </Anchor>
            <Anchor href="https://github.com/jackyef/flair">
              <GitHubIcon
                fill={colors.foreground[800].color}
                width={20}
                height={20}
              />
            </Anchor>
            <Anchor href="https://twitter.com/jackyef__">
              <TwitterIcon
                fill={colors.foreground[800].color}
                width={20}
                height={20}
              />
            </Anchor>
          </footer>
        </div>
      </div>
    </div>
  );
};
