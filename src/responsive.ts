import { IFunResponsive, TRScreen } from "./types";

export const ScreenWidth: { [key in TRScreen]: number } = {
  base: 0, // to xs
  xxs: 320, // to xs
  xs: 360, // to sm
  sm: 540, // to md
  md: 768, // to lg
  lg: 992, // to xl
  xl: 1280, // to xxl
  xxl: 1440, // to max
};

export const r: IFunResponsive = (minValue, maxValue, minScreen = ScreenWidth["xs"], maxScreen = ScreenWidth["xl"]) => {
  if (maxValue === minValue || !maxValue) return minValue + "px";

  const _minScreen = typeof minScreen === "string" ? ScreenWidth[minScreen] : minScreen;
  const _maxScreen = typeof maxScreen === "string" ? ScreenWidth[maxScreen] : maxScreen;

  return `calc( ${minValue}px + (${maxValue} - ${minValue}) * ((100vw - ${_minScreen}px) / (${_maxScreen} - ${_minScreen})))`;
};

export const responsive: IFunResponsive = (maxValue, minValue, maxScreen, minScreen) => {
  const responsiveCalc = `calc( ${minValue}px + (${maxValue} - ${minValue}) * ((100vw - ${minScreen}px) / (${maxScreen} - ${minScreen})))`;
  return responsiveCalc;
};
