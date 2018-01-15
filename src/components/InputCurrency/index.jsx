import React from "react";
import PropTypes from "prop-types";

const InputCurrency = ({ value, onChange, disable, id }) => (
  <input
    disable={disable}
    onChange={e => onChange(e.target.value)}
    type="text"
    id={id}
    className="slds-input"
    placeholder="0"
    value={value}
  />
);

InputCurrency.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  disable: PropTypes.bool,
  id: PropTypes.string.isRequired
};

InputCurrency.defaultProps = {
  value: 0,
  onChange: null,
  disable: false
};

export default InputCurrency;
