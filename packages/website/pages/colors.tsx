import React, { Fragment } from 'react';
import { css } from 'goober';
import { H1, H2, H3, P, Code, Button, useTheme } from 'flair-kit';
import type { MappedColorVariant, ColorShadeVariant } from 'flair-kit';

import { RenderOnMount } from '@/components/RenderOnMount/RenderOnMount';
import { Main } from '@/components/Main/Main';
import { ColorSquare } from '@/components/ColorSquare/ColorSquare';

const canUseDOM = typeof window !== 'undefined';

const copyToClipboard = (str: string) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

const ColorSwatchContainer: React.FC = ({ children }) => {
  const { space } = useTheme();

  return (
    <div
      className={css`
        display: flex;
        gap: ${space.lg};
        flex-wrap: wrap;
      `}
    >
      {children}
    </div>
  );
};

const renderColorSquares = (colorNames: MappedColorVariant[], colors: any) => {
  return colorNames.map((colorName) => {
    const colorShade = colors[colorName];

    if (!colorShade) return;

    return (
      <Fragment key={colorName}>
        <H3
          className={css`
            text-transform: capitalize;
          `}
        >
          {colorName}
        </H3>
        <ColorSwatchContainer>
          {/* @ts-expect-error */}
          {Object.keys(colorShade).map((shadeStep: ColorShadeVariant) => {
            const color = colorShade[shadeStep]?.color ?? '';
            const contrastingColor =
              colorShade[shadeStep]?.contrastingColor ?? '';

            const colorValue = canUseDOM
              ? getComputedStyle(document.body).getPropertyValue(
                  // Remove the `var()` enclosing the CSS variable name
                  color.slice(4, color.length - 1)
                )
              : '';

            return (
              <ColorSquare
                key={`${colorName}-${shadeStep}`}
                background={color}
                color={contrastingColor}
                tabIndex={0}
                onClick={() => {
                  copyToClipboard(colorValue);
                  // TODO: Add a toast showing that the color value has been copied
                }}
              >
                <P>
                  {colorName}.{shadeStep}
                </P>
                <RenderOnMount>
                  <P
                    className={css`
                      font-size: 0.75rem;
                    `}
                  >
                    {colorValue}
                  </P>
                </RenderOnMount>
              </ColorSquare>
            );
          })}
        </ColorSwatchContainer>
      </Fragment>
    );
  });
};

export default function Colors() {
  const { toggleColorScheme, colors, space } = useTheme();

  const colorNames = Object.keys(colors) as unknown as MappedColorVariant[];

  const variantColors = colorNames.filter(
    (c) => c !== 'foreground' && c !== 'background'
  );

  const fgAndBgColors = ['foreground', 'background'] as MappedColorVariant[];

  return (
    <Main>
      <H1>Colors</H1>
      <P>
        Colors in Flair are organized by <Code>variants</Code>. Each variant has
        different colors for different intensity levels (400—800).
      </P>
      <P>
        In <i>light</i> color scheme, the higher the intensity, the lighter the
        color is. To put it simply, a lighter color have the same hue and
        saturation level, but higher lightness.
      </P>

      <P>
        In <i>dark</i> color scheme, the higher the intensity, the darker the
        color is. Try toggling the color scheme using the button below and
        observe the differences.
      </P>

      <div
        className={css`
          margin: ${space.lg} 0;
        `}
      >
        <Button onClick={toggleColorScheme}>Toggle color scheme</Button>
      </div>

      <P>
        Because of how the &quot;intensity&quot; concept works in Flair, in dark
        color scheme, the order of color for each shades are basically just
        reversed! Obviously this will not work well in ALL cases, so you will
        have to adjust according to your needs.
      </P>

      <H2>Variants</H2>

      <P>
        By default, Flair has 7 color variants: primary, secondary, success,
        warning, error, dark and light. All of the colors are accessible from
        the ThemeContext. Accessing a color is as simple as{' '}
        <Code>colors[variant][intensity].color</Code>. To get the contrasting
        color, <Code>colors[variant][intensity].contrastingColor</Code>.
      </P>

      {renderColorSquares(variantColors, colors)}

      <H2>Foreground and background colors</H2>

      <P>
        In light color scheme, background colors will refer to the light-variant
        colors and foreground colors will refer to the dark-variant colors.
        Similarly, in dark color scheme, background colors are dark-variant and
        foreground colors are light-variant.
      </P>

      {renderColorSquares(fgAndBgColors, colors)}
    </Main>
  );
}
