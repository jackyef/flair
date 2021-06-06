import { H1, H2, P, useTheme } from 'flair-kit';
import type { MappedColorVariant, ColorVariant } from 'flair-kit';
import { Main } from '@/components/Main/Main';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';

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
          <Button variant="secondary" size="${size}" >
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
            icon={<AnnouncementIcon />}
            variant="success"
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
            icon={<AnnouncementIcon />}
            iconPosition="right"
            variant="success"
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
      <H1>Buttons</H1>

      <H2>Variants</H2>
      <CodePlayground initialCode={buttonVariantsCode} />

      <H2>Background and foreground variant</H2>
      <P>
        Often, you might want to have a button that follows the
        background/foreground color. The easiest way would be to use the{' '}
        background/foreground variant. When on light color scheme, background
        will automatically refer to the light color variant and foreground to
        the dark color variant. Same goes for the dark color scheme.
      </P>
      <CodePlayground
        initialCode={`
        <div style=${wrapperStyle}>
          <Button variant="foreground">foreground</Button>
          <Button variant="background">background</Button>
        </div>
      `}
      />

      <H2>CTA Button</H2>
      <P>
        CTA (call-to-action) buttons usually need a bit more of a <i>oomph</i>{' '}
        to get users more likely to click on them. This is usually achieved by
        making the button more eye-catching.
      </P>
      <CodePlayground initialCode={buttonSingleGradientCode} />

      <H2>Disabled</H2>
      <CodePlayground initialCode={disabledButtonsCode} />

      <H2>Size</H2>
      <CodePlayground initialCode={sizeButtonsCode} />

      <H2>With icon</H2>
      <CodePlayground initialCode={iconButtonsCode} />
    </Main>
  );
}
