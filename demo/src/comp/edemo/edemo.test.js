import React from "react";
import { shallow } from "enzyme";
import Edemo from "./edemo";

describe("Edemo", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Edemo />);
    expect(wrapper).toMatchSnapshot();
  });
});
