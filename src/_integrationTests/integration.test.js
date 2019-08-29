import moxios from "moxios";
import { testStore } from "./../../Utils";
import { fetchPosts } from "./../actions";

describe("fetchPosts action tests", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is updated correctly", () => {
    const expectedState = [
      {
        title: "Test title example 1",
        body: "Body title example 1"
      },
      {
        title: "Test title example 2",
        body: "Body title example 2"
      },
      {
        title: "Test title example 3",
        body: "Body title example 3"
      }
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
