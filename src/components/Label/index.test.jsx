import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Label from "./index";

let wrapper;
describe("Label", () => {
  it("should render", () => {
    wrapper = shallow(<Label>test</Label>);
    expect(wrapper).toHaveLength(1);
  });

  it("should match snapshot...", () => {
    wrapper = shallow(<Label>test</Label>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
