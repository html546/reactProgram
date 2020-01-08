/* import React, { Component } from "react";

class ShowTime extends Component {
  state = {
    time: new Date().toLocaleString()
  };
  //   didMount只执行一次
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toLocaleString()
      });
    }, 1000);
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return <div>当前时间是：{this.state.time}</div>;
  }
}

export default ShowTime; */

import React, { useState, useEffect } from "react";

function ShowTime() {
  const [time, setTime] = useState(new Date().toLocaleString());
  //   useEffect能代替componentDidMount和componentDidUpdate
  //   还能代替componentWillUnmount
  useEffect(() => {
    console.log(1);
    let timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <div>当前时间是:{time}</div>;
}

export default ShowTime;
