import React from "react";
import { shallow } from "enzyme";
import SharedButton from "./index";
import { findByTestAtrr, checkProps } from "../../../Utils";

describe("SharedButton Component", () => {
  describe("Checking PropTypes", () => {
    it("Should NOT throw a warning", () => {
      const expectedProps = {
        buttonText: "Example button text",
        emitEvent: () => {}
      };

      const propsErr = checkProps(SharedButton, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Should render a button", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Example button text",
        emitEvent: () => {}
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it("Should render a button", () => {
      const button = findByTestAtrr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
