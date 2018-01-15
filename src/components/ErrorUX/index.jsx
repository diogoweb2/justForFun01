import React from "react";
import PropTypes from "prop-types";

/**
 * Show a frindly generic erros to user
 */
const ErrorUX = ({ children }) => (
  <div
    className="slds-notify slds-notify_alert slds-theme_alert-texture slds-theme_error"
    role="alert"
  >
    <span className="slds-assistive-text">error</span>

    <h2>{children}</h2>
    <button
      className="slds-button slds-button_icon slds-notify__close slds-button_icon-inverse"
      title="Close"
    >
      <span className="slds-assistive-text">Close</span>
    </button>
  </div>
);

ErrorUX.propTypes = {
  children: PropTypes.node.isRequired
};
export default ErrorUX;
