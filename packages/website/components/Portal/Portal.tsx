import { createPortal } from 'react-dom';

const canUseDOM = typeof window !== 'undefined'
interface Props {
  containerSelector?: string;
}

export const Portal: React.FC<Props> = ({
  children,
  containerSelector = '#__portal-root',
}) => {
  return canUseDOM
    ? createPortal(
        children,
        document.querySelector(containerSelector) as Element,
      )
    : null;
};
