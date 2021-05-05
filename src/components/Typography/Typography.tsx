import React from 'react';
import { css } from 'goober';
import cx from 'classnames';

import {
  fontSizes,
  mobileFontSizes,
  FontSizeVariant,
  lineHeights,
} from '@/theme/fonts';
import { SizeVariant, space } from '@/theme/space';
import { onMobileUp } from '@/theme/mediaQueries';

const AVAILABLE_ELEMENTS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'] as const;
type TypographyElement = typeof AVAILABLE_ELEMENTS[number];

const SIZE_MAP: Record<TypographyElement, FontSizeVariant> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h3',
  h5: 'subheading',
  h6: 'body',
  p: 'body',
};

const MARGIN_TOP_MAP: Record<TypographyElement, SizeVariant> = {
  h1: 'xl',
  h2: 'xl',
  h3: 'xl',
  h4: 'lg',
  h5: 'lg',
  h6: 'lg',
  p: 'md',
};

const MARGIN_BOTTOM_MAP: Record<TypographyElement, SizeVariant> = {
  h1: 'lg',
  h2: 'lg',
  h3: 'lg',
  h4: 'md',
  h5: 'md',
  h6: 'md',
  p: 'sm',
};

const cssClasses = AVAILABLE_ELEMENTS.reduce((acc, element) => {
  const isHeading = element.startsWith('h');
  const isBigHeading = element === 'h1' || element === 'h2';
  const shouldUppercase = element === 'h5';
  const fontSizeVar = SIZE_MAP[element];
  const marginTopVar = MARGIN_TOP_MAP[element];
  const marginBottomVar = MARGIN_BOTTOM_MAP[element];

  const fontSize = fontSizes[fontSizeVar];
  const mobileFontSize = mobileFontSizes[fontSizeVar];

  // We generally want the top margin to be larger than the bottom margin
  // to make the heading feels more connected with the next paragraph
  const marginTop = space[marginTopVar];
  const marginBottom = space[marginBottomVar];

  acc[element] = css`
    font-size: ${mobileFontSize};
    margin: ${marginTop} 0 ${marginBottom};
    line-height: ${lineHeights[fontSizeVar]};
    font-weight: ${isHeading ? '700' : '400'};
    text-transform: ${shouldUppercase ? 'uppercase' : 'none'};
    letter-spacing: ${shouldUppercase
      ? space.xs
      : isBigHeading
      ? '-1px'
      : 'inherit'};

    ${onMobileUp} {
      font-size: ${fontSize};
    }
  `;

  return acc;
}, {} as Record<TypographyElement, string>);

interface Props extends React.HTMLProps<HTMLHeadingElement> {
  as?: TypographyElement;
}

export const H1: React.FC<Props> = ({
  as = 'h1',
  className,
  children,
  ...props
}) => {
  const Element = as;

  return (
    <Element className={cx(cssClasses.h1, className)} {...props}>
      {children}
    </Element>
  );
};

export const H2: React.FC<Props> = ({
  as = 'h2',
  className,
  children,
  ...props
}) => {
  const Element = as;

  return (
    <Element className={cx(cssClasses.h2, className)} {...props}>
      {children}
    </Element>
  );
};

export const H3: React.FC<Props> = ({
  as = 'h3',
  className,
  children,
  ...props
}) => {
  const Element = as;

  return (
    <Element className={cx(cssClasses.h3, className)} {...props}>
      {children}
    </Element>
  );
};

const h4Class = css`
  font-weight: 400;
  font-style: italic;
`;

export const H4: React.FC<Props> = ({
  as = 'h4',
  className,
  children,
  ...props
}) => {
  const Element = as;

  return (
    <Element className={cx(cssClasses.h4, h4Class, className)} {...props}>
      {children}
    </Element>
  );
};

export const H5: React.FC<Props> = ({
  as = 'h5',
  className,
  children,
  ...props
}) => {
  const Element = as;

  return (
    <Element className={cx(cssClasses.h5, className)} {...props}>
      {children}
    </Element>
  );
};

export const H6: React.FC<Props> = ({
  as = 'h6',
  className,
  children,
  ...props
}) => {
  const Element = as;

  return (
    <Element className={cx(cssClasses.h6, className)} {...props}>
      {children}
    </Element>
  );
};

export const P: React.FC<Props> = ({
  as = 'p',
  className,
  children,
  ...props
}) => {
  const Element = as;

  return (
    <Element className={cx(cssClasses.p, className)} {...props}>
      {children}
    </Element>
  );
};
