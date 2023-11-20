import React from "react";
import { shallow } from "enzyme";
import Simple from "./simple";

describe("Simple", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Simple />);
    expect(wrapper).toMatchSnapshot();
  });
});
