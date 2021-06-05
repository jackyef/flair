import { H1, H2, P, Code } from 'flair-kit';
import { Main } from '@/components/Main/Main';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';

export default function Text() {
  return (
    <Main>
      <H1>Text</H1>

      <P>
        <Code>Text</Code> is simply a <Code>span</Code> with super-power! It
        accepts <Code>variant</Code> props like a <Code>Button</Code> does.
      </P>

      <CodePlayground
        noInline
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
                  style={{ 
                    display: 'inline-block',
                    background: colors.foreground[400].color 
                  }}>
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
        noInline
        initialCode={`
          const Example = () => {
            const { colors } = useTheme();

            return (
              <div>
                <H2 style={{ marginTop: 0 }}>
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
    </Main>
  );
}
