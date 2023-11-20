import React from "react";
import { shallow } from "enzyme";
import Sampleweather from "./sampleweather";

describe("Sampleweather", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Sampleweather />);
    expect(wrapper).toMatchSnapshot();
  });
});
