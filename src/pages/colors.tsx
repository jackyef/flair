import { H2, H3, P } from '@/flair/components/Typography/Typography';
import { MappedColorVariant, useTheme } from '@/flair/context/theme';
import { ColorShadeVariant } from '@/flair/theme/colors';
import { shadows } from '@/flair/theme/shadow';
import { space } from '@/flair/theme/space';
import { canUseDOM } from '@/flair/utils/canUseDOM';
import { css, styled } from 'goober';

const capitalize = css`
  text-transform: capitalize;
`;

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

  & > p {
    font-weight: 500;
  }
`;

export default function Colors() {
  const { toggleColorScheme, colors } = useTheme();

  let colorNames = (Object.keys(
    colors,
  ) as unknown) as MappedColorVariant[];

  colorNames = colorNames.filter(
    (c) =>
      c !== 'foreground' && c !== 'background' && c !== 'dark' && c !== 'light',
  );
  // We want foreground and background to be displayed first
  colorNames.unshift('background');
  colorNames.unshift('foreground');
  // And dark and light to be displayed last
  colorNames.push('dark');
  colorNames.push('light');

  return (
    <main>
      <button onClick={toggleColorScheme}>Toggle color scheme</button>
      <H2>Colors</H2>

      {colorNames.map((colorName) => {
        const colorShade = colors[colorName];

        if (!colorShade) return;

        return (
          <>
            <H3 key={colorName} className={capitalize}>
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
                  >
                    <P>
                      {colorName}.{shadeStep}
                    </P>
                    <P>{colorValue}</P>
                  </ColorSquare>
                );
              })}
            </ColorSwatchContainer>
          </>
        );
      })}
    </main>
  );
}
