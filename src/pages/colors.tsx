import { H2, H3, P } from '@/flair/components/Typography/Typography';
import { useTheme } from '@/flair/context/theme';
import { COLORS_VARIANTS, colors, ColorShadeValue } from '@/flair/theme/colors';
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
  const { toggleColorScheme } = useTheme();

  return (
    <main>
      <button onClick={toggleColorScheme}>Toggle color scheme</button>
      <H2>Colors</H2>

      {COLORS_VARIANTS.map((colorName, index) => {
        let usedColorName: string = colorName;

        if (index === 0) {
          usedColorName = 'foreground';
        } else if (index === 1) {
          usedColorName = 'background';
        }

        return (
          <>
            <H3 key={usedColorName} className={capitalize}>
              {usedColorName}
            </H3>
            <ColorSwatchContainer>
              {((Object.keys(
                colors[colorName],
              ) as unknown) as ColorShadeValue).map((shadeStep) => {
                // TODO: Colors should come from ThemeProvider
                const cssVarName = `--color-${colorName}-${shadeStep}`;
                const colorValue = canUseDOM
                  ? getComputedStyle(document.body).getPropertyValue(cssVarName)
                  : '';

                return (
                  <ColorSquare
                    key={`${colorName}-${shadeStep}`}
                    // TODO: Colors should come from ThemeProvider
                    background={`var(--color-${colorName}-${shadeStep})`}
                    color={`var(--contrasting-color-${colorName}-${shadeStep})`}
                  >
                    <P>
                      {usedColorName}.{shadeStep}
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
