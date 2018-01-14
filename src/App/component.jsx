import React from "react";
import PropTypes from "prop-types";
import InputCurrency from "../components/InputCurrency";
import SelectCurrency from "../components/SelectCurrency";

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrencyData();
  }

  render() {
    const {
      currencyValIn,
      currencyIn,
      currencyValOut,
      currencyOut,
      setCurrencyValIn,
      setCurrencyIn,
      setCurrencyValOut,
      setCurrencyOut,
      dataLoaded
    } = this.props;
    return !dataLoaded ? (
      <div>loading...</div>
    ) : (
      <div>
        <InputCurrency onChange={setCurrencyValIn} value={currencyValIn} />
        <SelectCurrency value={currencyIn} onChange={setCurrencyIn} />
        <InputCurrency
          readonly
          onChange={setCurrencyValOut}
          value={currencyValOut}
        />
        <SelectCurrency value={currencyOut} onChange={setCurrencyOut} />
      </div>
    );
  }
}
App.propTypes = {
  currencyValIn: PropTypes.number.isRequired,
  currencyIn: PropTypes.string.isRequired,
  currencyValOut: PropTypes.number.isRequired,
  currencyOut: PropTypes.string.isRequired,
  setCurrencyValIn: PropTypes.func.isRequired,
  setCurrencyIn: PropTypes.func.isRequired,
  setCurrencyValOut: PropTypes.func.isRequired,
  setCurrencyOut: PropTypes.func.isRequired,
  getCurrencyData: PropTypes.func.isRequired,
  dataLoaded: PropTypes.bool.isRequired
};

export default App;
