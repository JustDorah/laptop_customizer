import React, { Component } from "react";

export default class Feature extends Component {
  render() {
    return <div className="Feature">{this.props.features}</div>;
  }
}
