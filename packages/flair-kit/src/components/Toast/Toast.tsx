import { css, keyframes, styled } from 'goober';
import { useTheme } from '../../context/theme';
import { Button } from '../Button';
import { H6 } from '../Typography';

import type { Toast as ToastType } from './context';

interface Props extends ToastType {
  onDismiss: () => void;
}

const DismissButton = styled(Button)`
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transform: translateX(10px);
`;

export const Toast = ({
  variant = 'primary',
  description,
  title,
  onDismiss,
}: Props) => {
  const { space, colors, mediaQuery, radii, transition } = useTheme();

  const enterAnimation = keyframes`
    from { 
      opacity: 0;
      transform: translateX(400px) scale(0.5);
    }

    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  `;

  return (
    <div
      className={css`
        background: ${colors[variant][500].color};
        color: ${colors[variant][500].contrastingColor};
        padding: ${space.md} ${space.xl} ${space.lg};
        margin-bottom: ${space.md};
        max-width: 100%;
        border-radius: ${radii.lg};
        transition: ${transition.default}, ${transition.tamerTransform};
        pointer-events: auto;
        animation: ${enterAnimation} 0.3s;

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
        <DismissButton
          aria-label="Dismiss toast notification"
          onClick={onDismiss}
          variant={variant}
        >
          &times;
        </DismissButton>
      </div>
      <div aria-live="polite">{description}</div>
    </div>
  );
};
