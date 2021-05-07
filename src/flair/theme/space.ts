export const SIZE_VARIANTS = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
] as const;

export type SizeVariant = typeof SIZE_VARIANTS[number];
export const space = {
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '16px',
  xl: '24px',
  '2xl': '40px',
  '3xl': '60px',
  '4xl': '80px',
} as const;

export type Space = typeof space;
