import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Button from "./index";

let wrapper;
describe("Button", () => {
  const fn = jest.fn();

  it("should render", () => {
    wrapper = shallow(<Button>test</Button>);
    expect(wrapper).toHaveLength(1);
  });

  it("should trigger click", () => {
    wrapper = shallow(<Button onClick={fn} />);
    wrapper.find("button").simulate("click");
    expect(fn).toHaveBeenCalled();
  });

  it("should change styles", () => {
    wrapper = shallow(<Button type="secondary">OK</Button>);
    expect(wrapper.find(".slds-button_neutral")).toHaveLength(1);
  });

  it("should match snapshot - Link...", () => {
    wrapper = shallow(<Button>OK</Button>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should match snapshot - secondary...", () => {
    wrapper = shallow(<Button type="secondary">OK</Button>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("should match snapshot - primary...", () => {
    wrapper = shallow(<Button type="primary">OK</Button>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
