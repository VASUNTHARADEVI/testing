import React from "react";
import { shallow } from "enzyme";
import Eabout from "./eabout";

describe("Eabout", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Eabout />);
    expect(wrapper).toMatchSnapshot();
  });
});
