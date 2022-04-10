import { useTheme } from 'flair-kit';
import { css } from 'goober';

interface ColorSquareProps extends React.HTMLAttributes<HTMLButtonElement> {
  background: string;
  color: string;
}

export const ColorSquare: React.FC<ColorSquareProps> = ({
  background,
  color,
  children,
  ...props
}) => {
  const { space, shadow, colors } = useTheme();

  return (
    <button
      {...props}
      className={css`
        width: 40px;
        height: 40px;
        border-radius: 8px;
        padding: ${space['md']};
        background: ${background};
        border: 2px solid ${colors.background[90]};
        color: ${color};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: ${shadow.subtle};
        cursor: pointer;
        transition: background 0.15s ease-out, color 0.15s ease-out,
          transform 0.3s cubic-bezier(0.28, 0.84, 0.42, 1);
        & > p {
          font-weight: 500;
        }

        &:focus,
        &:hover {
          transform: scale(1.05) translateY(-4px);
        }
      `}
    >
      {children}
    </button>
  );
};
