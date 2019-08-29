import React, { Component } from "react";
import PropTypes from "prop-types";

class Posts extends Component {
  render() {
    const { title, desc } = this.props;

    if (!title) {
      return null;
    }
    return (
      <div data-test="postsComponent">
        <h2 data-test="postsComponentTitle">{title}</h2>
        <p data-test="postsComponentDesc">{desc}</p>
      </div>
    );
  }
}

Posts.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
};

export default Posts;
