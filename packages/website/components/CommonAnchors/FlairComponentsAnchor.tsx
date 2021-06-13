import { Anchor, Code } from 'flair-kit';
import Link from 'next/link';

const COMPONENTS = [
  'Box',
  'Button',
  'Dialog',
  'Drawer',
  'Switch',
  'Text',
  'Toast',
  'Tooltip',
  'Typography',
] as const;

interface Props {
  component: typeof COMPONENTS[number];
}

export const FlairComponentsAnchor = ({ component }: Props) => {
  return (
    <Link href={`/docs/${component.toLowerCase()}`} passHref>
      <Anchor>
        <Code>{component}</Code>
      </Anchor>
    </Link>
  );
};
