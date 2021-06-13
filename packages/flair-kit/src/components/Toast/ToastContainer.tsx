import { css } from 'goober';
import { useTheme } from '../../context/theme';

export const ToastContainer: React.FC = ({ children }) => {
  const { space, mediaQuery } = useTheme();

  return (
    <div
      className={css`
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        pointer-events: none;
        max-height: 100%;
        top: 0;
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
      {children}
    </div>
  );
};
