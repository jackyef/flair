import { Anchor, Code, H1, H2, P, useTheme } from 'flair-kit';
import type { MappedColorVariant, ColorVariant } from 'flair-kit';
import { Main } from '@/components/Main/Main';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';
import { PageMetaTags } from '@/components/Seo/PageMetaTags';

export default function Colors() {
  const { colors, space } = useTheme();

  const colorNames = Object.keys(colors) as unknown as MappedColorVariant[];

  const variantColors = colorNames.filter(
    (c) => c !== 'foreground' && c !== 'background'
  ) as ColorVariant[];

  const wrapperStyle = `{{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '${space.md}' }}`;

  const buttonVariantsCode = `
    <div style=${wrapperStyle}>
      ${variantColors
        .map((variant) => {
          return `
          <Button variant="${variant}">
            ${variant}
          </Button>
        `;
        })
        .join('')}
    </div>
  `;

  const buttonSingleGradientCode = `
    <div style=${wrapperStyle}>
      ${variantColors
        .map((variant) => {
          return `
          <Button variant="${variant}" isCTA>
            ${variant}
          </Button>
        `;
        })
        .join('')}
    </div>
  `;

  const disabledButtonsCode = `
    <div style=${wrapperStyle}>
      ${variantColors
        .map((variant) => {
          return `
          <Button variant="${variant}" disabled>
            ${variant}
          </Button>
        `;
        })
        .join('')}
    </div>
  `;

  const sizeButtonsCode = `
    <div style=${wrapperStyle}>
      ${(['sm', 'md', 'lg'] as const)
        .map((size) => {
          return `
          <Button variant="magenta" size="${size}" >
            ${size}
          </Button>
        `;
        })
        .join('')}
    </div>
  `;

  const iconButtonsCode = `
  <>
    <div style=${wrapperStyle}>
      ${(['sm', 'md', 'lg'] as const)
        .map((size) => {
          return `
          <Button
            icon={<HeroIconsSolid.BellIcon />}
            variant="mint"
            size="${size}"
          >
            Left
          </Button>
        `;
        })
        .join('')}
    </div>
    <br />
    <div style=${wrapperStyle}>
      ${(['sm', 'md', 'lg'] as const)
        .map((size) => {
          return `
          <Button
            icon={<HeroIconsSolid.BellIcon />}
            iconPosition="right"
            variant="mint"
            size="${size}"
          >
            Right
          </Button>
        `;
        })
        .join('')}
    </div>
  </>
  `;

  return (
    <Main>
      <PageMetaTags
        title="Button"
        description="Button can be used to trigger various kinds of actions based on user click."
      />
      <H1>Button</H1>

      <H2>Variants</H2>
      <CodePlayground
        initialCode={`const Example = () => ( ${buttonVariantsCode} ); render(<Example />)`}
      />

      <H2>Background and foreground variant</H2>
      <P>
        In case a button needs to follow the background/foreground color,{' '}
        <Code>&quot;background&quot;</Code> or{' '}
        <Code>&quot;foreground&quot;</Code>
        can be passed to <Code>variant</Code> prop. On light color scheme,
        background will automatically refer to the light color variant and
        foreground to the dark color variant. Same goes for the dark color
        scheme.
      </P>
      <CodePlayground
        initialCode={`
        const Example = () => (
          <div style=${wrapperStyle}>
            <Button variant="foreground">foreground</Button>
            <Button variant="background">background</Button>
          </div>
        );

        render(<Example />)
      `}
      />

      <H2>CTA Button</H2>
      <P>
        It is common for CTA (call-to-action) buttons to have a bit more of an{' '}
        <i>oomph</i> to get users more likely to click on them. This is can
        achieved by making the button more eye-catching.
      </P>
      <CodePlayground
        initialCode={`const Example = () => ( ${buttonSingleGradientCode} ); render(<Example />)`}
      />

      <H2>Disabled</H2>
      <CodePlayground
        initialCode={`const Example = () => ( ${disabledButtonsCode} ); render(<Example />)`}
      />

      <H2>Size</H2>
      <CodePlayground
        initialCode={`const Example = () => ( ${sizeButtonsCode} ); render(<Example />)`}
      />

      <H2>With icon</H2>
      <P>
        The code editor in this site comes with{' '}
        <Anchor href="https://github.com/tailwindlabs/heroicons#react">
          heroicons
        </Anchor>{' '}
        in the global scope. You can access them via{' '}
        <Code>HeroIconsSolid.IconName</Code>. For the full list of icons, visit{' '}
        <Anchor href="https://heroicons.com/">heroicons site</Anchor>.
      </P>
      <CodePlayground
        initialCode={`const Example = () => ( ${iconButtonsCode} ); render(<Example />)`}
      />
    </Main>
  );
}
