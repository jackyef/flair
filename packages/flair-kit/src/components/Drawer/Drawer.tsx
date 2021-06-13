import { Dialog as _Dialog, Transition } from '@headlessui/react';
import { css, styled } from 'goober';
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

const CloseButton = styled(Button)`
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transform: translateX(10px);
`;

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
    transform: translateY(20vh);

    ${mediaQuery.onMobileUp} {
      transform: translateX(-200px);
    }
  `;

  const visibleCss = css`
    opacity: 1;
    transform: translateY(0);

    ${mediaQuery.onMobileUp} {
      transform: translateX(0);
    }
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
          left: 0;
          right: 0;
          bottom: 0;
          padding: 0;
          top: 0;
        `}
        onClose={onClose}
      >
        <div
          className={css`
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
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
                isolation: isolate;
                display: inline-block;
                width: 100%;
                max-width: 100%;
                max-height: 70vh;
                /* 
                  Adding some paddings when address bar is shown on chrome Android
                  the elements there would still be visible
                */
                padding: 0 0 calc(${space.xl} + ${space['3xl']});
                overflow-y: auto;
                text-align: left;
                vertical-align: middle;
                border-radius: ${radii.xl} ${radii.xl} 0 0;
                background: ${colors.background[700].color};

                ${mediaQuery.onMobileUp} {
                  height: 100vh;
                  max-height: 100vh;
                  padding: 0 0 ${space.xl};
                  max-width: 50vw;
                  max-width: clamp(400px, 50vw, 600px);
                  border-radius: 0 ${radii.xl} ${radii.xl} 0;
                }
              `}
            >
              <div
                className={css`
                  position: sticky;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  top: 0;
                  padding: ${space['lg']} ${space['xl']};
                  padding-top: calc(${space['xl']} + 3px);
                  background: inherit;

                  > h3 {
                    margin: 0;
                  }
                `}
              >
                <_Dialog.Title as={H3}>{title}&#8203;</_Dialog.Title>
                <CloseButton
                  aria-label="Close drawer"
                  onClick={onClose}
                  variant="background"
                >
                  &times;
                </CloseButton>
              </div>
              <div
                className={css`
                  padding: 0 ${space.xl};
                `}
              >
                {children}
              </div>
            </div>
          </Transition.Child>
        </div>
      </_Dialog>
    </Transition>
  );
};
