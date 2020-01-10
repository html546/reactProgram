import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    let tab = this.props.match.params.tab;
    fetch(`https://cnodejs.org/api/v1/topics/?tab=${tab}`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.setState({
          list: res.data
        });
        return res;
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.tab !== this.props.match.params.tab) {
      fetch(
        `https://cnodejs.org/api/v1/topics/?tab=${this.props.match.params.tab}`
      )
        .then(res => {
          return res.json();
        })
        .then(res => {
          console.log(res, 123123);
          this.setState({
            list: res.data
          });
          return res;
        });
      return true;
    } else {
      return false;
    }
  }
  render() {
    const timeFilter = val => {
      var str = val;
      let result = "";
      //将字符串转换成时间格式
      var timePublish = new Date(str);
      var timeNow = new Date();
      var minute = 1000 * 60;
      var hour = minute * 60;
      var day = hour * 24;
      var month = day * 30;
      var year = month * 12;
      var diffValue = timeNow - timePublish;
      var diffMonth = diffValue / month;
      var diffWeek = diffValue / (7 * day);
      var diffDay = diffValue / day;
      var diffHour = diffValue / hour;
      var diffMinute = diffValue / minute;
      var diffYear = diffValue / year;
      if (diffValue < 0) {
        result = "刚刚发表";
      } else if (diffYear > 1) {
        result = parseInt(diffYear) + "年前";
      } else if (diffMonth > 1) {
        result = parseInt(diffMonth) + "月前";
      } else if (diffWeek > 1) {
        result = parseInt(diffWeek) + "周前";
      } else if (diffDay > 1) {
        result = parseInt(diffDay) + "天前";
      } else if (diffHour > 1) {
        result = parseInt(diffHour) + "小时前";
      } else if (diffMinute > 1) {
        result = parseInt(diffMinute) + "分钟前";
      } else {
        result = "刚刚发表";
      }
      return result;
    };
    return (
      <ul className="list">
        {this.state.list.map(item => (
          <li key={item.id}>
            <img src={item.author.avatar_url} alt={item.author.loginname} />
            <p className="title">
              <Link to={"/item/" + item.id}>{item.title}</Link>
            </p>
            <p className="time">{timeFilter(item.create_at)}</p>
          </li>
        ))}
      </ul>
    );
  }
}
