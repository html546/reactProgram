import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "./component/header";
import Home from "./container/Home";
import Start from "./container/Start";
import Api from "./container/Api";
import About from "./container/About";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="main">
            <div className="content">
              <Route exact path="/" render={() => <Redirect to="/home" />} />
              <Route path="/home" component={Home} />
              <Route path="/start" component={Start} />
              <Route path="/api" component={Api} />
              <Route path="/about" component={About} />
            </div>
            <div className="slider"></div>
          </div>
        </div>
      </Router>
    );
  }
}
