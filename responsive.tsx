type IFunResponsive = (
  maxValue: number,
  minValue: number,
  maxScreen: number,
  minScreen: number
) => void;
export const responsive: IFunResponsive = (maxValue,  minValue,  maxScreen,  minScreen) => {
  const responsiveCalc = `calc( ${minValue}px + (${maxValue} - ${minValue}) * ((100vw - ${minScreen}px) / (${maxScreen} - ${minScreen})))`;
  return responsiveCalc;
};
