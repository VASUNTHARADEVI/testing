import React from "react";
import { shallow } from "enzyme";
import Tableview from "./tableview";

describe("Tableview", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Tableview />);
    expect(wrapper).toMatchSnapshot();
  });
});
