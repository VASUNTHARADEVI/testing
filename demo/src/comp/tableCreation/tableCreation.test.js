import React from "react";
import { shallow } from "enzyme";
import TableCreation from "./tableCreation";

describe("TableCreation", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TableCreation />);
    expect(wrapper).toMatchSnapshot();
  });
});
