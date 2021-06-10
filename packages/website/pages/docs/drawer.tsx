import Link from 'next/link';
import { H1, P, Code, Anchor, H2 } from 'flair-kit';
import { Main } from '@/components/Main/Main';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';

export default function DrawerPage() {
  return (
    <Main>
      <H1>Drawer</H1>

      <P>
        <Code>Drawer</Code> can be used to show additional UI to the users that
        are not necessarily needs to be part of the page. Internally, it works a
        lot like{' '}
        <Link href="/docs/dialog" passHref>
          <Anchor>
            <Code>Dialog</Code>
          </Anchor>
        </Link>
        .
      </P>

      <P>
        When a <Code>Drawer</Code> is opened, scroll on the page are
        automatically locked, and focus are trapped within the{' '}
        <Code>Drawer</Code>. A <Code>Drawer</Code> must have a focusable element
        inside of it, as it will attempt to focus on the element when the{' '}
        <Code>Drawer</Code> opens.
      </P>

      <P>
        Click anywhere on the overlay will call the <Code>onClose</Code> prop to
        close the <Code>Drawer</Code>. Pressing the <kbd>Esc</kbd> key also has
        the same effect.
      </P>

      <CodePlayground
        noInline
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
                  Open drawer
                </Button>
                <Drawer isOpen={isOpen} onClose={closeModal} title="Payment successful">
                  <P>
                    Your payment has been successfully submitted. We’ve sent your
                    an email with all of the details of your order.
                  </P>

                  <Button variant="background" type="button" onClick={closeModal}>
                    Got it, thanks!
                  </Button>
                </Drawer>
              </div>
            )
          }

          render(<Example />);
        `}
      />

      <H2>Manually setting initial focus</H2>

      <P>
        In case your <Code>Drawer</Code> contains multiple focusable components,
        initial focus can be manually set by passing a reference to the element
        via the <Code>initialFocus</Code> prop.
      </P>

      <CodePlayground
        noInline
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
                <Drawer 
                  isOpen={isOpen}
                  onClose={closeModal}
                  title="Drawer with 3 buttons"
                  initialFocus={yellowButtonRef}
                >
                  <P>
                    This drawer has 3 buttons inside of it. The yellow button will be initially focused.
                  </P>

                  <Button variant="success" type="button" onClick={closeModal}>
                    Green
                  </Button>
                  {' '}
                  <Button ref={yellowButtonRef} variant="warning" type="button" onClick={closeModal}>
                    Yellow
                  </Button>
                  {' '}
                  <Button variant="error" type="button" onClick={closeModal}>
                    Red
                  </Button>
                </Drawer>
              </div>
            )
          }

          render(<Example />);
        `}
      />
    </Main>
  );
}
