import { H1, P, Code, Anchor, H2 } from 'flair-kit';
import { Main } from '@/components/Main/Main';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';
import { PageMetaTags } from '@/components/Seo/PageMetaTags';

export default function DialogPage() {
  return (
    <Main>
      <PageMetaTags
        title="Dialog"
        description="Dialog components are commonly used to ask for user explicit interaction."
      />
      <H1>Dialog</H1>

      <P>
        <Code>Dialog</Code> components are commonly used to ask for user
        explicit interaction. Flair uses{' '}
        <Anchor href="https://headlessui.dev/react/dialog">
          <Code>@headlessui/react</Code> Dialog
        </Anchor>{' '}
        under the hood.
      </P>

      <P>
        When a <Code>Dialog</Code> is opened, scroll on the page are
        automatically locked, and focus are trapped within the{' '}
        <Code>Dialog</Code>. A <Code>Dialog</Code> must have a focusable element
        inside of it, as it will attempt to focus on the element when the{' '}
        <Code>Dialog</Code> opens.
      </P>

      <P>
        Clicking anywhere on the overlay will call the <Code>onClose</Code> prop
        to close the <Code>Dialog</Code>. Pressing the <kbd>Esc</kbd> key also
        has the same effect.
      </P>

      <CodePlayground
        initialCode={`
          const Example = () => {
            const [isOpen, setIsOpen] = React.useState(false);

            const closeModal = () => {
              setIsOpen(false);
            }

            const openModal = () => {
              setIsOpen(true);
            }

            return (
              <div>
                <Button onClick={openModal}>
                  Open dialog
                </Button>
                <Dialog isOpen={isOpen} onClose={closeModal} title="Payment successful">
                  <P>
                    Your payment has been successfully submitted. We’ve sent your
                    an email with all of the details of your order.
                  </P>

                  <Button variant="background" type="button" onClick={closeModal}>
                    Got it, thanks!
                  </Button>
                </Dialog>
              </div>
            )
          }

          render(<Example />);
        `}
      />

      <H2>Manually setting initial focus</H2>

      <P>
        In case your <Code>Dialog</Code> contains multiple focusable components,
        initial focus can be manually set by passing a reference to the element
        via the <Code>initialFocus</Code> prop.
      </P>

      <CodePlayground
        initialCode={`
          const Example = () => {
            const [isOpen, setIsOpen] = React.useState(false);
            const yellowButtonRef = React.useRef(null);

            const closeModal = () => {
              setIsOpen(false);
            }

            const openModal = () => {
              setIsOpen(true);
            }

            return (
              <div>
                <Button onClick={openModal}>
                  Open dialog
                </Button>
                <Dialog 
                  isOpen={isOpen}
                  onClose={closeModal}
                  title="Dialog with 3 buttons"
                  initialFocus={yellowButtonRef}
                >
                  <P>
                    This dialog has 3 buttons inside of it. The yellow button will be initially focused.
                  </P>

                  <Button variant="mint" type="button" onClick={closeModal}>
                    Green
                  </Button>
                  {' '}
                  <Button ref={yellowButtonRef} variant="yellow" type="button" onClick={closeModal}>
                    Yellow
                  </Button>
                  {' '}
                  <Button variant="coolred" type="button" onClick={closeModal}>
                    Red
                  </Button>
                </Dialog>
              </div>
            )
          }

          render(<Example />);
        `}
      />
    </Main>
  );
}
