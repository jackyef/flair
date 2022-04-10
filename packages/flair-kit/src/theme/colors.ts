import { generatedColors } from '../utils/generatedColors';
import { COLOR_SCALE_STEPS } from '../utils/reverseColorStep';

export type ColorVariant = keyof typeof generatedColors;
export const HUES = [
  ...Object.keys(generatedColors),
  'dark',
  'light',
] as ColorVariant[];

export type Color = string;
export type ColorScaleStep = typeof COLOR_SCALE_STEPS[number];
export type ColorScale = Record<ColorScaleStep, Color>;

export const defaultForegroundColor = generatedColors.coolgray[90];
export const defaultBackgroundColor = generatedColors.coolgray[5];

export type Colors = Record<ColorVariant, ColorScale>;
export const colors: Colors = {
  ...generatedColors,
} as const;
