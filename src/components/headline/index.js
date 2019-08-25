import React, { Component } from "react";
import PropTypes from "prop-types";

export class Headline extends Component {
  render() {
    const { header, desc } = this.props;

    if (!header) {
      return null;
    }
    return (
      <div data-test="HeadlineComponent">
        <h1 data-test="HeadlineHeader">{header}</h1>
        <p data-test="HeadlineDesc">{desc}</p>
      </div>
    );
  }
}
Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      nickName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      online: PropTypes.bool
    })
  )
};
export default Headline;
