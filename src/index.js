import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Counter from "./Counter";
import ShowTime from "./ShowTime";
// hooks(代替类组件的一些功能)
// 声明组件
// 函数组件(无状态组件,无生命周期,适合做UI组件)
// 属性(props)是只读的，不能修改

// 声明一个组件,点击按钮，实现加1的功能
// 声明一个类组件(state是类组件特有的，只能在当前组件用，存储当前组件的数据用)
ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/showtime/1">ShowTime1</Link>
        </li>
        <li>
          <Link to="/showtime/2">ShowTime2</Link>
        </li>
      </ul>
      <div>
        <Route path="/counter" component={Counter} />
        <Route path="/showtime/:page" component={ShowTime} />
      </div>
    </div>
  </Router>,
  document.getElementById("root")
);
