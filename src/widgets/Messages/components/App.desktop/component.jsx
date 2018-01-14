import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import MessagesList from "../messageList";
import Search from "../Search";
import Sort from "../Sort";
import FilterPanel from "../FilterPanel/";
import FilterBtn from "../FilterBtn";
import DetailPanel from "../DetailPanel";
import styles from "./Messages.desktop.css";

const DesktopView = props => {
  const { classes } = props;

  return (
    <div className={classes.panelWrapper}>
      <div className={classes.panelLeft}>
        <div className={classes.panelLeftTop}>
          <Search />
        </div>
        <div className={classes.panelLeftList}>
          <MessagesList />
        </div>
      </div>
      <div className={classes.panelRight}>
        <div className={classes.panelRightTop}>
          <Sort />
          <FilterBtn />
        </div>
        <FilterPanel />

        {props.selectedItem && props.selectedItem.MessageId ? (
          <DetailPanel />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

DesktopView.propTypes = {
  classes: PropTypes.object.isRequired,

  selectedItem: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
DesktopView.defaultProps = {
  selectedItem: null
};

export default withStyles(styles)(DesktopView);
