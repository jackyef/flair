export const FONTSPACE_VARIANTS = [
  'h1',
  'h2',
  'h3',
  'subheading', // h4 and h5 are considered subheadings
  'body',
  'small',
] as const;

export type FontSizeVariant = typeof FONTSPACE_VARIANTS[number];

export type FontSizes = Record<FontSizeVariant, string>;
export const fontSizes: FontSizes = {
  h1: '4rem',
  h2: '2.5rem',
  h3: '1.8rem',
  subheading: '1.5rem',
  body: '1rem',
  small: '0.875rem',
} as const;

export const mobileFontSizes: FontSizes = {
  h1: '2.5rem',
  h2: '2rem',
  h3: '1.6rem',
  subheading: '1.35rem',
  body: '1rem',
  small: '0.875rem',
} as const;

export type LineHeights = Record<FontSizeVariant, string>;

export const lineHeights: LineHeights = {
  h1: '1.19',
  h2: '1.175',
  h3: '1.2',
  subheading: '1.3',
  body: '1.45',
  small: '1.45',
} as const;
