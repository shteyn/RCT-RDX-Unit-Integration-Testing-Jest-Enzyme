import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "./../Utils";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};
describe("Test App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Test title 1",
          body: "Test body 1"
        },
        {
          title: "Test title 2",
          body: "Test body 2"
        },
        {
          title: "Test title 3",
          body: "Test body 3"
        }
      ]
    };
    wrapper = setUp(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "appComponentTest");
    expect(component.length).toBe(1);
  });
});
