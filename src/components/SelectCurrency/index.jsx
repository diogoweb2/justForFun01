import React from "react";
import PropTypes from "prop-types";

const SelectCurrency = ({ currencies, onChange, value, hiddenTitle }) => (
  <div className="slds-select_container">
    <select
      className="slds-select"
      value={value}
      onChange={e => onChange(e.target.value)}
      aria-label={hiddenTitle}
      title={hiddenTitle}
    >
      {currencies.map(currency => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  </div>
);

SelectCurrency.propTypes = {
  currencies: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.string,
  /**
   * accessibility label
   */
  hiddenTitle: PropTypes.string.isRequired
};

SelectCurrency.defaultProps = {
  currencies: ["CAD", "USD", "EUR"],
  onChange: null,
  value: ""
};

export default SelectCurrency;
