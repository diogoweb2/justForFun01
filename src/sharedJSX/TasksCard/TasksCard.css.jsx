import { commonDesktopStyles } from "__GLOBAL__/commonStyle";

const styles = theme => ({
  card: {
    margin: "10px"
  },
  new: {
    fontWeight: "bold"
  },
  wrapContent: {
    width: "95%",
    display: "flex",
    overflow: "hidden"
  },
  wrap: {
    overflowX: "hidden"
  },
  wrapLines: {
    width: "100%",
    paddingRight: "2%",
    overflow: "hidden"
  },
  normalImportance: {
    paddingRight: "3%"
  },
  line1: {
    display: "flex",
    paddingBottom: "2px",
    justifyContent: "space-between"
  },
  line2: {
    display: "flex"
  },
  line3: {
    display: "flex"
  },
  highImportance: {
    color: theme.BGRS.color.red
  },

  sender: {
    color: theme.BGRS.color.purple,
    fontSize: "1em"
  },
  title: {
    fontSize: "0.9em"
  },
  status: {
    fontSize: "0.9em"
  },
  date: {
    fontSize: "0.8em"
  },
  ...commonDesktopStyles
});

export default styles;
