import React from "react";
import { shallow } from "enzyme";
import RowDelete from "./rowDelete";

describe("RowDelete", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RowDelete />);
    expect(wrapper).toMatchSnapshot();
  });
});
