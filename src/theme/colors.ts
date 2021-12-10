import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#5DCE80",
  primaryBright: "#5DCE80",
  primaryDark: "#5DCE80",
  secondary: "#664EA0",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#191919",
  backgroundDisabled: "#3c3742",
  borderColor: "#383241",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#45346B",
  tertiary: "#45346B",
  text: "#F4EEFF",
  textDisabled: "#666171",
  textSubtle: "#5DCE80",
  card: "#27262cb3",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #27262cb3 0%, #548d65 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#191919",
  backgroundDisabled: "#3c3742",
  borderColor: "#383241",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#45346B",
  tertiary: "#45346B",
  text: "#F4EEFF",
  textDisabled: "#666171",
  textSubtle: "#5DCE80",
  card: "#27262cb3",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #27262cb3 0%, #548d65 100%)",
  },
};
