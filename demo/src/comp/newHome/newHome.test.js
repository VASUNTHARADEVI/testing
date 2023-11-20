import React from "react";
import { shallow } from "enzyme";
import NewHome from "./newHome";

describe("NewHome", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewHome />);
    expect(wrapper).toMatchSnapshot();
  });
});
