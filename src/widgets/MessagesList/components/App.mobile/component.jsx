import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { commonMobileStyles } from "__GLOBAL__/commonStyle";

const MobileView = ({ classes, total }) => (
  <div className={classes.smallBoxBlue}>{total}</div>
);
MobileView.propTypes = {
  classes: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired
};

export default withStyles(commonMobileStyles)(MobileView);
