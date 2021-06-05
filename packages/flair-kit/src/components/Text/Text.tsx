import { css } from 'goober';
import cx from 'classnames';
import { useTheme } from '../../context/theme';
import { MappedColorVariant } from '../../utils/getColorMapping';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: MappedColorVariant;
  gradient?: MappedColorVariant[];
}

export const Text: React.FC<Props> = ({
  variant = 'foreground',
  gradient = [],
  className,
  ...props
}) => {
  const { colors } = useTheme();
  const baseClass = css`
    ${gradient.length > 0
      ? `
        background-image: linear-gradient(90deg, ${gradient
          .map((c) => colors[c][700].color)
          .join(',')});
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
        -webkit-box-decoration-break: clone;
      `
      : `color: ${colors[variant][500].color};`}
  `;

  return <span className={cx(baseClass, className)} {...props} />;
};
