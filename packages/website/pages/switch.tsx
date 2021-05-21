import { useState } from 'react';
import { H1, H2, Switch } from 'flair-kit';
import { Main } from '@/components/Main/Main';
// import { CodePlayground } from '@/components/CodePlayground/CodePlayground';

export default function Colors() {
  // const { colors, space } = useTheme();
  const [enabled, setEnabled] = useState(false);

  return (
    <Main>
      <H1>Tooltip</H1>

      <Switch
        enabled={enabled}
        onChange={setEnabled}
        label="Toggle something"
      />
      <H2>Variants</H2>
      {/* <CodePlayground initialCode={buttonVariantsCode} /> */}
    </Main>
  );
}
