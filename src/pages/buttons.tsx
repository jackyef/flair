import { H1, H2 } from '@/flair/components/Typography/Typography';
import { useTheme } from '@/flair/context/theme';
import { ColorVariant } from '@/flair/theme/colors';
import { MappedColorVariant } from '@/flair/utils/getColorMapping';
import { Main } from '@/components/Main/Main';
import { CodePlayground } from '@/components/CodePlayground/CodePlayground';

export default function Colors() {
  const { colors, space } = useTheme();

  const colorNames = (Object.keys(colors) as unknown) as MappedColorVariant[];

  const variantColors = colorNames.filter(
    (c) => c !== 'foreground' && c !== 'background',
  ) as ColorVariant[];

  const wrapperStyle = `{{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '${space.md}' }}`;

  const buttonVariantsCode = `
    <div style=${wrapperStyle}>
      ${variantColors
        .map((variant) => {
          return `
          <Button key="${variant}" variant="${variant}">
            ${variant}
          </Button>`;
        })
        .join('')}
    </div>
  `;

  const disabledButtonsCode = `
    <div style=${wrapperStyle}>
      ${variantColors
        .map((variant) => {
          return `
          <Button key="${variant}" variant="${variant}" disabled>
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
          <Button key="${size}" variant="secondary" size="${size}" >
            ${size}
          </Button>
        `;
        })
        .join('')}
    </div>
  `;

  const iconButtonsCode = `
    <div style=${wrapperStyle}>
      ${(['sm', 'md', 'lg'] as const)
        .map((size) => {
          return `
          <Button
          key="${size}"
          icon={<AnnouncementIcon />}
          variant="success"
          size="${size}"
        >
          Announce
        </Button>
        `;
        })
        .join('')}
    </div>
  `;

  return (
    <Main>
      <H1>Buttons</H1>

      <H2>Variants</H2>
      <CodePlayground initialCode={buttonVariantsCode} />

      <H2>Disabled</H2>
      <CodePlayground initialCode={disabledButtonsCode} />

      <H2>Size</H2>
      <CodePlayground initialCode={sizeButtonsCode} />

      <H2>With icon</H2>
      <CodePlayground initialCode={iconButtonsCode} />
    </Main>
  );
}
