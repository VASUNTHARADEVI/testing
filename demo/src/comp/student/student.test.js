import React from "react";
import { shallow } from "enzyme";
import Student from "./student";

describe("Student", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Student />);
    expect(wrapper).toMatchSnapshot();
  });
});
