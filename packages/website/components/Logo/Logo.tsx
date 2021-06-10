import { useTheme } from 'flair-kit';

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Logo = ({ size = 24, ...props }: Props) => {
  const { colors } = useTheme();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 188 188"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M188 117C188 136.882 171.882 153 152 153C132.118 153 116 136.882 116 117C116 97.1177 132.118 81 152 81C171.882 81 188 97.1177 188 117Z"
        fill={colors.error[400].color}
      />
      <path
        d="M107 152C107 171.882 90.8822 188 71 188C51.1177 188 35 171.882 35 152C35 132.118 51.1177 116 71 116C90.8822 116 107 132.118 107 152Z"
        fill={colors.warning[400].color}
      />
      <path
        d="M153 36C153 55.8822 136.882 72 117 72C97.1177 72 81 55.8822 81 36C81 16.1177 97.1177 0 117 0C136.882 0 153 16.1177 153 36Z"
        fill={colors.success[400].color}
      />
      <path
        d="M72 71C72 90.8822 55.8822 107 36 107C16.1177 107 0 90.8822 0 71C0 51.1177 16.1177 35 36 35C55.8822 35 72 51.1177 72 71Z"
        fill={colors.secondary[400].color}
      />
      <path
        d="M130 94C130 113.882 113.882 130 94 130C74.1177 130 58 113.882 58 94C58 74.1177 74.1177 58 94 58C113.882 58 130 74.1177 130 94Z"
        fill={colors.primary[400].color}
      />
    </svg>
  );
};
