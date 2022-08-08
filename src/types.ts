type sResponsive = string;

export type TRScreen = "base" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export type IFunResponsive = (minValue: number, maxValue: number, minScreen?: number | TRScreen, maxScreen?: number | TRScreen) => sResponsive;

