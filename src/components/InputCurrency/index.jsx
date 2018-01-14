import React from "react";
import PropTypes from "prop-types";

const InputCurrency = ({ value, onChange }) => (
  <input onChange={e => onChange(e.target.value)} type="text" value={value} />
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
