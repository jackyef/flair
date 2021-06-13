import classnames from 'classnames';
import { css, keyframes } from 'goober';
import { useTheme } from '../../context/theme';
import { MappedColorVariant } from '../../utils/getColorMapping';
import { VisuallyHidden } from '../VisuallyHidden';

const INDETERMINATE_BAR_WIDTH = 30;

interface Props {
  value?: number;
  indeterminate?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: MappedColorVariant;
}

export const ProgressBar = ({
  value = 0,
  indeterminate = false,
  size = 'md',
  variant = 'primary',
}: Props) => {
  const { colors, transition } = useTheme();

  const ariaProps = {
    'aria-valuemax': 100,
    'aria-valuemin': 0,
  };

  const sizeMap = {
    sm: '6px',
    md: '12px',
    lg: '18px',
  };

  if (!indeterminate) {
    ariaProps['aria-valuenow'] = value;
  }

  const containerClass = css`
    background-color: ${colors.background[500].color};
    border-radius: ${sizeMap[size]};
    height: ${sizeMap[size]};
    transition: ${transition.default};
  `;

  const barWrapperClass = css`
    border-radius: ${sizeMap[size]};
    overflow: hidden;
    height: 100%;
  `;

  const barClass = css`
    height: 100%;
    background-color: ${colors[variant][700].color};
    transition: ${transition.default};
  `;

  const shufflingAnimation = keyframes`
    0% {
      transform: translateX(0);
    }

    50% {
      /*
        * %-value in transforms refers to the element's own width/height,
        * instead of the parent element's like top/left does.
        *
        * Since we define the bar's width ourselves, we can calculate
        * how much we need to translate it to reach the end of the bar container.
        */
      transform: translateX(
        ${(100 / INDETERMINATE_BAR_WIDTH - 1) * 100}%
      );
    }

    100% {
      transform: translateX(0);
    }`;

  const indeterminateClass = css`
    animation: ${shufflingAnimation} infinite 3s;
  `;

  return (
    <>
      <div {...ariaProps} className={containerClass} role="progressbar">
        {!indeterminate && <VisuallyHidden>{value}%</VisuallyHidden>}
        <div className={barWrapperClass}>
          <div
            className={classnames(barClass, {
              [indeterminateClass]: indeterminate,
            })}
            style={{
              width: indeterminate
                ? `${INDETERMINATE_BAR_WIDTH}%`
                : `${value}%`,
            }}
          />
        </div>
      </div>
    </>
  );
};
