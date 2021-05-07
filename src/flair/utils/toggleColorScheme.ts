export type ColorScheme = 'light' | 'dark';

export const DOCUMENT_DATA_ATTRIBUTE = 'data-flair-theme';

export const toggleColorScheme = (colorScheme: ColorScheme) => {
  const togglingToDarkMode = colorScheme === 'dark';

  if (togglingToDarkMode) {
    document.documentElement.setAttribute(DOCUMENT_DATA_ATTRIBUTE, 'dark');
    localStorage.setItem('flair-theme', 'dark');
  } else {
    document.documentElement.setAttribute(DOCUMENT_DATA_ATTRIBUTE, 'light');
    localStorage.setItem('flair-theme', 'light');
  }
};
