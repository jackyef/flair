import { forwardRef } from 'react';
import cx from 'classnames';
import { css } from 'goober';

import { useTheme } from '../../context/theme';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor = forwardRef<HTMLAnchorElement, Props>(
  ({ className, ...rest }, ref) => {
    const { colors, transition } = useTheme();
    const anchorClass = css`
      color: ${colors.primary[700].color};
      transition: ${transition.default};
      cursor: pointer;
      text-decoration: underline;

      &:hover {
        color: ${colors.primary[800].color};
      }
    `;

    return <a ref={ref} className={cx(anchorClass, className)} {...rest} />;
  }
);

if (process.env.NODE_ENV === 'development') {
  Anchor.displayName = 'Anchor';
}
