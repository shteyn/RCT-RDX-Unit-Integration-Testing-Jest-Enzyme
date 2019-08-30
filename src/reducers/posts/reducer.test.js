import { types } from "../../actions/types";
import postReducer from "./reducer";

describe("Post Reducer", () => {
  it("Should return default state", () => {
    const newState = postReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("Should return new state if receiving type", () => {
    const posts = [
      {
        title: "Test title 1"
      },
      {
        title: "Test title 2"
      },
      {
        title: "Test title 3"
      }
    ];
    const newState = postReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    });

    expect(newState).toEqual(posts);
  });
});
