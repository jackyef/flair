import { H1, P, Code } from 'flair-kit';
import { Main } from '@/components/Main/Main';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';
import { PageMetaTags } from '@/components/Seo/PageMetaTags';

export default function Toast() {
  return (
    <Main>
      <PageMetaTags
        title="Toast"
        description="Toast is commonly used to provide a feedback after a user interaction."
      />
      <H1>Toast</H1>

      <P>
        <Code>Toast</Code> components are commonly used to provide a feedback
        after a user interaction. A <Code>Toast</Code> can be added by calling{' '}
        <Code>addToast()</Code> provided by the <Code>useToast()</Code> hook.
      </P>

      <P>
        Similar to how it is with most components, a<Code>variant</Code> can be
        passed to <Code>addToast()</Code> to customize the look of the{' '}
        <Code>Toast</Code>.
      </P>

      <CodePlayground
        initialCode={`
          const Example = () => {
            const { addToast } = useToast();

            const toastData = {
              title: 'Some toast title',
              description: 'The description of the toast'
            }

            const variants = ['cyan', 'magenta', 'mint', 'coolred', 'yellow', 'foreground', 'background', 'dark', 'light'];

            return (
              <div className={css({
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
              })}>
                {variants.map((v, i) => (
                  <Button 
                    onClick={() => {
                      addToast({ 
                        variant: v, 
                        title: \`\${v} toast title\`,
                        description: 'The description of the toast' 
                      })
                    }} 
                    variant={v}
                  >
                    {v} toast
                  </Button>
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
