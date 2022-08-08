import { IFunResponsive, TRScreen } from "./types";

export const Breakpoint: { [key in TRScreen]: number } = {
  base: 0, // to xs
  xxs: 320, // to xs
  xs: 360, // to sm
  sm: 540, // to md
  md: 768, // to lg
  lg: 992, // to xl
  xl: 1280, // to xxl
  xxl: 1440, // to max
};

export const r: IFunResponsive = (minValue, maxValue, minScreen = Breakpoint["xs"], maxScreen = Breakpoint["xl"]) => {
  if (maxValue === minValue || !maxValue) return minValue + "px";

  const _minScreen = typeof minScreen === "string" ? Breakpoint[minScreen] : minScreen;
  const _maxScreen = typeof maxScreen === "string" ? Breakpoint[maxScreen] : maxScreen;

  return `calc( ${minValue}px + (${maxValue} - ${minValue}) * ((100vw - ${_minScreen}px) / (${_maxScreen} - ${_minScreen})))`;
};
