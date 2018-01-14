const MessagesDesktopStyle = theme => ({
  panelTopMobile: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  panelWrapper: {
    display: "flex"
  },
  panelLeft: {
    width: "30%"
  },
  panelLeftTop: {
    background: theme.BGRS.color.grey3,
    height: "70px"
  },
  panelRightTop: {
    background: theme.BGRS.color.grey3,
    height: "70px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  panelLeftList: {
    overflow: "auto",
    height: "400px"
  },
  panelRight: {
    width: "69.8%",
    marginLeft: "0.1%"
  },
  selected: {
    background: "red"
  },
  filterBtn: {
    width: "48px"
  },
  sortBtn: {
    width: "48px"
  },
  filterlabel: {
    fontSize: "10px",
    marginLeft: "13px"
  }
});

export default MessagesDesktopStyle;
