import { css } from 'goober';
import { CSSProperties } from 'react';

import { onMobileUp } from 'flair-kit/theme/mediaQueries';

interface Props {
  display?: CSSProperties['display'];
}

export const RenderOnMobileUp: React.FC<Props> = ({
  children,
  display = 'block',
  ...props
}) => {
  return (
    <div
      className={css`
        display: none;

        ${onMobileUp} {
          display: ${display};
        }
      `}
      {...props}
    >
      {children}
    </div>
  );
};
