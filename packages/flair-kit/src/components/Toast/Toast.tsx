import { motion } from 'framer-motion';
import { css } from 'goober';
import { useTheme } from '../../context/theme';
import { Button } from '../Button';
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
        <Button
          aria-label="Dismiss toast notification"
          onClick={onDismiss}
          className={css`
            width: 40px;
            height: 40px;
            font-size: 1.5rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transform: translateX(10px);
          `}
          variant={variant}
        >
          &times;
        </Button>
      </div>
      <div aria-live="polite">{description}</div>
    </motion.div>
  );
};
