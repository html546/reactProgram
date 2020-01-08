import React, { Component } from "react";
import Child from "./Child";
class Parent extends Component {
  state = {};
  render() {
    return (
      <div>
        <Child />
      </div>
    );
  }
}

export default Parent;
