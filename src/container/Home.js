import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import List from "./List";

export default class Home extends Component {
  render() {
    let url = this.props.match.url;
    return (
      <div className="home">
        <div className="tabs">
          <Link to={`${url}/all`}>全部</Link>
          <Link to={`${url}/good`}>精华</Link>
          <Link to={`${url}/share`}>分享</Link>
          <Link to={`${url}/job`}>招聘</Link>
        </div>
        <div>
          <Route path="/home/:tab" component={List} />
        </div>
      </div>
    );
  }
}
