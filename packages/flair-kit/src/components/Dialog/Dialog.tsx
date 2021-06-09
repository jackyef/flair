import { Dialog as _Dialog, Transition } from '@headlessui/react';
import { css } from 'goober';
import { Fragment } from 'react';

import { useTheme } from '../../context/theme';
import { H3 } from '../Typography';
import { Overlay } from '../Overlay';

interface Props {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  initialFocus?: React.MutableRefObject<HTMLElement | null> | undefined;
}

export const Dialog: React.FC<Props> = ({
  children,
  title,
  onClose,
  isOpen = false,
  initialFocus,
}) => {
  const { space, colors, shadow, radii, mediaQuery, transition } = useTheme();

  const transitionCss = css`
    transition: ${transition.default}, ${transition.tamerTransform};
  `;
  const hiddenCss = css`
    opacity: 0;
    transform: scale(0.95);
  `;

  const visibleCss = css`
    opacity: 1;
    transform: scale(1);
  `;

  const overlayHiddenCss = css`
    opacity: 0;
  `;

  const overlayVisibleCss = css`
    opacity: 0.3;
  `;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <_Dialog
        initialFocus={initialFocus}
        as="div"
        className={css`
          position: fixed;
          overflow-y: auto;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 0 ${space.lg};
        `}
        onClose={onClose}
      >
        <div
          className={css`
            min-height: 100vh;
            text-align: center;
          `}
        >
          <Transition.Child
            as={Fragment}
            enter={transitionCss}
            enterFrom={overlayHiddenCss}
            enterTo={overlayVisibleCss}
            leave={transitionCss}
            leaveFrom={overlayVisibleCss}
            leaveTo={overlayHiddenCss}
          >
            <_Dialog.Overlay as={Overlay} />
          </Transition.Child>

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

          <Transition.Child
            as={Fragment}
            enter={transitionCss}
            enterFrom={hiddenCss}
            enterTo={visibleCss}
            leave={transitionCss}
            leaveFrom={visibleCss}
            leaveTo={hiddenCss}
          >
            <div
              className={css`
                display: inline-block;
                width: 100%;
                max-width: 100%;
                padding: ${space.xl};
                margin: ${space['2xl']} 0;
                overflow: hidden;
                text-align: left;
                vertical-align: middle;
                box-shadow: ${shadow.subtle};
                border-radius: ${radii.xl};
                background: ${colors.background[600].color};
                isolation: isolate;

                ${mediaQuery.onMobileUp} {
                  max-width: 50vw;
                  max-width: clamp(400px, 50vw, 600px);
                }
              `}
            >
              <_Dialog.Title as={H3}>{title}</_Dialog.Title>
              {children}
            </div>
          </Transition.Child>
        </div>
      </_Dialog>
    </Transition>
  );
};
