import { H1, P, Code, H2, Anchor } from 'flair-kit';
import { Main } from '@/components/Main/Main';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';
import { PageMetaTags } from '@/components/Seo/PageMetaTags';

export default function SpinnerPage() {
  return (
    <Main>
      <PageMetaTags
        title="Spinner"
        description="Spinner can be used to show that an indeterminate-length operation is currently on going."
      />
      <H1>Spinner</H1>
      <P>
        <Code>Spinner</Code> can be used to show a progress of an ongoing
        operation.
      </P>
      <CodePlayground
        initialCode={`
          const Example = () => {
            return (
              <div className={css({
                display: 'flex',
                justifyContent: 'center',
              })}>
                <Spinner />
              </div>
            )
          }

          render(<Example />);
        `}
      />{' '}
      <H2>Size</H2>
      <P>
        The <Code>size</Code> prop can be passed to adjust the size of the{' '}
        <Code>Spinner</Code>.
      </P>
      <CodePlayground
        initialCode={`
          const Example = () => {
            return (
              <div className={css({
                display: 'flex',
                justifyContent: 'center',
              })}>
                <Spinner size={200} />
              </div>
            )
          }

          render(<Example />);
        `}
      />{' '}
      <H2>Accessibility</H2>
      <P>
        A <Code>statusMessage</Code> can be passed to <Code>Spinner</Code>. The{' '}
        <Code>statusMessage</Code>
        will be announced by screen readers when the <Code>Spinner</Code> is
        rendered.
      </P>
      <P>
        It is also recommended to provide <Code>aria-busy</Code> and{' '}
        <Code>aria-live</Code> attributes to the region that is waiting for an
        event to finish. As an example, try navigating the following example
        using a screen reader. On Mac, you can use{' '}
        <Anchor href="https://support.apple.com/guide/mac-help/change-voiceover-preferences-accessibility-mh40578/mac">
          VoiceOver
        </Anchor>{' '}
        to do this.
      </P>
      <CodePlayground
        initialCode={`
        const Example = () => {
          const [state, setState] = React.useState('idle');
          const isLoading = state === 'loading';
          const handleLoading = () => {
            setState('loading')

            setTimeout(() => {
              setState('completed')
            }, 3000)
          }

          return (
            <>
              <div 
                aria-busy={isLoading}
                aria-live="polite"
              >
                {state === 'idle' && <Button onClick={handleLoading}>Load components list</Button>}
                {state === 'loading' && <Spinner size={200} statusMessage="Loading list of Flair components..." />}
                {state === 'completed' && (
                  <div>
                    <H3>Flair components list</H3>
                    <ul className={css({ '& li': { marginBottom: '16px' }})}>
                      <li><Code>Button</Code></li>
                      <li><Code>Spinner</Code></li>
                      <li><Code>Drawer</Code></li>
                      <li><Code>Dialog</Code></li>
                      <li><Code>ProgressBar</Code></li>
                    </ul>
                  </div>
                )}
              </div>
              {state === 'completed' && <Button onClick={() => setState('idle')}>Reset</Button>}
            </>
          )
        }

        render(<Example />);
      `}
      />
    </Main>
  );
}
