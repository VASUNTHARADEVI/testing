import React from "react";
import { shallow } from "enzyme";
import Lifecycle from "./lifecycle";

describe("Lifecycle", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Lifecycle />);
    expect(wrapper).toMatchSnapshot();
  });
});
