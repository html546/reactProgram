/* import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  add = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.add}>点击加1</button>
      </div>
    );
  }
}

export default Counter; */

import React, { useState } from "react";

// hook只能在函数组件内用
// useState
function Counter() {
  // useState可以写多个,卸载函数组件的最顶层，不能写在条件语句
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>点击加1</button>
    </div>
  );
}

export default Counter;
