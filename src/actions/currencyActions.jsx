import { createAction } from "__GLOBAL__/utils";

export const setCurrencyValIn = createAction("SET_CURRENCY_VAL_IN", "value");
export const setCurrencyIn = createAction("SET_CURRENCY_IN", "value");
export const setCurrencyValOut = createAction("SET_CURRENCY_VAL_OUT", "value");
export const setCurrencyOut = createAction("SET_CURRENCY_OUT", "value");
export const fetchSuccess = createAction("FETCH_API_SUCCESS", "currencyData");
export const fetchPending = createAction("FETCH_API_PENDING");
export const fetchError = createAction("FETCH_API_ERROR");

export const getCurrencyData = () => dispatch => {
  dispatch(fetchPending());

  fetch("https://api.fixer.io/latest?base=CAD&symbols=USD,EUR", {
    method: "get"
  })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response;
    })
    .then(response => response.json())
    .then(currencyData => {
      // add base currency to rates array
      currencyData.rates[currencyData.base] = 1;
      return dispatch(fetchSuccess(currencyData));
    })
    .catch(() => dispatch(fetchError()));
};
