import { forwardRef } from 'react';
import { css } from 'goober';
import cx from 'classnames';
import { useTheme } from '../../context/theme';
import { MappedColorVariant } from '../../utils/getColorMapping';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: MappedColorVariant;
  gradient?: MappedColorVariant[];
}

export const Text = forwardRef<HTMLSpanElement, Props>(
  ({ variant = 'foreground', gradient = [], className, ...props }, ref) => {
    const { colors } = useTheme();
    const getGradient = () => {
      if (gradient.length === 1) {
        const c = gradient[0];
        return `linear-gradient(90deg, ${colors[c][40]}, ${colors[c][50]})`;
      }

      return `linear-gradient(90deg, ${gradient
        .map((c) => colors[c][40])
        .join(',')});`;
    };
    const baseClass = css`
      ${gradient.length > 0
        ? `
          background-image: ${getGradient()};
          background-size: 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -moz-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-text-fill-color: transparent;
          -webkit-box-decoration-break: clone;
        `
        : `color: ${colors[variant][40]};`}
    `;

    return <span ref={ref} className={cx(baseClass, className)} {...props} />;
  }
);

if (process.env.NODE_ENV === 'development') {
  Text.displayName = 'Text';
}
