import Link from 'next/link';
import { H1, P, Code, Anchor } from 'flair-kit';
import { Main } from '@/components/Main/Main';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';

export default function Text() {
  return (
    <Main>
      <H1>Box</H1>
      <P>
        <Code>Box</Code> is simply a <Code>div</Code> with additional props! It
        accepts <Code>margin</Code>, <Code>padding</Code> and <Code>radii</Code>{' '}
        props. Similar to CSS, you can pass up to 4 values to these props. Any{' '}
        <Link href="/spacing">
          <Anchor>
            <Code>space</Code> values
          </Anchor>
        </Link>{' '}
        (<Code>&quot;xs&quot;</Code>, <Code>&quot;sm&quot;</Code>,{' '}
        <Code>&quot;md&quot;</Code>, etc.) are accepted.{' '}
        <Code>&quot;0&quot;</Code> is also a valid value.
      </P>
      <CodePlayground
        noInline
        initialCode={`
          const Example = () => {
            const { colors } = useTheme();

            return (
              <div>
                <Box
                  className={css(\`
                    background: \${colors.primary[700].color};
                    color: \${colors.primary[700].contrastingColor};
                  \`)}
                  padding="lg"
                  radii="md"
                  margin="2xl"
                >
                  <P>
                    This <Code>Box</Code> has the following props:
                  </P>
                  <Code>
                    padding="lg"
                    radii="md"
                    margin="2xl"
                  </Code>
                </Box>
                <Box 
                  className={css(\`
                    background: \${colors.secondary[700].color};
                    color: \${colors.secondary[700].contrastingColor};
                  \`)}
                  padding={['lg', '2xl']}
                  radii={['lg', '0', 'lg']}
                  margin={['sm', 'lg', 'xl', 'md']}
                >
                  <P>
                    This <Code>Box</Code> has the following props:
                  </P>
                  <Code>
                    padding={"{['lg', '2xl']}"}{' '}
                    radii={"{['lg', '0', 'lg']}"}{' '}
                    margin={"{['sm', 'lg', 'xl', 'md']}"}
                  </Code>
                </Box>
              </div>
            )
          }

          render(<Example />);
        `}
      />{' '}
    </Main>
  );
}