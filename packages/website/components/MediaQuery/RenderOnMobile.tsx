import { css } from 'goober';
import { CSSProperties } from 'react';

import { useTheme } from 'flair-kit';

interface Props {
  display?: CSSProperties['display'];
}

export const RenderOnMobile: React.FC<Props> = ({
  children,
  display = 'block',
  ...props
}) => {
  const { mediaQuery } = useTheme();

  return (
    <div
      className={css`
        display: ${display};

        ${mediaQuery.onMobileUp} {
          display: none;
        }
      `}
      {...props}
    >
      {children}
    </div>
  );
};
