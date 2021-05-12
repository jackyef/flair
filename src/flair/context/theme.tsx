import { createContext, useContext, useState } from 'react';

import { GlobalStyles } from '../components/GlobalStyles/GlobalStyles';
import { space, Space } from '../theme/space';
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
  colors: ColorMapping;
};

const colorMapping = getColorMapping();

const defaultContextValue: ThemeContextValue = {
  colorScheme: 'light',
  toggleColorScheme: () => {
    // no-op
  },
  space,
  colors: colorMapping,
};

export const ThemeContext = createContext<ThemeContextValue>(
  defaultContextValue,
);

export const ThemeProvider: React.FC = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    canUseDOM
      ? (document.documentElement.getAttribute(
          DOCUMENT_DATA_ATTRIBUTE,
        ) as ColorScheme)
      : 'light',
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
          space,
          colors: colorMapping,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
