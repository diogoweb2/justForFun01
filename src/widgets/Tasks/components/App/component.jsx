import React from "react";
// import PropTypes from "prop-types";

import PropTypes from "prop-types";
import Loading from "__SHARED__/Loading/Loading";

import {
  Desktop,
  Mobile
} from "__SHARED__/Responsive-Devices/Responsive-Devices";

import MobileView from "../App.mobile";
import DesktopView from "../App.desktop";

const MessagesWrap = ({ dataLoaded }) => {
  if (!dataLoaded) {
    return <Loading />;
  }

  return (
    <div>
      <Desktop>
        <DesktopView />
      </Desktop>
      <Mobile>
        <MobileView />
      </Mobile>
    </div>
  );
};

MessagesWrap.propTypes = {
  dataLoaded: PropTypes.bool.isRequired
};

export default MessagesWrap;
