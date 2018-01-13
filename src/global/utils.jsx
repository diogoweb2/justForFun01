import React from "react";
import { render } from "react-dom";
import ES6Promise from "es6-promise";
import PubSub from "pubsub-js";
import { MuiThemeProvider } from "material-ui/styles";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import * as Constants from "./constants";
import ThemeCSS from "./themeCSS";

import "./sharepoint-structure.css";
import "./corev15.css";

export { default as DateHelper } from "fecha"; // https://github.com/taylorhakes/fecha
export { default as FilterHelper } from "./helpers/FilterHelper";
export { default as WebAPI } from "./helpers/WebAPI";
export { SharepointVars } from "./constants";
export { default as createReducer, createAction } from "./helpers/Redux";
// const eventEmitter = new EventEmitter();
ES6Promise.polyfill();

const utils = {
  getEventName: () => Constants.EventEmitterName,
  // subscribe to an event
  eventSubscribe: (eventID, eventName) => PubSub.subscribe(eventID, eventName),
  // unsubscribe to an event
  eventUnsubscribe: eventID => PubSub.unsubscribe(eventID),
  // trigger the event
  eventTrigger: (eventID, param) => PubSub.publish(eventID, param),

  // add an event to a DOM element with id
  addEventListener: (eventName, controlID, eventID, param) => {
    document.addEventListener(eventName, e => {
      if (e.target && e.target.id === controlID) {
        utils.eventTrigger(eventID, param);
      }
    });
  },
  // redirect to a link
  href: link => {
    window.location.href = link;
  },
  // show left menu
  showLeftContent() {
    const leftMenu = document.querySelector("#BGRS-left-menu");
    if (leftMenu) {
      leftMenu.style.display = "table-cell";
    }
  },
  renderAfterDOMload(classToRender, Component, props, conf) {
    this.showLeftContent();
    const classToRenderArr = document.querySelectorAll(`.${classToRender}`);
    let el;
    let hiddenJson;
    for (let i = 0; i < classToRenderArr.length; i += 1) {
      el = classToRenderArr[i];
      try {
        hiddenJson = JSON.parse(
          el.parentElement.querySelector("input[type='hidden']").value
        );
      } catch (error) {
        hiddenJson = [];
      }

      // this.applyThemeToComponent(Component, hiddenJson, ...props, conf),
      render(
        conf && conf.store ? (
          <Provider store={conf.store}>
            <MuiThemeProvider theme={ThemeCSS}>
              <div>
                <Component hiddenJson={hiddenJson} {...props} />
              </div>
            </MuiThemeProvider>
          </Provider>
        ) : (
          <MuiThemeProvider theme={ThemeCSS}>
            <div>
              <Component hiddenJson={hiddenJson} {...props} />
            </div>
          </MuiThemeProvider>
        ),
        classToRenderArr[i]
      );
      if (conf.callback) {
        conf.callback();
      }
    }
  },

  // render control (we need that because sharepoint add all js files to the <HEAD> instead of </body>)
  render(Component, classToRender, conf, ...props) {
    const loadedStates = ["complete", "loaded", "interactive"];

    if (loadedStates.indexOf(document.readyState) >= 0 && document.body) {
      this.renderAfterDOMload(classToRender, Component, props, conf);
    } else {
      window.addEventListener(
        "DOMContentLoaded",
        () => {
          if (conf && conf.mockJson && DEV_ENV) {
            import(`./jsonMocks/${conf.mockJson}`).then(getMocks => {
              getMocks.default({});
              this.renderAfterDOMload(classToRender, Component, props, conf);
            });
          } else {
            this.renderAfterDOMload(classToRender, Component, props, conf);
          }
        },
        false
      );
    }
  },

  // this methdod make it easy to bind automatically all internal methdods to a component.
  // react methods are ignored.you can pass other methods to be ignored.
  getAllMethods(classToFilter, ...ignore) {
    let ignoreMethods = [
      "componentDidMount",
      "constructor",
      "componentWillMount",
      "componentWillReceiveProps",
      "shouldComponentUpdate",
      "componentWillUpdate",
      "componentDidUpdate",
      "componentWillUnmount",
      "componentDidCatch",
      "render"
    ];

    if (ignore) {
      ignoreMethods = ignoreMethods.concat(...ignore);
    }

    const methods = Object.getOwnPropertyNames(classToFilter).filter(
      p =>
        typeof classToFilter[p] === "function" &&
        ignoreMethods.indexOf(p) === -1
    );

    const methodsArr = {};

    for (let i = 0; i < methods.length; i += 1) {
      methodsArr[methods[i]] = classToFilter[methods[i]];
    }

    return methodsArr;
  },
  // redux
  createStore(reducer) {
    /* eslint-disable no-underscore-dangle */
    return createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(thunk)
    );
    /* eslint-enable */
  }
};

export default utils;
