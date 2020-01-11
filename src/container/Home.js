import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import List from "./List";

export default class Home extends Component {
  render() {
    console.log(this.props);
    return <div>Home</div>;
  }
}
