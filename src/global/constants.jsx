export const MobileMaxWidth = 600;
export const DesktopMinWidth = 601;
export const MobileMenuMaxWidth = 768;
export const DesktopMenuMinWidth = 769;

// Add here all the events name
export const EventEmitterName = {
  TOGGLE_MENU: "TOGGLE_MENU",

  COLLAPSE_WP_MOBILE: "COLLAPSE_WP_MOBILE"
};

export const ActionMenu = {
  Filter: "Filter",

  None: ""
};

export const UITimers = {
  panelAutoHide: 500
};

const TEST_ENV = process.env.NODE_ENV === "test";

export const SharepointVars = {
  cacheMaxAge: 1, // minutes
  webAPI: () => {
    if (TEST_ENV) {
      return "http://dev1.reloaccess.com/API/";
    }
    return document.body && document.body.querySelector("#webAPIUrl")
      ? document.body.querySelector("#webAPIUrl").value
      : "";
  },
  CustomerId: customerId => {
    if (TEST_ENV) {
      if (customerId) {
        window.customerIdTest = customerId;
      }
      return window.customerIdTest;
    }

    if (document.body && document.body.querySelector("#CustomerId")) {
      return document.body.querySelector("#CustomerId").value;
    }

    return "";
  }
};
export const statesUS = [
  "AK",
  "AL",
  "AR",
  "AZ",
  "CA",
  "CO",
  "CT",
  "DC",
  "DE",
  "FL",
  "GA",
  "GU",
  "HI",
  "IA",
  "ID",
  "IL",
  "IN",
  "KS",
  "KY",
  "LA",
  "MA",
  "MD",
  "ME",
  "MH",
  "MI",
  "MN",
  "MO",
  "MS",
  "MT",
  "NC",
  "ND",
  "NE",
  "NH",
  "NJ",
  "NM",
  "NV",
  "NY",
  "OH",
  "OK",
  "OR",
  "PA",
  "PR",
  "PW",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VA",
  "VI",
  "VT",
  "WA",
  "WI",
  "WV",
  "WY"
];
