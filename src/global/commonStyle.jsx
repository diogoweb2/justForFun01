import ThemeCSS from "./themeCSS";

const theme = ThemeCSS;
export const commonDesktopStyles = {
  blueVariant: {
    background: theme.BGRS.color.blue,
    color: theme.BGRS.color.white
  },
  purpleVariant: {
    background: theme.BGRS.color.purple,
    color: theme.BGRS.color.white
  }
};
export const commonMobileStyles = {
  smallBoxBlue: {
    background: theme.BGRS.color.blue,
    padding: "20px",
    width: "20px",
    color: theme.BGRS.color.white
  }
};
