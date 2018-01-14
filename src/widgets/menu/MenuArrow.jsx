import React from "react";
import PropTypes from "prop-types";
import ArrowUpDown from "__SHARED__/ArrowUpDown/ArrowUpDown";

const MenuArrow = props => {
  if (props.data.length > 0) {
    return (
      <ArrowUpDown isOpened={props.isOpened} className={props.classes.white} />
    );
  }
  return "";
};
MenuArrow.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array,
  isOpened: PropTypes.bool
};
MenuArrow.defaultProps = {
  data: [],
  isOpened: false
};

export default MenuArrow;
