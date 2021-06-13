import { H1, H2, P, Code } from 'flair-kit';
import { Main } from '@/components/Main/Main';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';
import { PageMetaTags } from '@/components/Seo/PageMetaTags';

export default function Text() {
  return (
    <Main>
      <PageMetaTags
        title="Text"
        description="Text is essentially a span element, with some additional props to determine color and gradient."
      />
      <H1>Text</H1>

      <P>
        <Code>Text</Code> is simply a <Code>span</Code> with additional props.
        It accepts <Code>variant</Code> props like a <Code>Button</Code> does.
      </P>

      <CodePlayground
        initialCode={`
          const Example = () => {
            const { colors } = useTheme();

            return (
              <div>
                <Text variant="primary">primary</Text>{' '}
                <Text variant="secondary">secondary</Text>{' '}
                <Text variant="success">success</Text>{' '}
                <Text variant="error">error</Text>{' '}
                <Text variant="warning">warning</Text>{' '}
                <Text variant="foreground">foreground</Text>{' '}
                <div 
                  className={css({
                    display: 'inline-block',
                    background: colors.foreground[400].color,
                  })}
                >
                  <Text variant="background">background</Text>
                </div>
              </div>
            )
          }

          render(<Example />);
        `}
      />

      <H2>Gradient</H2>
      <P>
        <Code>Text</Code> also accepts an array of <Code>variant</Code> as the{' '}
        <Code>gradient</Code> prop. This will render a text with color gradient.
      </P>

      <CodePlayground
        initialCode={`
          const Example = () => {
            return (
              <div>
                <H2>
                  <Text gradient={['success', 'primary']}>
                    primary &rarr; success
                  </Text>
                </H2>
                <H2>
                  <Text gradient={['primary', 'secondary', 'error']}>
                    primary &rarr; secondary &rarr; error
                  </Text>
                </H2>
                <H2>
                  <Text gradient={['warning', 'success', 'foreground', 'secondary', 'primary']}>
                    warning &rarr; success &rarr; foreground &rarr; secondary &rarr; primary
                  </Text>
                </H2>
              </div>
            )
          }

          render(<Example />);
        `}
      />

      <P>
        When the <Code>variant</Code> array only contains 1 element, the 700 and
        800 level colors of the <Code>variant</Code> will be used to create a
        color gradient.
      </P>
      <CodePlayground
        initialCode={`
          const Example = () => {
            const { colors } = useTheme();
            const variants = ['primary', 'secondary', 'success', 'error', 'warning', 'foreground', 'background'];

            return (
              <div>
                {variants.map(v => (
                  <div key={v} className={css({
                    background: v === 'background' ? colors.foreground[400].color : 'transparent',
                  })}>
                    <H2>
                      <Text gradient={[v]}>
                        {v}
                      </Text>
                    </H2>
                  </div>
                ))}
              </div>
            )
          }

          render(<Example />);
        `}
      />
    </Main>
  );
}
