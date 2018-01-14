import React from "react";
import { createMount, createShallow } from "material-ui/test-utils";
import toJson from "enzyme-to-json";
import { JssProvider } from "react-jss";
import { MuiThemeProvider } from "material-ui/styles";
import { getFakeItem } from "__GLOBAL__/jsonMocks/messagesWP";

import ThemeCSS from "__GLOBAL__/themeCSS";
import MessagesList from "./MessagesList";

describe("Message List", () => {
  let wrapper;
  let mount;
  let shallow;
  let data = [];
  beforeAll(() => {
    mount = createMount();
    shallow = createShallow();

    for (let i = 0; i < 10; i += 1) {
      data = data.concat(...getFakeItem());
    }
    wrapper = mount(<MessagesList data={data} />);
  });

  it("should show 10 items by default'", () => {
    expect(wrapper.find("SelectableItemBGRS")).toHaveLength(10);
  });

  it("should have high importance icon", () => {
    const highImportanceData = [
      {
        MessagePriority: "High"
      }
    ];

    wrapper = mount(<MessagesList data={highImportanceData} />);

    expect(wrapper.find("PriorityHigh")).toHaveLength(1);
  });

  it("should render correctly...", () => {
    const dataSnapshot = [
      {
        MessageId: 123,
        MessageTitle: "test snapshot",
        MessagePriority: "High",
        MessageType: "EXPENSE",
        MessageDate: "2017-12-01",
        ActionStatus: "READ",
        Sender: "Diogo2"
      }
    ];
    const createGenerateClassName = () => rule => `${rule.key}`;
    wrapper = mount(
      <JssProvider generateClassName={createGenerateClassName()}>
        <MuiThemeProvider theme={ThemeCSS}>
          <MessagesList data={dataSnapshot} />
        </MuiThemeProvider>
      </JssProvider>
    );
    expect(wrapper.html()).toMatchSnapshot();
  });
});
