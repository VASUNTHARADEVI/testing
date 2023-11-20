import React from "react";
import { shallow } from "enzyme";
import Ademo from "./ademo";

describe("Ademo", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Ademo />);
    expect(wrapper).toMatchSnapshot();
  });
});
