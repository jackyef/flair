import { SpaceSquares } from '@/components/SpaceSquares/SpaceSquares';
import { Code, H1, P } from 'flair-kit';
import { Main } from '@/components/Main/Main';

export default function Home() {
  return (
    <Main>
      <H1>Space</H1>

      <P>
        This page shows the various <Code>space</Code> tokens exposed via the{' '}
        <Code>useTheme()</Code> hook.
      </P>
      <SpaceSquares />
    </Main>
  );
}
