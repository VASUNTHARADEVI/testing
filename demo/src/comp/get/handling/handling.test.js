import React from "react";
import { shallow } from "enzyme";
import Handling from "./handling";

describe("Handling", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Handling />);
    expect(wrapper).toMatchSnapshot();
  });
});
