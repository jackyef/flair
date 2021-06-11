import { H1, P, Code, Anchor } from 'flair-kit';
import { Main } from '@/components/Main/Main';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';

export default function InputPage() {
  return (
    <Main>
      <H1>Input</H1>

      <P>
        <Code>Input</Code> in Flair are pretty boring. They are basically the
        native <Code>input</Code> element with some CSS applied. Flair input
        components are not great at the moment, and it is something to be
        improved upon in the future. Please open an issue on{' '}
        <Anchor href="https://github.com/jackyef/flair/issues">GitHub</Anchor>{' '}
        on what component you would like Flair to have!
      </P>

      <CodePlayground
        initialCode={`
          const Example = () => {

            return (
              <section className={css({
                width: '100%',
                maxWidth: '300px',
                margin: '0 auto',
              })}>
                <H3>Example form</H3>
                <form 
                  onSubmit={e => {
                    e.preventDefault();

                    alert('all good!');
                  }} 
                  className={css({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  })}
                >
                  <Input type="text" placeholder={\`input type="text"\`} required />
                  <Input type="number" placeholder={\`input type="number"\`} required />
                  <Input type="date" placeholder={\`input type="date"\`} required />
                  <Input type="tel" placeholder={\`input type="tel"\`} required />
                  <Input type="email" placeholder={\`input type="email"\`} required />
                  <Input type="url" placeholder={\`input type="url"\`} required />
                  <Input type="file" placeholder={\`input type="file"\`} required />
                  <Input type="password" placeholder={\`input type="password"\`} required />

                  <Button type="submit">Submit</Button>
                </form>
              </section>
            )
          }

          render(<Example />);
        `}
      />
    </Main>
  );
}
