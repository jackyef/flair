import { forwardRef } from 'react';
import cx from 'classnames';
import { useTheme } from '../../context/theme';
import { css } from 'goober';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    const { colors, transition, radii, space } = useTheme();

    const base = css`
      border: 1px solid ${colors.background[20]};
      display: inline-flex;
      align-items: center;
      transition: ${transition.default}, ${transition.transform};

      background: ${colors.background[60]};
      color: ${colors.background[80]};

      &:hover,
      &:focus {
        background: ${colors.background[70]};
        color: ${colors.background[90]};
      }

      &::placeholder {
        color: ${colors.background[80]};
        opacity: 0.4;
      }

      &[disabled] {
        opacity: 0.7;
        cursor: not-allowed;
      }
    `;

    const sizeClass = css`
      font-size: 1rem;
      padding: ${space.md} ${space.lg};
      border-radius: ${radii.lg};
    `;

    return (
      <input ref={ref} className={cx(base, sizeClass, className)} {...props} />
    );
  }
);

if (process.env.NODE_ENV === 'development') {
  Input.displayName = 'Input';
}
