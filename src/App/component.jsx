import React from "react";
import PropTypes from "prop-types";
import InputCurrency from "../components/InputCurrency";
import SelectCurrency from "../components/SelectCurrency";

const App = ({
  currencyValIn,
  currencyIn,
  currencyValOut,
  currencyOut,
  setCurrencyValIn,
  setCurrencyIn,
  setCurrencyValOut,
  setCurrencyOut
}) => (
  <div>
    <InputCurrency onChange={setCurrencyValIn} value={currencyValIn} />
    <SelectCurrency value={currencyIn} onChange={setCurrencyIn} />
    <InputCurrency onChange={setCurrencyValOut} value={currencyValOut} />
    <SelectCurrency value={currencyOut} onChange={setCurrencyOut} />
  </div>
);

App.propTypes = {
  currencyValIn: PropTypes.number.isRequired,
  currencyIn: PropTypes.string.isRequired,
  currencyValOut: PropTypes.number.isRequired,
  currencyOut: PropTypes.string.isRequired,
  setCurrencyValIn: PropTypes.func.isRequired,
  setCurrencyIn: PropTypes.func.isRequired,
  setCurrencyValOut: PropTypes.func.isRequired,
  setCurrencyOut: PropTypes.func.isRequired
};

export default App;
