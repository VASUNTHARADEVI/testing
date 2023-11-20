import React from "react";
import { shallow } from "enzyme";
import Productlist from "./productlist";

describe("Productlist", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Productlist />);
    expect(wrapper).toMatchSnapshot();
  });
});
