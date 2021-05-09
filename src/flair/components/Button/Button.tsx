import React from 'react';
import cx from 'classnames';
import { css } from 'goober';

import { useTheme } from '@/flair/context/theme';
import { ColorVariant } from '@/flair/theme/colors';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: ColorVariant;
}

const base = css`
  cursor: pointer;
  border: none;
`;

const disabledClass = css`
  opacity: 0.7;
  cursor: not-allowed;
`;

export const Button = ({
  className,
  size = 'md',
  variant = 'primary',
  disabled,
  ...rest
}: Props) => {
  const { colors, space } = useTheme();
  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return css`
          font-size: 1rem;
          padding: ${space.sm} ${space.md};
          border-radius: 4px;
        `;
      case 'md':
        return css`
          font-size: 1rem;
          padding: ${space.lg} ${space.xl};
          border-radius: 8px;
        `;
      case 'lg':
        return css`
          font-size: 1.2rem;
          padding: ${space.xl} ${space['2xl']};
          border-radius: 12px;
        `;
    }
  };
  const localClass = css`
    background: ${colors[variant][400].color};
    color: ${colors[variant][400].contrastingColor};

    &:hover,
    &:focus {
      background: ${colors[variant][500].color};
      color: ${colors[variant][500].contrastingColor};
    }
  `;

  return (
    <button
      className={cx(base, localClass, className, getSizeClass(), {
        [disabledClass]: disabled,
      })}
      disabled={disabled}
      {...rest}
    />
  );
};
