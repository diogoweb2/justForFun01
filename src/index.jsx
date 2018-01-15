/* eslint-disable no-underscore-dangle */
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/currencyReducer";

import App from "./App";

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunk)
// );

const testClassToRender = document.querySelectorAll(".currencyApp");

let store;

for (let i = 0; i < testClassToRender.length; i += 1) {
  store = createStore(reducer, applyMiddleware(thunk));
  render(
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>,
    testClassToRender[i]
  );
}
