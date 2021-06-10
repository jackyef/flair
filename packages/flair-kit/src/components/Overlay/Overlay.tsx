import { css } from 'goober';
import { forwardRef } from 'react';

export const Overlay = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className={css`
        position: fixed;
        backdrop-filter: blur(3px);
        background: rgba(0, 0, 0, 0.5);
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
