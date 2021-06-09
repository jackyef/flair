import { css } from 'goober';
import { forwardRef } from 'react';

import { useTheme } from '../../context/theme';

export const Overlay = forwardRef<HTMLDivElement>((props, ref) => {
  const { colors } = useTheme();

  return (
    <div
      ref={ref}
      className={css`
        position: fixed;
        backdrop-filter: blur(3px);
        opacity: 0.3;
        background: ${colors.background[700].color};
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
      {...props}
    />
  );
});

if (process.env.NODE_ENV === 'development') {
  Overlay.displayName = 'Overlay';
}
