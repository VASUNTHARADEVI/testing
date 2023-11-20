import React from "react";
import { shallow } from "enzyme";
import Project1 from "./project1";

describe("Project1", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Project1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
