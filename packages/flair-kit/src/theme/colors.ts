import { generatedColors } from '../utils/generatedColors';

export const COLORS_VARIANTS = [
  'dark',
  'light',
  'primary',
  'secondary',
  'success',
  'warning',
  'error',
] as const;
export type ColorVariant = typeof COLORS_VARIANTS[number];
export const COLOR_SHADE_VARIANTS = [400, 500, 600, 700, 800] as const;
export type ColorPair = {
  color: string;
  contrastingColor: string;
};

export type ColorShadeVariant = typeof COLOR_SHADE_VARIANTS[number];
export type ColorShade = Record<ColorShadeVariant, ColorPair>;

export const defaultForegroundColor = 'hsl(233, 22%, 10%)';
export const defaultBackgroundColor = 'hsl(0, 0%, 100%)';

export type Colors = Record<ColorVariant, ColorShade>;
export const colors: Colors = {
  dark: {
    400: {
      color: defaultForegroundColor,
      contrastingColor: defaultBackgroundColor,
    },
    500: {
      color: 'hsl(233, 22%, 15%)',
      contrastingColor: defaultBackgroundColor,
    },
    600: {
      color: 'hsl(233, 22%, 20%)',
      contrastingColor: defaultBackgroundColor,
    },
    700: {
      color: 'hsl(233, 22%, 25%)',
      contrastingColor: defaultBackgroundColor,
    },
    800: {
      color: 'hsl(233, 22%, 30%)',
      contrastingColor: defaultBackgroundColor,
    },
  },
  light: {
    400: {
      color: 'hsl(0, 0%, 89%)',
      contrastingColor: defaultForegroundColor,
    },
    500: {
      color: 'hsl(0, 0%, 92%)',
      contrastingColor: defaultForegroundColor,
    },
    600: {
      color: 'hsl(0, 0%, 95%)',
      contrastingColor: defaultForegroundColor,
    },
    700: {
      color: 'hsl(0, 0%, 98%)',
      contrastingColor: defaultForegroundColor,
    },
    800: {
      color: defaultBackgroundColor,
      contrastingColor: defaultForegroundColor,
    },
  },
  ...generatedColors,
} as const;
