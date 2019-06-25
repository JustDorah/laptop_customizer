import React, { Component } from "react";
import SummaryTotal from "./SummaryTotal";

export default class Summary extends Component {
  render() {
    return (
      <div>
        {this.props.summary}
        <SummaryTotal total={this.props.total} />
      </div>
    );
  }
}
