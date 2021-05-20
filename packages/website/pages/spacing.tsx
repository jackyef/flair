import { SpaceSquares } from '@/components/SpaceSquares/SpaceSquares';
import { H1 } from 'flair-kit';
import { Main } from '@/components/Main/Main';

export default function Home() {
  return (
    <Main>
      <H1>Spacing</H1>

      <SpaceSquares />
    </Main>
  );
}
