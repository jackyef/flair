import cx from 'classnames';
import { Switch as _Switch } from '@headlessui/react';
import { useTheme } from '../../context/theme';
import { css } from 'goober';
import { VisuallyHidden } from '../VisuallyHidden';
import { cloneElement } from 'react';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  enabled: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  icon?: React.ReactElement;
}

export const Switch = ({
  enabled,
  onChange,
  label,
  icon,
  size = 'md',
}: Props) => {
  const { space, colors, transition } = useTheme();
  let baseSize: string = space['xl'];
  let offsetSize: string = space.xs;

  if (size === 'sm') baseSize = space.lg;
  else if (size === 'lg') {
    baseSize = space['2xl'];
    offsetSize = space.sm;
  }

  const getIconSize = () => {
    switch (size) {
      case 'sm':
        return 12;
      case 'md':
        return 18;
      case 'lg':
        return 32;
    }
  };

  const iconSize = getIconSize();

  return (
    <_Switch.Group>
      <_Switch
        checked={enabled}
        onChange={onChange}
        className={css`
          transition: ${transition.default};
          padding: ${offsetSize};
          position: relative;
          border-radius: 999px;
          height: calc(${baseSize} + ${offsetSize});
          width: calc(2 * ${baseSize});
          background: ${colors.background[400].color};
          display: flex;
          align-items: center;

          &[aria-checked='true'] {
            background: ${colors.primary[600].color};
          }
        `}
      >
        <VisuallyHidden>
          <_Switch.Label>{label}</_Switch.Label>
        </VisuallyHidden>
        <span
          className={cx(
            css`
              transition: ${transition.transform}, ${transition.default};
              transform: translateX(0);
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: calc(${baseSize} - ${offsetSize});
              height: calc(${baseSize} - ${offsetSize});
              background: ${colors.light[700].color};
              border-radius: 50%;
            `,
            {
              [css`
                transform: translateX(calc(${baseSize} - ${offsetSize}));
              `]: enabled,
            },
          )}
        >
          {icon &&
            cloneElement(icon, {
              width: icon.props.width || iconSize,
              height: icon.props.height || iconSize,
            })}
        </span>
      </_Switch>
    </_Switch.Group>
  );
};
