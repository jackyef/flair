import { Box, Text, useTheme } from 'flair-kit';
import cx from 'classnames';
import { css } from 'goober';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { docsSections, isSection, Page } from '../Layout/helpers';

const DOC_PAGES = docsSections.reduce((acc: Page[], pageOrSection) => {
  if (isSection(pageOrSection)) {
    acc = [...acc, ...pageOrSection.pages];
  } else {
    acc.push(pageOrSection);
  }

  return acc;
}, []);

export const DocsNavButtons = () => {
  const router = useRouter();
  const { space, fontSizes, mobileFontSizes, mediaQuery } = useTheme();
  const currentPageIndex = DOC_PAGES.findIndex(
    ({ href }) => href === router.pathname
  );

  const prevPage = DOC_PAGES[currentPageIndex - 1];
  const nextPage = DOC_PAGES[currentPageIndex + 1];

  const paginationHeading = css`
    display: block;
    margin-bottom: ${space.md};
    opacity: 0.5;
    font-size: ${mobileFontSizes.body};

    ${mediaQuery.onMobileUp} {
      font-size: ${fontSizes.body};
    }
  `;

  const bigAndBold = css`
    font-weight: 700;
    font-size: ${mobileFontSizes.subheading};

    ${mediaQuery.onMobileUp} {
      font-size: ${fontSizes.subheading};
    }
  `;

  return (
    <Box
      margin={['2xl', '0']}
      className={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      {prevPage ? (
        <Link href={prevPage.href}>
          <a>
            <Text className={paginationHeading}>Previous</Text>
            <Text gradient={['primary', 'secondary']} className={bigAndBold}>
              &larr; {prevPage.label}
            </Text>
          </a>
        </Link>
      ) : (
        <div />
      )}
      {nextPage && (
        <Link href={nextPage.href}>
          <a>
            <Text
              className={cx(
                paginationHeading,
                css`
                  text-align: right;
                `
              )}
            >
              Next
            </Text>
            <Text gradient={['secondary', 'primary']} className={bigAndBold}>
              {nextPage.label} &rarr;
            </Text>
          </a>
        </Link>
      )}
    </Box>
  );
};
