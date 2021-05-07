import { createContext, useContext, useState } from 'react';

import { GlobalStyles } from '../components/GlobalStyles/GlobalStyles';
import { canUseDOM } from '../utils/canUseDOM';

type ColorScheme = 'light' | 'dark';
type ThemeContextValue = {
  toggleColorScheme: () => void;
  colorScheme: ColorScheme;
};

const defaultContextValue: ThemeContextValue = {
  colorScheme: 'light',
  toggleColorScheme: () => {
    // no-op
  },
};

export const ThemeContext = createContext<ThemeContextValue>(
  defaultContextValue,
);

export const ThemeProvider: React.FC = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    canUseDOM
      ? (document.body.getAttribute('data-theme') as ColorScheme)
      : 'light',
  );

  const toggleColorScheme = () => {
    const isDarkMode = colorScheme === 'dark';

    if (!isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('flair-theme', 'dark');
      setColorScheme('dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('flair-theme', 'light');
      setColorScheme('light');
    }
  };

  return (
    <>
      <GlobalStyles />
      <ThemeContext.Provider value={{ colorScheme, toggleColorScheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
