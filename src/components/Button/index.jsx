import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, children, type }) => {
  let typeClass;

  switch (type.toLowerCase()) {
    case "secondary":
      typeClass = "slds-button_neutral";
      break;

    default:
      typeClass = "slds-button_brand";
      break;
  }

  typeClass += " slds-button";

  return (
    <button onClick={onClick} className={typeClass}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.string
};

Button.defaultProps = {
  type: "primary"
};

export default Button;
