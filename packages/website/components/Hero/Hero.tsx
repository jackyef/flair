import { useState } from 'react';
import { css, keyframes } from 'goober';
import type { MappedColorVariant } from 'flair-kit';
import { useTheme } from 'flair-kit';

interface RandomBlobProps {
  variant?: MappedColorVariant;
}

// @ts-expect-error
// eslint-disable-next-line
const RandomBlob = ({ variant = 'primary' }: RandomBlobProps) => {
  const [style] = useState(() => {
    const leftOrRight = Math.random() > 0.5 ? 'left' : 'right';
    const topOrBottom = Math.random() > 0.5 ? 'top' : 'bottom';

    return {
      sizeFactor: Math.round(Math.random() * 20),
      radiiFactor: Math.round(Math.random() * 20),
      position: {
        [leftOrRight]: `${Math.round(Math.random() * 50)}vw`,
        [topOrBottom]: `${Math.round(Math.random() * 50)}px`,
      },
      rotation: Math.round(Math.random() * 360),
    };
  });
  const { colors } = useTheme();

  return (
    <div
      style={{
        ...style.position,
      }}
      className={css`
        position: absolute;
        width: clamp(80px, ${style.sizeFactor}vw, 200px);
        height: clamp(80px, ${style.sizeFactor}vw, 200px);
        content: '';
        background: linear-gradient(
          90deg,
          ${colors[variant][400].color},
          ${colors[variant][700].color}
        );
        border-radius: clamp(
          28px,
          ${Math.max(style.radiiFactor, style.sizeFactor / 3)}vw,
          70px
        );
        transform: rotate(${style.rotation}deg);
      `}
    />
  );
};

interface BlobProps {
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  variant: MappedColorVariant;
  rotation: number;
  radiiFactor: number;
  sizeFactor: number;
}

const Blob = ({
  position,
  sizeFactor,
  variant,
  rotation,
  radiiFactor,
}: BlobProps) => {
  const { colors } = useTheme();

  const float = keyframes`
    from, to {
        transform: rotate(${rotation}deg) translate(0);
    }

    50% {
        transform: rotate(${rotation}deg) translate(${Math.random() * 100}px, ${
    Math.random() * 100
  }px)
    }
`;

  return (
    <div
      style={{
        ...position,
      }}
      className={css`
        position: absolute;
        filter: blur(1px);
        opacity: 0.5;
        width: clamp(80px, ${sizeFactor}vw, 200px);
        height: clamp(80px, ${sizeFactor}vw, 200px);
        content: '';
        background: linear-gradient(
          90deg,
          ${colors[variant][400].color},
          ${colors[variant][700].color}
        );
        border-radius: clamp(
          28px,
          ${Math.max(radiiFactor, sizeFactor / 3)}vw,
          70px
        );

        transform: rotate(${rotation}deg);
        animation: ${float} 5s infinite;
      `}
    />
  );
};

export const HeroBackground = () => {
  return (
    <div
      className={css`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
    >
      <Blob
        variant="primary"
        sizeFactor={17}
        radiiFactor={3}
        position={{ right: '11vw', bottom: '-20px' }}
        rotation={30}
      />
      <Blob
        variant="secondary"
        sizeFactor={6}
        radiiFactor={18}
        position={{ left: '8vw', top: '33px' }}
        rotation={116}
      />
      <Blob
        variant="error"
        sizeFactor={6}
        radiiFactor={4}
        position={{ right: '7vw', top: '9px' }}
        rotation={193}
      />
      <Blob
        variant="success"
        sizeFactor={10}
        radiiFactor={6}
        position={{ right: '4vw', bottom: '24px' }}
        rotation={193}
      />
      <Blob
        variant="warning"
        sizeFactor={12}
        radiiFactor={19}
        position={{ left: '2vw', bottom: '12px' }}
        rotation={16}
      />
    </div>
  );
};
