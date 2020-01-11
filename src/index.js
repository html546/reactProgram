import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "./react-router-dom";
import Home from "./container/Home";
import About from "./container/About";
import NoMatch from "./container/NoMatch";

window.onhashchange = function() {
  console.log(window.location.hash);
};

ReactDOM.render(
  <Router>
    <div>
      <Link to="/home">首页</Link>
      <Link to="/about">about</Link>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/home/:id" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/nomatch" component={NoMatch} />
        <Redirect to="/nomatch" />
      </Switch>
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
