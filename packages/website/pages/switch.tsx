import { H1, H2 } from 'flair-kit';
import { Main } from '@/components/Main/Main';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';

export default function Colors() {
  return (
    <Main>
      <H1>Switch</H1>

      <H2>Sizes</H2>
      <CodePlayground
        noInline
        initialCode={`
          const Example = () => {
            const [enabled, setEnabled] = React.useState(false);

            return (
              <>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <Switch
                    enabled={enabled}
                    onChange={setEnabled}
                    label="Toggle something"
                    size="sm"
                  />
                  <span style={{ marginLeft: '1rem' }}>
                    {enabled ? 'Enabled' : 'Disabled'}; Size: <code>"sm"</code>
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <Switch
                    enabled={enabled}
                    onChange={setEnabled}
                    label="Toggle something"
                    size="md"
                  />
                  <span style={{ marginLeft: '1rem' }}>
                    {enabled ? 'Enabled' : 'Disabled'}; Size: <code>"md"</code>
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Switch
                    enabled={enabled}
                    onChange={setEnabled}
                    label="Toggle something"
                    size="lg"
                  />
                  <span style={{ marginLeft: '1rem' }}>
                    {enabled ? 'Enabled' : 'Disabled'}; Size: <code>"lg"</code>
                  </span>
                </div>
              </>
            )
          }

          render(<Example />);
        `}
      />

      <H2>With icon</H2>
      <CodePlayground
        noInline
        initialCode={`
          const Example = () => {
            const [enabled, setEnabled] = React.useState(false);
            const { colors } = useTheme()
            const icon = enabled 
              ? <HeroIconsSolid.CheckCircleIcon fill={colors.success[500].color} /> 
              : <HeroIconsSolid.XCircleIcon fill={colors.error[500].color} />;

            return (
              <>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <Switch
                    icon={icon}
                    enabled={enabled}
                    onChange={setEnabled}
                    label="Toggle something"
                    size="sm"
                  />
                  <span style={{ marginLeft: '1rem' }}>
                    {enabled ? 'Enabled' : 'Disabled'}; Size: <code>"sm"</code>
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <Switch
                    icon={icon}
                    enabled={enabled}
                    onChange={setEnabled}
                    label="Toggle something"
                    size="md"
                  />
                  <span style={{ marginLeft: '1rem' }}>
                    {enabled ? 'Enabled' : 'Disabled'}; Size: <code>"md"</code>
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Switch
                    icon={icon}
                    enabled={enabled}
                    onChange={setEnabled}
                    label="Toggle something"
                    size="lg"
                  />
                  <span style={{ marginLeft: '1rem' }}>
                    {enabled ? 'Enabled' : 'Disabled'}; Size: <code>"lg"</code>
                  </span>
                </div>
              </>
            )
          }

          render(<Example />);
        `}
      />
    </Main>
  );
}
