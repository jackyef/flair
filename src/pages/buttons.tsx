import { css } from 'goober';

import { Button } from '@/flair/components/Button/Button';
import { H1, H2 } from '@/flair/components/Typography/Typography';
import { useTheme } from '@/flair/context/theme';
import { ColorVariant } from '@/flair/theme/colors';
import { MappedColorVariant } from '@/flair/utils/getColorMapping';
import { AnnouncementIcon } from '@iconicicons/react';
import { Main } from '@/components/Main/Main';

export default function Colors() {
  const { colors, space } = useTheme();

  const colorNames = (Object.keys(colors) as unknown) as MappedColorVariant[];

  const variantColors = colorNames.filter(
    (c) => c !== 'foreground' && c !== 'background',
  ) as ColorVariant[];

  const buttonContainer = css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ${space.md};
  `;

  return (
    <Main>
      <H1>Buttons</H1>

      <div className={buttonContainer}>
        {variantColors.map((variant) => {
          return (
            <Button key={variant} variant={variant}>
              {variant}
            </Button>
          );
        })}
      </div>

      <H2>Disabled</H2>

      <div className={buttonContainer}>
        {variantColors.map((variant) => {
          return (
            <Button key={variant} variant={variant} disabled>
              {variant}
            </Button>
          );
        })}
      </div>

      <H2>Size</H2>
      <div className={buttonContainer}>
        {(['sm', 'md', 'lg'] as const).map((size) => {
          return (
            <Button key={size} variant="secondary" size={size}>
              {size}
            </Button>
          );
        })}
      </div>

      <H2>With icon</H2>
      <div className={buttonContainer}>
        {(['sm', 'md', 'lg'] as const).map((size) => {
          return (
            <Button
              key={size}
              icon={<AnnouncementIcon />}
              variant="success"
              size={size}
            >
              Announce
            </Button>
          );
        })}
      </div>
    </Main>
  );
}
