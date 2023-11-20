import React from "react";
import { shallow } from "enzyme";
import Newform from "./newform";

describe("Newform", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Newform />);
    expect(wrapper).toMatchSnapshot();
  });
});
