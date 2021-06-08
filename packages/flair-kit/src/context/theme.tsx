import { createContext, useContext, useState } from 'react';

import { GlobalStyles } from '../components/GlobalStyles/GlobalStyles';
import { ToastProvider } from '../components/Toast';
import { fontSizes, lineHeights, mobileFontSizes } from '../theme/fonts';
import { mediaQuery } from '../theme/mediaQuery';
import { radii } from '../theme/radii';
import { shadow } from '../theme/shadow';
import { space, Space } from '../theme/space';
import { transition } from '../theme/transition';
import { canUseDOM } from '../utils/canUseDOM';
import { ColorMapping, getColorMapping } from '../utils/getColorMapping';
import {
  ColorScheme,
  toggleColorScheme,
  DOCUMENT_DATA_ATTRIBUTE,
} from '../utils/toggleColorScheme';

type ThemeContextValue = {
  toggleColorScheme: () => void;
  colorScheme: ColorScheme;
  space: Space;
  mediaQuery: typeof mediaQuery;
  radii: typeof radii;
  shadow: typeof shadow;
  transition: typeof transition;
  fontSizes: typeof fontSizes;
  mobileFontSizes: typeof mobileFontSizes;
  lineHeights: typeof lineHeights;
  colors: ColorMapping;
};

const colorMapping = getColorMapping();

const defaultContextValue: ThemeContextValue = {
  colorScheme: 'light',
  toggleColorScheme: () => {
    // no-op
  },
  radii,
  space,
  shadow,
  mediaQuery,
  transition,
  fontSizes,
  mobileFontSizes,
  lineHeights,
  colors: colorMapping,
};

export const ThemeContext =
  createContext<ThemeContextValue>(defaultContextValue);

export const ThemeProvider: React.FC = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    canUseDOM
      ? (document.documentElement.getAttribute(
          DOCUMENT_DATA_ATTRIBUTE
        ) as ColorScheme)
      : 'light'
  );

  const toggleScheme = () => {
    const isDarkMode = colorScheme === 'dark';
    const targetColorScheme = isDarkMode ? 'light' : 'dark';

    toggleColorScheme(targetColorScheme);
    setColorScheme(targetColorScheme);
  };

  return (
    <>
      <GlobalStyles />
      <ThemeContext.Provider
        value={{
          colorScheme,
          toggleColorScheme: toggleScheme,
          radii,
          space,
          shadow,
          mediaQuery,
          transition,
          fontSizes,
          mobileFontSizes,
          lineHeights,
          colors: colorMapping,
        }}
      >
        <ToastProvider>{children}</ToastProvider>
      </ThemeContext.Provider>
    </>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
