import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import App from "./component";
import {
  setCurrencyValIn,
  setCurrencyValOut,
  setCurrencyIn,
  setCurrencyOut
} from "../actions/currencyActions";

const mapStateToProps = state => ({
  currencyOut: state.currencyReducer.currencyOut,
  currencyValOut: state.currencyReducer.currencyValOut,
  currencyIn: state.currencyReducer.currencyIn,
  currencyValIn: state.currencyReducer.currencyValIn
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setCurrencyValIn,
      setCurrencyValOut,
      setCurrencyIn,
      setCurrencyOut
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
