import { AnimateSharedLayout, motion } from 'framer-motion';
import { css } from 'goober';
import { useTheme } from '../../context/theme';

export const ToastContainer: React.FC = ({ children }) => {
  const { space, mediaQuery } = useTheme();

  return (
    <AnimateSharedLayout>
      <motion.div
        layout
        className={css`
          position: fixed;
          bottom: ${space['lg']};
          left: ${space['lg']};
          right: ${space['lg']};

          ${mediaQuery.onMobileUp} {
            left: inherit;
            bottom: ${space['2xl']};
            right: ${space['2xl']};
          }
        `}
      >
        <div
          className={css`
            position: relative;
          `}
        >
          {children}
        </div>
      </motion.div>
    </AnimateSharedLayout>
  );
};
