import { H1, P, Code } from 'flair-kit';
import { Main } from '@/components/Main/Main';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';

export default function DialogPage() {
  return (
    <Main>
      <H1>Dialog</H1>

      <P>
        <Code>Dialog</Code> components are usually used to provide a feedback
        after a user interaction. A <Code>Toast</Code> can be added by calling{' '}
        <Code>addToast()</Code> provided by the <Code>useToast()</Code> hook.
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
    </Main>
  );
}
