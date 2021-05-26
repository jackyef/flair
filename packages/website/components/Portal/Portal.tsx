import { createPortal } from 'react-dom';
import { RenderOnMount } from '../RenderOnMount/RenderOnMount';

const canUseDOM = typeof window !== 'undefined';
interface Props {
  containerSelector?: string;
}

export const Portal: React.FC<Props> = ({
  children,
  containerSelector = '#__portal-root',
}) => {
  return canUseDOM ? (
    <RenderOnMount>
      {createPortal(
        children,
        document.querySelector(containerSelector) as Element,
      )}
    </RenderOnMount>
  ) : null;
};
