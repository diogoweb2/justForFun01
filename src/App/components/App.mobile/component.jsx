import React from "react";
import SwipeableViews from "react-swipeable-views";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";

import MessagesList from "../messageList";
import Search from "../Search";
import Sort from "../Sort/";
import FilterPanel from "../FilterPanel/";
import FilterBtn from "../FilterBtn";
import DetailPanel from "../DetailPanel";
import styles from "./component.css";

const MobileView = ({
  classes,
  filterOpen,
  mobileIndexPage,
  toggleFilterMobile,
  selectedItem
}) => (
  <div>
    <Search />
    <div className={classes.panelTopMobile}>
      <Sort />
      <FilterBtn />
    </div>
    <Drawer
      anchor="right"
      open={filterOpen}
      onRequestClose={toggleFilterMobile}
    >
      <FilterPanel />
    </Drawer>
    <SwipeableViews index={mobileIndexPage} disabled>
      <div>
        <MessagesList />
      </div>
      <div>{selectedItem && selectedItem.MessageId ? <DetailPanel /> : ""}</div>
    </SwipeableViews>
  </div>
);

MobileView.propTypes = {
  classes: PropTypes.object.isRequired,
  mobileIndexPage: PropTypes.number,
  selectedItem: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  filterOpen: PropTypes.bool.isRequired,
  toggleFilterMobile: PropTypes.func.isRequired
};
MobileView.defaultProps = {
  selectedItem: null,
  mobileIndexPage: 0
};

export default withStyles(styles)(MobileView);
