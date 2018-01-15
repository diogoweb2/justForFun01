import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import App from "./component";

import {
  setCurrencyValIn,
  setCurrencyValOut,
  setCurrencyIn,
  setCurrencyOut,
  getCurrencyData,
  setModalDisclaimer
} from "../actions/currencyActions";

/**
 *Calculate exchange
 *
 * @param {number} currencyOut - currency to be converted
 * @param {string} currencyIn - original currency
 * @param {number} currencyValIn - value to be converted
 * @param {array} currencyData
 * @returns {number}
 */
function calc(currencyOut, currencyIn, currencyValIn, currencyData) {
  try {
    const rate =
      currencyData.rates[currencyOut] / currencyData.rates[currencyIn];

    return (rate * currencyValIn).toFixed(2);
  } catch (err) {
    return 0;
  }
}
const mapStateToProps = state => {
  const {
    currencyOut,
    currencyIn,
    currencyValIn,
    currencyData,
    dataLoaded,
    showModalDisclaimer,
    apiError
  } = state;

  return {
    currencyOut,
    currencyValOut: calc(currencyOut, currencyIn, currencyValIn, currencyData),
    currencyIn,
    currencyValIn,
    dataLoaded,
    showModalDisclaimer,
    apiError
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setCurrencyValIn,
      setCurrencyValOut,
      setCurrencyIn,
      setCurrencyOut,
      getCurrencyData,
      setModalDisclaimer
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
