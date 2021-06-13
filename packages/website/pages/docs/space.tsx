import { SpaceSquares } from '@/components/SpaceSquares/SpaceSquares';
import { Code, H1, P } from 'flair-kit';
import { Main } from '@/components/Main/Main';
import { PageMetaTags } from '@/components/Seo/PageMetaTags';

export default function Home() {
  return (
    <Main>
      <PageMetaTags
        title="Space"
        description="Flair exposes a few tokens to be used for space-related styles such as margin, padding, etc."
      />
      <H1>Space</H1>

      <P>
        This page shows the various <Code>space</Code> tokens exposed via the{' '}
        <Code>useTheme()</Code> hook.
      </P>
      <SpaceSquares />
    </Main>
  );
}
