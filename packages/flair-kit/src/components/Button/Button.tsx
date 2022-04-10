import React, { cloneElement, forwardRef } from 'react';
import cx from 'classnames';
import { css } from 'goober';

import { useTheme } from '../../context/theme';
import { MappedColorVariant } from '../../utils/getColorMapping';

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  isAnchorButton?: boolean;
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  variant?: MappedColorVariant;
  isCTA?: boolean;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  (
    {
      isAnchorButton = false,
      className,
      icon,
      iconPosition = 'left',
      size = 'md',
      variant = 'cyan',
      isCTA = false,
      disabled,
      children,
      ...rest
    },
    ref
  ) => {
    const { colors, space, transition, radii } = useTheme();

    const hasNoChildren = !Boolean(children);
    const getGradient = () => {
      const c = variant;

      return `linear-gradient(70deg, ${colors[c][40]}, ${colors[c][50]}, ${colors[c][50]})`;
    };

    let variantForColor = variant;

    if (variant === 'dark') variantForColor = 'light';
    else if (variant === 'light') variantForColor = 'dark';
    else if (variant === 'foreground') variantForColor = 'background';
    else if (variant === 'background') variantForColor = 'foreground';

    const isDarkLightFgBg =
      variant === 'dark' ||
      variant === 'light' ||
      variant === 'foreground' ||
      variant === 'background';

    const base = css`
      cursor: pointer;
      border: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: ${transition.default}, ${transition.transform};

      ${isCTA
        ? `background-image: ${getGradient()};
      background-size: 200%;
      color: ${
        colors[isDarkLightFgBg ? variantForColor : 'background'][
          isDarkLightFgBg ? 40 : 20
        ]
      };
      background-position: 0% 50%;
      transform: translateY(0) scale(1);
      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        opacity: 0;
        box-shadow: 0 12px 6px -6px ${colors[variant][20]};
        transition: ${transition.default};
      }

      &:hover, &:focus {
        background-position: 100% 50%;
        transform: translateY(-4px) scale(1.1);
      }

      &:hover&::after, &:focus&::after {
        opacity: 1;
      }

      &:active {
        background-position: 0% 50%;
        transform: translateY(0) scale(1);
      }
      `
        : `background: ${colors[variant][20]};
      color: ${colors[variantForColor][90]};
      
      &:hover,
      &:focus {
        background: ${colors[variant][10]};
        color: ${colors[variantForColor][80]};
      }
      `}

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
          padding: ${space.md} ${space.lg};
          border-radius: ${radii.lg};

          &::after {
            border-radius: ${radii.lg};
          }

          & svg {
            margin-${iconPosition === 'left' ? 'right' : 'left'}: ${
            hasNoChildren ? '0' : space.sm
          };
          }
        `;
        case 'md':
          return css`
          font-size: 1rem;
          padding: ${space.lg} ${space.lg};
          border-radius: ${radii['xl']};

          &::after {
            border-radius: ${radii['xl']};
          }

          & svg {
            margin-${iconPosition === 'left' ? 'right' : 'left'}: ${
            hasNoChildren ? '0' : space.md
          };
          }
        `;
        case 'lg':
          return css`
          font-size: 1.3rem;
          padding: ${space.xl} ${space['2xl']};
          border-radius: ${radii['2xl']};

          &::after {
            border-radius: ${radii['2xl']};
          }

          & svg {
            margin-${iconPosition === 'left' ? 'right' : 'left'}: ${
            hasNoChildren ? '0' : space.lg
          };
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

    const Element = isAnchorButton ? 'a' : 'button';

    return (
      <>
        <Element
          // @ts-expect-error
          ref={ref}
          className={cx(base, getSizeClass(), className)}
          disabled={disabled}
          {...rest}
        >
          {icon &&
            iconPosition === 'left' &&
            cloneElement(icon, {
              width: icon.props.width || iconSize,
              height: icon.props.height || iconSize,
            })}
          {children}
          {icon &&
            iconPosition === 'right' &&
            cloneElement(icon, {
              width: icon.props.width || iconSize,
              height: icon.props.height || iconSize,
            })}
        </Element>
      </>
    );
  }
);

if (process.env.NODE_ENV === 'development') {
  Button.displayName = 'Button';
}
