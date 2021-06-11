import { css } from 'goober';
import cx from 'classnames';
import { useTheme } from '../../context/theme';
import { SpaceVariant } from '../../theme/space';
import { forwardRef } from 'react';

type SpaceVariantWithZero = SpaceVariant | '0';
type Space = SpaceVariantWithZero | SpaceVariantWithZero[];

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  radii?: Space;
  margin?: Space;
  padding?: Space;
}

export const Box = forwardRef<HTMLDivElement, Props>(
  ({ radii: pickedRadii, margin, padding, className, ...props }, ref) => {
    const { space, radii } = useTheme();
    const getSpace = (spaceVariant?: Space) => {
      if (Array.isArray(spaceVariant)) {
        return spaceVariant.map((p) => space[p] || p).join(' ');
      }

      if (typeof spaceVariant === 'string') {
        return space[spaceVariant];
      }

      return '0';
    };
    const getRadii = () => {
      if (Array.isArray(pickedRadii)) {
        return pickedRadii.map((p) => radii[p] || p).join(' ');
      }

      if (typeof pickedRadii === 'string') {
        return radii[pickedRadii];
      }

      return '0';
    };
    const baseClass = css`
      padding: ${getSpace(padding)};
      margin: ${getSpace(margin)};
      border-radius: ${getRadii()};
    `;

    return <div ref={ref} className={cx(baseClass, className)} {...props} />;
  }
);

if (process.env.NODE_ENV === 'development') {
  Box.displayName = 'Box';
}
