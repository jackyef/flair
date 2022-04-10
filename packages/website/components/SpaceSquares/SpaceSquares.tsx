import { css, styled } from 'goober';
import { useTheme } from 'flair-kit';

export const SPACE_VARIANTS = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
] as const;

export type SpaceVariant = typeof SPACE_VARIANTS[number];

const SquareContainer = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Square = ({ size }: { size: SpaceVariant }) => {
  const { space, colors } = useTheme();

  const className = css`
    width: ${space[size]};
    height: ${space[size]};
    margin-right: ${space.lg};
    background: ${colors.cyan[80]};
  `;

  return <div className={className} />;
};

export const SpaceSquares = () => {
  const { space } = useTheme();

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
