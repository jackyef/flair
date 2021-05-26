import { SpaceVariant } from './space';

export const radii: Record<SpaceVariant, string> = {
  xs: '2px',
  sm: '3px',
  md: '4px',
  lg: '8px',
  xl: '12px',
  '2xl': '20px',
  '3xl': '30px',
  '4xl': '40px',
} as const;
