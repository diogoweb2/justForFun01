import React from "react";
import PropTypes from "prop-types";

const InputCurrency = ({ value, onChange, disable, id }) => (
  <input
    type="number"
    disable={disable.toString()}
    onChange={e => onChange(e.target.value)}
    id={id}
    className="slds-input"
    placeholder="0.00"
    value={value}
  />
);

InputCurrency.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  disable: PropTypes.bool,
  id: PropTypes.string.isRequired
};

InputCurrency.defaultProps = {
  value: "",
  onChange: null,
  disable: false
};

export default InputCurrency;
