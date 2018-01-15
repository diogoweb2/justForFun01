import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import InputCurrency from "./index";

let wrapper;
describe("InputCurrency", () => {
  it("should render", () => {
    wrapper = shallow(<InputCurrency value="test" />);
    expect(wrapper).toHaveLength(1);
  });

  it("should match snapshot...", () => {
    wrapper = shallow(<InputCurrency value="test" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
