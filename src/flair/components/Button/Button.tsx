import React from 'react';
import cx from 'classnames';
import { css } from 'goober';

import { useTheme } from '@/flair/context/theme';
import { ColorVariant } from '@/flair/theme/colors';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ColorVariant;
}

export const Button = ({ className, variant = 'primary', ...rest }: Props) => {
  const { colors, space } = useTheme();
  const localClass = css`
    background: ${colors[variant][700].color};
    color: ${colors[variant][700].contrastingColor};
    border: none;
    border-radius: 4px;
    padding: ${space.lg} ${space.xl};

    &:hover,
    &:focus {
      background: ${colors[variant][800].color};
      color: ${colors[variant][800].contrastingColor};
    }
  `;

  return <button className={cx(localClass, className)} {...rest} />;
};
