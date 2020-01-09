import React, { Component } from "react";

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
    return (
      <ul className="list">
        {this.state.list.map(item => (
          <li key={item.id}>
            <img src={item.author.avatar_url} alt={item.author.loginname} />
            <p className="title">{item.title}</p>
            <p className="time">{item.create_at}</p>
          </li>
        ))}
      </ul>
    );
  }
}
