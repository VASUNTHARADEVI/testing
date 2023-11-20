import React from "react";
import { shallow } from "enzyme";
import Route from "./route";

describe("Route", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Route />);
    expect(wrapper).toMatchSnapshot();
  });
});
