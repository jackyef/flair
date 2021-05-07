export const COLORS_VARIANTS = [
  'dark',
  'light',
  'primary',
  'secondary',
  'tertiary',
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

const defaultForegroundColor = 'hsl(233, 22%, 10%)';
const defaultBackgroundColor = 'hsl(0, 0%, 100%)';

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
  primary: {
    400: {
      color: 'hsl(165, 100%, 26%)',
      contrastingColor: defaultBackgroundColor,
    },
    500: {
      color: 'hsl(165, 100%, 28%)',
      contrastingColor: defaultBackgroundColor,
    },
    600: {
      color: 'hsl(165, 100%, 32%)',
      contrastingColor: defaultBackgroundColor,
    },
    700: {
      color: 'hsl(165, 100%, 36%)',
      contrastingColor: defaultBackgroundColor,
    },
    800: {
      color: 'hsl(165, 100%, 40%)',
      contrastingColor: defaultForegroundColor,
    },
  },
  secondary: {
    400: {
      color: 'hsl(230, 97%, 57%)',
      contrastingColor: defaultBackgroundColor,
    },
    500: {
      color: 'hsl(230, 97%, 61%)',
      contrastingColor: defaultBackgroundColor,
    },
    600: {
      color: 'hsl(230, 97%, 65%)',
      contrastingColor: defaultBackgroundColor,
    },
    700: {
      color: 'hsl(230, 97%, 69%)',
      contrastingColor: defaultBackgroundColor,
    },
    800: {
      color: 'hsl(230, 97%, 73%)',
      contrastingColor: defaultBackgroundColor,
    },
  },
  tertiary: {
    400: {
      color: 'hsl(340, 79%, 59%)',
      contrastingColor: defaultBackgroundColor,
    },
    500: {
      color: 'hsl(340, 79%, 64%)',
      contrastingColor: defaultBackgroundColor,
    },
    600: {
      color: 'hsl(340, 79%, 69%)',
      contrastingColor: defaultBackgroundColor,
    },
    700: {
      color: 'hsl(340, 79%, 74%)',
      contrastingColor: defaultForegroundColor,
    },
    800: {
      color: 'hsl(340, 79%, 79%)',
      contrastingColor: defaultForegroundColor,
    },
  },
  warning: {
    400: {
      color: 'hsl(51, 100%, 60%)',
      contrastingColor: defaultForegroundColor,
    },
    500: {
      color: 'hsl(51, 100%, 65%)',
      contrastingColor: defaultForegroundColor,
    },
    600: {
      color: 'hsl(51, 100%, 70%)',
      contrastingColor: defaultForegroundColor,
    },
    700: {
      color: 'hsl(51, 100%, 75%)',
      contrastingColor: defaultForegroundColor,
    },
    800: {
      color: 'hsl(51, 100%, 80%)',
      contrastingColor: defaultForegroundColor,
    },
  },
  error: {
    400: {
      color: 'hsl(353, 86%, 37%)',
      contrastingColor: defaultBackgroundColor,
    },
    500: {
      color: 'hsl(353, 86%, 42%)',
      contrastingColor: defaultBackgroundColor,
    },
    600: {
      color: 'hsl(353, 86%, 47%)',
      contrastingColor: defaultBackgroundColor,
    },
    700: {
      color: 'hsl(353, 86%, 52%)',
      contrastingColor: defaultBackgroundColor,
    },
    800: {
      color: 'hsl(353, 86%, 57%)',
      contrastingColor: defaultBackgroundColor,
    },
  },
} as const;
