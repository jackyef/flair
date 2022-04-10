import { forwardRef } from 'react';
import cx from 'classnames';
import { css } from 'goober';

import { useTheme } from '../../context/theme';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor = forwardRef<HTMLAnchorElement, Props>(
  ({ className, ...rest }, ref) => {
    const { colors, transition } = useTheme();
    const anchorClass = css`
      color: ${colors.cyan[50]};
      transition: ${transition.default};
      cursor: pointer;
      text-decoration: underline;

      &:hover {
        color: ${colors.cyan[60]};
      }
    `;

    return <a ref={ref} className={cx(anchorClass, className)} {...rest} />;
  }
);

if (process.env.NODE_ENV === 'development') {
  Anchor.displayName = 'Anchor';
}
