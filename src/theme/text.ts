export const TEXTSIZE_VARIANTS = [
  'h1',
  'h2',
  'h3',
  'subheading',
  'body',
  'small',
] as const;

export type TextSizeVariant = typeof TEXTSIZE_VARIANTS[number];

export const textSize: Record<TextSizeVariant, string> = {
  h1: '4rem',
  h2: '2.5rem',
  h3: '1.5rem',
  subheading: '1.25rem',
  body: '1rem',
  small: '0.875rem',
} as const;
