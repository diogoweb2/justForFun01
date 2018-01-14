import React from "react";
import PropTypes from "prop-types";

const InputCurrency = ({ value, onChange }) => (
  <input onChange={onChange} type="text" value={value} />
);

InputCurrency.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func
};

InputCurrency.defaultProps = {
  value: 0,
  onChange: null
};

export default InputCurrency;
