import { motion } from 'framer-motion';
import { css } from 'goober';
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

  return (
    <motion.div
      layout
      transition={{ duration: 0.3 }}
      initial={{
        opacity: 0,
        x: 400,
        y: 200,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      className={css`
        background: ${colors[variant][500].color};
        color: ${colors[variant][500].contrastingColor};
        padding: ${space.lg} ${space.xl};
        margin-bottom: ${space.md};
        max-width: 100%;
        border-radius: ${radii.lg};

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
    </motion.div>
  );
};
