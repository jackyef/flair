import { SIZE_VARIANTS, space } from '@/theme/space';
import { styled } from 'goober';

const SquareContainer = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: ${space.md};
`;

const spaceSquares = SIZE_VARIANTS.map((size) => {
  return styled('div')`
    width: ${space[size]};
    height: ${space[size]};
    margin-right: ${space.md};
    background: gray;
  `;
});

export const SpaceSquares = () => {
  return (
    <>
      {spaceSquares.map((Div, index) => {
        const variant = SIZE_VARIANTS[index];

        return (
          <SquareContainer key={index}>
            <Div />
            <span>
              {space[variant]} ({variant})
            </span>
          </SquareContainer>
        );
      })}
    </>
  );
};
