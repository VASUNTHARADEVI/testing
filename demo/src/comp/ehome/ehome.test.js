import React from "react";
import { shallow } from "enzyme";
import Ehome from "./ehome";

describe("Ehome", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Ehome />);
    expect(wrapper).toMatchSnapshot();
  });
});
