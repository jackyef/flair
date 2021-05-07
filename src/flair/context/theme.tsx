import { createContext, useContext, useState } from 'react';

import { GlobalStyles } from '../components/GlobalStyles/GlobalStyles';
import {
  ColorShade,
  COLORS_VARIANTS,
  ColorVariant,
  COLOR_SHADE_VARIANTS,
} from '../theme/colors';
import { space, Space } from '../theme/space';
import { canUseDOM } from '../utils/canUseDOM';

type ColorScheme = 'light' | 'dark';
export type MappedColorVariant = ColorVariant | 'foreground' | 'background';

export type ColorMapping = Record<MappedColorVariant, ColorShade>;

type ThemeContextValue = {
  toggleColorScheme: () => void;
  colorScheme: ColorScheme;
  space: Space;
  colors: ColorMapping;
};

const defaultContextValue: ThemeContextValue = {
  colorScheme: 'light',
  toggleColorScheme: () => {
    // no-op
  },
  space,
  // @ts-expect-error
  colors: {},
};

export const ThemeContext = createContext<ThemeContextValue>(
  defaultContextValue,
);

const getColorMapping = (): ColorMapping => {
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

const colorMapping = getColorMapping();

export const ThemeProvider: React.FC = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    canUseDOM
      ? (document.documentElement.getAttribute('data-theme') as ColorScheme)
      : 'light',
  );

  const toggleColorScheme = () => {
    const isDarkMode = colorScheme === 'dark';

    if (!isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('flair-theme', 'dark');
      setColorScheme('dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('flair-theme', 'light');
      setColorScheme('light');
    }
  };

  return (
    <>
      <GlobalStyles />
      <ThemeContext.Provider
        value={{ colorScheme, toggleColorScheme, space, colors: colorMapping }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
