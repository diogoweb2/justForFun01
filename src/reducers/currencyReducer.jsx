const defaultState = {
  currencyValIn: "",
  currencyValOut: "",
  currencyIn: "CAD",
  currencyOut: "USD",
  dataLoaded: false,
  apiError: false,
  showModalDisclaimer: false,
  currencyData: {
    date: "2018-01-12",
    rates: {
      CAD: 1,
      USD: 0.7988,
      EUR: 0.65815
    }
  }
};

const currencyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_CURRENCY_VAL_IN":
      return Object.assign({}, state, {
        currencyValIn: action.value,
        currencyData: state.currencyData
      });
    case "SET_CURRENCY_IN":
      return Object.assign({}, state, {
        currencyIn: action.value,
        currencyData: state.currencyData
      });

    case "SET_CURRENCY_VAL_OUT":
      return Object.assign({}, state, {
        currencyValOut: action.value
      });
    case "SET_CURRENCY_OUT":
      return Object.assign({}, state, {
        currencyOut: action.value,
        currencyData: state.currencyData
      });
    case "FETCH_API_PENDING":
      return Object.assign({}, state, { dataLoaded: false });

    case "FETCH_API_SUCCESS":
      return Object.assign({}, state, {
        dataLoaded: true,
        currencyData: action.currencyData
      });

    case "SET_HANDLE_DISCLAIMER_MODAL":
      return Object.assign({}, state, {
        showModalDisclaimer: !state.showModalDisclaimer
      });
    case "FETCH_API_ERROR":
      return Object.assign({}, state, {
        apiError: true
      });

    default:
      return state;
  }
};

export default currencyReducer;
