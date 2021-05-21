import { css } from 'goober';

export const VisuallyHidden: React.FC = ({ children }) => {
  return (
    <div
      className={css`
        clip: rect(1px 1px 1px 1px); /* IE 6/7 */
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap; /* added line */
        width: 1px;
      `}
    >
      {children}
    </div>
  );
};
