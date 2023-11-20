import React from "react";
import { shallow } from "enzyme";
import Event from "./event";

describe("Event", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Event />);
    expect(wrapper).toMatchSnapshot();
  });
});
