import React from "react";
import { shallow } from "enzyme";
import Lifecyclechild from "./lifecyclechild";

describe("Lifecyclechild", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Lifecyclechild />);
    expect(wrapper).toMatchSnapshot();
  });
});
