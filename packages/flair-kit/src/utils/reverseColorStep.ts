import { ColorScale } from '../theme/colors';

export const COLOR_SCALE_STEPS = [
  5, 10, 20, 30, 40, 50, 60, 70, 80, 90,
] as const;
export const REVERSED_COLOR_STEPS = [...COLOR_SCALE_STEPS].reverse();

export const reverseColorScale = (color: ColorScale): ColorScale => {
  const reversed = { ...color };

  REVERSED_COLOR_STEPS.forEach((_, index: number) => {
    reversed[REVERSED_COLOR_STEPS[index]] = color[COLOR_SCALE_STEPS[index]];
  });

  return reversed;
};
