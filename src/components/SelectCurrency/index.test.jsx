import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import SelectCurrency from "./index";

let wrapper;
describe("SelectCurrency", () => {
  const fn = jest.fn();

  it("should render", () => {
    wrapper = shallow(<SelectCurrency />);
    expect(wrapper).toHaveLength(1);
  });

  it("should change currency", () => {
    wrapper = shallow(
      <SelectCurrency onChange={fn} currencies={["CAD", "USD"]} />
    );
    wrapper.find("select").simulate("change", { target: { value: "USD" } });
    expect(fn).toHaveBeenCalled();
  });

  it("should match snapshot...", () => {
    wrapper = shallow(<SelectCurrency currencies={["CAD", "USD"]} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
