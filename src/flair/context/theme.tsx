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

type ColorMapping = Partial<Record<MappedColorVariant, Partial<ColorShade>>>;

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
  colors: {},
};

export const ThemeContext = createContext<ThemeContextValue>(
  defaultContextValue,
);

const getColorMapping = (colorScheme: ColorScheme) => {
  const map: ThemeContextValue['colorMapping'] = {};

  COLORS_VARIANTS.forEach((colorName) => {
    COLOR_SHADE_VARIANTS.forEach((shadeStep) => {
      if (!map[colorName]) map[colorName] = {};

      // @ts-expect-error
      map[colorName][shadeStep] = {
        color: `var(--color-${colorName}-${shadeStep})`,
        contrastingColor: `var(--contrasting-color-${colorName}-${shadeStep})`,
      };
    });
  });

  map['foreground'] = map[colorScheme === 'light' ? 'dark' : 'light'];
  map['background'] = map[colorScheme === 'light' ? 'light' : 'dark'];

  return map;
};

export const ThemeProvider: React.FC = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    canUseDOM
      ? (document.body.getAttribute('data-theme') as ColorScheme)
      : 'light',
  );
  const [colors, setColors] = useState(getColorMapping(colorScheme));

  const toggleColorScheme = () => {
    const isDarkMode = colorScheme === 'dark';

    if (!isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('flair-theme', 'dark');
      setColorScheme('dark');
      setColors(getColorMapping('dark'));
    } else {
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('flair-theme', 'light');
      setColorScheme('light');
      setColors(getColorMapping('light'));
    }
  };

  return (
    <>
      <GlobalStyles />
      <ThemeContext.Provider
        value={{ colorScheme, toggleColorScheme, space, colors }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
