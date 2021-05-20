import { css } from 'goober';
import { CSSProperties } from 'react';

import { useTheme } from 'flair-kit';

interface Props {
  display?: CSSProperties['display'];
}

export const RenderOnMobileUp: React.FC<Props> = ({
  children,
  display = 'block',
  ...props
}) => {
  const { mediaQuery } = useTheme();

  return (
    <div
      className={css`
        display: none;

        ${mediaQuery.onMobileUp} {
          display: ${display};
        }
      `}
      {...props}
    >
      {children}
    </div>
  );
};
