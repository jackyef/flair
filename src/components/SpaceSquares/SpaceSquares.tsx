import { css, styled } from 'goober';
import { useTheme } from '@/flair/context/theme';
import { SPACE_VARIANTS, space, SpaceVariant } from '@/flair/theme/space';

const SquareContainer = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: ${space.lg};
`;

const Square = ({ size }: { size: SpaceVariant }) => {
  const { space, colors } = useTheme();

  const className = css`
    width: ${space[size]};
    height: ${space[size]};
    margin-right: ${space.lg};
    background: ${colors.primary[700].color};
  `;

  return <div className={className} />;
};

export const SpaceSquares = () => {
  return (
    <>
      {SPACE_VARIANTS.map((size, index) => {
        const variant = SPACE_VARIANTS[index];

        return (
          <SquareContainer key={index}>
            <Square size={size} />
            <span>
              {space[variant]} ({variant})
            </span>
          </SquareContainer>
        );
      })}
    </>
  );
};
