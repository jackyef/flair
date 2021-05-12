import { css } from 'goober';
import { CSSProperties } from 'react';

import { onMobileUp } from '@/flair/theme/mediaQueries';

interface Props {
  display?: CSSProperties['display'];
}

export const RenderOnMobile: React.FC<Props> = ({
  children,
  display = 'block',
  ...props
}) => {
  return (
    <div
      className={css`
        display: ${display};

        ${onMobileUp} {
          display: none;
        }
      `}
      {...props}
    >
      {children}
    </div>
  );
};
