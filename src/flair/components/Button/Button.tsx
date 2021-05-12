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

const base = css`
  cursor: pointer;
  border: none;
  display: inline-flex;
  align-items: center;
  transition: ${defaultTransition};
`;

const disabledClass = css`
  opacity: 0.7;
  cursor: not-allowed;
`;

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
  const localClass = css`
    background: ${colors[variant][400].color};
    color: ${colors[variant][400].contrastingColor};

    &:hover,
    &:focus {
      background: ${colors[variant][500].color};
      color: ${colors[variant][500].contrastingColor};
    }
  `;

  const getIconSize = () => {
    switch (size) {
      case 'sm':
        return 16;
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
        className={cx(base, localClass, className, getSizeClass(), {
          [disabledClass]: disabled,
        })}
        disabled={disabled}
        {...rest}
      >
        {icon &&
          cloneElement(icon, {
            width: iconSize,
            height: iconSize,
          })}
        {children}
      </button>
    </>
  );
};
