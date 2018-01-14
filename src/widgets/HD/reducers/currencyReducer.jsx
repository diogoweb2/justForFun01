import { createReducer } from "__GLOBAL__/utils";

const defaultState = {
  currencyValIn: 0,
  currencyValOut: 0,
  currencyIn: "CAD",
  currencyOut: "USD"
};

const currencyReducer = {
  SET_CURRENCY_VAL_IN: (state, action) =>
    Object.assign({}, state, {
      currencyValIn: action.value
    }),

  SET_CURRENCY_IN: (state, action) =>
    Object.assign({}, state, { currencyIn: action.value }),

  SET_CURRENCY_VAL_OUT: (state, action) =>
    Object.assign({}, state, { currencyValOut: action.value }),

  SET_CURRENCY_OUT: (state, action) =>
    Object.assign({}, state, { currencyOut: action.value })
};

export default createReducer(defaultState, currencyReducer);
