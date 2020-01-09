import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Hello extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default Hello;
