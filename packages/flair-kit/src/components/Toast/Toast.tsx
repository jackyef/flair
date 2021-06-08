import { css, keyframes } from 'goober';
import { useTheme } from '../../context/theme';
import { H6 } from '../Typography';

import type { Toast as ToastType } from './context';

interface Props extends ToastType {
  onDismiss: () => void;
}

export const Toast: React.FC<Props> = ({
  variant = 'primary',
  description,
  title,
  onDismiss,
}) => {
  const { space, colors, mediaQuery, radii, fontSizes } = useTheme();

  const entering = keyframes`
    from {
      transform: translateX(400px) scale(0.2);
      opacity: 0;
    }

    to {
      transform: translateX(0) scale(1);
      opacity: 1;
    }
  `;

  return (
    <div
      className={css`
        background: ${colors[variant][500].color};
        color: ${colors[variant][500].contrastingColor};
        padding: ${space.lg} ${space.xl};
        margin-bottom: ${space.md};
        max-width: 100%;
        border-radius: ${radii.lg};
        animation: ${entering} 0.5s;

        ${mediaQuery.onMobileUp} {
          max-width: 400px;
        }
      `}
    >
      <div
        className={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: ${space.md};

          > h6 {
            margin: 0;
          }
        `}
      >
        <H6 aria-live="assertive">{title}</H6>
        <button
          aria-label="Dismiss toast notification"
          onClick={onDismiss}
          className={css`
            background: inherit;
            color: inherit;
            font-size: ${fontSizes.h3};
          `}
        >
          &times;
        </button>
      </div>
      <div aria-live="polite">{description}</div>
    </div>
  );
};
