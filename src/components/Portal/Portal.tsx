import { canUseDOM } from '@/flair/utils/canUseDOM';
import { createPortal } from 'react-dom';

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
