import React from "react";
import PropTypes from "prop-types";
import InputCurrency from "../components/InputCurrency";
import SelectCurrency from "../components/SelectCurrency";
import Label from "../components/Label";
import Modal from "../components/Modal";
import "./component.scss";
import ErrorUX from "../components/ErrorUX";
import Loading from "../components/Loading";

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
      dataLoaded,
      setModalDisclaimer,
      showModalDisclaimer,
      apiError
    } = this.props;

    if (apiError) {
      return <ErrorUX> Generic error msg for API failure.... </ErrorUX>;
    }
    if (!dataLoaded) {
      return <Loading />;
    }
    return (
      <div className="currencyWrap">
        <h1>Currency Converter</h1>
        <div className="slds-grid slds-gutters slds-wrap">
          <div className="slds-col slds-size_3-of-3">
            <Label htmlFor="currencyValIn">
              Type in amount and select currency:
            </Label>
          </div>
          <div className="slds-col slds-size_3-of-3 slds-medium-size_2-of-3 ">
            <InputCurrency
              id="currencyValIn"
              onChange={setCurrencyValIn}
              value={currencyValIn}
            />
          </div>
          <div className="slds-col slds-size_3-of-3 slds-medium-size_1-of-3 ">
            <SelectCurrency value={currencyIn} onChange={setCurrencyIn} />
          </div>

          <div className="slds-col slds-size_3-of-3  ">
            <Label htmlFor="setCurrencyValOut">Converted amount:</Label>
          </div>
          <div className="slds-col slds-size_3-of-3 slds-medium-size_2-of-3">
            <InputCurrency
              id="setCurrencyValOut"
              disable
              onChange={setCurrencyValOut}
              value={currencyValOut}
            />
          </div>
          <div className="slds-col slds-size_3-of-3 slds-medium-size_1-of-3 ">
            <SelectCurrency value={currencyOut} onChange={setCurrencyOut} />
          </div>
        </div>
        <Modal
          show={showModalDisclaimer}
          handleVisibility={setModalDisclaimer}
          title="Disclaimer"
        >
          Disclaimer msg...
        </Modal>
      </div>
    );
  }
}
App.propTypes = {
  currencyValIn: PropTypes.string.isRequired,
  currencyIn: PropTypes.string.isRequired,
  currencyValOut: PropTypes.string.isRequired,
  currencyOut: PropTypes.string.isRequired,
  setCurrencyValIn: PropTypes.func.isRequired,
  setCurrencyIn: PropTypes.func.isRequired,
  setCurrencyValOut: PropTypes.func.isRequired,
  setCurrencyOut: PropTypes.func.isRequired,
  getCurrencyData: PropTypes.func.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
  setModalDisclaimer: PropTypes.func.isRequired,
  showModalDisclaimer: PropTypes.bool.isRequired,
  apiError: PropTypes.bool.isRequired
};

export default App;
