import { SpaceSquares } from '@/components/SpaceSquares/SpaceSquares';
import { styled } from 'goober';

const Main = styled('main')`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
`;

export default function Home() {
  return (
    <Main>
      <h2>Spacing</h2>

      <SpaceSquares />
    </Main>
  );
}
