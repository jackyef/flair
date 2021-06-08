import { H1, P, Code } from 'flair-kit';
import { Main } from '@/components/Main/Main';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';

export default function Text() {
  return (
    <Main>
      <H1>Toast</H1>

      <P>
        <Code>Toast</Code> components are usually used to provide a feedback
        after a user interaction.
      </P>

      <CodePlayground
        noInline
        initialCode={`
          const Example = () => {
            const { addToast } = useToast();

            const toastData = {
              title: 'Some toast title',
              description: 'The description of the toast',
              icon: null,
            }

            return (
              <div>
                <Button 
                  onClick={() => {
                    addToast({ variant: "primary", ...toastData })
                  }} 
                  variant="primary"
                >
                  Primary toast
                </Button>
                <Button 
                  onClick={() => {
                    addToast({ variant: "secondary", ...toastData })
                  }} 
                  variant="secondary"
                >
                  Secondary toast
                </Button>
                <Button 
                  onClick={() => {
                    addToast({ variant: "success", ...toastData })
                  }} 
                  variant="success"
                >
                  Success toast ✅ 
                </Button>
                <Button 
                  onClick={() => {
                    addToast({ variant: "error", ...toastData })
                  }} 
                  variant="error"
                >
                  Success toast ❌ 
                </Button>
                <Button 
                  onClick={() => {
                    addToast({ variant: "warning", ...toastData })
                  }} 
                  variant="warning"
                >
                  Warning toast ⚠️ 
                </Button>
              </div>
            )
          }

          render(<Example />);
        `}
      />
    </Main>
  );
}
