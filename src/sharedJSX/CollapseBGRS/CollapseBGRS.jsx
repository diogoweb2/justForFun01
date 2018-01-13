import React from "react";
import Collapse from "material-ui/transitions/Collapse";
import PropTypes from "prop-types";

const CollapseBGRS = props => (
  <div>
    <Collapse in={props.open} transitionDuration="auto" unmountOnExit>
      {props.children}
    </Collapse>
  </div>
);

CollapseBGRS.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired
};
export default CollapseBGRS;
