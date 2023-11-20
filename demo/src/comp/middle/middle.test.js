import React from "react";
import { shallow } from "enzyme";
import Middle from "./middle";

describe("Middle", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Middle />);
    expect(wrapper).toMatchSnapshot();
  });
});
