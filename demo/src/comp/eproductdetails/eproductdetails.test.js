import React from "react";
import { shallow } from "enzyme";
import Eproductdetails from "./eproductdetails";

describe("Eproductdetails", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Eproductdetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
