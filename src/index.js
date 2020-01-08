import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";

import Counter from "./Counter";
import ShowTime from "./ShowTime";
import Content from "./Router/Content";
import NoMatch from "./NoMatch";
// hooks(代替类组件的一些功能)
// 声明组件
// 函数组件(无状态组件,无生命周期,适合做UI组件)
// 属性(props)是只读的，不能修改

// 声明一个组件,点击按钮，实现加1的功能
// 声明一个类组件(state是类组件特有的，只能在当前组件用，存储当前组件的数据用)
ReactDOM.render(
  <Router basename="/build">
    <div>
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
        {[0, 1, 2, 3, 4].map(item => (
          <li key={item}>
            <NavLink
              to="/content"
              activeStyle={{
                background: "red",
                color: "#fff"
              }}
            >
              帖子{item}
            </NavLink>
          </li>
        ))}
      </ul>
      <div>
        <Route path="/counter" component={Counter} />
        <Route path="/showtime/:page" component={ShowTime} />
        <Route path="/content" component={Content} />
        <Route>
          <NoMatch />
        </Route>
      </div>
    </div>
  </Router>,
  document.getElementById("root")
);
