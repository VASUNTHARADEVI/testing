import React from "react";
import { shallow } from "enzyme";
import Submit from "./submit";

describe("Submit", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Submit />);
    expect(wrapper).toMatchSnapshot();
  });
});
