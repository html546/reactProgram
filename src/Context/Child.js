import React, { Component } from "react";
import { Consumer } from "./Context";

class Child extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1> Context</h1>
        <Consumer>{data => <div>{data}</div>}</Consumer>
      </div>
    );
  }
}

export default Child;
