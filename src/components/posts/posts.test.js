import React from "react";
import { shallow } from "enzyme";
import Posts from "./index";
import { findByTestAtrr, checkProps } from "../../../Utils";

describe("Posts Component", () => {
  describe("Checking PropTypes", () => {
    it("Should NOT throw a warning", () => {
      const expectedProps = {
        title: "Title Test",
        desc: "Description Test"
      };

      const propsErr = checkProps(Posts, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Should render a component", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Title Test",
        desc: "Description Test"
      };
      wrapper = shallow(<Posts {...props} />);
    });

    it("Should render component without errors", () => {
      const component = findByTestAtrr(wrapper, "postsComponent");
      expect(component.length).toBe(1);
    });

    it("Should render a title", () => {
      const component = findByTestAtrr(wrapper, "postsComponentTitle");
      expect(component.length).toBe(1);
    });
    it("Should render a title", () => {
      const component = findByTestAtrr(wrapper, "postsComponentDesc");
      expect(component.length).toBe(1);
    });
  });

  describe("Should not render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "Description Test"
      };
      wrapper = shallow(<Posts {...props} />);
    });
    it("Component is not rendered", () => {
      const component = findByTestAtrr(wrapper, "postsComponent");
      expect(component.length).toBe(0);
    });
  });
});
