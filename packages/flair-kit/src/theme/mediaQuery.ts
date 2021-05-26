/* Values of breakpoints in pixel, assuming 1rem === 16px */
const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  desktop: 1300,
} as const;

export const mediaQuery = {
  onMobileUp: `@media (min-width: ${BREAKPOINTS.phone / 16}rem)`,
  onTabletUp: `@media (min-width: ${BREAKPOINTS.tablet / 16}rem)`,
  onDesktopUp: `@media (min-width: ${BREAKPOINTS.desktop / 16}rem)`,
};
