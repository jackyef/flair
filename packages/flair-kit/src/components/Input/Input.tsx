import { forwardRef } from 'react';
import cx from 'classnames';
import { useTheme } from '../../context/theme';
import { css } from 'goober';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    const { colors, transition, radii, space } = useTheme();

    const base = css`
      border: 1px solid ${colors['background'][400].color};
      display: inline-flex;
      align-items: center;
      transition: ${transition.default}, ${transition.transform};

      background: ${colors['background'][700].color};
      color: ${colors['background'][700].contrastingColor};

      &:hover,
      &:focus {
        background: ${colors['background'][800].color};
        color: ${colors['background'][800].contrastingColor};
      }

      &::placeholder {
        color: ${colors['background'][700].contrastingColor};
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
