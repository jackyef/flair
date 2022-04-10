import { css } from 'goober';
import { Tooltip as _Tooltip } from '@reach/tooltip';
import type { TooltipProps } from '@reach/tooltip';
import { useTheme } from '../../context/theme';
import { Small } from '../Typography';

type Props = TooltipProps;

export const Tooltip: React.FC<Props> = ({ children, label, ariaLabel }) => {
  const { radii, space, shadow, colors } = useTheme();

  return (
    <_Tooltip
      className={css`
        padding: ${space.sm} ${space.md};
        border-radius: ${radii.md};
        box-shadow: ${shadow.subtle};
        background: ${colors.background[30]};
        color: ${colors.foreground[40]};
      `}
      label={<Small>{label}</Small>}
      aria-label={ariaLabel}
    >
      {children}
    </_Tooltip>
  );
};

// Note:
// @reach/tooltip requires the children to be assigned a ref to position the tooltip properly.
// Unfortunately, for some reason a function component with forwardRef doesn't work.
// For now, the children should be wrapped by a native HTML element like <a>, <div>, etc.
