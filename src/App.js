import React, { Component } from "react";
import "./App.css";
import NameHeader from "./NameHeader";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameHeader />

        <Main features={this.props.features} />
      </div>
    );
  }
}

export default App;
