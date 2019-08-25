import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import { findByTestAtrr, checkProps } from "../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};
describe("Headline Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [
          {
            nickName: "Test nickName",
            email: "Test Email",
            age: 23,
            online: false
          }
        ]
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc"
      };
      wrapper = setUp(props);
    });
    it("Should render without errors", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });
    it("Should render H1", () => {
      const component = findByTestAtrr(wrapper, "HeadlineHeader");
      expect(component.length).toBe(1);
    });
    it("Should render paragraph", () => {
      const component = findByTestAtrr(wrapper, "HeadlineDesc");
      expect(component.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it("Should not render", () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
