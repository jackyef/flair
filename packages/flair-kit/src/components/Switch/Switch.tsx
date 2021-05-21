import cx from 'classnames';
import { Switch as _Switch } from '@headlessui/react';
import { useTheme } from '../../context/theme';
import { css } from 'goober';
import { VisuallyHidden } from '../VisuallyHidden';

interface Props {
  enabled: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

export const Switch = ({ enabled, onChange, label }: Props) => {
  const { space, colors, transition } = useTheme();

  return (
    <_Switch
      checked={enabled}
      onChange={onChange}
      className={cx(
        css`
          transition: ${transition.default};
          padding: ${space.xs};
          position: relative;
          border-radius: 999px;
          height: calc(${space.xl} + ${space.xs});
          width: calc(2 * ${space.xl});
          background: ${colors.background[400].color};
          display: flex;
          align-items: center;
        `,
        {
          [css`
            background: ${colors.primary[600].color};
          `]: enabled,
        },
      )}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <span
        className={cx(
          css`
            transition: ${transition.transform};
            transform: translateX(0);
            display: inline-block;
            width: calc(${space.xl} - ${space.xs});
            height: calc(${space.xl} - ${space.xs});
            background: ${colors.light[700].color};
            border-radius: 50%;
          `,
          {
            [css`
              transform: translateX(calc(${space.xl} - ${space.xs}));
            `]: enabled,
          },
        )}
      />
    </_Switch>
  );
};
