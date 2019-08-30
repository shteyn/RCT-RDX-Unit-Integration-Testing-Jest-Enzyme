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

  it("exampleMethod_updatesState should update state as expected", () => {
    const classInstance = wrapper.instance();
    classInstance.exampleMethod_updatesState();
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });

  it("exampleMethod_returnsValue should return value as expected", () => {
    const classInstance = wrapper.instance();
    const newValue = classInstance.exampleMethod_returnsValue(6);
    expect(newValue).toBe(7);
  });
});
