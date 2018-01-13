import React from "react";
import { Provider } from "react-redux";
import { createMount } from "material-ui/test-utils";
import { MuiThemeProvider } from "material-ui/styles";
import expect from "expect";
import ThemeCSS from "__GLOBAL__/themeCSS";
import Utl from "__GLOBAL__/utils";
import getMocks from "__GLOBAL__/jsonMocks/messagesWP";
import ConnectedView from "../App.desktop/component";
import { fetchMessages } from "../../actions/messagesAction";
import reducer from "../../reducers";

let wrapper;
let store;
let mount;

let Collapse;

describe("Messages Widget - Integration test", () => {
  beforeAll(async done => {
    global.innerWidthJest = 1400;

    mount = createMount();

    store = Utl.createStore(reducer);

    getMocks({ customerId: 8313794 });

    store.dispatch(fetchMessages()).then(() => {
      const props = {
        dataLoaded: false
      };

      wrapper = mount(
        <Provider store={store}>
          <MuiThemeProvider theme={ThemeCSS}>
            <ConnectedView {...props} />
          </MuiThemeProvider>
        </Provider>
      );
      done();
    });
  });

  it("Messages List should have the first item selected'", () => {
    expect(
      wrapper
        .find("SelectableItemBGRS")
        .at(0)
        .props().selected
    ).toBeTruthy();
  });

  it("Filter Panel should SHOW when Filter btn is clicked'", () => {
    Collapse = wrapper.find("FilterPanel Collapse");

    if (Collapse.props().in) {
      // if opened, try to close
      wrapper.find("FilterBtn Button").simulate("click");
    }

    wrapper.find("FilterBtn Button").simulate("click");
    Collapse = wrapper.find("FilterPanel Collapse");

    expect(Collapse.props().in).toBeTruthy();
    expect(Collapse.find("FilterContent")).toHaveLength(1);
  });

  it("Filter Panel should HIDE when Filter btn is clicked again'", () => {
    Collapse = wrapper.find("FilterPanel Collapse");
    if (!Collapse.props().in) {
      // if closed, try to open
      wrapper.find("FilterBtn Button").simulate("click");
    }

    // close
    wrapper.find("FilterBtn Button").simulate("click");
    Collapse = wrapper.find("FilterPanel Collapse");

    expect(Collapse.props().in).toBeFalsy();
    expect(wrapper.find("FilterPanel Collapse").props().in).toBeFalsy();
  });

  it("Messages List should have the second item selected after click'", () => {
    wrapper
      .find("SelectableItemBGRS")
      .at(1)
      .simulate("click");
    expect(
      wrapper
        .find("SelectableItemBGRS")
        .at(1)
        .props().selected
    ).toBeTruthy();
  });

  it("Search should return 0 results", () => {
    wrapper.find("Search input").simulate("change", {
      target: { value: "!!!!!!!!!!!!!!!!@@@@" }
    });

    expect(wrapper.find("SelectableItemBGRS")).toHaveLength(0);

    // reset
    wrapper.find("Search input").simulate("change", {
      target: { value: "" }
    });
  });

  it("SortBy should affect MessageList", () => {
    const htmlBefore = wrapper.find("MessagesList").html();
    const secondValueFromTheList = wrapper
      .find("Sort SelectBGRS Select option")
      .get(1).key;

    wrapper.find("Sort SelectBGRS select").simulate("change", {
      target: { value: secondValueFromTheList }
    });

    expect(htmlBefore !== wrapper.find("MessagesList").html()).toBeTruthy();
  });

  it("Filter by HIDDEN should only show HIDDEN Msg on MessageList", () => {
    // click filter btn
    wrapper.find("FilterBtn Button").simulate("click");

    // I don't know why I had to override onChange to make it work...
    // something wrong to the radioGroup maybe
    wrapper
      .find("RadioGroup[name='Status']")
      .props()
      .onChange({ target: { value: "HIDDEN" } });

    wrapper.find("RadioGroup[name='Status']").simulate("change");

    expect(
      wrapper
        .find("MessagesList SelectableItemBGRS Text[actionStatus]")
        .not("[actionStatus='HIDDEN']")
    ).toHaveLength(0);
  });
});
