import type { Colors } from "../colors";

const defaultForegroundColor = 'hsl(0, 0%, 12.5%)';
const defaultBackgroundColor = 'hsl(0, 0%, 100%)';

export const stickerMuleColors: Colors = {
  dark: {
    400: {
      color: defaultForegroundColor,
      contrastingColor: defaultBackgroundColor,
    },
    500: {
      color: 'hsl(0, 0%, 14.5%)',
      contrastingColor: defaultBackgroundColor,
    },
    600: {
      color: 'hsl(0, 0%, 16.5%)',
      contrastingColor: defaultBackgroundColor,
    },
    700: {
      color: 'hsl(0, 0%, 18.5%)',
      contrastingColor: defaultBackgroundColor,
    },
    800: {
      color: 'hsl(0, 0%, 20.5%)',
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
      color: 'hsl(28.7, 100%, 46%)',
      contrastingColor: defaultBackgroundColor,
    },
    500: {
      color: 'hsl(28.7, 100%, 48%)',
      contrastingColor: defaultBackgroundColor,
    },
    600: {
      color: 'hsl(28.7, 100%, 50%)',
      contrastingColor: defaultBackgroundColor,
    },
    700: {
      color: 'hsl(28.7, 100%, 52%)',
      contrastingColor: defaultBackgroundColor,
    },
    800: {
      color: 'hsl(28.7, 100%, 54%)',
      contrastingColor: defaultForegroundColor,
    },
  },
  secondary: {
    400: {
      color: 'hsl(208.5, 73.5%, 58.9%)',
      contrastingColor: defaultBackgroundColor,
    },
    500: {
      color: 'hsl(208.5, 73.5%, 60.9%)',
      contrastingColor: defaultBackgroundColor,
    },
    600: {
      color: 'hsl(208.5, 73.5%, 62.9%)',
      contrastingColor: defaultBackgroundColor,
    },
    700: {
      color: 'hsl(208.5, 73.5%, 64.9%)',
      contrastingColor: defaultBackgroundColor,
    },
    800: {
      color: 'hsl(208.5, 73.5%, 66.9%)',
      contrastingColor: defaultForegroundColor,
    },
  },
  success: {
    400: {
      color: 'hsl(134.6, 48%, 52.3%)',
      contrastingColor: defaultBackgroundColor,
    },
    500: {
      color: 'hsl(134.6, 48%, 54.3%)',
      contrastingColor: defaultBackgroundColor,
    },
    600: {
      color: 'hsl(134.6, 48%, 56.3%)',
      contrastingColor: defaultBackgroundColor,
    },
    700: {
      color: 'hsl(134.6, 48%, 58.3%)',
      contrastingColor: defaultBackgroundColor,
    },
    800: {
      color: 'hsl(134.6, 48%, 60.3%)',
      contrastingColor: defaultForegroundColor,
    },
  },
  warning: {
    400: {
      color: 'hsl(47.9, 91.4%, 58.7%)',
      contrastingColor: defaultForegroundColor,
    },
    500: {
      color: 'hsl(47.9, 91.4%, 60.7%)',
      contrastingColor: defaultForegroundColor,
    },
    600: {
      color: 'hsl(47.9, 91.4%, 63.7%)',
      contrastingColor: defaultForegroundColor,
    },
    700: {
      color: 'hsl(47.9, 91.4%, 65.7%)',
      contrastingColor: defaultForegroundColor,
    },
    800: {
      color: 'hsl(47.9, 91.4%, 67.7%)',
      contrastingColor: defaultForegroundColor,
    },
  },
  error: {
    400: {
      color: 'hsl(0, 100%, 57.9%)',
      contrastingColor: defaultBackgroundColor,
    },
    500: {
      color: 'hsl(0, 100%, 59.9%)',
      contrastingColor: defaultBackgroundColor,
    },
    600: {
      color: 'hsl(0, 100%, 62.9%)',
      contrastingColor: defaultBackgroundColor,
    },
    700: {
      color: 'hsl(0, 100%, 65.9%)',
      contrastingColor: defaultBackgroundColor,
    },
    800: {
      color: 'hsl(0, 100%, 67.9%)',
      contrastingColor: defaultForegroundColor,
    },
  },
} as const;
