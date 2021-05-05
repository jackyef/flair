import { H2, H3, P } from '@/components/Typography/Typography';
import { COLORS_VARIANTS, colors, ColorShadeValue } from '@/theme/colors';
import { space } from '@/theme/space';
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

  & > p {
    font-weight: 500;
  }
`;

export default function Colors() {
  return (
    <main>
      <H2>Colors</H2>

      {COLORS_VARIANTS.map((colorName) => {
        return (
          <>
            <H3 key={colorName} className={capitalize}>
              {colorName}
            </H3>
            <ColorSwatchContainer>
              {((Object.keys(
                colors[colorName],
              ) as unknown) as ColorShadeValue).map((shadeStep) => {
                const colorValue = colors[colorName][shadeStep].color;
                const textColorValue =
                  colors[colorName][shadeStep].contrastingColor;

                return (
                  <ColorSquare
                    key={colorValue}
                    background={colorValue}
                    color={textColorValue}
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
