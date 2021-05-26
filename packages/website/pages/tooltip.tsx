import { H1, P } from 'flair-kit';
import { Main } from '@/components/Main/Main';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';

export default function Colors() {
  return (
    <Main>
      <H1>Tooltip</H1>

      <P>
        Tooltip can be used to provide some extra information. Information that
        are considered crucial should not be put in the Tooltip.
      </P>

      <P>
        Flair is using @reach/tooltip under the hood. At the time, the children
        wrapped by the Tooltip should be a native HTML element (e.g.: div, a,
        etc.) for it to be working properly.
      </P>

      <P>
        The label prop is used to determine what to render in the UI. The
        ariaLabel prop is the one that will be announced by screen readers.
      </P>
      <CodePlayground
        noInline
        initialCode={`
          const Example = () => {
            const [enabled, setEnabled] = React.useState(false);
            const { colors, space, transition } = useTheme();

            return (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Tooltip
                  label="Notification - This is rendered in the UI"
                  ariaLabel="3 notifications - This is announced by screen readers"
                >
                  <div tabIndex={0} style={{ position: "relative", display: 'inline-block' }}>
                    <HeroIconsSolid.BellIcon width={48} height={48} />
                    <span 
                      style={{ 
                        position: "absolute",
                        top: \`-\${space.md}\`,
                        right: \`-\${space.sm}\`,
                        width: space.xl,
                        height: space.xl,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 999,
                        background: colors.error[700].color,
                        color: colors.error[700].contrastingColor,
                        transition: transition.default
                      }}
                    >
                      3
                    </span>
                  </div>
                </Tooltip>
                <span style={{ marginLeft: space.lg }}>
                  &larr; Try hovering on me!
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
