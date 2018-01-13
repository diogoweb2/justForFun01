import { createMuiTheme } from "material-ui/styles";

const BGRScolors = {
  white: "#FFF",
  blue: "rgba(0, 103, 127, 1)",
  lightBlue: "rgba(156, 219, 217, 1)",
  lightBlue2: "rgba(238, 249, 247, 1)",
  yellow: "rgba(236, 216, 152, 1)",
  grey: "#6B6B6B",
  grey2: "#4B4F54",
  grey3: "rgba(242, 242, 242, 1)",
  purple: "rgba(105, 31, 82, 1)",
  red: "#ba0c2f"
};
const BGRSprimary = {
  50: "#ede4ea",
  100: "#d2bccb",
  200: "#b48fa9",
  300: "#966286",
  400: "#80416c",
  500: BGRScolors.purple,
  600: "#611b4b",
  700: "#561741",
  800: "#4c1238",
  900: "#3b0a28",
  A100: "#ff74c4",
  A200: "#ff41ae",
  A400: "#ff0e98",
  A700: BGRScolors.purple,
  contrastDefaultColor: "light"
};
const BGRSError = {
  50: "#f7e2e6",
  100: "#eab6c1",
  200: "#dd8697",
  300: "#cf556d",
  400: "#c4304e",
  500: BGRScolors.red,
  600: "#b30a2a",
  700: "#ab0823",
  800: "#a3061d",
  900: "#940312",
  A100: "#ffbfc3",
  A200: "#ff8c93",
  A400: "#ba0c2f",
  A700: BGRScolors.red,
  contrastDefaultColor: "light"
};

const theme = createMuiTheme({
  typography: {
    // fontFamily: "verdana"
  },
  palette: {
    primary: BGRSprimary,
    error: BGRSError
  },
  BGRS: {
    color: BGRScolors,
    menu: {
      size: "300px"
    }
  }

  // overrides: {
  //   MuiListItemText: {
  //     text: {
  //       color: "white"
  //     }
  //   },
  //   MuiSvgIcon: {
  //     root: {
  //       color: "red"
  //     }
  //   },
  //   MuiListItemIcon: {
  //     root: {
  //       color:
  //     }
  //   }
  // },
});

export { theme as default };
