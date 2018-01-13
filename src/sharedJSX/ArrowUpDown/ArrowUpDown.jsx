import React from "react";
import ExpandLess from "material-ui-icons/ExpandLess";
import ExpandMore from "material-ui-icons/ExpandMore";
import PropTypes from "prop-types";

const ArrowUpDown = props => {
  const { isOpened } = props;

  return <div>{isOpened ? <ExpandLess /> : <ExpandMore />}</div>;
};

ArrowUpDown.propTypes = {
  isOpened: PropTypes.bool
};
ArrowUpDown.defaultProps = {
  isOpened: false
};
export default ArrowUpDown;
