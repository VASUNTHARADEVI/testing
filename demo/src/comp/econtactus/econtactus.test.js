import React from "react";
import { shallow } from "enzyme";
import Econtactus from "./econtactus";

describe("Econtactus", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Econtactus />);
    expect(wrapper).toMatchSnapshot();
  });
});
