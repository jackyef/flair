import cx from 'classnames';
import { Dialog as _Dialog } from '@headlessui/react';
import { css } from 'goober';

import { useTheme } from '../../context/theme';
import { H3 } from '../Typography';
import { Overlay } from '../Overlay';

interface Props {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

export const Dialog: React.FC<Props> = ({
  children,
  title,
  onClose,
  isOpen = false,
}) => {
  const { space, colors, shadow, radii } = useTheme();

  const hidden = css`
    display: none;
  `;

  return (
    <>
      <_Dialog
        open={isOpen}
        as="div"
        className={cx(
          css`
            position: fixed;
            overflow-y: auto;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          `,
          {
            [hidden]: !isOpen,
          }
        )}
        onClose={onClose}
      >
        <div
          className={css`
            min-height: 100vh;
            text-align: center;
          `}
        >
          <_Dialog.Overlay as={Overlay} />

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className={css`
              display: inline-block;
              height: 100vh;
              vertical-align: middle;
            `}
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            className={css`
              display: inline-block;
              width: 100%;
              max-width: 500px;
              padding: ${space.xl};
              margin: ${space['2xl']} 0;
              overflow: hidden;
              text-align: left;
              vertical-align: middle;
              box-shadow: ${shadow.subtle};
              border-radius: ${radii.xl};
              background: ${colors.background[700].color};
              isolation: isolate;
            `}
          >
            <_Dialog.Title as={H3}>{title}</_Dialog.Title>
            {children}
          </div>
        </div>
      </_Dialog>
    </>
  );
};
