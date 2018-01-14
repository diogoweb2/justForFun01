import React from "react";
import PropTypes from "prop-types";

const SelectCurrency = ({ currencies, onChange, value }) => (
  <select value={value} onChange={e => onChange(e.target.value)}>
    {currencies.map(currency => (
      <option key={currency} value={currency}>
        {currency}
      </option>
    ))}
  </select>
);

SelectCurrency.propTypes = {
  currencies: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.string
};

SelectCurrency.defaultProps = {
  currencies: ["CAD", "USD", "EUR"],
  onChange: null,
  value: ""
};

export default SelectCurrency;
