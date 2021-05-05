export const SIZE_VARIANTS = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const

export type SizeVariant = typeof SIZE_VARIANTS[number]

export const space: Record<SizeVariant, string> = {
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '20px',
  xl: '32px',
  '2xl': '40px',
  '3xl': '48px',
  '4xl': '64px',
} as const;
