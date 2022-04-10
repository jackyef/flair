import React, { Fragment } from 'react';
import { css } from 'goober';

import { Code, H1, H2, H3, H4, H5, H6, P, Pre, useTheme } from 'flair-kit';
import { Main } from '@/components/Main/Main';
import { HighlightedCode } from '@/components/HighlightedCode/HighlightedCode';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';
import { PageMetaTags } from '@/components/Seo/PageMetaTags';

const Paper = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { colors, space, mediaQuery, transition } = useTheme();

  return (
    <section
      {...props}
      className={css`
        padding: ${space['lg']};
        margin: 0;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        background: ${colors.background[80]};
        transition: ${transition.default};

        & > h1 {
          margin-top: 0 !important;
        }

        ${mediaQuery.onMobileUp} {
          padding: ${space['2xl']};
          margin: ${space['2xl']};
        }
      `}
    />
  );
};

export default function Home() {
  const typographyElements = {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    P,
    Pre,
    Code,
  } as const;

  return (
    <Main>
      <PageMetaTags
        title="Typography"
        description="Fonts and typography elements in Flair."
      />

      <H1>Typography</H1>

      <P>
        Flair uses the following <Code>font-family</Code> setup.
      </P>

      <HighlightedCode
        language="css"
        code={`font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`}
      />

      <P>
        Flair exposes several typography elements that can be used in texts.
      </P>

      <HighlightedCode
        code={`
        import { H1, H2, H3, H4, H5, H6, P, Pre, Code } from 'flair-kit'
      `}
      />

      {(
        Object.keys(typographyElements) as unknown as Array<
          keyof typeof typographyElements
        >
      ).map((elementName) => {
        let content: string = elementName;

        if (elementName === 'Pre') {
          content = `Name: John Doe<br \/>Email: foo@bar.com`;
        } else if (elementName === 'Code') {
          content = 'console.log("The best debugging tool")';
        } else if (elementName === 'P') {
          content = 'Some paragraph body text';
        } else if (elementName.startsWith('H')) {
          const [, headingLevel] = elementName.split('');

          content = `Heading ${headingLevel} (${elementName})`;
        }

        return (
          <Fragment key={elementName}>
            <H3>
              <Code>{elementName}</Code>
            </H3>
            <CodePlayground
              initialCode={`
              render(<${elementName}>${content}</${elementName}>)
            `}
            />
          </Fragment>
        );
      })}

      <P>Following is an example of how they look in a text.</P>

      <Paper>
        <H1>The quick brown fox jumps over the lazy dog (h1)</H1>
        <P>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </P>
        <H2>The quick brown fox jumps over the lazy dog (h2)</H2>
        <P>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </P>
        <P>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </P>
        <H3>The quick brown fox jumps over the lazy dog (h3)</H3>
        <P>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </P>
        <H4>The quick brown fox jumps over the lazy dog (h4)</H4>
        <P>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </P>
        <H5>The quick brown fox jumps over the lazy dog (h5)</H5>
        <P>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </P>
        <H6>The quick brown fox jumps over the lazy dog (h6)</H6>
        <P>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </P>
      </Paper>
    </Main>
  );
}
