const styleSheet = themeCSS => ({
  nested: {
    paddingLeft: themeCSS.spacing.unit * 4
  },
  drawerPaperNonDesktop: {
    background: themeCSS.BGRS.color.blue,
    width: themeCSS.BGRS.menu.size
  },
  drawerPaperDesktop: {
    width: themeCSS.BGRS.menu.size,
    position: "relative",
    height: "auto",
    background: themeCSS.BGRS.color.blue,
    float: "left"
  },
  white: {
    color: themeCSS.BGRS.color.white
  },
  mainTile: {
    extend: "white",
    textAlign: "center",
    padding: "15px 0"
  },
  divider: {
    backgroundColor: themeCSS.BGRS.color.lightBlue
  },
  menuIcon: {
    paddingRight: "5px",
    width: "20px",
    height: "20px",
    paddingBottom: "4px"
  }
});

export { styleSheet as default };
