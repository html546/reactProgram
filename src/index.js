import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "./react-router-dom";
import Home from "./container/Home";
import About from "./container/About";

window.onhashchange = function() {
  console.log(window.location.hash);
};

ReactDOM.render(
  <Router>
    <div>
      <Link to="/home">首页</Link>
      <Link to="/about">about</Link>
      <Route exact path="/home" component={Home} />
      <Route path="/home/:id" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>,
  document.getElementById("root")
);

/* ReactDOM.render(
  <Router>
    <div>
      <div>
        <Link to="/home">首页</Link>
        <Link to="/about">关于</Link>
      </div>
      <div>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </div>
  </Router>,
  document.getElementById("root")
);
 */
