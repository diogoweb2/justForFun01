import React from "react";
import PropTypes from "prop-types";

import Responsive from "react-responsive";
import * as CONST from "__GLOBAL__/constants";
// import Utl from "../../utils";

function Mobile(props) {
  return (
    <Responsive
      maxWidth={CONST.MobileMaxWidth}
      values={{ width: window.innerWidthJest }}
    >
      {props.children}
    </Responsive>
  );
}
Mobile.propTypes = {
  children: PropTypes.node.isRequired
};
function Desktop(props) {
  return (
    <Responsive
      minWidth={CONST.DesktopMinWidth}
      values={{ width: window.innerWidthJest }}
    >
      {props.children}
    </Responsive>
  );
}
Desktop.propTypes = {
  children: PropTypes.node.isRequired
};

function MobileSizeMenu(props) {
  return (
    <Responsive
      maxWidth={CONST.MobileMenuMaxWidth}
      values={{ width: window.innerWidthJest }}
    >
      {props.children}
    </Responsive>
  );
}
MobileSizeMenu.propTypes = {
  children: PropTypes.node.isRequired
};

function DesktopSizeMenu(props) {
  return (
    <Responsive
      minWidth={CONST.DesktopMenuMinWidth}
      values={{ width: window.innerWidthJest }}
    >
      {props.children}
    </Responsive>
  );
}
DesktopSizeMenu.propTypes = {
  children: PropTypes.node.isRequired
};

export { Mobile, DesktopSizeMenu, Desktop, MobileSizeMenu };
