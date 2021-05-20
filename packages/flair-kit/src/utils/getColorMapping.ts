import {
  ColorShade,
  COLORS_VARIANTS,
  ColorVariant,
  COLOR_SHADE_VARIANTS,
} from '../theme/colors';

export type MappedColorVariant = ColorVariant | 'foreground' | 'background';
export type ColorMapping = Record<MappedColorVariant, ColorShade>;

export const getColorMapping = (): ColorMapping => {
  const map: any = {};
  const colorVariantsWithForegroundAndBackground = [
    'foreground',
    'background',
    ...COLORS_VARIANTS,
  ];

  colorVariantsWithForegroundAndBackground.forEach((colorName) => {
    COLOR_SHADE_VARIANTS.forEach((shadeStep) => {
      if (!map[colorName]) map[colorName] = {};

      map[colorName][shadeStep] = {
        color: `var(--color-${colorName}-${shadeStep})`,
        contrastingColor: `var(--contrasting-color-${colorName}-${shadeStep})`,
      };
    });
  });

  return map;
};
