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
  const { space, fontSizes } = useTheme();
  const currentPageIndex = DOC_PAGES.findIndex(
    ({ href }) => href === router.pathname
  );

  const prevPage = DOC_PAGES[currentPageIndex - 1];
  const nextPage = DOC_PAGES[currentPageIndex + 1];

  const paginationHeading = css`
    display: block;
    margin-bottom: ${space.md};
    opacity: 0.5;
    font-size: ${fontSizes.small};
  `;

  const bold = css`
    font-weight: 700;
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
            <Text gradient={['primary', 'secondary']} className={bold}>
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
            <Text gradient={['secondary', 'primary']} className={bold}>
              {nextPage.label} &rarr;
            </Text>
          </a>
        </Link>
      )}
    </Box>
  );
};
