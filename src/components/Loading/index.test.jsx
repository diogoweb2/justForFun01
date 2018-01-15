import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Loading from "./index";

let wrapper;
describe("Loading", () => {
  it("should render", () => {
    wrapper = shallow(<Loading />);
    expect(wrapper).toHaveLength(1);
  });

  it("should match snapshot...", () => {
    wrapper = shallow(<Loading />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
