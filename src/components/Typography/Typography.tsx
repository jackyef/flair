import React from 'react';
import { css } from 'goober';

import { textSize, TextSizeVariant } from '@/theme/text';
import { SizeVariant, space } from '@/theme/space';

const AVAILABLE_ELEMENTS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'] as const;
type TypographyElement = typeof AVAILABLE_ELEMENTS[number];

const SIZE_MAP: Record<TypographyElement, TextSizeVariant> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'subheading',
  h5: 'body',
  h6: 'body',
  p: 'body',
};

const SPACE_MAP: Record<TypographyElement, SizeVariant> = {
  h1: '2xl',
  h2: 'xl',
  h3: 'lg',
  h4: 'md',
  h5: 'md',
  h6: 'md',
  p: 'md',
};

const ELEMENT_CLASSES = AVAILABLE_ELEMENTS.map((element) => {
  const isHeading = element.startsWith('h');
  const shouldUppercase = element === 'h5';

  return css`
    font-size: ${textSize[SIZE_MAP[element]]};
    margin: ${space[SPACE_MAP[element]]} 0;
    font-weight: ${isHeading ? '700' : '400'};
    text-transform: ${shouldUppercase ? 'uppercase' : 'none'};
  `;
});

interface Props extends React.HTMLProps<HTMLHeadingElement> {
  as?: TypographyElement;
}

export const H1: React.FC<Props> = ({ as = 'h1', children }) => {
  const Element = as;

  return <Element className={ELEMENT_CLASSES[0]}>{children}</Element>;
};

export const H2: React.FC<Props> = ({ as = 'h2', children }) => {
  const Element = as;

  return <Element className={ELEMENT_CLASSES[1]}>{children}</Element>;
};

export const H3: React.FC<Props> = ({ as = 'h3', children }) => {
  const Element = as;

  return <Element className={ELEMENT_CLASSES[2]}>{children}</Element>;
};

export const H4: React.FC<Props> = ({ as = 'h4', children }) => {
  const Element = as;

  return <Element className={ELEMENT_CLASSES[3]}>{children}</Element>;
};

export const H5: React.FC<Props> = ({ as = 'h5', children }) => {
  const Element = as;

  return <Element className={ELEMENT_CLASSES[4]}>{children}</Element>;
};

export const H6: React.FC<Props> = ({ as = 'h6', children }) => {
  const Element = as;

  return <Element className={ELEMENT_CLASSES[5]}>{children}</Element>;
};

export const P: React.FC<Props> = ({ as = 'p', children }) => {
  const Element = as;

  return <Element className={ELEMENT_CLASSES[6]}>{children}</Element>;
};
