import { css, styled } from 'goober';

import { Button } from 'flair-kit/components/Button/Button';
import { H1, H2, H3, P } from 'flair-kit/components/Typography/Typography';
import { useTheme } from 'flair-kit/context/theme';
import { ColorShadeVariant } from 'flair-kit/theme/colors';
import { shadows } from 'flair-kit/theme/shadow';
import { space } from 'flair-kit/theme/space';
import { canUseDOM } from 'flair-kit/utils/canUseDOM';
import {
  ColorMapping,
  MappedColorVariant,
} from 'flair-kit/utils/getColorMapping';
import { RenderOnMount } from '@/components/RenderOnMount/RenderOnMount';
import { Fragment } from 'react';
import { Main } from '@/components/Main/Main';

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

const ColorSwatchContainer = styled('div')`
  display: flex;
  gap: ${space.lg};
  flex-wrap: wrap;
`;

const ColorSquare = styled('div')<{ background: string; color: string }>`
  width: 176px;
  height: 100px;
  border-radius: 8px;
  padding: ${space['md']};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${shadows.subtle};
  transition: background 0.15s ease-out, color 0.15s ease-out,
    transform 0.3s cubic-bezier(0.28, 0.84, 0.42, 1);

  & > p {
    font-weight: 500;
  }

  &:focus,
  &:hover {
    transform: scale(1.05) translateY(-4px);
  }
`;

const renderColorSquares = (
  colorNames: MappedColorVariant[],
  colors: ColorMapping,
) => {
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
                  color.slice(4, color.length - 1),
                )
              : '';

            return (
              <ColorSquare
                key={`${colorName}-${shadeStep}`}
                // TODO: Colors should come from ThemeProvider
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

  const colorNames = (Object.keys(colors) as unknown) as MappedColorVariant[];

  const variantColors = colorNames.filter(
    (c) => c !== 'foreground' && c !== 'background',
  );

  const fgAndBgColors = ['foreground', 'background'] as MappedColorVariant[];

  return (
    <Main>
      <H1>Colors</H1>
      <P>
        Colors in Flair are organized by <code>variants</code>. Each variant has
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
        <code>colors[variant][intensity].color</code>. To get the contrasting
        color, <code>colors[variant][intensity].contrastingColor</code>.
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
