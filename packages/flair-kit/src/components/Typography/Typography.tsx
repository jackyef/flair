import React from 'react';
import { css } from 'goober';
import cx from 'classnames';

import {
  fontSizes,
  mobileFontSizes,
  FontSizeVariant,
  lineHeights,
} from '../../theme/fonts';
import { SpaceVariant } from '../../theme/space';
import { useTheme } from '../../context/theme';

const AVAILABLE_ELEMENTS = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'small',
] as const;
type TypographyElement = typeof AVAILABLE_ELEMENTS[number];

const SIZE_MAP: Record<TypographyElement, FontSizeVariant> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h3',
  h5: 'subheading',
  h6: 'body',
  p: 'body',
  small: 'small',
};

const MARGIN_TOP_MAP: Record<TypographyElement, SpaceVariant> = {
  h1: '2xl',
  h2: '2xl',
  h3: 'xl',
  h4: 'lg',
  h5: 'lg',
  h6: 'lg',
  p: 'lg',
  small: 'xs',
};

const MARGIN_BOTTOM_MAP: Record<TypographyElement, SpaceVariant> = {
  h1: 'xl',
  h2: 'xl',
  h3: 'lg',
  h4: 'md',
  h5: 'md',
  h6: 'md',
  p: 'md',
  small: 'xs',
};

const useTypographyClass = (element: TypographyElement) => {
  const { space, mediaQuery } = useTheme();
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

  return css`
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

    ${mediaQuery.onMobileUp} {
      font-size: ${fontSize};
    }
  `;
};

interface Props
  extends React.HTMLProps<HTMLHeadingElement | HTMLParagraphElement> {
  as?: TypographyElement;
}

export const H1: React.FC<Props> = ({
  as = 'h1',
  className,
  children,
  ...props
}) => {
  const cssClass = useTypographyClass('h1');
  const Element = as;

  return (
    <Element className={cx(cssClass, className)} {...props}>
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
  const cssClass = useTypographyClass('h2');
  const Element = as;

  return (
    <Element className={cx(cssClass, className)} {...props}>
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
  const cssClass = useTypographyClass('h3');
  const Element = as;

  return (
    <Element className={cx(cssClass, className)} {...props}>
      {children}
    </Element>
  );
};

export const H4: React.FC<Props> = ({
  as = 'h4',
  className,
  children,
  ...props
}) => {
  const cssClass = useTypographyClass('h4');
  const h4Class = css`
    font-weight: 400;
    font-style: italic;
  `;
  const Element = as;

  return (
    <Element className={cx(cssClass, h4Class, className)} {...props}>
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
  const cssClass = useTypographyClass('h5');
  const Element = as;

  return (
    <Element className={cx(cssClass, className)} {...props}>
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
  const cssClass = useTypographyClass('h6');
  const Element = as;

  return (
    <Element className={cx(cssClass, className)} {...props}>
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
  const cssClass = useTypographyClass('p');
  const Element = as;

  return (
    <Element className={cx(cssClass, className)} {...props}>
      {children}
    </Element>
  );
};

export const Small: React.FC<Props> = ({
  as = 'small',
  className,
  children,
  ...props
}) => {
  const cssClass = useTypographyClass('small');
  const Element = as;

  return (
    <Element className={cx(cssClass, className)} {...props}>
      {children}
    </Element>
  );
};

type CodeProps = React.HTMLProps<HTMLSpanElement>;

export const Code: React.FC<CodeProps> = ({
  className,
  children,
  ...props
}) => {
  const { space, colors, radii, transition } = useTheme();
  const codeClass = css`
    background: ${colors.background[400].color};
    color: ${colors.error[400].color};
    padding: ${space.sm};
    border-radius: ${radii.md};
    transition: ${transition.default};
  `;

  return (
    <code className={cx(codeClass, className)} {...props}>
      {children}
    </code>
  );
};
