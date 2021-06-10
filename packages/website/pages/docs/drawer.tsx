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
        Clicking anywhere on the overlay will call the <Code>onClose</Code> prop
        to close the <Code>Drawer</Code>. Pressing the <kbd>Esc</kbd> key also
        has the same effect.
      </P>

      <CodePlayground
        noInline
        initialCode={`
          const Example = () => {
            const [isOpen, setIsOpen] = React.useState(false);
            const [drawerContent, setDrawerContent] = React.useState('');

            const closeDrawer = () => {
              setIsOpen(false);
            }

            const openDrawer = () => {
              setIsOpen(true);
            }

            return (
              <div>
                <Button 
                  className={css({
                    margin: '0 10px 10px 0',
                  })}
                  onClick={() => {
                  setDrawerContent(\`
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  \`);
                  openDrawer()
                }}>
                  Open drawer with short content
                </Button>

                <Button onClick={() => {
                  setDrawerContent(\`
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                  \`);
                  openDrawer()
                }}>
                  Open drawer with long content
                </Button>

                <Drawer isOpen={isOpen} onClose={closeDrawer} title="What is lorem ipsum?">
                  <P>{drawerContent}</P>

                  <Button variant="background" type="button" onClick={closeDrawer}>
                    Close drawer
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
        By default, opening a <Code>Drawer</Code> will focus on the close
        button. A custom initial focus can be set by passing a reference to the
        element via the <Code>initialFocus</Code> prop.
      </P>

      <CodePlayground
        noInline
        initialCode={`
          const Example = () => {
            const [isOpen, setIsOpen] = React.useState(false);
            const yellowButtonRef = React.useRef(null);

            const closeDrawer = () => {
              setIsOpen(false);
            }

            const openDrawer = () => {
              setIsOpen(true);
            }

            return (
              <div>
                <Button onClick={openDrawer}>
                  Open dialog
                </Button>
                <Drawer 
                  isOpen={isOpen}
                  onClose={closeDrawer}
                  title="Drawer with 3 buttons"
                  initialFocus={yellowButtonRef}
                >
                  <P>
                    This drawer has 3 buttons inside of it. The yellow button will be initially focused.
                  </P>

                  <Button variant="success" type="button" onClick={closeDrawer}>
                    Green
                  </Button>
                  {' '}
                  <Button ref={yellowButtonRef} variant="warning" type="button" onClick={closeDrawer}>
                    Yellow
                  </Button>
                  {' '}
                  <Button variant="error" type="button" onClick={closeDrawer}>
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
