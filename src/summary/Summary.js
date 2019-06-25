import React, { Component } from "react";

export default class Summary extends Component {
  render() {
    return (
      <div>
        {this.props.summary}
        <div className="summary__total">
          <div className="summary__total__label">Your Price: </div>
          <div className="summary__total__value">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD"
            }).format(this.props.total)}
          </div>
        </div>
      </div>
    );
  }
}
