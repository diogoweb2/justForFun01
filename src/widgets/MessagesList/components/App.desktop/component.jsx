import React from "react";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import MessagesList from "__SHARED__/MessagesList/MessagesList";
import styles from "./component.css";

const DesktopView = ({ classes, data, onItemSelected }) => (
  <div>
    <MessagesList
      classes={{ sender: classes.sender }}
      className={classes}
      data={data}
      onItemSelected={onItemSelected}
      variant="purple"
    />
  </div>
);

DesktopView.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  onItemSelected: PropTypes.func.isRequired
};

export default withStyles(styles)(DesktopView);
