import React from "react";
import { shallow } from "enzyme";
import Eproductlist from "./eproductlist";

describe("Eproductlist", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Eproductlist />);
    expect(wrapper).toMatchSnapshot();
  });
});
