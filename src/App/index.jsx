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

const calc = (currencyOut, currencyIn, currencyValIn, currencyData) => {
  try {
    const rate =
      currencyData.rates[currencyOut] / currencyData.rates[currencyIn];

    return (rate * currencyValIn).toFixed(2);
  } catch (error) {
    return 0;
  }
};
const mapStateToProps = state => {
  const {
    currencyOut,
    currencyIn,
    currencyValIn,
    currencyData,
    dataLoaded,
    showModalDisclaimer
  } = state;

  return {
    currencyOut,
    currencyValOut: calc(currencyOut, currencyIn, currencyValIn, currencyData),
    currencyIn,
    currencyValIn,
    dataLoaded,
    showModalDisclaimer
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
