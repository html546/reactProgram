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

import React, { useState, useEffect } from "react";

// hook只能在函数组件内用
// useState
function Counter() {
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
