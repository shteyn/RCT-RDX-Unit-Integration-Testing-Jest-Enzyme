import React, { Component } from "react";

export class Headline extends Component {
  constructor(props) {
    super(props);
  }
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

export default Headline;
