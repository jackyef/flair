import { useTheme } from 'flair-kit';

interface Props extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const Logo = ({ size = 24, ...props }: Props) => {
  const { colors } = useTheme();

  return (
    <svg
      width={size}
      height={1.5 * size}
      viewBox="0 0 124 186"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M124 93C124 110.121 110.121 124 93 124C75.8792 124 62 110.121 62 93C62 75.8792 75.8792 62 93 62C110.121 62 124 75.8792 124 93Z"
        fill={colors.error[500].color}
      />
      <path
        d="M124 31C124 48.1208 110.121 62 93 62C75.8792 62 62 48.1208 62 31C62 13.8792 75.8792 0 93 0C110.121 0 124 13.8792 124 31Z"
        fill={colors.warning[500].color}
      />
      <path
        d="M62 155C62 172.121 48.1208 186 31 186C13.8792 186 -3.99036e-07 172.121 -3.99036e-07 155C-3.99036e-07 137.879 13.8792 124 31 124C48.1208 124 62 137.879 62 155Z"
        fill={colors.success[500].color}
      />
      <path
        d="M62 93C62 110.121 48.1208 124 31 124C13.8792 124 -3.99036e-07 110.121 -3.99036e-07 93C-3.99036e-07 75.8792 13.8792 62 31 62C48.1208 62 62 75.8792 62 93Z"
        fill={colors.secondary[500].color}
      />
      <path
        d="M62 31C62 48.1208 48.1208 62 31 62C13.8792 62 -3.99036e-07 48.1208 -3.99036e-07 31C-3.99036e-07 13.8792 13.8792 0 31 0C48.1208 0 62 13.8792 62 31Z"
        fill={colors.primary[500].color}
      />
    </svg>
  );
};
