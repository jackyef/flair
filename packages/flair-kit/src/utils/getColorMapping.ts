import { ColorScaleStep, HUES, ColorVariant } from '../theme/colors';
import { COLOR_SCALE_STEPS } from './reverseColorStep';

export type MappedColorVariant = ColorVariant | 'foreground' | 'background';
export type ColorMapping = Record<
  MappedColorVariant,
  Record<ColorScaleStep, string>
>;

export const getColorMapping = (): ColorMapping => {
  const map: any = {};
  const colorVariantsWithForegroundAndBackground = [
    'foreground',
    'background',
    ...HUES,
  ];

  colorVariantsWithForegroundAndBackground.forEach((colorName) => {
    COLOR_SCALE_STEPS.forEach((shadeStep) => {
      if (!map[colorName]) map[colorName] = {};

      map[colorName][shadeStep] = `var(--color-${colorName}-${shadeStep})`;
    });
  });

  return map as ColorMapping;
};
