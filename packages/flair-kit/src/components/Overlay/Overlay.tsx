import { css } from 'goober';

import { useTheme } from '../../context/theme';

export const Overlay: React.FC = (props) => {
  const { colors } = useTheme();

  return (
    <div
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
};
