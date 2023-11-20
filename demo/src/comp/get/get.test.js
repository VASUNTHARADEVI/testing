import React from "react";
import { shallow } from "enzyme";
import Get from "./get";

describe("Get", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Get />);
    expect(wrapper).toMatchSnapshot();
  });
});
