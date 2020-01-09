import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  withRouter
} from "react-router-dom";

import Counter from "./Counter";
import ShowTime from "./ShowTime";
import Content from "./Router/Content";
import Topic from "./Router/Topic";
import NoMatch from "./NoMatch";
import Hooks from "./Router/Hooks";
// hooks(代替类组件的一些功能)
// 声明组件
// 函数组件(无状态组件,无生命周期,适合做UI组件)
// 属性(props)是只读的，不能修改

// 声明一个组件,点击按钮，实现加1的功能
// 声明一个类组件(state是类组件特有的，只能在当前组件用，存储当前组件的数据用)

function Login(props) {
  console.log(props);
  return <button>登录</button>;
}

let LoginWithRouter = withRouter(Login);

ReactDOM.render(
  <Router basename="/build">
    <div>
      {/* <LoginWithRouter /> */}
      <ul>
        <li>
          <NavLink
            activeStyle={{
              background: "red",
              color: "#fff"
            }}
            to={{
              pathname: "/counter",
              state: {
                id: 1
              },
              search: "?search=1"
            }}
          >
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/showtime/1"
            activeStyle={{
              background: "red",
              color: "#fff"
            }}
          >
            ShowTime1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/showtime/2"
            activeStyle={{
              background: "red",
              color: "#fff"
            }}
          >
            ShowTime2
          </NavLink>
        </li>
        {/* {[0, 1, 2, 3, 4].map(item => (
          <li key={item}>
            <NavLink
              to={"/content/" + item}
              activeStyle={{
                background: "red",
                color: "#fff"
              }}
            >
              帖子{item}
            </NavLink>
          </li>
        ))} */}
        {[1, 2, 3, 4, 5].map(item => (
          <li key={item}>
            <NavLink to={"/topic/" + item}>帖子{item}</NavLink>
          </li>
        ))}
      </ul>
      <div>
        <Switch>
          <Route path="/counter" component={Counter} />
          <Route path="/showtime/:page" component={ShowTime} />
          {/* <Route path="/content/:id" component={Content} /> */}
          <Route path="/topic/:page" component={Topic} />
          <Route path="/content/:id" component={Content} />
          <Route path="/hooks/:id" component={Hooks} />
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>,
  document.getElementById("root")
);
