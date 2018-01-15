/* eslint-disable no-underscore-dangle */
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import ES6Promise from "es6-promise";
import "whatwg-fetch";
import thunk from "redux-thunk";
import reducer from "./reducers/currencyReducer";
import App from "./App";

ES6Promise.polyfill();

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
