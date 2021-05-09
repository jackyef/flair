import React from 'react';
import cx from 'classnames';
import { css } from 'goober';

import { useTheme } from '@/flair/context/theme';

export const A = ({
  className,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const { colors } = useTheme();
  const anchorClass = css`
    color: ${colors.primary[500].color};

    &:hover {
      color: ${colors.primary[700].color};
    }
  `;

  return <a className={cx(anchorClass, className)} {...rest} />;
};
