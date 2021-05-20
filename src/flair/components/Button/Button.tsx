import React, { cloneElement } from 'react';
import cx from 'classnames';
import { css } from 'goober';

import { useTheme } from '@/flair/context/theme';
import { MappedColorVariant } from '@/flair/utils/getColorMapping';
import { defaultTransition } from '@/flair/theme/transition';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactElement;
  size?: 'sm' | 'md' | 'lg';
  variant?: MappedColorVariant;
}

export const Button = ({
  className,
  icon,
  size = 'md',
  variant = 'primary',
  disabled,
  children,
  ...rest
}: Props) => {
  const { colors, space } = useTheme();
  const hasNoChildren = !Boolean(children);

  const base = css`
    cursor: pointer;
    border: none;
    display: inline-flex;
    align-items: center;
    transition: ${defaultTransition};

    background: ${colors[variant][400].color};
    color: ${colors[variant][400].contrastingColor};

    &:hover,
    &:focus {
      background: ${colors[variant][500].color};
      color: ${colors[variant][500].contrastingColor};
    }

    &[disabled] {
      opacity: 0.7;
      cursor: not-allowed;
    }
  `;

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return css`
          font-size: 1rem;
          padding: ${space.md} ${space.md};
          border-radius: 4px;

          & svg {
            margin-right: ${hasNoChildren ? '0' : space.sm};
          }
        `;
      case 'md':
        return css`
          font-size: 1rem;
          padding: ${space.lg} ${space.lg};
          border-radius: 8px;

          & svg {
            margin-right: ${hasNoChildren ? '0' : space.md};
          }
        `;
      case 'lg':
        return css`
          font-size: 1.3rem;
          padding: ${space.xl} ${space.xl};
          border-radius: 12px;

          & svg {
            margin-right: ${hasNoChildren ? '0' : space.lg};
          }
        `;
    }
  };

  const getIconSize = () => {
    switch (size) {
      case 'sm':
        return 20;
      case 'md':
        return 24;
      case 'lg':
        return 40;
    }
  };

  const iconSize = getIconSize();

  return (
    <>
      <button
        className={cx(base, className, getSizeClass())}
        disabled={disabled}
        {...rest}
      >
        {icon &&
          cloneElement(icon, {
            width: icon.props.width || iconSize,
            height: icon.props.height || iconSize,
          })}
        {children}
      </button>
    </>
  );
};
