import { Anchor, Code, H1, H2, P } from 'flair-kit';
import { Main } from '@/components/Main/Main';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';
import { PageMetaTags } from '@/components/Seo/PageMetaTags';

export default function Colors() {
  return (
    <Main>
      <PageMetaTags
        title="Switch"
        description="Switch is a component that can be used to toggle between 2 values."
      />
      <H1>Switch</H1>

      <P>
        <Code>Switch</Code> is a component that can be used to toggle between 2
        values.
      </P>

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

      <P>
        The code editor in this site comes with{' '}
        <Anchor href="https://github.com/tailwindlabs/heroicons#react">
          heroicons
        </Anchor>{' '}
        in the global scope. You can access them via{' '}
        <Code>HeroIconsSolid.IconName</Code>. For the full list of icons, visit{' '}
        <Anchor href="https://heroicons.com/">heroicons site</Anchor>.
      </P>
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
