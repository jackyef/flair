import { H1, P, Code, H2 } from 'flair-kit';
import { Main } from '@/components/Main/Main';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';
import { FlairComponentsAnchor } from '@/components/CommonAnchors/FlairComponentsAnchor';
import { PageMetaTags } from '@/components/Seo/PageMetaTags';

export default function ProgressBarPage() {
  return (
    <Main>
      <PageMetaTags
        title="ProgressBar"
        description="ProgressBar can be used to show a progress of an ongoing operation."
      />
      <H1>ProgressBar</H1>
      <P>
        <Code>ProgressBar</Code> can be used to show a progress of an ongoing
        operation. Similar to <FlairComponentsAnchor component="Button" />, it
        accepts <Code>variant</Code> and <Code>size</Code> props.
      </P>
      <CodePlayground
        initialCode={`
          const Example = () => {
            const variants = ['cyan', 'magenta', 'mint', 'coolred', 'yellow'];

            return (
              <div className={css({
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                maxWidth: '400px',
                margin: '0 auto',
              })}>
                {variants.map((v, i) => (
                  <div 
                    key={v} 
                    className={css({
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    })}
                  >
                    <Code>size: "sm", variant: "{v}"</Code>
                    <ProgressBar size="sm" variant={v} value={(i + 1) * 10} />
                    <Code>size: "md", variant: "{v}"</Code>
                    <ProgressBar size="md" variant={v} value={(i + 1) * 10} />
                    <Code>size: "lg", variant: "{v}"</Code>
                    <ProgressBar size="lg" variant={v} value={(i + 1) * 10} />
                  </div>
                ))}
              </div>
            )
          }

          render(<Example />);
        `}
      />{' '}
      <H2>Indeterminate ProgressBar</H2>
      <P>
        An indeterminate <Code>ProgressBar</Code> can be used for operation that
        has no known progress number. Pass <Code>indeterminate</Code> prop to
        the <Code>ProgressBar</Code> to create one.
      </P>
      <CodePlayground
        initialCode={`
          const Example = () => {
            const variants = ['cyan', 'magenta', 'mint', 'coolred', 'yellow'];

            return (
              <div className={css({
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                maxWidth: '400px',
                margin: '0 auto',
              })}>
                {variants.map((v, i) => (
                  <div 
                    key={v} 
                    className={css({
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    })}
                  >
                    <ProgressBar size="sm" variant={v} value={(i + 1) * 10} indeterminate />
                    <ProgressBar size="md" variant={v} value={(i + 1) * 10} indeterminate />
                    <ProgressBar size="lg" variant={v} value={(i + 1) * 10} indeterminate />
                  </div>
                ))}
              </div>
            )
          }

          render(<Example />);
        `}
      />{' '}
    </Main>
  );
}
