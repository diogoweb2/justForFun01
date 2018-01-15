import React from "react";
import PropTypes from "prop-types";
import InputCurrency from "../components/InputCurrency";
import SelectCurrency from "../components/SelectCurrency";
import Label from "../components/Label";
import Modal from "../components/Modal";

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
      showModalDisclaimer
    } = this.props;
    return !dataLoaded ? (
      <div>loading...</div>
    ) : (
      <div>
        <div className="slds-grid slds-gutters slds-wrap">
          <div className="slds-col slds-size_3-of-3">
            <Label htmlFor="currencyValIn">
              Type in amount and select currency:
            </Label>
          </div>
          <div className="slds-col slds-size_2-of-3">
            <InputCurrency
              id="currencyValIn"
              onChange={setCurrencyValIn}
              value={currencyValIn}
            />
          </div>
          <div className="slds-col slds-size_1-of-3">
            <SelectCurrency value={currencyIn} onChange={setCurrencyIn} />
          </div>

          <div className="slds-col slds-size_3-of-3">
            <Label htmlFor="setCurrencyValOut">Converted amount:</Label>
          </div>
          <div className="slds-col slds-size_2-of-3">
            <InputCurrency
              id="setCurrencyValOut"
              disable
              onChange={setCurrencyValOut}
              value={currencyValOut}
            />
          </div>
          <div className="slds-col slds-size_1-of-3">
            <SelectCurrency value={currencyOut} onChange={setCurrencyOut} />
          </div>
        </div>
        <Modal
          show={showModalDisclaimer}
          handleVisibility={setModalDisclaimer}
          title="Disclaimer"
        >
          test
        </Modal>
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
  dataLoaded: PropTypes.bool.isRequired,
  setModalDisclaimer: PropTypes.func.isRequired,
  showModalDisclaimer: PropTypes.bool.isRequired
};

export default App;
