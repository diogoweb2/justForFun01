import reducers from "./currencyReducer";

const defaultState = {
  currencyValIn: "",
  currencyValOut: "",
  currencyIn: "CAD",
  currencyOut: "USD",
  dataLoaded: true,
  apiError: false,
  showModalDisclaimer: false
};

describe("Currency Reducer", () => {
  it("should input original currency val", () => {
    const state = reducers(defaultState, {
      type: "SET_CURRENCY_VAL_IN",
      value: "2"
    });
    expect(state).toEqual({
      currencyValIn: "2",
      currencyValOut: "",
      currencyIn: "CAD",
      currencyOut: "USD",
      dataLoaded: true,
      apiError: false,
      showModalDisclaimer: false
    });
  });

  it("should change original currency select", () => {
    const state = reducers(defaultState, {
      type: "SET_CURRENCY_IN",
      value: "USD"
    });
    expect(state).toEqual({
      currencyValIn: "",
      currencyValOut: "",
      currencyIn: "USD",
      currencyOut: "USD",
      dataLoaded: true,
      apiError: false,
      showModalDisclaimer: false
    });
  });

  it("should change desired currency select", () => {
    const state = reducers(defaultState, {
      type: "SET_CURRENCY_OUT",
      value: "EUR"
    });
    expect(state).toEqual({
      currencyValIn: "",
      currencyValOut: "",
      currencyIn: "CAD",
      currencyOut: "EUR",
      dataLoaded: true,
      apiError: false,
      showModalDisclaimer: false
    });
  });

  it("should open disclaimer", () => {
    const state = reducers(defaultState, {
      type: "SET_HANDLE_DISCLAIMER_MODAL"
    });
    expect(state).toEqual({
      currencyValIn: "",
      currencyValOut: "",
      currencyIn: "CAD",
      currencyOut: "USD",
      dataLoaded: true,
      apiError: false,
      showModalDisclaimer: true
    });
  });
});
