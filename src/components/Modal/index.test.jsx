import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Modal from "./index";

const fn = jest.fn();
let wrapper;

describe("Modal", () => {
  it("should render", () => {
    wrapper = shallow(<Modal>test</Modal>);
    expect(wrapper).toHaveLength(1);
  });

  it("should match snapshot opened...", () => {
    wrapper = shallow(
      <Modal title="test title" show>
        test
      </Modal>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should match snapshot closed...", () => {
    wrapper = shallow(
      <Modal title="test title" show={false}>
        test
      </Modal>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
