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

class App extends Component {
  fetch = () => this.props.fetchPosts();

  render() {
    const { posts } = this.props;
    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch
    };

    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
          <SharedButton {...configButton} />
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
