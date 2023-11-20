import React from "react";
import { shallow } from "enzyme";
import Json from "./json";

describe("Json", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Json />);
    expect(wrapper).toMatchSnapshot();
  });
});
