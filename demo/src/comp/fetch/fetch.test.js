import React from "react";
import { shallow } from "enzyme";
import Fetch from "./fetch";

describe("Fetch", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Fetch />);
    expect(wrapper).toMatchSnapshot();
  });
});
