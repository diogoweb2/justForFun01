import React from "react";
import PropTypes from "prop-types";

const InputCurrency = ({ value, onChange, readonly }) => (
  <input
    readOnly={readonly}
    onChange={e => onChange(e.target.value)}
    type="text"
    value={value}
  />
);

InputCurrency.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  readonly: PropTypes.bool
};

InputCurrency.defaultProps = {
  value: 0,
  onChange: null,
  readonly: false
};

export default InputCurrency;
