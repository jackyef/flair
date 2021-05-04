import { SpaceSquares } from '@/components/SpaceSquares/SpaceSquares';
import { H1, H2, H3, H4, H5, H6, P } from '@/components/Typography/Typography';
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
      <H2>Spacing</H2>

      <SpaceSquares />

      <H2>Text sizes</H2>

      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <H6>Heading 6</H6>
      <P>Paragraph</P>
    </Main>
  );
}
