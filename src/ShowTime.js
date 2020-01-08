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

function ShowTime(props) {
  const [time, setTime] = useState(0);
  const [topic, setTopic] = useState([]);
  //   useEffect能代替componentDidMount和componentDidUpdate
  //   还能代替componentWillUnmount
  //   useEffect可以写多个,按需求分开
  useEffect(() => {
    fetch(`https://cnodejs.org/api/v1/topics?page=${props.match.params.page}`)
      .then(res => res.json())
      .then(res => {
        setTopic(res.data);
        console.log(res);
      });
  }, [props.match.params.page]);
  useEffect(() => {
    let timer = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
    return () => {
      console.log("unmount");
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <p>当前时间是:{time}</p>
      {topic.map(item => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default ShowTime;
