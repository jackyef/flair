import { css, keyframes } from 'goober';
import cx from 'classnames';
import { useTheme } from '../../context/theme';
import { VisuallyHidden } from '../VisuallyHidden';

const CIRCLE_SIZE_RATIO = 3.5;

interface Props {
  size?: number;
  statusMessage?: string;
}

export const Spinner = ({ size = 48, statusMessage = 'loading' }: Props) => {
  const { colors } = useTheme();

  const spinAnimation = keyframes`
    from {
      transform: rotate(0deg) scale(0.9);
    }

    80% { 
      transform: rotate(288deg) scale(1);
    }

    to {
      transform: rotate(360deg) scale(0.9);
    }
  `;

  const getCircleClass = (index: number) => css`
    width: ${size / CIRCLE_SIZE_RATIO}px;
    height: ${size / CIRCLE_SIZE_RATIO}px;
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: calc(50% - ${size / (CIRCLE_SIZE_RATIO * 2)}px);
    transform-origin: 50% ${CIRCLE_SIZE_RATIO * 50}%;
    opacity: 0.7;
    animation-name: ${spinAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: ${index * 250}ms;
    animation-timing-function: cubic-bezier(0.3, 0.8, 0.7, 1.5);
  `;

  return (
    <div
      role="status"
      className={css`
        position: relative;
        isolation: isolate;
        width: ${size}px;
        height: ${size}px;
      `}
    >
      <VisuallyHidden>{statusMessage}</VisuallyHidden>
      <div
        className={cx(
          getCircleClass(5),
          css`
            background-color: ${colors.yellow[20]};
          `
        )}
      />
      <div
        className={cx(
          getCircleClass(4),
          css`
            background-color: ${colors.coolred[20]};
          `
        )}
      />
      <div
        className={cx(
          getCircleClass(3),
          css`
            background-color: ${colors.mint[20]};
          `
        )}
      />
      <div
        className={cx(
          getCircleClass(2),
          css`
            background-color: ${colors.magenta[20]};
          `
        )}
      />
      <div
        className={cx(
          getCircleClass(1),
          css`
            background-color: ${colors.cyan[20]};
          `
        )}
      />
    </div>
  );
};
