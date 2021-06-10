import { Dialog as _Dialog, Transition } from '@headlessui/react';
import { css } from 'goober';
import { Fragment } from 'react';

import { useTheme } from '../../context/theme';
import { H3 } from '../Typography';
import { Overlay } from '../Overlay';
import { Button } from '../Button';

interface Props {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  initialFocus?: React.MutableRefObject<HTMLElement | null> | undefined;
}

export const Drawer: React.FC<Props> = ({
  children,
  title,
  onClose,
  isOpen = false,
  initialFocus,
}) => {
  const { space, colors, radii, mediaQuery, transition } = useTheme();

  const transitionCss = css`
    transition: ${transition.default}, ${transition.tamerTransform};
  `;
  const hiddenCss = css`
    opacity: 0;
    transform: translateX(-200px);
  `;

  const visibleCss = css`
    opacity: 1;
    transform: translateX(0);
  `;

  const overlayHiddenCss = css`
    opacity: 0;
  `;

  const overlayVisibleCss = css`
    opacity: 1;
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
          padding: 0;
        `}
        onClose={onClose}
      >
        <div
          className={css`
            min-height: 100vh;
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
                position: relative;
                display: inline-block;
                width: 100%;
                max-width: 100%;
                height: 100vh;
                overflow-y: auto;
                padding: 0 ${space.xl};
                overflow: hidden;
                text-align: left;
                vertical-align: middle;
                border-radius: 0 ${radii.xl} ${radii.xl} 0;
                background: ${colors.background[700].color};
                isolation: isolate;

                ${mediaQuery.onMobileUp} {
                  max-width: 50vw;
                  max-width: clamp(400px, 50vw, 600px);
                }
              `}
            >
              <Button
                aria-label="Close drawer"
                onClick={onClose}
                className={css`
                  position: absolute;
                  top: ${space['xl']};
                  right: ${space['2xl']};
                  width: 40px;
                  height: 40px;
                  font-size: 1.5rem;
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  transform: translateX(10px);
                `}
                variant="background"
              >
                &times;
              </Button>
              <_Dialog.Title
                as={H3}
                className={css`
                  padding-right: ${space['3xl']};
                  margin-top: calc(${space['xl']} + 3px);
                `}
              >
                {title}&#8203;
              </_Dialog.Title>
              {children}
            </div>
          </Transition.Child>
        </div>
      </_Dialog>
    </Transition>
  );
};
