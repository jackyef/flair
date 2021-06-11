import { H1, H2 } from 'flair-kit';
import { Main } from '@/components/Main/Main';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';

export default function Colors() {
  return (
    <Main>
      <H1>Switch</H1>

      <H2>Sizes</H2>
      <CodePlayground
        initialCode={`
          const Example = () => {
            const [enabled, setEnabled] = React.useState(false);
            const row = css(\`
              display: flex; 
              align-items: center; 

              &:not(:last-child) {
                margin-bottom: 16px;
              }
            \`);

            const label = css(\`margin-left: 16px;\`);

            return (
              <>
                <div className={row}>
                  <Switch
                    enabled={enabled}
                    onChange={setEnabled}
                    label="Toggle something"
                    size="sm"
                  />
                  <span className={label}>
                    {enabled ? 'Enabled' : 'Disabled'}; Size: <Code>"sm"</Code>
                  </span>
                </div>
                <div className={row}>
                  <Switch
                    enabled={enabled}
                    onChange={setEnabled}
                    label="Toggle something"
                    size="md"
                  />
                  <span className={label}>
                    {enabled ? 'Enabled' : 'Disabled'}; Size: <Code>"md"</Code>
                  </span>
                </div>
                <div className={row}>
                  <Switch
                    enabled={enabled}
                    onChange={setEnabled}
                    label="Toggle something"
                    size="lg"
                  />
                  <span className={label}>
                    {enabled ? 'Enabled' : 'Disabled'}; Size: <Code>"lg"</Code>
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
        initialCode={`
          const Example = () => {
            const [enabled, setEnabled] = React.useState(false);
            const { colors } = useTheme()
            const icon = enabled 
              ? <HeroIconsSolid.CheckCircleIcon fill={colors.success[500].color} /> 
              : <HeroIconsSolid.XCircleIcon fill={colors.error[500].color} />;

            const row = css(\`
              display: flex; 
              align-items: center; 

              &:not(:last-child) {
                margin-bottom: 16px;
              }
            \`);
            const label = css(\`margin-left: 16px;\`);

            return (
              <>
                <div className={row}>
                  <Switch
                    icon={icon}
                    enabled={enabled}
                    onChange={setEnabled}
                    label="Toggle something"
                    size="sm"
                  />
                  <span className={label}>
                    {enabled ? 'Enabled' : 'Disabled'}; Size: <Code>"sm"</Code>
                  </span>
                </div>
                <div className={row}>
                  <Switch
                    icon={icon}
                    enabled={enabled}
                    onChange={setEnabled}
                    label="Toggle something"
                    size="md"
                  />
                  <span className={label}>
                    {enabled ? 'Enabled' : 'Disabled'}; Size: <Code>"md"</Code>
                  </span>
                </div>
                <div className={row}>
                  <Switch
                    icon={icon}
                    enabled={enabled}
                    onChange={setEnabled}
                    label="Toggle something"
                    size="lg"
                  />
                  <span className={label}>
                    {enabled ? 'Enabled' : 'Disabled'}; Size: <Code>"lg"</Code>
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
