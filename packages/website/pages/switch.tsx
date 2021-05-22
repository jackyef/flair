import { H1 } from 'flair-kit';
import { Main } from '@/components/Main/Main';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';

export default function Colors() {

  return (
    <Main>
      <H1>Switch</H1>

      <CodePlayground
        noInline
        initialCode={`
          const Example = () => {
            const [enabled, setEnabled] = React.useState(false);

            return (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Switch
                  enabled={enabled}
                  onChange={setEnabled}
                  label="Toggle something"
                />
                <span style={{ marginLeft: '1rem' }}>
                  {enabled ? 'Enabled' : 'Disabled'}
                </span>
              </div>
            )
          }

          render(<Example />);
        `}
      />
    </Main>
  );
}
