import { Anchor, H1, P, Code } from 'flair-kit';
import { Main } from '@/components/Main/Main';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';
import { PageMetaTags } from '@/components/Seo/PageMetaTags';

export default function Tooltip() {
  return (
    <Main>
      <PageMetaTags
        title="Tooltip"
        description="Tooltip can be used to provide some extra information. Information that are considered crucial should not be put in the Tooltip."
      />

      <H1>Tooltip</H1>

      <P>
        Tooltip can be used to provide some extra information. Information that
        are considered crucial should not be put in the Tooltip.
      </P>

      <P>
        Flair is using{' '}
        <Anchor href="https://reach.tech/tooltip">@reach/tooltip</Anchor> under
        the hood. At the time, the children wrapped by the Tooltip should be a
        native HTML element (e.g.: div, a, etc.) for it to be working properly.
      </P>

      <P>
        The <Code>label</Code> prop is used to determine what to render in the
        UI. The <Code>ariaLabel</Code> prop is the one that will be announced by
        screen readers.
      </P>
      <CodePlayground
        initialCode={`
          const Example = () => {
            const [enabled, setEnabled] = React.useState(false);
            const { colors, space, transition } = useTheme();

            return (
              <div className={css({ display: 'flex', alignItems: 'center' })}>
                <Tooltip
                  label="Notification - This is rendered in the UI"
                  ariaLabel="3 notifications - This is announced by screen readers"
                >
                  <div tabIndex="0" className={css({ position: "relative", display: 'inline-block' })}>
                    <HeroIconsSolid.BellIcon width={48} height={48} />
                    <span 
                      className={css({ 
                        position: "absolute",
                        top: \`-\${space.md}\`,
                        right: \`-\${space.sm}\`,
                        width: space.xl,
                        height: space.xl,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '999px',
                        background: colors.coolred[50],
                        color: colors.coolred[10],
                        transition: transition.default
                      })}
                    >
                      3
                    </span>
                  </div>
                </Tooltip>
                <span className={css({ marginLeft: space.lg })}>
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
