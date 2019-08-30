import React, { Component } from "react";
import Header from "./components/header/index";
import Headline from "./components/headline/index";
import SharedButton from "./components/button/index";
import Posts from "./components/posts/index";

import { connect } from "react-redux";
import { fetchPosts } from "./actions";
import "./app.scss";

//The tempArr const is only for testing purposes.
const tempArr = [
  {
    nickName: "Joe",
    email: "joe@mail.com",
    age: 24,
    online: false
  }
];
//

const initialState = {
  hideBtn: false
};

class App extends Component {
  state = {
    ...initialState
  };

  fetch = () => {
    this.props.fetchPosts();
    this.exampleMethod_updatesState();
  };

  exampleMethod_updatesState() {
    console.log("STATE", this.state);
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    });
  }

  exampleMethod_returnsValue(number) {
    return number + 1;
  }

  render() {
    const { posts } = this.props;
    const { hideBtn } = this.state;
    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch
    };

    return (
      <div className="App" data-test="appComponentTest">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
          {!hideBtn && <SharedButton {...configButton} />}
          {posts.length > 0
            ? posts.map((post, index) => {
                const { title, body } = post;
                return <Posts key={index} title={title} desc={body} />;
              })
            : null}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};
export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
