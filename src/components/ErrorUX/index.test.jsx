import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ErrorUX from "./index";

let wrapper;
describe("ErrorUX", () => {
  it("should render", () => {
    wrapper = shallow(<ErrorUX>test</ErrorUX>);
    expect(wrapper).toHaveLength(1);
  });

  it("should match snapshot...", () => {
    wrapper = shallow(<ErrorUX>OK</ErrorUX>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
